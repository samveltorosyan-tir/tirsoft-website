import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { CTAStrip } from "@/components/CTAStrip";
import { ProcessFlow } from "@/components/ProcessFlow";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { ServicesBento } from "@/components/ServicesBento";
import { OutcomeBanner } from "@/components/OutcomeBanner";
import { TECH_STACK } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services — AI integration, custom builds, and care",
  description:
    "Five practices held together by one company: AI integration, web & SaaS, mobile, strategy, and maintenance. Calm processes, predictable timelines.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "TIRSoft Services — AI integration, custom builds, and care",
    description:
      "AI integration, web & SaaS, mobile, strategy, and maintenance. Calm processes, predictable timelines.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage(): React.ReactElement {
  return (
    <div className="page">
      <section style={{ paddingTop: 56 }} aria-labelledby="services-h1">
        <div className="wrap">
          <Reveal
            className="eyebrow"
            style={{ marginBottom: 24 }}
          >
            Services
          </Reveal>
          <Reveal as="h1" className="h-sub">
            <span id="services-h1">
              We build for the outcomes you measure on.
            </span>
          </Reveal>
          <Reveal as="p" className="lead" style={{ marginTop: 28 }}>
            Five practices held together by one company, with a single bias:
            ship the thing that moves your P&amp;L. We sit inside your business,
            not next to it.
          </Reveal>
        </div>
      </section>

      <section aria-label="Business outcomes">
        <div className="wrap">
          <OutcomeBanner />
        </div>
      </section>

      <section aria-label="All services">
        <div className="wrap">
          <ServicesBento />
        </div>
      </section>

      <section
        style={{ background: "var(--bone-2)" }}
        aria-labelledby="process-heading"
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Process"
            title={
              <>
                Five short phases, each ending in something you can show.
              </>
            }
            lead="We work in short, defined phases. Each ends with something you can show and a decision you can make."
            headingId="process-heading"
          />
          <ProcessFlow />
        </div>
      </section>

      <section aria-labelledby="industries-heading">
        <div className="wrap">
          <SectionHead
            eyebrow="Industries we work across"
            title={
              <>
                Eight industries we work across.
              </>
            }
            lead="The playbook adapts, the rigour stays. Hover any industry to see the lift we've delivered."
            headingId="industries-heading"
          />
          <IndustriesGrid />
        </div>
      </section>

      <section
        style={{ background: "var(--bone-2)" }}
        aria-labelledby="stack-heading"
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Stack"
            title={
              <>
                Tools we use day in, day out.
              </>
            }
            lead="We pick proven tools and the model that's good enough. The excitement belongs in the work, not the dependencies."
            headingId="stack-heading"
          />
          <div className="stack-grid">
            {TECH_STACK.map((item) => (
              <Reveal key={item.name} as="article" className="stack-item">
                <div className="stack-cat">{item.category}</div>
                <div className="stack-name">{item.name}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Bring us the messy brief.
          </>
        }
        subtitle="The harder the problem, the better the first call."
      />
    </div>
  );
}
