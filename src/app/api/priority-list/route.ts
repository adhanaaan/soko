import { NextResponse } from "next/server";
import { storeLead, validateLead } from "@/lib/priority-list";

/** Appends utm_* tags (from the ad link) to the source, e.g. "clarity-website | utm_source=meta". */
function withAttribution(source: string, utm: unknown): string {
  if (!utm || typeof utm !== "object") return source;
  const tags = Object.entries(utm as Record<string, unknown>)
    .filter(([k, v]) => /^utm_[a-z]{1,20}$/.test(k) && typeof v === "string" && v.trim() !== "")
    .slice(0, 5)
    .map(([k, v]) => `${k}=${String(v).trim().slice(0, 100)}`);
  return tags.length ? `${source} | ${tags.join("; ")}` : source;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never fill the hidden "company" field.
  // Reply as if accepted so bots get no signal, but store nothing.
  const trap = (body as Record<string, unknown> | null)?.company;
  if (typeof trap === "string" && trap.trim() !== "") {
    return NextResponse.json({ ok: true, duplicate: false });
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  const stored = await storeLead({
    name: result.name,
    email: result.email,
    consent: true,
    submittedAt: new Date().toISOString(),
    source: withAttribution("clarity-website", (body as Record<string, unknown>).utm),
  });

  if (!stored.ok) {
    const message =
      stored.reason === "not_configured"
        ? "Sign-ups aren't connected yet, so we couldn't save your details. Please email us instead."
        : "We couldn't save your details just now. Please try again in a moment.";
    return NextResponse.json({ ok: false, error: message, reason: stored.reason }, { status: 503 });
  }

  return NextResponse.json({ ok: true, duplicate: stored.duplicate });
}
