import type { CoverVariant } from "@/data/caseStudies";

interface CaseCoverProps {
  readonly variant: CoverVariant;
  readonly size?: "large" | "small";
  readonly title: string;
}

export function CaseCover({
  variant,
  size = "large",
  title,
}: CaseCoverProps): React.ReactElement {
  const viewBox = size === "small" ? "0 0 240 180" : "0 0 400 300";
  const w = size === "small" ? 240 : 400;
  const h = size === "small" ? 180 : 300;

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`Cover artwork — ${title}`}
    >
      <Variant variant={variant} w={w} h={h} size={size} />
    </svg>
  );
}

interface VariantProps {
  readonly variant: CoverVariant;
  readonly w: number;
  readonly h: number;
  readonly size: "large" | "small";
}

function Variant({ variant, w, h, size }: VariantProps): React.ReactElement {
  const scale = size === "small" ? 0.6 : 1;
  const label =
    size === "large"
      ? {
          fontSize: 11,
          x: 24,
          y: 44,
        }
      : null;

  switch (variant) {
    case "pulse":
      return (
        <>
          <defs>
            <linearGradient id="hc-bg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f7f4ff" />
              <stop offset="100%" stopColor="#eaf6ff" />
            </linearGradient>
          </defs>
          <rect width={w} height={h} fill={size === "small" ? "#f7f4ff" : "url(#hc-bg)"} />
          {size === "large" ? (
            <path
              d="M0 170 L80 170 L100 130 L120 210 L140 90 L160 170 L240 170 L260 150 L280 190 L300 170 L400 170"
              stroke="rgb(139,51,255)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M0 100 L60 100 L78 70 L96 130 L114 50 L132 100 L240 100"
              stroke="rgb(139,51,255)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <circle
            cx={size === "large" ? 140 : 114}
            cy={size === "large" ? 90 : 50}
            r={size === "large" ? 5 : 4}
            fill="rgb(29,161,244)"
          />
          {label ? (
            <text
              x={label.x}
              y={label.y}
              style={{
                font: `500 ${label.fontSize}px var(--font-instrument-sans)`,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fill: "rgba(0,0,0,.5)",
              }}
            >
              vitals · live
            </text>
          ) : null}
        </>
      );

    case "route":
      return (
        <>
          <defs>
            <linearGradient id="lg-bg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#eaf6ff" />
              <stop offset="100%" stopColor="#f7f4ff" />
            </linearGradient>
          </defs>
          <rect width={w} height={h} fill={size === "small" ? "#eaf6ff" : "url(#lg-bg)"} />
          <g stroke="rgba(0,0,0,.06)" strokeWidth="1">
            <line x1="0" y1={size === "large" ? 100 : 60} x2={w} y2={size === "large" ? 100 : 60} />
            <line x1="0" y1={size === "large" ? 200 : 120} x2={w} y2={size === "large" ? 200 : 120} />
            <line x1={size === "large" ? 120 : 80} y1="0" x2={size === "large" ? 120 : 80} y2={h} />
            <line x1={size === "large" ? 280 : 160} y1="0" x2={size === "large" ? 280 : 160} y2={h} />
          </g>
          {size === "large" ? (
            <path
              d="M40 240 Q120 240 160 170 Q200 100 280 100 L360 100"
              stroke="rgb(139,51,255)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M20 150 Q70 150 100 100 Q130 50 180 50 L220 50"
              stroke="rgb(139,51,255)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          )}
          <circle
            cx={size === "large" ? 40 : 20}
            cy={size === "large" ? 240 : 150}
            r={size === "large" ? 6 : 5}
            fill="rgb(139,51,255)"
          />
          <polygon
            points={
              size === "large"
                ? "356,94 372,100 356,106"
                : "216,45 230,50 216,55"
            }
            fill="rgb(29,161,244)"
          />
          {label ? (
            <text
              x={label.x}
              y={label.y}
              style={{
                font: `500 ${label.fontSize}px var(--font-instrument-sans)`,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fill: "rgba(0,0,0,.5)",
              }}
            >
              fleet · route plan
            </text>
          ) : null}
        </>
      );

    case "palette":
      return (
        <>
          <rect width={w} height={h} fill="#f4f0ff" />
          <rect
            x={20 * scale + (size === "small" ? 0 : 0)}
            y={40 * scale}
            width={50 * scale}
            height={100 * scale}
            rx={6}
            fill="rgb(139,51,255)"
            opacity="0.9"
          />
          <rect
            x={60 * scale}
            y={50 * scale}
            width={50 * scale}
            height={90 * scale}
            rx={6}
            fill="rgb(29,161,244)"
            opacity="0.85"
            transform={`rotate(-4 ${85 * scale} ${95 * scale})`}
          />
          <rect
            x={105 * scale}
            y={55 * scale}
            width={50 * scale}
            height={85 * scale}
            rx={6}
            fill="#6b1fd4"
            opacity="0.8"
            transform={`rotate(3 ${130 * scale} ${95 * scale})`}
          />
          <rect
            x={150 * scale}
            y={60 * scale}
            width={50 * scale}
            height={80 * scale}
            rx={6}
            fill="#0f8fd4"
            opacity="0.8"
            transform={`rotate(-2 ${175 * scale} ${100 * scale})`}
          />
        </>
      );

    case "bars":
      return (
        <>
          <rect width={w} height={h} fill="#eef5ff" />
          <rect x={30 * scale} y={110 * scale} width={20 * scale} height={50 * scale} rx={3} fill="rgb(29,161,244)" opacity="0.7" />
          <rect x={60 * scale} y={80 * scale} width={20 * scale} height={80 * scale} rx={3} fill="rgb(29,161,244)" opacity="0.8" />
          <rect x={90 * scale} y={60 * scale} width={20 * scale} height={100 * scale} rx={3} fill="rgb(139,51,255)" opacity="0.85" />
          <rect x={120 * scale} y={40 * scale} width={20 * scale} height={120 * scale} rx={3} fill="rgb(139,51,255)" />
          <rect x={150 * scale} y={70 * scale} width={20 * scale} height={90 * scale} rx={3} fill="rgb(29,161,244)" opacity="0.8" />
          <rect x={180 * scale} y={100 * scale} width={20 * scale} height={60 * scale} rx={3} fill="rgb(29,161,244)" opacity="0.7" />
          <line x1={20 * scale} y1={160 * scale} x2={220 * scale} y2={160 * scale} stroke="rgba(0,0,0,.15)" strokeWidth="1" />
        </>
      );

    case "waves":
      return (
        <>
          <rect width={w} height={h} fill="#f4f1ff" />
          <path
            d={`M0 ${90 * scale} Q${40 * scale} ${50 * scale} ${80 * scale} ${90 * scale} T${160 * scale} ${90 * scale} T${240 * scale} ${90 * scale}`}
            stroke="rgb(139,51,255)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d={`M0 ${110 * scale} Q${40 * scale} ${70 * scale} ${80 * scale} ${110 * scale} T${160 * scale} ${110 * scale} T${240 * scale} ${110 * scale}`}
            stroke="rgb(29,161,244)"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
          <path
            d={`M0 ${130 * scale} Q${40 * scale} ${90 * scale} ${80 * scale} ${130 * scale} T${160 * scale} ${130 * scale} T${240 * scale} ${130 * scale}`}
            stroke="rgb(139,51,255)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </>
      );

    case "grid": {
      const dotRows = [50, 90, 130];
      const dotCols = [60, 90, 120, 150, 180];
      const accents = new Set<string>(["120,50", "90,90", "150,90", "180,130"]);
      return (
        <>
          <rect width={w} height={h} fill="#eef6ff" />
          <g fill="rgb(29,161,244)">
            {dotRows.flatMap((y) =>
              dotCols.map((x) => {
                const key = `${x},${y}`;
                const accent = accents.has(key);
                return (
                  <circle
                    key={key}
                    cx={x * scale}
                    cy={y * scale}
                    r={5 * scale}
                    fill={accent ? "rgb(139,51,255)" : undefined}
                  />
                );
              }),
            )}
          </g>
        </>
      );
    }
  }
}
