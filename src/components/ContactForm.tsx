"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "./ArrowIcon";

type FormState = "idle" | "sending" | "sent" | "error";

const BUDGETS: ReadonlyArray<string> = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k+",
  "Not sure yet",
];

const TOPICS: ReadonlyArray<string> = [
  "AI integration",
  "Web / SaaS product",
  "Mobile app",
  "Strategy & advisory",
  "Maintenance",
];

export function ContactForm(): React.ReactElement {
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (ev: FormEvent<HTMLFormElement>): Promise<void> => {
    ev.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, optin: data.optin === "on" }),
      });
      if (!res.ok) {
        setState("error");
        return;
      }
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  };

  const submitLabel =
    state === "sending"
      ? "Sending…"
      : state === "sent"
        ? "✓ Sent — we’ll reply within a business day"
        : state === "error"
          ? "Something went wrong — try again"
          : "Send the brief";

  return (
    <form
      className="form-card reveal is-in"
      id="contactForm"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input
            id="f-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Avetisyan"
          />
        </div>
        <div className="field">
          <label htmlFor="f-co">Company</label>
          <input
            id="f-co"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme, Inc."
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input
            id="f-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@acme.com"
          />
        </div>
        <div className="field">
          <label htmlFor="f-phone">
            Phone{" "}
            <span
              style={{
                textTransform: "none",
                letterSpacing: 0,
                color: "var(--graphite)",
              }}
            >
              (optional)
            </span>
          </label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 818 555 0142"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-budget">Budget</label>
          <select id="f-budget" name="budget" defaultValue="">
            <option value="">— choose a range —</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-topic">What&apos;s it about?</label>
          <select id="f-topic" name="topic" defaultValue="">
            <option value="">— choose one —</option>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field full">
          <label htmlFor="f-msg">Tell us about the project</label>
          <textarea
            id="f-msg"
            name="message"
            required
            placeholder="A paragraph is fine. Links to docs welcome."
          />
        </div>
      </div>

      <label className="checkbox-row" htmlFor="f-opt">
        <input type="checkbox" id="f-opt" name="optin" />
        <span>
          I&apos;m happy to receive occasional project insights from TIRSoft —
          usually one note a quarter, never a newsletter blast.
        </span>
      </label>

      <button
        type="submit"
        className="btn form-submit"
        id="f-submit"
        disabled={state === "sending"}
        style={
          state === "sent"
            ? { background: "#1b1815", boxShadow: "none" }
            : undefined
        }
      >
        {submitLabel}
        {state === "idle" ? <ArrowIcon /> : null}
      </button>
      <p className="form-note">
        By sending you agree we may store this to reply. We don&apos;t share it,
        sell it, or train a model on it.
      </p>
    </form>
  );
}
