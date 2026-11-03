import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  kicker: "Software Engineer & Educator",
  heroTitle:
    "Software engineer at Tikkie Business and computer science educator.",
  bioParagraph1:
    "At Tikkie Business (ABN AMRO via Harvest), I engineer customer-facing web applications in TypeScript and React, alongside backend services on AWS for merchant onboarding, KYC verification, and automated payout settlements.",
  bioParagraph2:
    "Holding double Master's degrees in Computer Science and Science Education from Delft University of Technology, I treat didactic clarity as an engineering standard: clear API contracts, high-signal documentation, and software that remains maintainable as teams grow.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Explore Work Experience",
  featuredHeading: "Featured Engineering",
  featuredSubtitle:
    "Production systems at Tikkie Business and in-browser sandboxing at Bitsized.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO (2025 – Present)",
  tikkieTitle: "Tikkie Business",
  tikkieSubtitle: "Merchant Portal, Onboarding Architecture & Payouts",
  tikkieDescription:
    "Engineering core business systems for Dutch enterprises. I develop high-throughput merchant interfaces and backend workflows on AWS for automated client onboarding, business validation, and daily payout settlements.",
  tikkieWorkflowsTitle: "Core Architectural Domains",
  tikkieWorkflows: [
    {
      id: "onboarding",
      badge: "Onboarding",
      title: "Merchant Onboarding Pipeline",
      description:
        "Automating business validation, KvK registration checks, and KYC verification before provisioning merchant accounts on AWS.",
      details: [
        "Chamber of Commerce (KvK) business identity validation",
        "Automated merchant provisioning and credential generation on AWS",
        "Deterministic onboarding state tracking and audit logging",
      ],
    },
    {
      id: "payouts",
      badge: "Payouts",
      title: "Payout & Settlement Engine",
      description:
        "Orchestrating daily batch settlements and transaction reconciliations to ensure merchant balances are disbursed accurately.",
      details: [
        "Batch transaction validation and balance reconciliation",
        "Event-driven payment status updates across distributed services",
        "Audit-ready payout history and reporting records",
      ],
    },
    {
      id: "portal",
      badge: "Portal",
      title: "Merchant Web Portal",
      description:
        "Building and operating the primary business dashboard in TypeScript and React with high accessibility and test coverage.",
      details: [
        "Responsive React interfaces for payment links and transaction records",
        "Comprehensive automated test coverage with Vitest and integration tests",
        "Accessible, high-performance UI components adhering to WCAG standards",
      ],
    },
  ],
  tikkieLink: "View in Work Timeline",

  // Bitsized Flagship
  bitsizedTag: "Co-Founder & Lead Frontend (2023 – 2025)",
  bitsizedTitle: "Bitsized Sandbox Platform",
  bitsizedSubtitle: "In-Browser Code Execution & Classroom Didactics",
  bitsizedDescription:
    "Co-founded and engineered an educational coding platform for Dutch secondary schools. Built client-side code execution sandboxes, live progress telemetry for teachers, and AST-based diagnostics that eliminate setup friction.",
  bitsizedPerspectivesTitle: "Runtime & Didactic Architecture",
  bitsizedPerspectives: [
    {
      id: "sandbox",
      role: "Runtime Architecture",
      title: "Isolated Web Worker Execution",
      description:
        "Executing untrusted student code client-side without remote compiler infrastructure, protecting the browser thread with timeouts and memory bounds.",
      points: [
        "Web Worker execution thread completely isolated from the main DOM",
        "Configurable execution watchdogs that terminate runaway loops safely",
        "Zero server runtime costs and instant execution on school Chromebooks",
      ],
    },
    {
      id: "diagnostics",
      role: "Didactic Diagnostics",
      title: "AST-Driven Feedback in Plain Language",
      description:
        "Parsing student Python code into an Abstract Syntax Tree to identify semantic misunderstandings and output actionable, friendly guidance.",
      points: [
        "Client-side AST inspection for targeted error diagnostics",
        "Constructive error explanations replacing cryptic interpreter tracebacks",
        "Real-time cohort progress visibility for teachers during practical lessons",
      ],
    },
  ],
  bitsizedLink: "View in Work Timeline",

  // Engineering Ethos
  ethosTag: "Engineering Principles",
  ethosTitle: "How I Approach Software",
  ethosSubtitle:
    "Engineering principles shaped by production systems and pedagogical practice",
  ethosDescription:
    "Reliable software requires both technical rigor and clear human communication. I design for simplicity, durability, and team velocity.",
  ethosPillars: [
    {
      title: "Systems Simplicity",
      description:
        "Eliminating accidental complexity and unnecessary dependencies. Clean interfaces, deterministic states, and predictable data flows make systems easier to test, debug, and maintain.",
    },
    {
      title: "Production Rigor",
      description:
        "Backing implementations with strict TypeScript types, automated Vitest suites, and structured error handling. Systems should fail explicitly and safely.",
    },
    {
      title: "Didactic Clarity",
      description:
        "Applying formal teaching experience to write precise technical documentation, conduct high-signal code reviews, and keep architecture transparent across the team.",
    },
  ],
  outsideTitle: "Outside of Engineering",
  outsideDescription:
    "Outside of software engineering, I play electric bass guitar and play chess.",
};
