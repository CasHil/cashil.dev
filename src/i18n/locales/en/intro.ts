import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  heroTitle:
    "Software engineer at Tikkie, with master's degrees in computer science and in teaching it.",
  heroFacts: "Full-stack in TypeScript, React, Node.js and AWS. Amsterdam. Dutch and English.",
  story: [
    "I build **Tikkie Business**, the part of Tikkie that companies use to send payment requests and get paid. I joined in March 2026 through Harvest, a programme that places engineers at companies and trains them alongside the job.",
    "The day after I finished my studies, a secondary school emailed me. Its students had gone **months without a computer science teacher**. I took the job and taught about 200 students at two schools until the summer.",
    "I still teach. At Tikkie I train colleagues in **working with AI**.",
    "Outside work I play bass guitar and chess.",
  ],
  emailCta: "Email me",
  cvCta: "Download CV (PDF)",

  workHeading: "Selected work",
  work: [
    {
      title: "Tikkie Business (ABN AMRO)",
      role: "Software engineer, via the Harvest talent programme",
      period: "Mar 2026 to now",
      paragraphs: [
        "I work on both the React screens companies use and the Node.js services on AWS behind them.",
      ],
      stack: ["TypeScript", "React", "Node.js", "AWS"],
    },
    {
      title: "Bitsized",
      role: "Co-founder",
      period: "Jan 2023 to Feb 2025",
      paragraphs: [
        "A web platform for computer science classes at Dutch secondary schools. Students **wrote and ran code in the browser**, so nothing had to be installed. I built the frontend in Vue.js on Meteor and designed it with the teachers who used it.",
      ],
      stack: ["Vue.js", "Meteor", "Node.js", "MongoDB"],
    },
  ],
  workLink: "Full work experience",
};
