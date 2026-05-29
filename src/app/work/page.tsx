import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CaseListCard } from "@/components/CaseListCard";
import { CTAStrip } from "@/components/CTAStrip";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Selected work — six recent projects",
  description:
    "Six recent client projects across healthcare, logistics, creative, fintech, energy, and retail. Pick a case study to read the full story.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "TIRSoft — selected work",
    description:
      "Six recent projects across healthcare, logistics, creative, fintech, energy, and retail.",
    url: "/work",
    type: "website",
  },
};

export default function WorkPage(): React.ReactElement {
  return (
    <div className="page">
      <section style={{ paddingTop: 56 }} aria-labelledby="work-h1">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: 24 }}>
            Selected work
          </Reveal>
          <Reveal as="h1" className="h-sub">
            <span id="work-h1">
              Six recent projects.
            </span>
          </Reveal>
          <Reveal as="p" className="lead" style={{ marginTop: 28 }}>
            A company is the projects it ships. Here are some recent ones —
            across healthcare, logistics, creative, fintech, energy and retail.
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 24 }} aria-label="Case studies list">
        <div className="wrap">
          <div className="case-list">
            {CASE_STUDIES.map((study) => (
              <CaseListCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading={
          <>
            Be our next case study.
          </>
        }
        subtitle="Bring the project that scared two other vendors off."
      />
    </div>
  );
}
