import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";
import { CaseCover } from "./CaseCover";
import { Reveal } from "./Reveal";

interface CaseListCardProps {
  readonly study: CaseStudy;
}

export function CaseListCard({ study }: CaseListCardProps): React.ReactElement {
  const href = `/case-studies/${study.slug}`;
  return (
    <Reveal as="article" className="case-list-card">
      <Link
        href={href}
        className="case-cover"
        aria-label={`Read the ${study.name} case study`}
      >
        <CaseCover variant={study.cover} size="small" title={study.name} />
      </Link>
      <div className="case-list-info">
        <span className="case-tag" style={{ alignSelf: "flex-start" }}>
          AI · {study.industry}
        </span>
        <h3 className="case-title">
          <Link href={href}>
            <strong>{study.name}</strong>: {study.headline}
          </Link>
        </h3>
        <div className="case-meta">
          {study.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <span>{study.year}</span>
        </div>
        <p className="case-desc muted">{study.description}</p>
      </div>
      <div className="case-list-metric">
        <span className="num">{study.metric.value}</span>
        <span className="lbl">{study.metric.label}</span>
      </div>
    </Reveal>
  );
}
