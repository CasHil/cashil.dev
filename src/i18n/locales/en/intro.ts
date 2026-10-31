import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  kicker: "Full-Stack Software Engineer · Amsterdam, NL",
  heroTitle: "Building resilient payment services and web platforms at Tikkie.",
  bioParagraph1:
    "Full-stack software engineer at Tikkie (ABN AMRO), architecting idempotent payment APIs, partner webhooks, and merchant management portals supporting thousands of enterprises across the Netherlands.",
  bioParagraph2:
    "Holder of a Double Master's from Delft University of Technology in Computer Science and Science Education. Combining distributed systems engineering with rigorous pedagogical principles to design intuitive developer interfaces, rock-solid API contracts, and high-velocity engineering workflows.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Selected Systems",
  featuredHeading: "Featured Engineering",
  featuredSubtitle: "Production payment systems, in-browser execution sandboxes, and engineering architecture.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO · 2026 – Present",
  tikkieTitle: "Tikkie Business Payment Services",
  tikkieSubtitle: "Merchant payment infrastructure, idempotent settlement, and reporting portals",
  tikkieDescription:
    "Engineered core merchant payment endpoints and real-time business web portals for Tikkie Business. Built end-to-end payment settlement workflows, webhook dispatch systems, and automated reconciliation pipelines handling enterprise financial transactions.",
  tikkiePipelineTitle: "Merchant Payment & Settlement Pipeline",
  tikkiePipelineSubtitle: "End-to-end transaction lifecycle ensuring strict idempotency and zero duplicate charges",
  tikkiePipelineStages: [
    {
      id: "ingestion",
      stage: "01",
      title: "Merchant API",
      subtitle: "Ingestion Tier",
      description: "Cryptographic signature validation, schema enforcement, and rate-limiting at the edge gateway.",
    },
    {
      id: "idempotency",
      stage: "02",
      title: "Idempotency Guard",
      subtitle: "Deduplication",
      description: "Atomic Redis and database lock validation guaranteeing zero duplicate financial authorizations.",
    },
    {
      id: "settlement",
      stage: "03",
      title: "Settlement Engine",
      subtitle: "Async Worker Tier",
      description: "Event-driven reconciliation workers executing automated bank transfers and partner webhooks.",
    },
    {
      id: "ledger",
      stage: "04",
      title: "ACID Ledger",
      subtitle: "Persistence",
      description: "Immutable double-entry transaction journals stored in PostgreSQL with point-in-time recovery.",
    },
  ],
  tikkieHighlights: [
    "**Idempotency & Reconciliation**: Designed fault-tolerant payment ingestion endpoints preventing duplicate debits across distributed network retries.",
    "**Merchant Reporting**: Built responsive analytics dashboards in React, TypeScript, and AWS serverless infrastructure for enterprise merchant telemetry.",
    "**Partner Integrations**: Implemented automated webhook dispatch mechanisms with exponential backoff and dead-letter queues.",
  ],
  tikkieLink: "View in Work Timeline",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Co-Founder & Lead Engineer · 2023 – 2025",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Isolated browser execution runtime and computer science learning platform",
  bitsizedDescription:
    "Co-founded and engineered an interactive code evaluation platform deployed across Dutch secondary school computer science classrooms. Engineered in-browser code execution sandboxes, automated evaluation suites, and assignment administration tools.",
  bitsizedArchTitle: "Sandboxed In-Browser Execution Architecture",
  bitsizedArchSubtitle: "Deterministic isolation, infinite loop termination, and real-time code evaluation",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolation",
      description: "Student code executes in dedicated, non-blocking Web Worker threads completely separated from the host DOM and main UI thread.",
    },
    {
      title: "Deterministic Watchdogs",
      description: "Execution timers and AST pre-checks terminate runaway while loops and memory spikes before they can freeze the browser.",
    },
    {
      title: "Immediate Evaluation",
      description: "Unit assertion runners compile test suites in under 25ms, delivering real-time syntactic and behavioral feedback to students.",
    },
  ],
  bitsizedHighlights: [
    "**In-Browser Sandboxing**: Architected client-side isolated evaluation runtime using Web Workers, eliminating server-side execution cost and latency.",
    "**Classroom Adoption**: Shipped to Dutch secondary schools, supporting multiple cohorts of students and teachers across daily coursework.",
    "**Full-Stack Platform**: Built real-time progress monitors, assignment management dashboards, and code review workflows in React and Node.js.",
  ],
  bitsizedLink: "View in Work Timeline",

  // Engineering Force Multiplier
  ethosTag: "Engineering Multiplier · TU Delft Double MSc",
  ethosTitle: "The Didactics & Systems Advantage",
  ethosSubtitle: "How computer science pedagogy acts as a force multiplier on software engineering teams",
  ethosDescription:
    "Holding formal degrees in both Computer Science and Science Education provides a distinctive perspective: code is not just machine instructions, but a human communication medium.",
  ethosPillars: [
    {
      title: "API Design as Human Communication",
      description:
        "Every endpoint, interface, and error state is an interaction contract. Applying pedagogical clarity creates self-documenting APIs with low cognitive friction and zero ambiguous edge cases.",
    },
    {
      title: "Strict Type Boundaries & RFCs",
      description:
        "Prioritizing explicit domain boundaries, thorough architectural documentation, and disciplined technical proposals accelerates team alignment and reduces bug surface area.",
    },
    {
      title: "Mentoring & Team Velocity",
      description:
        "Trained in first-degree didactic methodology, accelerating knowledge transfer across junior and mid-level engineers and building team execution momentum.",
    },
  ],
  outsideTitle: "Outside the Codebase",
  outsideDescription:
    "When away from the terminal, I focus on two lifelong pursuits requiring pattern recognition and deliberate practice: Electric Bass Guitar (groove, rhythm, and harmonic precision) and Chess (tactical calculation and deep positional strategy).",
};
