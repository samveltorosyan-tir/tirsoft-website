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
      "Open roles at TIRSoft: AI engineering, product design, full-stack, iOS, US lead.",
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
              Work on real things with real people.
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
                How we work.
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
                We&apos;re hiring for five seats.
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
            <Reveal className="life-slot life-1" data-label="office · yerevan">
              <svg className="life-art" viewBox="0 0 120 120" fill="none">
                <rect x="20" y="36" width="80" height="72" rx="3" stroke="currentColor" strokeWidth="1.2" />
                <path d="M20 56h80M20 76h80M20 96h80M40 36v72M60 36v72M80 36v72" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
                <path d="M48 26h24l-4 10H52z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="60" cy="22" r="3" fill="currentColor" />
              </svg>
            </Reveal>
            <Reveal className="life-slot life-2" data-label="friday show & tell">
              <svg className="life-art" viewBox="0 0 120 120" fill="none">
                <rect x="18" y="22" width="84" height="56" rx="4" stroke="currentColor" strokeWidth="1.2" />
                <path d="M28 36h44M28 46h60M28 56h36M28 66h52" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                <path d="M60 78v14M48 92h24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="38" cy="106" r="3" fill="currentColor" />
                <circle cx="60" cy="106" r="3" fill="currentColor" />
                <circle cx="82" cy="106" r="3" fill="currentColor" />
              </svg>
            </Reveal>
            <Reveal className="life-slot life-3" data-label="coffee · cascade">
              <svg className="life-art" viewBox="0 0 120 120" fill="none">
                <path d="M34 56h44v32a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V56z" stroke="currentColor" strokeWidth="1.4" />
                <path d="M78 64h6a8 8 0 0 1 0 16h-6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M40 102h32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M48 40c0-6 4-6 4-12M58 42c0-6 4-6 4-12M68 40c0-6 4-6 4-12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
              </svg>
            </Reveal>
            <Reveal className="life-slot life-4" data-label="ship party · 2025">
              <svg className="life-art" viewBox="0 0 120 120" fill="none">
                <path d="M40 96L66 22l4 12 14-2-10 10 6 14-12-6-6 12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <circle cx="28" cy="34" r="2.5" fill="currentColor" />
                <circle cx="94" cy="40" r="2" fill="currentColor" />
                <circle cx="20" cy="64" r="2" fill="currentColor" />
                <circle cx="100" cy="74" r="2.5" fill="currentColor" />
                <circle cx="34" cy="92" r="2" fill="currentColor" />
                <path d="M14 22l4 4M102 18l-4 4M14 102l4-4M102 100l-4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </Reveal>
          </div>
          <Reveal as="p" className="life-caption">
            Life at TIRSoft: real people, real work, real Yerevan.
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
