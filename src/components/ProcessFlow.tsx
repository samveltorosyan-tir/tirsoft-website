"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS, type ProcessStep } from "@/data/site-content";

function Wireframe({
  kind,
}: {
  readonly kind: ProcessStep["wireframe"];
}): React.ReactElement {
  switch (kind) {
    case "discovery":
      return (
        <svg
          className="wf-svg"
          viewBox="0 0 160 100"
          fill="none"
          aria-hidden="true"
        >
          <rect x="14" y="14" width="84" height="72" rx="6" className="wf-stroke" />
          <path d="M22 28h60M22 36h52M22 44h60M22 52h44M22 60h56M22 68h40" className="wf-hair" />
          <circle cx="124" cy="36" r="14" className="wf-stroke-accent" />
          <path d="M134 46l8 8" className="wf-stroke-accent" />
          <path d="M118 36h12M124 30v12" className="wf-stroke-accent" />
        </svg>
      );
    case "design":
      return (
        <svg
          className="wf-svg"
          viewBox="0 0 160 100"
          fill="none"
          aria-hidden="true"
        >
          <rect x="10" y="12" width="140" height="76" rx="6" className="wf-stroke" />
          <path d="M10 26h140" className="wf-hair" />
          <circle cx="20" cy="19" r="1.6" className="wf-fill" />
          <circle cx="26" cy="19" r="1.6" className="wf-fill" />
          <circle cx="32" cy="19" r="1.6" className="wf-fill" />
          <rect x="20" y="34" width="50" height="44" rx="4" className="wf-hair" />
          <path d="M28 44h34M28 52h26M28 60h30M28 68h20" className="wf-hair" />
          <rect x="78" y="34" width="62" height="20" rx="4" className="wf-stroke-accent" />
          <path d="M86 44h20" className="wf-stroke-accent" />
          <rect x="78" y="60" width="62" height="18" rx="4" className="wf-hair" />
          <path d="M86 69h36" className="wf-hair" />
        </svg>
      );
    case "build":
      return (
        <svg
          className="wf-svg"
          viewBox="0 0 160 100"
          fill="none"
          aria-hidden="true"
        >
          <rect x="14" y="12" width="132" height="76" rx="6" className="wf-stroke" />
          <path d="M14 24h132" className="wf-hair" />
          <path d="M22 36l8 8-8 8" className="wf-stroke-accent" />
          <path d="M34 52h12" className="wf-stroke-accent" />
          <path d="M58 36h74M58 44h60M58 52h66M58 60h52M58 68h70M58 76h44" className="wf-hair" />
          <rect x="22" y="62" width="18" height="14" rx="2" className="wf-fill-accent" />
        </svg>
      );
    case "ship":
      return (
        <svg
          className="wf-svg"
          viewBox="0 0 160 100"
          fill="none"
          aria-hidden="true"
        >
          <rect x="14" y="14" width="60" height="72" rx="8" className="wf-stroke" />
          <path d="M14 26h60" className="wf-hair" />
          <path d="M22 40h44M22 48h36M22 56h44M22 64h32" className="wf-hair" />
          <circle cx="44" cy="78" r="2" className="wf-fill" />
          <path d="M94 78l24-30 24 30" className="wf-stroke-accent" />
          <path d="M106 78v-14h24v14" className="wf-stroke-accent" />
          <path d="M114 78v-8h8v8" className="wf-hair" />
          <path d="M130 36l4-12 4 12-4-4z" className="wf-fill-accent" />
        </svg>
      );
    case "evolve":
      return (
        <svg
          className="wf-svg"
          viewBox="0 0 160 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M44 50a36 36 0 1 1 12 27"
            className="wf-stroke-accent"
            strokeDasharray="3 4"
          />
          <path d="M44 50l-6-6M44 50l6-6" className="wf-stroke-accent" />
          <path d="M56 77l6 6 6-6" className="wf-stroke-accent" />
          <path
            d="M86 70 L100 56 L114 64 L132 40"
            className="wf-stroke"
          />
          <circle cx="86" cy="70" r="2.5" className="wf-fill" />
          <circle cx="100" cy="56" r="2.5" className="wf-fill" />
          <circle cx="114" cy="64" r="2.5" className="wf-fill" />
          <circle cx="132" cy="40" r="2.5" className="wf-fill-accent" />
        </svg>
      );
  }
}

export function ProcessFlow(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`proc-flow${inView ? " is-in" : ""}`}
      onMouseLeave={() => setActiveIdx(null)}
    >
      <div className="proc-track" aria-hidden="true">
        <span className="proc-rail" />
        <span className="proc-rail-fill" />
      </div>

      <ol className="proc-steps">
        {PROCESS_STEPS.map((step, idx) => (
          <li
            key={step.number}
            className={`proc-step${activeIdx === idx ? " is-active" : ""}`}
            style={{ transitionDelay: `${idx * 110}ms` }}
            onMouseEnter={() => setActiveIdx(idx)}
            onFocus={() => setActiveIdx(idx)}
          >
            <div className="proc-card" tabIndex={0}>
              <div className="proc-card-head">
                <span className="proc-num">{step.number}</span>
                <span className="proc-dot" aria-hidden="true" />
                <span className="proc-duration">{step.duration}</span>
              </div>
              <div className="proc-wf" aria-hidden="true">
                <Wireframe kind={step.wireframe} />
                <span className="proc-wf-grid" />
              </div>
              <div className="proc-card-body">
                <h3 className="proc-name">{step.name}</h3>
                <p className="proc-desc">{step.description}</p>
              </div>
              <div className="proc-card-foot">
                <span className="proc-foot-label">Deliverable</span>
                <span className="proc-foot-value">{step.deliverable}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
