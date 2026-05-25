import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { CTAStrip } from "@/components/CTAStrip";
import { RoleAccordion } from "@/components/RoleAccordion";
import { VALUES, OPEN_ROLES } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Careers — work on real things, with real people",
  description:
    "Open roles at TIRSoft. Five seats, remote-friendly with a preference for Yerevan or Pacific overlap. We hire slowly, pay fairly, and care about craft.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at TIRSoft",
    description:
      "Open roles at TIRSoft — AI engineering, product design, full-stack, iOS, US lead.",
    url: "/careers",
    type: "website",
  },
};

export default function CareersPage(): React.ReactElement {
  return (
    <div className="page">
      <section style={{ paddingTop: 56 }} aria-labelledby="careers-h1">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: 24 }}>
            Careers
          </Reveal>
          <Reveal as="h1" className="h-sub">
            <span id="careers-h1">
              Work on <em>real things,</em> with real people.
            </span>
          </Reveal>
          <Reveal as="p" className="lead" style={{ marginTop: 28 }}>
            We&apos;re a small team in Glendale and Yerevan. We hire slowly,
            pay fairly, and care about the craft. If that sounds like your kind
            of place, we&apos;d love to hear from you.
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-heading">
        <div className="wrap">
          <SectionHead
            eyebrow="Values"
            title={
              <>
                How we <em>work.</em>
              </>
            }
            headingId="values-heading"
          />
          <div className="value-grid">
            {VALUES.map((value) => (
              <Reveal key={value.number} as="article" className="value-item">
                <div className="value-num">{value.number}</div>
                <h3 className="value-name">{value.name}</h3>
                <p className="value-desc">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ background: "var(--bone-2)" }}
        aria-labelledby="roles-heading"
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Open roles"
            title={
              <>
                We&apos;re hiring for <em>five seats.</em>
              </>
            }
            lead="Remote-friendly with a strong preference for Yerevan or Pacific time overlap."
            headingId="roles-heading"
          />
          <div className="roles-list">
            {OPEN_ROLES.map((role) => (
              <Reveal key={role.slug}>
                <RoleAccordion role={role} />
              </Reveal>
            ))}
          </div>

          <div
            className="sec-head"
            style={{ marginTop: 80, marginBottom: 0 }}
          >
            <div className="meta">
              <Reveal className="eyebrow">Life at TIRSoft</Reveal>
            </div>
          </div>
          <div className="life-strip" aria-hidden="true">
            <Reveal className="life-slot life-1" data-label="office · yerevan" />
            <Reveal className="life-slot life-2" data-label="friday show & tell" />
            <Reveal className="life-slot life-3" data-label="coffee · cascade" />
            <Reveal className="life-slot life-4" data-label="ship party · 2025" />
          </div>
          <Reveal as="p" className="life-caption">
            Life at TIRSoft — <em>real people, real work, real Yerevan.</em>
          </Reveal>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Don&apos;t see your <em>role?</em>
          </>
        }
        subtitle="Send a note anyway. We hire people, not titles."
        buttonLabel="Get in touch"
      />
    </div>
  );
}
