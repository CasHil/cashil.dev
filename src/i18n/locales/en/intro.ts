import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  kicker: "Full-Stack & Agentic Software Developer · Amsterdam, NL",
  heroTitle: "Shipping resilient web applications with agentic workflows and high code standards.",
  bioParagraph1:
    "Full-stack software engineer at Tikkie Business (ABN AMRO). I build merchant web applications in TypeScript and React, supported by onboarding backend services on AWS serverless infrastructure.",
  bioParagraph2:
    "Double Master's graduate from TU Delft in Computer Science and Science Education. I prioritize code quality, automated test coverage, and clear technical communication across the engineering cycle.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Explore Work Experience",
  featuredHeading: "Featured Engineering",
  featuredSubtitle: "Production applications at Tikkie Business and client-side execution sandboxes.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO · 2026 – Present",
  tikkieTitle: "Tikkie Business",
  tikkieSubtitle: "Merchant Web Portal & Onboarding Services · ABN AMRO",
  tikkieDescription:
    "Full-stack software engineering for Tikkie Business. Developing the merchant web portal for business transactions and backend verification workflows to automate merchant onboarding on AWS.",
  tikkiePipelineTitle: "Merchant Portal & Onboarding Architecture",
  tikkiePipelineSubtitle: "Architecture across web portal interfaces, onboarding services, and persistence",
  tikkiePipelineStages: [
    {
      id: "onboarding",
      stage: "01",
      title: "Onboarding Flow",
      subtitle: "Verification",
      description: "Business detail validation, registration checks, and automated onboarding workflows.",
    },
    {
      id: "portal",
      stage: "02",
      title: "Merchant Portal",
      subtitle: "Web Application",
      description: "Single-page application in React and TypeScript for payment requests, transactions, and account settings.",
    },
    {
      id: "services",
      stage: "03",
      title: "Backend Services",
      subtitle: "Node.js & AWS",
      description: "Services and REST APIs on AWS serverless infrastructure for merchant operations.",
    },
    {
      id: "data",
      stage: "04",
      title: "Data Layer",
      subtitle: "PostgreSQL",
      description: "Relational data modeling, merchant account state, and transaction tracking in PostgreSQL.",
    },
  ],
  tikkieHighlights: [
    "**Merchant Portal**: Developed responsive web interfaces in React and TypeScript for creating payment requests, monitoring transactions, and managing business accounts.",
    "**Onboarding Backend**: Built onboarding workflows and backend verification services to validate merchant details and configure accounts.",
    "**Code Quality & Testing**: Implemented automated test coverage (Vitest, integration tests) and structured logging across AWS serverless services.",
  ],
  tikkieLink: "View in Work Timeline",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Co-Founder & Lead Engineer · 2023 – 2025",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Isolated browser execution runtime for computer science education",
  bitsizedDescription:
    "Co-founded an interactive code evaluation platform used in Dutch high school computer science classrooms. Built client-side execution sandboxes, automated exercise evaluation, and teacher dashboards.",
  bitsizedArchTitle: "Sandboxed In-Browser Execution Architecture",
  bitsizedArchSubtitle: "Isolated worker execution, script timeouts, and immediate feedback",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolation",
      description: "Student code runs in dedicated Web Worker threads isolated from the DOM and the main UI thread.",
    },
    {
      title: "Execution Watchdogs",
      description: "Execution timers stop runaway loops and unresponsive scripts before they can freeze the browser.",
    },
    {
      title: "Immediate Feedback",
      description: "In-browser assertion test runners provide immediate syntax and test feedback without server compute cost.",
    },
  ],
  bitsizedHighlights: [
    "**In-Browser Sandboxing**: Designed a client-side execution runtime in Web Workers, running untrusted student code safely in the browser.",
    "**Classroom Adoption**: Shipped to Dutch secondary schools, supporting daily coursework and practical programming exercises.",
    "**Full-Stack Platform**: Built real-time progress monitors, assignment management dashboards, and code review workflows in React and Node.js.",
  ],
  bitsizedLink: "View in Work Timeline",

  // Engineering Approach
  ethosTag: "Engineering Approach",
  ethosTitle: "How I Build Software",
  ethosSubtitle: "Core engineering practices across full-stack development, tooling, and team collaboration",
  ethosDescription:
    "A pragmatic focus on reliable production code, modern automated workflows, and clear technical communication.",
  ethosPillars: [
    {
      title: "Reliable Full-Stack Architecture",
      description:
        "Strict type boundaries in TypeScript, deterministic state handling, and automated test coverage across React interfaces and Node.js serverless services.",
    },
    {
      title: "Specification-Driven Workflows",
      description:
        "Using modern AI coding tools to accelerate scaffolding and test generation, backed by rigorous human code review, typing, and CI checks.",
    },
    {
      title: "Pedagogical Clarity & Mentorship",
      description:
        "Applying formal teaching experience to write maintainable code, document architecture clearly, and support team members through actionable code reviews.",
    },
  ],
  outsideTitle: "Outside of Engineering",
  outsideDescription:
    "Away from the codebase, I play electric bass guitar and chess.",
};
