"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, type Stat } from "@/data/site-content";

function StatIcon({ name }: { readonly name: Stat["icon"] }): React.ReactElement {
  switch (name) {
    case "clock":
      return (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9h18M8 5v-2M16 5v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "people":
      return (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14 19c0-2 2-3.5 4-3.5s3 1 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "trend":
      return (
        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 15l4-4 4 4 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 8h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

const DURATION_MS = 1600;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({
  target,
  start,
  delayMs = 0,
}: {
  readonly target: number;
  readonly start: boolean;
  readonly delayMs?: number;
}): React.ReactElement {
  const [display, setDisplay] = useState<number>(0);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(target);
      return;
    }

    let startTime: number | null = null;
    const tick = (now: number): void => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      setDisplay(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(tick);
      }
    };

    const timer = window.setTimeout(() => {
      rafRef.current = window.requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, delayMs]);

  return <>{display}</>;
}

export function Stats(): React.ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = sectionRef.current;
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats" aria-label="Company key figures">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((stat, idx) => {
            const target = Number.parseInt(stat.value, 10);
            return (
              <div
                key={stat.label}
                className={`stat${inView ? " is-in" : ""}`}
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div className="stat-icon-wrap" aria-hidden="true">
                  <StatIcon name={stat.icon} />
                </div>
                <div className="stat-num">
                  <CountUp target={target} start={inView} delayMs={idx * 90} />
                  <em>{stat.suffix}</em>
                </div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
