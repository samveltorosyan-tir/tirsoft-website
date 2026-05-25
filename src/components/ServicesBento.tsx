"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES_PREVIEW, type Service } from "@/data/site-content";

function Glyph({ kind }: { readonly kind: Service["glyph"] }): React.ReactElement {
  switch (kind) {
    case "ai":
      return (
        <svg
          className="svc-glyph svc-glyph-ai"
          viewBox="0 0 200 160"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ai-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(139, 51, 255)" />
              <stop offset="100%" stopColor="rgb(29, 161, 244)" />
            </linearGradient>
          </defs>
          {/* orbits */}
          <ellipse
            cx="100"
            cy="80"
            rx="78"
            ry="32"
            stroke="url(#ai-line)"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.5"
          />
          <ellipse
            cx="100"
            cy="80"
            rx="56"
            ry="56"
            stroke="url(#ai-line)"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.35"
            transform="rotate(30 100 80)"
          />
          {/* core */}
          <circle cx="100" cy="80" r="14" fill="url(#ai-line)" />
          <circle cx="100" cy="80" r="22" stroke="url(#ai-line)" strokeWidth="1" opacity="0.7" />
          {/* satellites */}
          <g className="svc-glyph-ai-orbit-a">
            <circle cx="178" cy="80" r="4" fill="rgb(139, 51, 255)" />
            <circle cx="22" cy="80" r="3" fill="rgb(29, 161, 244)" />
          </g>
          <g className="svc-glyph-ai-orbit-b">
            <circle cx="100" cy="24" r="3.5" fill="rgb(29, 161, 244)" />
            <circle cx="100" cy="136" r="3" fill="rgb(139, 51, 255)" />
          </g>
          {/* data ticks */}
          <path
            d="M40 130 L60 118 L80 122 L100 110 L120 116 L140 100 L160 108"
            stroke="url(#ai-line)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
      );
    case "web":
      return (
        <svg
          className="svc-glyph svc-glyph-web"
          viewBox="0 0 200 160"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="web-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(139, 51, 255)" />
              <stop offset="100%" stopColor="rgb(29, 161, 244)" />
            </linearGradient>
          </defs>
          <rect
            className="svc-glyph-web-back"
            x="36"
            y="32"
            width="128"
            height="92"
            rx="8"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1"
            fill="rgba(255,255,255,0.6)"
          />
          <rect
            className="svc-glyph-web-mid"
            x="48"
            y="44"
            width="128"
            height="92"
            rx="8"
            stroke="rgba(139, 51, 255, 0.4)"
            strokeWidth="1"
            fill="#fff"
          />
          <rect
            className="svc-glyph-web-front"
            x="24"
            y="56"
            width="128"
            height="92"
            rx="8"
            fill="#fff"
            stroke="url(#web-line)"
            strokeWidth="1.4"
          />
          <path d="M24 72h128" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          <circle cx="34" cy="64" r="2" fill="rgba(0,0,0,0.18)" />
          <circle cx="42" cy="64" r="2" fill="rgba(0,0,0,0.18)" />
          <circle cx="50" cy="64" r="2" fill="rgba(0,0,0,0.18)" />
          <rect x="38" y="88" width="46" height="6" rx="2" fill="url(#web-line)" />
          <rect x="38" y="100" width="76" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
          <rect x="38" y="110" width="56" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
          <rect x="38" y="120" width="34" height="14" rx="3" fill="url(#web-line)" />
        </svg>
      );
    case "mobile":
      return (
        <svg
          className="svc-glyph svc-glyph-mobile"
          viewBox="0 0 200 160"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mob-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(139, 51, 255)" />
              <stop offset="100%" stopColor="rgb(29, 161, 244)" />
            </linearGradient>
          </defs>
          {/* outer waves */}
          <path
            className="svc-glyph-mobile-wave"
            d="M64 80a36 36 0 0 1 72 0"
            stroke="url(#mob-line)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            className="svc-glyph-mobile-wave-2"
            d="M52 80a48 48 0 0 1 96 0"
            stroke="url(#mob-line)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.35"
          />
          {/* phone */}
          <rect
            x="78"
            y="24"
            width="44"
            height="112"
            rx="10"
            stroke="url(#mob-line)"
            strokeWidth="1.6"
            fill="#fff"
          />
          <rect x="86" y="36" width="28" height="76" rx="3" fill="rgba(139, 51, 255, 0.08)" />
          <rect x="90" y="42" width="20" height="3" rx="1.5" fill="rgba(0,0,0,0.18)" />
          <rect x="90" y="50" width="14" height="3" rx="1.5" fill="rgba(0,0,0,0.12)" />
          <rect x="90" y="64" width="20" height="20" rx="3" fill="url(#mob-line)" />
          <rect x="90" y="90" width="20" height="3" rx="1.5" fill="rgba(0,0,0,0.18)" />
          <rect x="90" y="98" width="14" height="3" rx="1.5" fill="rgba(0,0,0,0.12)" />
          <circle cx="100" cy="124" r="3" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          {/* notch */}
          <rect x="92" y="28" width="16" height="3" rx="1.5" fill="rgba(0,0,0,0.2)" />
          {/* signal */}
          <circle className="svc-glyph-mobile-ping" cx="100" cy="80" r="3" fill="rgb(139, 51, 255)" />
        </svg>
      );
    case "strategy":
      return (
        <svg
          className="svc-glyph svc-glyph-strategy"
          viewBox="0 0 200 160"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="str-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(139, 51, 255)" />
              <stop offset="100%" stopColor="rgb(29, 161, 244)" />
            </linearGradient>
          </defs>
          {/* axes */}
          <path d="M28 130h148M28 130V18" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
          {/* gridlines */}
          <path d="M28 100h148M28 70h148M28 40h148" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          {/* bars */}
          <rect x="44" y="98" width="14" height="32" rx="2" fill="rgba(139, 51, 255, 0.18)" />
          <rect x="68" y="84" width="14" height="46" rx="2" fill="rgba(139, 51, 255, 0.28)" />
          <rect x="92" y="68" width="14" height="62" rx="2" fill="rgba(139, 51, 255, 0.42)" />
          <rect x="116" y="52" width="14" height="78" rx="2" fill="rgba(139, 51, 255, 0.6)" />
          <rect x="140" y="36" width="14" height="94" rx="2" fill="url(#str-line)" />
          {/* trajectory */}
          <path
            d="M44 110 L72 90 L100 76 L128 56 L156 36"
            stroke="url(#str-line)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="220"
            strokeDashoffset="0"
            className="svc-glyph-strategy-line"
          />
          {/* arrow */}
          <path
            d="M156 36l-8 4 4-10z"
            fill="rgb(29, 161, 244)"
          />
        </svg>
      );
    case "care":
      return (
        <svg
          className="svc-glyph svc-glyph-care"
          viewBox="0 0 200 160"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="care-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(139, 51, 255)" />
              <stop offset="100%" stopColor="rgb(29, 161, 244)" />
            </linearGradient>
          </defs>
          {/* shield */}
          <path
            d="M100 24l46 14v36c0 28-22 50-46 58-24-8-46-30-46-58V38l46-14z"
            fill="rgba(139, 51, 255, 0.06)"
            stroke="url(#care-line)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* pulse line */}
          <path
            className="svc-glyph-care-pulse"
            d="M58 92h22l8-16 10 32 8-18 6 6h30"
            stroke="url(#care-line)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* check */}
          <circle cx="100" cy="120" r="10" fill="url(#care-line)" />
          <path
            d="M95 120l4 4 6-7"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function ServicesBento(): React.ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

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
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`svc-bento${inView ? " is-in" : ""}`}>
      {SERVICES_PREVIEW.map((service, idx) => (
        <article
          key={service.id}
          className={`bento-card bento-card-${service.id}`}
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <div className="bento-card-grad" aria-hidden="true" />
          <div className="bento-card-noise" aria-hidden="true" />

          <div className="bento-head">
            <span className="bento-num">{service.number}</span>
            <span className="bento-tag">{service.tag}</span>
          </div>

          <h3 className="bento-name">{service.name}</h3>
          <p className="bento-detail">{service.detail}</p>

          <ul className="bento-bullets">
            {service.bullets.map((b) => (
              <li key={b}>
                <svg
                  className="bento-bullet-icon"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="bento-foot">
            <div className="bento-metric">
              <span className="bento-metric-value">{service.outcome}</span>
              <span className="bento-metric-label">{service.outcomeLabel}</span>
            </div>
          </div>

          <div className="bento-art" aria-hidden="true">
            <Glyph kind={service.glyph} />
          </div>
        </article>
      ))}
    </div>
  );
}
