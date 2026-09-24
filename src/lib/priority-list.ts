import "server-only";
import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Priority-list storage.
 *
 * Production: set PRIORITY_LIST_WEBHOOK_URL (see docs/priority-list-setup.md).
 * Each sign-up is POSTed there as JSON; the endpoint must reply {"ok": true}.
 *
 * Local development only: with no webhook set, sign-ups are appended to
 * .data/priority-list.jsonl so the form can be tested end to end.
 *
 * Anywhere else with no webhook set, storage reports "not configured" and the
 * form shows an honest error instead of a false success.
 */

export type Lead = {
  name: string;
  email: string;
  consent: true;
  submittedAt: string;
  source: string;
};

export type StoreResult =
  | { ok: true; duplicate: boolean }
  | { ok: false; reason: "not_configured" | "upstream_error" };

const LOCAL_FILE = path.join(process.cwd(), ".data", "priority-list.jsonl");

export function storageMode(): "webhook" | "local" | "none" {
  if (process.env.PRIORITY_LIST_WEBHOOK_URL) return "webhook";
  if (process.env.NODE_ENV === "development") return "local";
  return "none";
}

export async function storeLead(lead: Lead): Promise<StoreResult> {
  const mode = storageMode();
  if (mode === "webhook") return sendToWebhook(lead);
  if (mode === "local") return appendLocally(lead);
  return { ok: false, reason: "not_configured" };
}

async function sendToWebhook(lead: Lead): Promise<StoreResult> {
  const url = process.env.PRIORITY_LIST_WEBHOOK_URL!;
  try {
    const res = await fetch(url, {
      method: "POST",
      // Apps Script web apps reject application/json preflights from some
      // runtimes; text/plain with a JSON body is accepted everywhere.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...lead, secret: process.env.PRIORITY_LIST_WEBHOOK_SECRET ?? "" }),
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[priority-list] webhook responded", res.status);
      return { ok: false, reason: "upstream_error" };
    }
    const data = (await res.json().catch(() => null)) as { ok?: boolean; duplicate?: boolean } | null;
    if (!data?.ok) {
      console.error("[priority-list] webhook did not confirm storage", data);
      return { ok: false, reason: "upstream_error" };
    }
    return { ok: true, duplicate: Boolean(data.duplicate) };
  } catch (err) {
    console.error("[priority-list] webhook request failed", err);
    return { ok: false, reason: "upstream_error" };
  }
}

async function appendLocally(lead: Lead): Promise<StoreResult> {
  await mkdir(path.dirname(LOCAL_FILE), { recursive: true });
  const existing = await readFile(LOCAL_FILE, "utf8").catch(() => "");
  const duplicate = existing
    .split("\n")
    .filter(Boolean)
    .some((line) => {
      try {
        return (JSON.parse(line) as Lead).email === lead.email;
      } catch {
        return false;
      }
    });
  if (!duplicate) await appendFile(LOCAL_FILE, JSON.stringify(lead) + "\n", "utf8");
  return { ok: true, duplicate };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type Validation =
  | { ok: true; name: string; email: string }
  | { ok: false; errors: Partial<Record<"name" | "email" | "consent", string>> };

export function validateLead(input: unknown): Validation {
  const body = (input ?? {}) as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim().replace(/\s+/g, " ") : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const errors: Partial<Record<"name" | "email" | "consent", string>> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > 120) errors.name = "Please use a shorter name.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 254 || !EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (body.consent !== true) errors.consent = "Please confirm you're happy for us to contact you.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, name, email };
}
