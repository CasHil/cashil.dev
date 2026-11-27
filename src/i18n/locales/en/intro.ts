import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  heroTitle:
    "Software engineer at **Tikkie**, with master's degrees in computer science and in teaching it.",
  heroFacts: "Full-stack in TypeScript, React, Node.js and AWS. Amsterdam. Dutch and English.",
  story: [
    "At Tikkie Business, part of ABN AMRO, I build the software companies use to **send payment requests and get paid**. I joined in March 2026 through Harvest, a programme that places engineers at companies and trains them alongside the job.",
    "The day after I finished my studies, a secondary school emailed me. Its students had gone **months without a computer science teacher**. I took the job and taught about 200 students at two schools until the summer.",
    "At Tikkie I wrote a glossary that explains our internal terms to new colleagues. I also organised an **AI hackathon** and give workshops on coding agents.",
    "Outside work I play bass guitar and chess.",
  ],
  emailCta: "Email me",
  cvCta: "Download CV (PDF)",

  workHeading: "Selected work",
  work: [
    {
      title: "Tikkie Business",
      role: "Software engineer, via the Harvest talent programme",
      period: "Mar 2026 to now",
      paragraphs: [
        "I build the **merchant portal** and the AWS services that verify a new business and activate its account. I also work on payouts and reconciliation, and lead my first larger project.",
      ],
      stack: ["TypeScript", "React", "Node.js", "AWS (Lambda, DynamoDB, S3)", "PostgreSQL"],
    },
    {
      title: "Bitsized",
      role: "Co-founder and lead frontend engineer",
      period: "Jan 2023 to Feb 2025",
      paragraphs: [
        "A web platform for computer science classes at Dutch secondary schools. Students **wrote and ran code in the browser**, so nothing had to be installed. I built the frontend in Vue.js on Meteor, together with the teachers who used it.",
      ],
      stack: ["Vue.js", "Meteor", "Node.js", "MongoDB"],
    },
  ],
  workLink: "Full work experience",
};
