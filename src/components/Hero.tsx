import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./ArrowIcon";

export function Hero(): React.ReactElement {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Reveal className="eyebrow hero-eyebrow">
              AI-native software studio · est. 2016
            </Reveal>
            <Reveal as="h1" className="h1">
              Setting a new benchmark in <em>AI-native</em> software.
            </Reveal>
            <Reveal as="p" className="lead">
              We design and ship AI products with teams that care about the
              work. Strategy, integration, custom builds — from Glendale and
              Yerevan.
            </Reveal>
            <Reveal className="hero-cta">
              <Link href="/contact" className="btn">
                Book a discovery call
                <ArrowIcon />
              </Link>
              <Link href="/work" className="btn-ghost">
                See selected work
              </Link>
            </Reveal>
          </div>

          <Reveal className="hero-lockup">
            <HeroLockupSvg />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroLockupSvg(): React.ReactElement {
  return (
    <svg
      className="lockup-svg"
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="TIRSoft AI-native studio lockup showing the AI wordmark with a strategy, design, build, ship flow diagram"
    >
      <defs>
        <linearGradient id="grad-ai" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(139,51,255)" />
          <stop offset="100%" stopColor="rgb(29,161,244)" />
        </linearGradient>
        <mask id="mask-ai">
          <rect width="600" height="600" fill="black" />
          <text x="0" y="430" className="ai-text" fill="white">
            AI.
          </text>
        </mask>
      </defs>

      <line className="meta-line" x1="20" y1="20" x2="60" y2="20" />
      <line className="meta-line" x1="20" y1="20" x2="20" y2="60" />
      <line className="meta-line" x1="580" y1="20" x2="540" y2="20" />
      <line className="meta-line" x1="580" y1="20" x2="580" y2="60" />
      <line className="meta-line" x1="20" y1="580" x2="60" y2="580" />
      <line className="meta-line" x1="20" y1="580" x2="20" y2="540" />
      <line className="meta-line" x1="580" y1="580" x2="540" y2="580" />
      <line className="meta-line" x1="580" y1="580" x2="580" y2="540" />

      <text x="20" y="48" className="meta-label">
        tirsoft / 01
      </text>
      <text x="580" y="48" className="meta-label" textAnchor="end">
        vol — iii
      </text>
      <text x="20" y="568" className="meta-label">
        since two thousand sixteen
      </text>
      <text x="580" y="568" className="meta-label" textAnchor="end">
        glendale · yerevan
      </text>

      <text x="0" y="430" className="ai-shadow">
        AI.
      </text>
      <rect x="0" y="0" width="600" height="600" fill="url(#grad-ai)" mask="url(#mask-ai)" />

      <g transform="translate(330,430)">
        <path className="flow-line" d="M0,18 L220,18" />
        <path className="flow-line" d="M44,18 L44,52" />
        <path className="flow-line" d="M132,18 L132,52" />
        <path className="flow-line" d="M220,18 L220,52" />

        <circle className="flow-node" cx="0" cy="18" r="7" />
        <text className="flow-text" x="-4" y="6" textAnchor="end">
          strategy
        </text>

        <circle className="flow-node" cx="44" cy="60" r="6" />
        <text className="flow-text" x="44" y="80" textAnchor="middle">
          design
        </text>

        <circle className="flow-node" cx="132" cy="60" r="6" />
        <text className="flow-text" x="132" y="80" textAnchor="middle">
          build
        </text>

        <circle cx="220" cy="60" r="7" fill="rgb(139,51,255)" stroke="none" />
        <text
          className="flow-text"
          x="220"
          y="80"
          textAnchor="middle"
          style={{ fill: "rgb(139,51,255)", fontWeight: 600 }}
        >
          ship
        </text>
      </g>

      <circle className="corner-dot" cx="20" cy="20" r="2.5" />
      <circle className="corner-dot" cx="580" cy="580" r="2.5" />
    </svg>
  );
}
