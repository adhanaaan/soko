"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { contact, cta, signup } from "@/content/site";

type FieldErrors = Partial<Record<"name" | "email" | "consent", string>>;
type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; duplicate: boolean }
  | { state: "error"; message: string; offerEmail: boolean };

export function SignupForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const inFlight = useRef(false);
  const id = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  function validate(data: { name: string; email: string; consent: boolean }): FieldErrors {
    const e: FieldErrors = {};
    if (data.name.trim().length < 2) e.name = "Please enter your name.";
    if (!data.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) e.email = "Please enter a valid email address.";
    if (!data.consent) e.consent = "Please confirm you're happy for us to contact you.";
    return e;
  }

  function focusFirst(e: FieldErrors) {
    if (e.name) nameRef.current?.focus();
    else if (e.email) emailRef.current?.focus();
    else if (e.consent) consentRef.current?.focus();
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (inFlight.current) return; // guard against double submits

    const form = new FormData(ev.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      consent: form.get("consent") === "on",
      company: String(form.get("company") ?? ""),
    };

    const clientErrors = validate(data);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) {
      setStatus({ state: "idle" });
      focusFirst(clientErrors);
      return;
    }

    inFlight.current = true;
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/priority-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        duplicate?: boolean;
        errors?: FieldErrors;
        error?: string;
        reason?: string;
      };
      if (res.ok && json.ok) {
        setStatus({ state: "success", duplicate: Boolean(json.duplicate) });
        return;
      }
      if (json.errors) {
        setErrors(json.errors);
        setStatus({ state: "idle" });
        focusFirst(json.errors);
        return;
      }
      setStatus({
        state: "error",
        message: json.error ?? "Something went wrong and your details were not saved. Please try again.",
        offerEmail: json.reason === "not_configured",
      });
    } catch {
      setStatus({
        state: "error",
        message: "We couldn't reach the server, so your details were not saved. Check your connection and try again.",
        offerEmail: false,
      });
    } finally {
      inFlight.current = false;
    }
  }

  if (status.state === "success") {
    return (
      <div className="form form-success brackets" role="status" aria-live="polite">
        <div className="success-mark" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>{status.duplicate ? "You're already on the list." : signup.success.title}</h3>
        <p>{status.duplicate ? "Good news — we already have your details. We'll be in touch when bookings open." : signup.success.text}</p>
      </div>
    );
  }

  const submitting = status.state === "submitting";

  return (
    <form className="form brackets" onSubmit={onSubmit} noValidate aria-describedby={`${id}-status`}>
      <p className="form-head mono">
        <span>Priority list</span>
        <span>Name + email only</span>
      </p>
      <div className="field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input
          ref={nameRef}
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          maxLength={120}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
        />
        {errors.name && (
          <span className="field-error" id={`${id}-name-err`}>
            {errors.name}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input
          ref={emailRef}
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={254}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id}-email-err` : undefined}
        />
        {errors.email && (
          <span className="field-error" id={`${id}-email-err`}>
            {errors.email}
          </span>
        )}
      </div>

      <div className="honeypot" aria-hidden>
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="check" htmlFor={`${id}-consent`}>
          <input
            ref={consentRef}
            id={`${id}-consent`}
            name="consent"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${id}-consent-err` : undefined}
          />
          <span>
            {signup.consent} <Link href="/privacy">Privacy notice</Link>.
          </span>
        </label>
        {errors.consent && (
          <span className="field-error" id={`${id}-consent-err`} style={{ display: "block", marginTop: "0.4rem" }}>
            {errors.consent}
          </span>
        )}
      </div>

      <button className="btn btn-accent" type="submit" disabled={submitting} aria-disabled={submitting}>
        {submitting ? (
          <>
            <span className="spinner" aria-hidden /> Saving your details…
          </>
        ) : (
          <>
            {cta.primary} <span className="arrow" aria-hidden>→</span>
          </>
        )}
      </button>

      <div id={`${id}-status`} aria-live="polite">
        {status.state === "error" && (
          <p className="form-status error" role="alert">
            {status.message}{" "}
            {status.offerEmail && <a href={`mailto:${contact.email}?subject=Clarity%20priority%20list`}>{contact.email}</a>}
          </p>
        )}
      </div>
    </form>
  );
}
