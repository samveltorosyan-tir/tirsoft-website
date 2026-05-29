export interface Service {
  readonly id: string;
  readonly number: string;
  readonly tag: string;
  readonly name: string;
  readonly summary: string;
  readonly detail: string;
  readonly outcome: string;
  readonly outcomeLabel: string;
  readonly bullets: ReadonlyArray<string>;
  readonly glyph: "ai" | "web" | "mobile" | "strategy" | "care";
}

export interface ProcessStep {
  readonly number: string;
  readonly name: string;
  readonly description: string;
  readonly duration: string;
  readonly deliverable: string;
  readonly wireframe: "discovery" | "design" | "build" | "ship" | "evolve";
}

export interface Industry {
  readonly name: string;
  readonly icon:
    | "healthcare"
    | "fintech"
    | "logistics"
    | "retail"
    | "creative"
    | "education"
    | "energy"
    | "realestate";
  readonly kicker: string;
  readonly outcome: string;
  readonly outcomeLabel: string;
}

export interface Stat {
  readonly icon: "clock" | "calendar" | "people" | "trend";
  readonly value: string;
  readonly suffix: string;
  readonly label: string;
}

export interface Testimonial {
  readonly quoteHtml: string;
  readonly company: string;
  readonly name: string;
  readonly role: string;
}

export interface Value {
  readonly number: string;
  readonly name: string;
  readonly description: string;
}

export interface Role {
  readonly slug: string;
  readonly title: string;
  readonly meta: string;
  readonly summary: string;
  readonly responsibilities: ReadonlyArray<string>;
  readonly requirements: ReadonlyArray<string>;
  readonly niceToHave?: ReadonlyArray<string>;
}

export interface StackEntry {
  readonly category: string;
  readonly name: string;
}

export const SERVICES_PREVIEW: ReadonlyArray<Service> = [
  {
    id: "ai-integration",
    number: "01",
    tag: "Signature",
    name: "AI integration & automation",
    summary:
      "Embed LLMs, agents, and retrieval into the workflows your business already runs. We pick the cheapest model that's good enough.",
    detail:
      "RAG, agents, fine-tunes and pragmatic prompting, embedded into the workflows that actually move your business. We start with your P&L, not the model card.",
    outcome: "5.1×",
    outcomeLabel: "median throughput lift across AI engagements",
    bullets: [
      "Retrieval pipelines wired to your real data",
      "Agents that touch your CRM, billing, and ops",
      "Evals tied to the metric your CFO already tracks",
    ],
    glyph: "ai",
  },
  {
    id: "web-saas",
    number: "02",
    tag: "Custom build",
    name: "Web & SaaS products",
    summary:
      "Greenfield web apps and SaaS platforms, designed, built, and operated by a single integrated team.",
    detail:
      "Full product builds for greenfield startups and rebuilds for teams whose stack has outgrown them. We ship the version your customers pay for, not the version that demos well.",
    outcome: "−57%",
    outcomeLabel: "time-to-revenue vs in-house rebuilds",
    bullets: [
      "Design, frontend, backend. One team, one bill",
      "Built to be operated, not handed over",
      "Live in 4–8 weeks, not next fiscal year",
    ],
    glyph: "web",
  },
  {
    id: "mobile",
    number: "03",
    tag: "Mobile",
    name: "iOS & Android apps",
    summary:
      "Native or cross-platform, chosen by the use case rather than the trend. Apps that feel correct and ship on schedule.",
    detail:
      "React Native, Flutter, or fully native. We pick by the job, then own performance, accessibility and app-store hygiene end-to-end.",
    outcome: "4.6★",
    outcomeLabel: "average app-store rating across shipped apps",
    bullets: [
      "React Native and Flutter for speed-to-market",
      "Swift / Kotlin where the use case demands it",
      "App-store hygiene shipped, not deferred",
    ],
    glyph: "mobile",
  },
  {
    id: "strategy",
    number: "04",
    tag: "Strategy",
    name: "AI strategy & advisory",
    summary:
      "Where AI helps, where it doesn't, what to build first. A short engagement that ends in a roadmap you can defend.",
    detail:
      "Discovery, opportunity mapping, build plan. You leave with a prioritized roadmap modeled against revenue, plus the people who'd execute it.",
    outcome: "10 days",
    outcomeLabel: "from intake to a board-ready AI roadmap",
    bullets: [
      "Workflow mapping with the people doing the work",
      "Opportunity scoring against revenue and cost",
      "Vendor-agnostic. We don't sell licenses",
    ],
    glyph: "strategy",
  },
  {
    id: "maintenance",
    number: "05",
    tag: "Care",
    name: "Maintenance & evolution",
    summary:
      "Ongoing care for what we built, what you built, or what someone else left behind. Documented, monitored, calm.",
    detail:
      "A monthly retainer that protects what's live and keeps shipping the next thing. Observability, runbooks, and humans you can email when it matters.",
    outcome: "99.82%",
    outcomeLabel: "uptime across retainer clients in the last 12 months",
    bullets: [
      "On-call rotation and runbooks from day one",
      "Monthly review tied to your business KPIs",
      "Same team that built it. No handoffs",
    ],
    glyph: "care",
  },
];

export const PROCESS_STEPS: ReadonlyArray<ProcessStep> = [
  {
    number: "01",
    name: "Discovery",
    description:
      "A few days with your team. We listen, map workflows, and pressure-test the brief.",
    duration: "3–5 days",
    deliverable: "Annotated brief",
    wireframe: "discovery",
  },
  {
    number: "02",
    name: "Design",
    description:
      "Flows, wireframes, and a polished prototype of the riskiest screen, before we write a line of production code.",
    duration: "1–2 weeks",
    deliverable: "Clickable prototype",
    wireframe: "design",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Short sprints, demo-able every Friday. You're in Linear with us, not waiting for a status email.",
    duration: "3–8 weeks",
    deliverable: "Working software",
    wireframe: "build",
  },
  {
    number: "04",
    name: "Ship",
    description:
      "Soft launch, then full rollout. Observability, runbooks and a 30-day care period included.",
    duration: "3–5 days",
    deliverable: "Live, monitored",
    wireframe: "ship",
  },
  {
    number: "05",
    name: "Evolve",
    description:
      "Monthly retainer or project-based. We keep building, measuring and improving with the same team.",
    duration: "Ongoing",
    deliverable: "Monthly review",
    wireframe: "evolve",
  },
];

export const STATS: ReadonlyArray<Stat> = [
  {
    icon: "clock",
    value: "10",
    suffix: "",
    label: "Years building shipping software.",
  },
  {
    icon: "calendar",
    value: "124",
    suffix: "",
    label: "Projects delivered end-to-end.",
  },
  {
    icon: "people",
    value: "34",
    suffix: "",
    label: "Clients across eight industries.",
  },
  {
    icon: "trend",
    value: "86",
    suffix: "%",
    label: "Clients return for the next build.",
  },
];

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quoteHtml:
      "They <em>understood the workflow</em> before they touched the model. That's rare. We shipped to dispatchers in eight weeks.",
    company: "Logistics · scale-up",
    name: "Mher Avetisyan",
    role: "CTO · 2025",
  },
  {
    quoteHtml:
      "Calm, opinionated, and on time. They <em>argued us out of two features</em> we would have regretted, and built one we hadn't thought of.",
    company: "Fintech · series B",
    name: "Jiwon Park",
    role: "VP Product · 2025",
  },
  {
    quoteHtml:
      "It felt like an <em>in-house team</em> from week one. They asked the questions our last vendor never asked.",
    company: "Healthcare · clinic group",
    name: "Dr. Ravi Singh",
    role: "Clinical Lead · 2024",
  },
];

export const VALUES: ReadonlyArray<Value> = [
  {
    number: "01",
    name: "Fewer projects, done properly",
    description:
      "We take on what we can show up for. The work has to be defensible a year later, not just impressive at launch.",
  },
  {
    number: "02",
    name: "Predictable beats novel",
    description:
      "Boring timelines, quiet releases, documented systems. The most senior people on the team are usually the calmest in a review.",
  },
  {
    number: "03",
    name: "Pushback is part of the job",
    description:
      "Everyone on the team can disagree with the brief. The best projects we've shipped started with a polite no.",
  },
];

export const OPEN_ROLES: ReadonlyArray<Role> = [
  {
    slug: "senior-ai-engineer",
    title: "Senior AI Engineer",
    meta: "Yerevan · Hybrid · Full-time",
    summary:
      "Lead AI integration on client engagements, from prototyping LLM features to shipping production-grade retrieval pipelines that real users depend on.",
    responsibilities: [
      "Design and ship LLM-powered features end-to-end across client projects.",
      "Build retrieval systems (RAG, hybrid search, evals) with measurable quality bars.",
      "Own model selection, prompting, and cost/latency trade-offs in production.",
      "Pair with product designers and full-stack engineers on weekly demo cycles.",
    ],
    requirements: [
      "5+ years building production software, with 1+ year shipping LLM features.",
      "Strong Python or TypeScript; comfortable in both is a plus.",
      "Deep familiarity with at least one frontier model API and one vector store.",
      "You think in evals, not vibes, and can explain why.",
    ],
    niceToHave: [
      "Experience with HIPAA, SOC 2, or other regulated environments.",
      "Open-source contributions in the AI/ML ecosystem.",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    meta: "Remote · Pacific overlap · Full-time",
    summary:
      "Shape how clients and their users actually experience the products we build, from the first sketch to the last hover state.",
    responsibilities: [
      "Lead product design across two to three concurrent engagements.",
      "Run discovery interviews, then translate findings into shippable flows.",
      "Maintain a high-craft bar on typography, motion, and interaction details.",
      "Partner directly with engineers. Your handoffs are conversations, not Figma dumps.",
    ],
    requirements: [
      "4+ years designing software products that actually shipped.",
      "Strong systems thinking: components, tokens, accessibility.",
      "Excellent written communication; you can defend a decision in two sentences.",
      "Pacific time overlap of at least 3 hours.",
    ],
  },
  {
    slug: "full-stack-engineer",
    title: "Full-stack Engineer",
    meta: "Yerevan · Hybrid · Full-time",
    summary:
      "Build the products our clients ship. TypeScript across the stack, with the freedom to choose the right tool for each problem.",
    responsibilities: [
      "Ship features across the stack: Next.js front-ends, Node services, Postgres.",
      "Own quality: tests, observability, and the on-call rotation when we run one.",
      "Review code thoughtfully and raise the team's bar with every PR.",
      "Talk to clients directly. The engineer who builds it explains it.",
    ],
    requirements: [
      "4+ years professional experience with TypeScript and a modern framework.",
      "Solid SQL: you can read a query plan and not panic.",
      "Comfort owning a feature from ticket to production.",
      "Based in Yerevan or willing to relocate.",
    ],
  },
  {
    slug: "ios-engineer",
    title: "iOS Engineer",
    meta: "Remote · Contract → Full-time",
    summary:
      "Build native iOS experiences for our clients, starting with a 3-month contract that converts to full-time if we both want it to.",
    responsibilities: [
      "Architect and ship native Swift apps with SwiftUI where it makes sense.",
      "Design clean APIs against the back-end teams we work with.",
      "Own App Store releases, TestFlight cycles, and crash triage.",
      "Care about the small details: gestures, haptics, motion.",
    ],
    requirements: [
      "3+ years shipping native iOS apps in Swift.",
      "Strong opinions about SwiftUI vs. UIKit, with reasons.",
      "At least one app in the App Store you can point to.",
    ],
  },
  {
    slug: "head-of-us",
    title: "Head of US",
    meta: "Glendale · On-site · Full-time",
    summary:
      "Run the US office day to day: client relationships, hiring, and the quiet operational work that lets the team do their best craft.",
    responsibilities: [
      "Own client relationships from intro call to ship party.",
      "Hire thoughtfully (five seats this year, no more).",
      "Keep the team's operational rhythm: weekly demos, retros, reviews.",
      "Represent TIRSoft in Glendale: events, partnerships, the occasional dinner.",
    ],
    requirements: [
      "6+ years in agency, consulting, or product-team leadership.",
      "Track record of growing teams without losing the craft.",
      "Based in Glendale or willing to relocate; this is on-site.",
    ],
  },
];

export const INDUSTRIES: ReadonlyArray<Industry> = [
  {
    name: "Healthcare",
    icon: "healthcare",
    kicker: "Patient-facing, HIPAA-aware.",
    outcome: "−41%",
    outcomeLabel: "intake-to-treatment time",
  },
  {
    name: "Fintech",
    icon: "fintech",
    kicker: "Audit trails over magic.",
    outcome: "−68%",
    outcomeLabel: "manual reconciliation hours",
  },
  {
    name: "Logistics",
    icon: "logistics",
    kicker: "Plans that survive the day.",
    outcome: "3.1×",
    outcomeLabel: "dispatcher productivity",
  },
  {
    name: "Retail & e-commerce",
    icon: "retail",
    kicker: "From shelf to checkout.",
    outcome: "−56%",
    outcomeLabel: "merchandising audit cycle",
  },
  {
    name: "Creative & media",
    icon: "creative",
    kicker: "Tools that respect the craft.",
    outcome: "5.1×",
    outcomeLabel: "concept throughput per week",
  },
  {
    name: "Education",
    icon: "education",
    kicker: "Learning that adapts.",
    outcome: "+34%",
    outcomeLabel: "course completion rate",
  },
  {
    name: "Energy",
    icon: "energy",
    kicker: "Forecasts operators trust.",
    outcome: "+17%",
    outcomeLabel: "load prediction accuracy",
  },
  {
    name: "Real estate",
    icon: "realestate",
    kicker: "Data behind the door.",
    outcome: "2.3×",
    outcomeLabel: "qualified-lead conversion",
  },
];

export const TECH_STACK: ReadonlyArray<StackEntry> = [
  { category: "AI models", name: "Claude 4.7, GPT-5, Gemini 2.5 Pro, Llama 4" },
  { category: "AI tooling", name: "Vercel AI SDK, LangGraph, Anthropic SDK, LlamaIndex" },
  { category: "Retrieval", name: "Pinecone, pgvector, Weaviate" },
  { category: "Web", name: "Next.js, React, TypeScript" },
  { category: "Backend", name: "Node, Python, Go, FastAPI" },
  { category: "Mobile", name: "React Native, Flutter, Swift" },
  { category: "Data", name: "Postgres, dbt, Snowflake" },
  { category: "Cloud", name: "AWS, GCP, Vercel, Cloudflare" },
  { category: "Design & ops", name: "Figma, Linear, Notion" },
];
