import Link from "next/link";
import { Reveal } from "./Reveal";

interface SectionHeadProps {
  readonly eyebrow: string;
  readonly title: React.ReactNode;
  readonly lead?: React.ReactNode;
  readonly ctaLabel?: string;
  readonly ctaHref?: string;
  readonly headingId?: string;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  ctaLabel,
  ctaHref,
  headingId,
}: SectionHeadProps): React.ReactElement {
  return (
    <div className="sec-head">
      <div className="meta">
        <Reveal className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h2" className="h2">
          <span id={headingId}>{title}</span>
        </Reveal>
        {lead ? (
          <Reveal as="p" className="lead">
            {lead}
          </Reveal>
        ) : null}
      </div>
      {ctaLabel && ctaHref ? (
        <Reveal>
          <Link href={ctaHref} className="btn-ghost">
            {ctaLabel}
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}
