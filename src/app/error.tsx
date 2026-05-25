"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps): React.ReactElement {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("UI error boundary caught:", error);
    }
  }, [error]);

  return (
    <section className="err-shell">
      <div className="wrap">
        <div className="err-card">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            500 · something went wrong
          </div>
          <div className="err-num" aria-hidden="true">
            oops.
          </div>
          <h1
            className="h2"
            style={{ marginBottom: 16, fontSize: "clamp(28px, 3.6vw, 44px)" }}
          >
            We hit a <em>small bump.</em>
          </h1>
          <p className="lead" style={{ marginInline: "auto" }}>
            The page failed to render. We&apos;ve logged it. Try again, or head
            back home and we&apos;ll pretend this didn&apos;t happen.
          </p>
          <div className="err-actions">
            <button
              type="button"
              className="btn"
              onClick={() => {
                reset();
              }}
            >
              Try again
              <svg className="arr" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link href="/" className="btn-ghost">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
