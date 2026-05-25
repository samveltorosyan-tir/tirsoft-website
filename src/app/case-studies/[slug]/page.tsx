import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { CaseCover } from "@/components/CaseCover";
import { CTAStrip } from "@/components/CTAStrip";
import {
  CASE_STUDIES,
  getAllSlugs,
  getCaseStudyBySlug,
} from "@/data/caseStudies";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";

interface RouteParams {
  readonly slug: string;
}

interface PageProps {
  readonly params: Promise<RouteParams>;
}

export function generateStaticParams(): RouteParams[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {
      title: "Case study not found",
      description: "The case study you requested doesn't exist.",
      robots: { index: false, follow: true },
    };
  }
  const url = `/case-studies/${study.slug}`;
  const title = `${study.name} — ${study.headline}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    keywords: [...study.tags, study.industry, "AI", "case study"],
    openGraph: {
      type: "article",
      url,
      title: `${title} · ${SITE.name}`,
      description: study.summary,
      siteName: SITE.name,
      publishedTime: `${study.year}-01-01`,
      authors: [SITE.name],
      tags: [...study.tags],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = CASE_STUDIES.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <article className="page">
      <section className="cs-hero" aria-labelledby="cs-h1">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: 20 }}>
            Case study · {study.industry}
          </Reveal>
          <Reveal as="h1" className="h-sub">
            <span id="cs-h1">
              <em>{study.name}</em> — {study.headline}
            </span>
          </Reveal>
          <Reveal as="p" className="lead" style={{ marginTop: 24 }}>
            {study.summary}
          </Reveal>
          <Reveal className="meta-row">
            {study.tags.map((tag) => (
              <span key={tag} className="case-meta">
                <span>{tag}</span>
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 24, paddingBottom: 32 }}>
        <div className="wrap">
          <Reveal className="case-cover" style={{ aspectRatio: "16 / 9" }}>
            <CaseCover variant={study.cover} title={study.name} />
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="cs-grid">
            <div className="cs-body">
              {study.sections.map((sec) => (
                <Reveal
                  key={sec.heading}
                  as="section"
                  className="cs-section"
                >
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                </Reveal>
              ))}

              <Reveal as="section" className="cs-section">
                <h2>The metric</h2>
                <p>
                  <span className="case-metric-num">
                    {study.metric.value}
                  </span>{" "}
                  <span className="muted">{study.metric.label}</span>
                </p>
              </Reveal>
            </div>

            <aside className="cs-aside" aria-label="Project details">
              <div className="line">
                <span className="k">Client</span>
                <span className="v">{study.client}</span>
              </div>
              <div className="line">
                <span className="k">Industry</span>
                <span className="v">{study.industry}</span>
              </div>
              <div className="line">
                <span className="k">Our role</span>
                <span className="v">{study.role}</span>
              </div>
              <div className="line">
                <span className="k">Duration</span>
                <span className="v">{study.duration}</span>
              </div>
              <div className="line">
                <span className="k">Year</span>
                <span className="v">{study.year}</span>
              </div>
              <div className="line">
                <span className="k">Outcome</span>
                <span className="v">
                  {study.metric.value} · {study.metric.label}
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: 16 }}>
            More work
          </Reveal>
          <Reveal as="h2" className="h2">
            <span id="related-heading">
              Other recent <em>builds.</em>
            </span>
          </Reveal>
          <div className="svc-grid" style={{ marginTop: 24 }}>
            {related.map((r) => (
              <Reveal key={r.slug} as="article" className="svc-card">
                <span className="svc-tag">{r.industry}</span>
                <h3 className="svc-name">{r.name}</h3>
                <p className="svc-desc">{r.summary}</p>
                <Link
                  href={`/case-studies/${r.slug}`}
                  className="btn-ghost"
                  style={{ alignSelf: "flex-start", marginTop: 8 }}
                >
                  Read case study →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Got a <em>similar challenge?</em>
          </>
        }
        subtitle="Tell us about it. We reply within one business day."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema(study)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Work", url: "/work" },
              {
                name: study.name,
                url: `/case-studies/${study.slug}`,
              },
            ]),
          ),
        }}
      />
    </article>
  );
}
