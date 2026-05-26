"use client";

import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { ArrowIcon } from "./ArrowIcon";
import type { Role } from "@/data/site-content";

type FormState = "idle" | "sending" | "sent" | "error";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function PlusIcon(): React.ReactElement {
  return (
    <svg
      className="role-toggle-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function RoleAccordion({
  role,
  defaultOpen = false,
}: {
  readonly role: Role;
  readonly defaultOpen?: boolean;
}): React.ReactElement {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [state, setState] = useState<FormState>("idle");
  const [cvName, setCvName] = useState<string | null>(null);
  const [cvSize, setCvSize] = useState<number | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const panelId = useId();
  const headerId = useId();

  const onFileChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    const file = ev.target.files?.[0] ?? null;
    if (!file) {
      setCvName(null);
      setCvSize(null);
      setCvError(null);
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setCvError("File is over 5 MB — please attach a smaller copy.");
      setCvName(null);
      setCvSize(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setCvError(null);
    setCvName(file.name);
    setCvSize(file.size);
  };

  const clearFile = (): void => {
    setCvName(null);
    setCvSize(null);
    setCvError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>): Promise<void> => {
    ev.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const form = ev.currentTarget;
    const data = new FormData(form);
    data.set("role", role.title);
    try {
      const res = await fetch("/api/notify", { method: "POST", body: data });
      if (!res.ok) {
        setState("error");
        return;
      }
      setState("sent");
      form.reset();
      clearFile();
    } catch {
      setState("error");
    }
  };

  const submitLabel =
    state === "sending"
      ? "Sending…"
      : state === "sent"
        ? "✓ Application sent — we’ll reply within a week"
        : state === "error"
          ? "Something went wrong — try again"
          : "Send application";

  return (
    <article className={`role-card${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="role-header"
        aria-expanded={open}
        aria-controls={panelId}
        id={headerId}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="role-header-text">
          <div className="role-title">{role.title}</div>
          <div className="role-meta">{role.meta}</div>
        </div>
        <span className="role-toggle" aria-hidden="true">
          <PlusIcon />
        </span>
      </button>

      <div
        className="role-panel"
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        hidden={!open}
      >
        <div className="role-panel-inner">
          <div className="role-body">
            <p className="role-summary">{role.summary}</p>

            <div className="role-section">
              <h4 className="role-h4">What you&apos;ll do</h4>
              <ul className="role-list">
                {role.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-h4">What we&apos;re looking for</h4>
              <ul className="role-list">
                {role.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {role.niceToHave && role.niceToHave.length > 0 ? (
              <div className="role-section">
                <h4 className="role-h4">Nice to have</h4>
                <ul className="role-list">
                  {role.niceToHave.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <form className="role-form" onSubmit={onSubmit} noValidate>
            <div className="role-form-head">
              <h4 className="role-h4">Apply for this role</h4>
              <p className="role-form-sub">
                A CV and a few lines about why this one is enough.
              </p>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor={`${headerId}-name`}>Full name</label>
                <input
                  id={`${headerId}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Avetisyan"
                />
              </div>
              <div className="field">
                <label htmlFor={`${headerId}-email`}>Email</label>
                <input
                  id={`${headerId}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor={`${headerId}-loc`}>
                  Location{" "}
                  <span className="lbl-soft">(city, country)</span>
                </label>
                <input
                  id={`${headerId}-loc`}
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Yerevan, Armenia"
                />
              </div>
              <div className="field">
                <label htmlFor={`${headerId}-link`}>
                  Portfolio / LinkedIn{" "}
                  <span className="lbl-soft">(optional)</span>
                </label>
                <input
                  id={`${headerId}-link`}
                  name="link"
                  type="url"
                  placeholder="https://"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label htmlFor={`${headerId}-msg`}>
                  Why this role?{" "}
                  <span className="lbl-soft">(a paragraph is fine)</span>
                </label>
                <textarea
                  id={`${headerId}-msg`}
                  name="message"
                  required
                  placeholder="What drew you in, what you'd want to work on first, anything you'd push back on."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field full">
                <label htmlFor={`${headerId}-cv`}>
                  CV / Resume{" "}
                  <span className="lbl-soft">PDF or Word · max 5 MB</span>
                </label>
                <input
                  ref={fileInputRef}
                  id={`${headerId}-cv`}
                  name="cv"
                  type="file"
                  className="cv-input"
                  accept={ACCEPT}
                  required
                  onChange={onFileChange}
                />
                <label htmlFor={`${headerId}-cv`} className="cv-drop">
                  {cvName ? (
                    <span className="cv-file">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="cv-icon"
                      >
                        <path
                          d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 3v5h5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cv-meta">
                        <span className="cv-name">{cvName}</span>
                        {cvSize !== null ? (
                          <span className="cv-size">{formatBytes(cvSize)}</span>
                        ) : null}
                      </span>
                      <button
                        type="button"
                        className="cv-clear"
                        onClick={(e) => {
                          e.preventDefault();
                          clearFile();
                        }}
                        aria-label="Remove attached CV"
                      >
                        Remove
                      </button>
                    </span>
                  ) : (
                    <span className="cv-empty">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="cv-icon"
                      >
                        <path
                          d="M12 16V4M12 4l-4 4M12 4l4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="cv-meta">
                        <span className="cv-name">
                          Click to upload or drop your CV here
                        </span>
                        <span className="cv-size">PDF, DOC, DOCX — up to 5 MB</span>
                      </span>
                    </span>
                  )}
                </label>
                {cvError ? <p className="cv-error">{cvError}</p> : null}
              </div>
            </div>

            <button
              type="submit"
              className="btn form-submit"
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
              By applying you agree we may store this to evaluate your
              application. We don&apos;t share it or sell it.
            </p>
          </form>
        </div>
      </div>
    </article>
  );
}
