import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Stats } from "@/components/Stats";
import { SectionHead } from "@/components/SectionHead";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseRow } from "@/components/CaseRow";
import { Testimonials } from "@/components/Testimonials";
import { CTAStrip } from "@/components/CTAStrip";
import { SERVICES_PREVIEW } from "@/data/site-content";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    type: "website",
  },
};

export default function HomePage(): React.ReactElement {
  const featured = getFeaturedCaseStudies();

  return (
    <div className="page">
      <Hero />
      <Manifesto />
      <Stats />

      <section aria-labelledby="services-heading">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title={
              <>
                Five practices, <em>one company.</em>
              </>
            }
            lead="From early strategy to AI integration and long-term support — a small team that takes ownership end to end."
            ctaLabel="All services →"
            ctaHref="/services"
            headingId="services-heading"
          />
          <div className="svc-grid">
            {SERVICES_PREVIEW.map((s) => (
              <ServiceCard key={s.id} service={s} variant="preview" />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="work-heading">
        <div className="wrap">
          <SectionHead
            eyebrow="Selected work"
            title={
              <>
                Be our next <em>success story.</em>
              </>
            }
            lead="A short pass through recent projects — across healthcare, logistics and fintech."
            ctaLabel="All case studies →"
            ctaHref="/work"
            headingId="work-heading"
          />
          {featured.map((study, idx) => (
            <CaseRow key={study.slug} study={study} flip={idx % 2 === 1} />
          ))}
        </div>
      </section>

      <Testimonials />

      <CTAStrip
        heading={
          <>
            <em>Be</em> our next success story.
          </>
        }
        subtitle="We respond within one business day. No sales pressure — promise."
      />
    </div>
  );
}
