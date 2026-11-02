import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  kicker: "Software Engineer, Amsterdam",
  heroTitle: "Software engineer at Tikkie Business with a background in education. I keep systems simple, build clean user interfaces, and support merchant onboarding and payouts on AWS.",
  bioParagraph1:
    "At Tikkie Business (ABN AMRO), my focus started in frontend engineering with TypeScript and React. Over time, I took on a variety of backend and AWS tasks—especially around onboarding new business clients, handling payouts, and operating the business portal.",
  bioParagraph2:
    "With a double Master's in Computer Science and Science Education from TU Delft, I value clear communication over unnecessary complexity. Whether discussing requirements with users or writing software, I aim to keep things understandable and dependable.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Explore Work Experience",
  featuredHeading: "Featured Work",
  featuredSubtitle: "Production systems at Tikkie Business and classroom software at Bitsized.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO (2025 – Present)",
  tikkieTitle: "Tikkie Business",
  tikkieSubtitle: "Merchant Web Portal, Onboarding & Payouts",
  tikkieDescription:
    "Engineering the business portal used by Dutch enterprises. I build responsive merchant interfaces and handle backend services on AWS for client onboarding and automated payout workflows.",
  tikkieWorkflowsTitle: "Key Operational Responsibilities",
  tikkieWorkflows: [
    {
      id: "onboarding",
      badge: "01",
      title: "Client Onboarding",
      description: "Verifying company information and automating merchant account setup with AWS services.",
      details: [
        "KVK and business identity validation",
        "Automated account provisioning on AWS",
        "Direct onboarding status visibility in the portal",
      ],
    },
    {
      id: "payouts",
      badge: "02",
      title: "Payouts & Settlements",
      description: "Ensuring merchant transactions are settled accurately and payouts are dispatched on schedule.",
      details: [
        "Batch settlement validation",
        "Transaction status synchronization",
        "Clear payout history and balance insights",
      ],
    },
    {
      id: "portal",
      badge: "03",
      title: "Portal Operations & Frontend",
      description: "Maintaining and evolving the merchant web application in TypeScript and React with high reliability.",
      details: [
        "Accessible React and TypeScript interfaces",
        "Real-time payment link management",
        "Proactive error handling and system monitoring",
      ],
    },
  ],
  tikkieLink: "View in Work Timeline",

  // Bitsized Flagship
  bitsizedTag: "Startup Co-Founder (2023 – 2025)",
  bitsizedTitle: "Bitsized",
  bitsizedSubtitle: "Interactive Coding Platform for Dutch High Schools",
  bitsizedDescription:
    "Co-founded an educational platform to make computer science accessible in Dutch secondary schools. My primary focus was talking to teachers to identify classroom needs and building a clean, simple frontend that eliminated setup friction.",
  bitsizedPerspectivesTitle: "Designing for the Classroom",
  bitsizedPerspectives: [
    {
      id: "teacher",
      role: "For Teachers",
      title: "Less Admin, Clear Classroom Overview",
      description:
        "Teachers needed a way to assign exercises and instantly see where students were getting stuck, without dealing with local compiler setups on school laptops.",
      points: [
        "Direct assignment distribution across cohorts",
        "Live progress dashboard during practical lessons",
        "Runs directly in the browser on school Chromebooks",
      ],
    },
    {
      id: "student",
      role: "For Students",
      title: "Immediate Guidance in Plain Language",
      description:
        "Students needed an approachable code editor that gave them friendly, understandable feedback instead of cryptic compiler error messages.",
      points: [
        "Clean, distraction-free editing environment",
        "Helpful step-by-step guidance in plain language",
        "Instant exercise verification with visible test results",
      ],
    },
  ],
  bitsizedLink: "View in Work Timeline",

  // Engineering Ethos
  ethosTag: "Engineering Approach",
  ethosTitle: "How I Approach Software",
  ethosSubtitle: "Practical priorities shaped by software development and formal teaching",
  ethosDescription:
    "Software is built for people. I focus on simplicity, maintainability, and clear communication across the entire development process.",
  ethosPillars: [
    {
      title: "Keep Systems Simple",
      description:
        "Avoiding unnecessary complexity and jargon. Simple code is easier to review, test, maintain, and hand off.",
    },
    {
      title: "Listen to Real Users",
      description:
        "Whether collaborating with teachers in a classroom or merchants running a business, good engineering starts by understanding actual human needs.",
    },
    {
      title: "Didactic Clarity",
      description:
        "Applying formal teaching experience to write clear documentation, give constructive pull request reviews, and make complex technical decisions accessible.",
    },
  ],
  outsideTitle: "Outside of Engineering",
  outsideDescription:
    "Away from the codebase, I play electric bass guitar and chess.",
};
