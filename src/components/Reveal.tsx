"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  readonly children?: ReactNode;
  readonly as?: keyof React.JSX.IntrinsicElements;
  readonly className?: string;
  readonly delayMs?: number;
  readonly style?: CSSProperties;
  readonly id?: string;
  readonly "aria-hidden"?: boolean | "true" | "false";
  readonly "aria-label"?: string;
  readonly "data-label"?: string;
}

export function Reveal({
  children,
  as = "div",
  className,
  delayMs = 0,
  style,
  id,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
  "data-label": dataLabel,
}: RevealProps): React.ReactElement {
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsIn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              setIsIn(true);
            }, delayMs);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.04, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, [delayMs]);

  const Tag = as as unknown as React.ElementType;
  const composed = ["reveal", isIn ? "is-in" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag
      ref={ref}
      className={composed}
      style={style}
      id={id}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      data-label={dataLabel}
    >
      {children}
    </Tag>
  );
}
