import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist. Head home or browse our work instead.",
  robots: { index: false, follow: true },
};

export default function NotFound(): React.ReactElement {
  return (
    <section className="err-shell">
      <div className="wrap">
        <div className="err-card">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            404 · page not found
          </div>
          <div className="err-num" aria-hidden="true">
            404.
          </div>
          <h1
            className="h2"
            style={{ marginBottom: 16, fontSize: "clamp(28px, 3.6vw, 44px)" }}
          >
            That page <em>doesn&apos;t live here.</em>
          </h1>
          <p className="lead" style={{ marginInline: "auto" }}>
            The URL is correct, or it isn&apos;t. Either way, we&apos;ve got
            something better to show you.
          </p>
          <div className="err-actions">
            <Link href="/" className="btn">
              Back to home
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
            </Link>
            <Link href="/work" className="btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
