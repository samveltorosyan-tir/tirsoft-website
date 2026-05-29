import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";
import { CaseCover } from "./CaseCover";
import { Reveal } from "./Reveal";

interface CaseRowProps {
  readonly study: CaseStudy;
  readonly flip?: boolean;
}

export function CaseRow({ study, flip = false }: CaseRowProps): React.ReactElement {
  const href = `/case-studies/${study.slug}`;
  return (
    <Reveal className={`case-row${flip ? " flip" : ""}`}>
      <Link
        href={href}
        className="case-cover"
        aria-label={`${study.name} — ${study.headline}`}
      >
        <CaseCover variant={study.cover} title={study.name} />
      </Link>
      <div className="case-body">
        <span className="case-tag">AI · {study.industry}</span>
        <h3 className="case-title">
          <strong>{study.name}</strong>: {study.headline}
        </h3>
        <div className="case-meta">
          {study.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="case-desc">{study.summary}</p>
        <div className="case-metric">
          <span className="case-metric-num">{study.metric.value}</span>
          <span className="case-metric-lbl">{study.metric.label}</span>
        </div>
      </div>
    </Reveal>
  );
}
