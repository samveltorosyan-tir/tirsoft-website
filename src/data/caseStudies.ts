export type CaseStudyIndustry =
  | "Healthcare"
  | "Logistics"
  | "Creative & media"
  | "Fintech"
  | "Energy"
  | "Retail";

export type CoverVariant =
  | "pulse"
  | "route"
  | "palette"
  | "bars"
  | "waves"
  | "grid";

export interface CaseStudyMetric {
  readonly value: string;
  readonly label: string;
}

export interface CaseStudySection {
  readonly heading: string;
  readonly body: string;
}

export interface CaseStudy {
  readonly slug: string;
  readonly name: string;
  readonly headline: string;
  readonly summary: string;
  readonly description: string;
  readonly industry: CaseStudyIndustry;
  readonly year: number;
  readonly tags: ReadonlyArray<string>;
  readonly metric: CaseStudyMetric;
  readonly cover: CoverVariant;
  readonly client: string;
  readonly role: string;
  readonly duration: string;
  readonly sections: ReadonlyArray<CaseStudySection>;
  readonly featured: boolean;
}

export const CASE_STUDIES: ReadonlyArray<CaseStudy> = [
  {
    slug: "triage-co",
    name: "Triage Co",
    headline: "Patient pre-screen, in seconds",
    summary:
      "A clinician-facing triage assistant that summarizes intake forms and flags urgency before the first appointment.",
    description:
      "Clinician-facing triage that summarizes intake and flags urgency before the first appointment.",
    industry: "Healthcare",
    year: 2025,
    tags: ["LLM", "RAG", "HIPAA"],
    metric: { value: "−47%", label: "intake-to-treatment time" },
    cover: "pulse",
    client: "A multi-site clinic group, North America",
    role: "AI integration, product design, full-stack build",
    duration: "14 weeks",
    featured: true,
    sections: [
      {
        heading: "The brief",
        body: "Front-desk staff were drowning in intake forms. By the time a clinician saw the patient, the urgency signal was buried in three PDFs. We were asked to make that signal arrive first — before the appointment, not during it.",
      },
      {
        heading: "What we built",
        body: "A clinician-facing triage workspace. Intake forms in, structured urgency summary out, with citations back to the source document. Retrieval-augmented over the clinic's own protocols, hosted inside their HIPAA-compliant VPC.",
      },
      {
        heading: "What changed",
        body: "Average intake-to-treatment time dropped 47% across the pilot sites. Clinicians report the summary is the first thing they open — and the last thing they argue with.",
      },
    ],
  },
  {
    slug: "routewise",
    name: "Routewise",
    headline: "Fleet decisions in minutes, not mornings",
    summary:
      "An operations cockpit that re-plans routes in minutes when conditions change, with a driver app that explains why.",
    description:
      "Operations cockpit that re-plans routes live, with a driver app that explains the why.",
    industry: "Logistics",
    year: 2025,
    tags: ["Forecasting", "Optimization", "iOS"],
    metric: { value: "3.2×", label: "dispatcher productivity" },
    cover: "route",
    client: "A regional logistics scale-up",
    role: "Forecasting models, dispatcher web app, native iOS driver app",
    duration: "20 weeks",
    featured: true,
    sections: [
      {
        heading: "The brief",
        body: "Dispatchers were re-planning routes once per morning, then living with the consequences. When weather, traffic, or a missed pickup hit, the plan stopped describing reality by 10am.",
      },
      {
        heading: "What we built",
        body: "An operations cockpit that re-solves the routing problem in minutes, not hours, and a driver iOS app that explains the change in one sentence the driver actually trusts.",
      },
      {
        heading: "What changed",
        body: "Dispatcher productivity tripled. The morning plan now survives until lunch — and when it doesn't, the cockpit re-plans before the dispatcher has finished their coffee.",
      },
    ],
  },
  {
    slug: "smear",
    name: "Smear",
    headline: "A writing room for ad creatives",
    summary:
      "Collaborative AI workspace where copy, image references and voice notes share one thread.",
    description:
      "Collaborative AI workspace where copy, image refs and voice notes share one thread.",
    industry: "Creative & media",
    year: 2024,
    tags: ["Multimodal", "Web", "Agentic"],
    metric: { value: "5.4×", label: "concept throughput" },
    cover: "palette",
    client: "An independent ad agency in Los Angeles",
    role: "Product design, multimodal AI agent, web app",
    duration: "16 weeks",
    featured: false,
    sections: [
      {
        heading: "The brief",
        body: "Creative directors were running concepts across four tools — copy in one place, image refs in another, voice notes lost in DMs. The thinking lived in too many windows.",
      },
      {
        heading: "What we built",
        body: "One shared thread where copy, image references, and voice notes co-exist, with an agent that proposes the next move when the room stalls.",
      },
      {
        heading: "What changed",
        body: "Concept throughput grew 5.4×. More importantly, junior creatives now ship work the room is happy to defend — because the room has been part of the work since minute one.",
      },
    ],
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    headline: "Reconciliation that explains itself",
    summary:
      "A reconciliation copilot for ops teams. It flags, drafts the fix, cites the policy.",
    description:
      "Reconciliation copilot for ops teams. It flags, drafts the fix, cites the policy.",
    industry: "Fintech",
    year: 2024,
    tags: ["LLM", "Web", "SOC 2"],
    metric: { value: "−72%", label: "manual reconciliation hours" },
    cover: "bars",
    client: "A Series B fintech, North America",
    role: "AI integration, ops workflow design, web app",
    duration: "18 weeks",
    featured: false,
    sections: [
      {
        heading: "The brief",
        body: "The ops team was rebuilding the same reconciliation spreadsheet every Monday. Audit asked, every quarter, who decided what — and the answer lived in Slack DMs.",
      },
      {
        heading: "What we built",
        body: "A reconciliation copilot that flags the break, drafts the journal entry, and cites the policy paragraph it relied on. Audit gets a trail; ops gets their Mondays back.",
      },
      {
        heading: "What changed",
        body: "Manual reconciliation hours dropped 72%. Audit's questions are now answered before they are asked — usually by the citation tooltip on the copilot's own draft.",
      },
    ],
  },
  {
    slug: "tideboard",
    name: "Tideboard",
    headline: "Grid forecasts that operators trust",
    summary:
      "Demand forecasting and anomaly detection for a regional grid operator.",
    description:
      "Demand forecasting and anomaly detection for a regional grid operator.",
    industry: "Energy",
    year: 2024,
    tags: ["Forecasting", "Dashboards"],
    metric: { value: "+18%", label: "load prediction accuracy" },
    cover: "waves",
    client: "A regional grid operator",
    role: "Forecasting models, anomaly detection, operator dashboards",
    duration: "22 weeks",
    featured: false,
    sections: [
      {
        heading: "The brief",
        body: "Operators were over-provisioning capacity because the old forecasting model was wrong in expensive directions. They wanted accuracy — and, just as important, a forecast they could defend in a control room.",
      },
      {
        heading: "What we built",
        body: "Probabilistic forecasting with anomaly detection, surfaced through dashboards that show the model's uncertainty, not just its point estimate.",
      },
      {
        heading: "What changed",
        body: "Load prediction accuracy improved 18%. Operators now show the forecast in their morning brief — because they can also show why they trust it.",
      },
    ],
  },
  {
    slug: "shelfie",
    name: "Shelfie",
    headline: "Merchandising that watches the store",
    summary:
      "An in-store assistant for visual merchandising teams. Photo in, planogram delta out.",
    description:
      "In-store assistant for visual merchandising teams. Photo in, planogram delta out.",
    industry: "Retail",
    year: 2023,
    tags: ["Vision", "Mobile"],
    metric: { value: "−61%", label: "audit cycle time" },
    cover: "grid",
    client: "A national retail group",
    role: "Computer vision, mobile app, planogram tooling",
    duration: "12 weeks",
    featured: false,
    sections: [
      {
        heading: "The brief",
        body: "Field merchandisers were photographing shelves and emailing them in. Head office was reconciling the photos against planograms by hand, store by store.",
      },
      {
        heading: "What we built",
        body: "A mobile app where the merchandiser shoots an aisle, and the app returns the planogram delta in seconds — with a labelled overlay the team can hand back to the store manager.",
      },
      {
        heading: "What changed",
        body: "Audit cycle time fell 61%. The team now visits more stores per week, and the conversations on the floor are about the fix, not the photo.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllSlugs(): ReadonlyArray<string> {
  return CASE_STUDIES.map((study) => study.slug);
}

export function getFeaturedCaseStudies(): ReadonlyArray<CaseStudy> {
  return CASE_STUDIES.filter((study) => study.featured);
}
