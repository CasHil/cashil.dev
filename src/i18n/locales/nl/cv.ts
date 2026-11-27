import { CvTranslations } from "../../types";

export const nlCv: CvTranslations = {
  title: "Cv",
  subtitle: "Eén pagina, in het Nederlands of Engels. De webversie hieronder heeft dezelfde inhoud.",
  openPdf: "Open pdf",
  downloadPdf: "Download pdf",
  pdfLanguageLabel: "Taal van het cv",
  englishPdf: "Engels (EN)",
  dutchPdf: "Nederlands (NL)",
  profileHeading: "Profiel",
  profile:
    "Full-stack software engineer bij Tikkie Zakelijk (ABN AMRO). Ik werk in TypeScript, React, Node.js en AWS. Ik heb twee masters van de TU Delft (informatica en science education) en gaf een jaar informatica op twee middelbare scholen.",
  experienceHeading: "Werkervaring",
  educationHeading: "Opleiding",
  skillsHeading: "Vaardigheden",
  skills: [
    { category: "Talen", items: "TypeScript, JavaScript, Python, SQL, C#, HTML en CSS" },
    { category: "Frontend", items: "React, Vue.js, Vite, Tailwind CSS" },
    { category: "Backend en cloud", items: "Node.js, Meteor, AWS (Lambda, DynamoDB, S3), REST-API's, Docker" },
    { category: "Data", items: "PostgreSQL, MySQL, SQL Server, MongoDB" },
    { category: "Werkwijze", items: "Git, GitHub Actions, CI/CD, unit tests met Vitest en Jest" },
  ],
};
