"use client";

import { useEffect, useRef, useState } from "react";

interface BannerStat {
  readonly value: string;
  readonly label: string;
}

const STATS: ReadonlyArray<BannerStat> = [
  { value: "5.4×", label: "median throughput lift" },
  { value: "−62%", label: "time-to-revenue" },
  { value: "12wks", label: "avg time to first ship" },
];

export function OutcomeBanner(): React.ReactElement {
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`outcome-banner${inView ? " is-in" : ""}`}>
      <div className="outcome-banner-glow" aria-hidden="true" />
      <div className="outcome-banner-grid">
        <div className="outcome-banner-text">
          <span className="outcome-eyebrow">More than a dev shop</span>
          <h2 className="outcome-title">
            We don&apos;t ship code. <em>We ship outcomes.</em>
          </h2>
          <p className="outcome-lead">
            We embed in the business — P&amp;L, ops, customer calls — and engineer
            for the metric that pays. Across eight industries we&apos;ve helped
            partners unlock <strong>multi-x revenue lifts</strong>, not feature
            inventories.
          </p>
        </div>
        <ul className="outcome-stats">
          {STATS.map((stat, idx) => (
            <li
              key={stat.label}
              className="outcome-stat"
              style={{ transitionDelay: `${idx * 110}ms` }}
            >
              <span className="outcome-stat-value">{stat.value}</span>
              <span className="outcome-stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
