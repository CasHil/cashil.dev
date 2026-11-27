import { CvTranslations } from "../../types";

export const enCv: CvTranslations = {
  title: "CV",
  subtitle: "One page, in English or Dutch. The web version below has the same content.",
  openPdf: "Open PDF",
  downloadPdf: "Download PDF",
  pdfLanguageLabel: "CV document language",
  englishPdf: "English (EN)",
  dutchPdf: "Dutch (NL)",
  profileHeading: "Profile",
  profile:
    "Full-stack software engineer at Tikkie Business (ABN AMRO), working in TypeScript, React, Node.js and AWS. I hold two master's degrees from TU Delft, in computer science and in science education, and taught computer science at two secondary schools for a year.",
  experienceHeading: "Experience",
  educationHeading: "Education",
  skillsHeading: "Skills",
  skills: [
    { category: "Languages", items: "TypeScript, JavaScript, Python, SQL, C#, HTML and CSS" },
    { category: "Frontend", items: "React, Vue.js, Vite, Tailwind CSS" },
    { category: "Backend and cloud", items: "Node.js, Meteor, AWS (Lambda, DynamoDB, S3), REST APIs, Docker" },
    { category: "Data", items: "PostgreSQL, MySQL, SQL Server, MongoDB" },
    { category: "Practices", items: "Git, GitHub Actions, CI/CD, unit testing with Vitest and Jest" },
  ],
};
