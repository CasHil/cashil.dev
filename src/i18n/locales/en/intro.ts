import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  kicker: "Full-Stack Software Engineer · Amsterdam, NL",
  heroTitle: "Building the business portal and onboarding backend at Tikkie Business.",
  bioParagraph1:
    "Full-stack software engineer at Tikkie Business (ABN AMRO). I build the merchant web portal and underlying backend systems, including onboarding workflows and business services.",
  bioParagraph2:
    "Double Master's graduate from TU Delft in Computer Science and Science Education. Previously co-founded Bitsized, building an in-browser code execution sandbox used in Dutch schools, and analyzed telemetry from 175,000 learners for research.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Explore Work Experience",
  featuredHeading: "Featured Engineering",
  featuredSubtitle: "Production web applications, onboarding backend systems, and browser sandboxes.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO · 2026 – Present",
  tikkieTitle: "Tikkie Business",
  tikkieSubtitle: "Merchant Portal & Onboarding Systems · ABN AMRO",
  tikkieDescription:
    "Full-stack software engineering for Tikkie Business across customer-facing web applications and cloud services. Developing seamless merchant onboarding workflows, portal interfaces for business transactions, and resilient backend services on AWS.",
  tikkiePipelineTitle: "Merchant Portal & Onboarding Architecture",
  tikkiePipelineSubtitle: "Full-stack architecture from business registration to portal management",
  tikkiePipelineStages: [
    {
      id: "onboarding",
      stage: "01",
      title: "Onboarding Flow",
      subtitle: "Registration",
      description: "Automated business registration, merchant detail verification, and qualification workflows.",
    },
    {
      id: "portal",
      stage: "02",
      title: "Merchant Portal",
      subtitle: "Web Application",
      description: "Single-page application in React and TypeScript for payment requests, transaction views, and settings.",
    },
    {
      id: "services",
      stage: "03",
      title: "Backend Services",
      subtitle: "API & Services",
      description: "Node.js services and APIs running on AWS serverless infrastructure for merchant operations.",
    },
    {
      id: "data",
      stage: "04",
      title: "Data Layer",
      subtitle: "Persistence",
      description: "Relational data modeling, merchant account provisioning, and transaction state in PostgreSQL.",
    },
  ],
  tikkieHighlights: [
    "**Business Portal**: Developed merchant-facing interfaces in React and TypeScript for payment link creation, transaction monitoring, and account management.",
    "**Onboarding Backend**: Built onboarding workflows and backend verification services to automate merchant qualification and account setup.",
    "**Cloud Services**: Implemented backend services on AWS serverless infrastructure with PostgreSQL, automated tests, and structured logging.",
  ],
  tikkieLink: "View in Work Timeline",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Co-Founder & Lead Engineer · 2023 – 2025",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Isolated browser execution runtime and computer science learning platform",
  bitsizedDescription:
    "Co-founded and engineered an interactive code evaluation platform deployed across Dutch secondary school computer science classrooms. Engineered in-browser code execution sandboxes, automated evaluation suites, and assignment administration tools.",
  bitsizedArchTitle: "Sandboxed In-Browser Execution Architecture",
  bitsizedArchSubtitle: "Deterministic runtime isolation, infinite loop termination, and immediate evaluation",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolation",
      description: "Student code executes in dedicated, non-blocking Web Worker threads completely separated from the host DOM and main UI thread.",
    },
    {
      title: "Execution Watchdogs",
      description: "Configurable execution timers terminate runaway while loops and unresponsive scripts before they can block the browser.",
    },
    {
      title: "Immediate Feedback",
      description: "In-browser assertion test runners deliver real-time syntactic and behavioral feedback without server-side latency.",
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
