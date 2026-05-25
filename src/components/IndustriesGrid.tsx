"use client";

import { useEffect, useRef, useState } from "react";
import { INDUSTRIES, type Industry } from "@/data/site-content";

function IndustryIcon({
  kind,
}: {
  readonly kind: Industry["icon"];
}): React.ReactElement {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": true as const,
    className: "ind-icon",
  };
  switch (kind) {
    case "healthcare":
      return (
        <svg {...common}>
          <path
            d="M4 17h5l2-5 3 10 3-7 2 2h9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "fintech":
      return (
        <svg {...common}>
          <rect
            x="3.5"
            y="8"
            width="25"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M3.5 13h25" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M8 19h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "logistics":
      return (
        <svg {...common}>
          <path
            d="M3 9h13v11H3zM16 13h6l4 4v3h-10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="22" r="2.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="21" cy="22" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "retail":
      return (
        <svg {...common}>
          <path
            d="M5 10h22l-2 16H7L5 10z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M11 13V8a5 5 0 0 1 10 0v5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "creative":
      return (
        <svg {...common}>
          <path
            d="M16 4a12 12 0 1 0 12 12c0-3-3-2-5-2s-3-1-3-3 2-3 2-5-3-2-6-2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="13" r="1.5" fill="currentColor" />
          <circle cx="16" cy="9" r="1.5" fill="currentColor" />
          <circle cx="21" cy="13" r="1.5" fill="currentColor" />
          <circle cx="12" cy="20" r="1.5" fill="currentColor" />
        </svg>
      );
    case "education":
      return (
        <svg {...common}>
          <path
            d="M2 13l14-6 14 6-14 6L2 13z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8 16v5c0 2 4 4 8 4s8-2 8-4v-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M28 13v8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "energy":
      return (
        <svg {...common}>
          <path
            d="M17 3L7 18h7l-2 11 12-16h-8l1-10z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "realestate":
      return (
        <svg {...common}>
          <path
            d="M4 14L16 5l12 9v14H4V14z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M13 28v-7h6v7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function IndustriesGrid(): React.ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ind-grid${inView ? " is-in" : ""}`}
      onMouseLeave={() => {
        setPointer(null);
        setActiveIdx(null);
      }}
    >
      {INDUSTRIES.map((industry, idx) => (
        <article
          key={industry.name}
          className={`ind-tile${activeIdx === idx ? " is-hot" : ""}`}
          style={{
            transitionDelay: `${idx * 70}ms`,
            ...(activeIdx === idx && pointer
              ? ({
                  ["--mx" as const]: `${pointer.x}px`,
                  ["--my" as const]: `${pointer.y}px`,
                } as React.CSSProperties)
              : {}),
          }}
          onMouseEnter={() => setActiveIdx(idx)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPointer({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          onFocus={() => setActiveIdx(idx)}
          onBlur={() => setActiveIdx(null)}
          tabIndex={0}
        >
          <span className="ind-tile-glow" aria-hidden="true" />
          <span className="ind-tile-corner" aria-hidden="true" />
          <div className="ind-tile-head">
            <span className="ind-icon-wrap">
              <IndustryIcon kind={industry.icon} />
            </span>
            <span className="ind-idx">{String(idx + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="ind-name">{industry.name}</h3>
          <p className="ind-kicker">{industry.kicker}</p>
          <div className="ind-metric">
            <span className="ind-metric-value">{industry.outcome}</span>
            <span className="ind-metric-label">{industry.outcomeLabel}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
