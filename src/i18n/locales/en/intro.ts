import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  kicker: "Software Engineer & Educator",
  heroTitle:
    "Software engineer at Tikkie Business and computer science educator.",
  bioParagraph1:
    "At Tikkie Business (ABN AMRO via Harvest), I develop customer-facing web applications in TypeScript and React, alongside backend services on AWS for merchant onboarding and payout workflows.",
  bioParagraph2:
    "Holding double Master's degrees in Computer Science and Science Education from Delft University of Technology, I value simplicity, clear interfaces, and software that remains maintainable as teams grow.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Explore Work Experience",
  featuredHeading: "Featured Work",
  featuredSubtitle:
    "Selected production and educational projects.",

  // Tikkie Business Flagship
  tikkieTag: "Feb 2025 – Present",
  tikkieTitle: "Tikkie Business",
  tikkieSubtitle: "Software Engineer · ABN AMRO (via Harvest)",
  tikkieDescription:
    "Developing merchant-facing web applications and cloud backend services supporting Dutch businesses with payment requests and financial operations.",
  tikkiePoints: [
    "Developing customer-facing web applications in TypeScript and React for payment requests, transaction management, and business operations.",
    "Building backend onboarding workflows and services on AWS to automate business client verification and activation.",
    "Supporting payout processing pipelines to ensure merchant settlements flow accurately and on schedule.",
  ],
  tikkieStack: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Onboarding", "Payouts"],
  tikkieLink: "View in Work Timeline",

  // Bitsized Flagship
  bitsizedTag: "Jan 2023 – Feb 2025",
  bitsizedTitle: "Bitsized",
  bitsizedSubtitle: "Co-Founder & Frontend Engineer",
  bitsizedDescription:
    "Co-founded an educational platform for Dutch secondary schools to make programming accessible in the classroom without local installation hurdles.",
  bitsizedPoints: [
    "Collaborated directly with computer science teachers in Dutch secondary schools to understand classroom workflows and assignment needs.",
    "Built an accessible web application in React enabling students to complete programming assignments directly in the browser with zero local setup.",
    "Designed straightforward assignment distribution and friendly error feedback to keep students engaged without cryptic error messages.",
  ],
  bitsizedStack: ["TypeScript", "React", "Node.js", "Classroom Tooling", "Web Development"],
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
