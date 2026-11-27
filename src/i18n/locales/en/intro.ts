import { IntroTranslations } from "../../types";

export const enIntro: IntroTranslations = {
  heroTitle:
    "Software engineer at Tikkie, with master's degrees in computer science and in teaching it.",
  heroFacts:
    "Full-stack in TypeScript, React, Node.js and AWS. Based in Amsterdam. I work in Dutch and English.",
  story: [
    "At Tikkie Business, part of ABN AMRO, I build the software companies use to send payment requests and get paid. I joined in February 2025 through Harvest, a programme that places engineers at companies such as ABN AMRO and trains them alongside the job. I now lead my first larger project in the team.",
    "Right after I finished my thesis at TU Delft in 2024, a secondary school emailed me. Its students had gone months without a computer science teacher. I took the job and, across two schools, taught about 200 students in ten classes that school year. During my master's I had co-founded Bitsized, where students wrote and ran code in the browser so that a lesson could start without installing anything.",
    "Teaching changed how I write software. I write code and documentation for the person who has to understand them next. At Tikkie it also got me organising: an AI hackathon for all of Tikkie, and workshops on working with coding agents.",
    "Outside work I play bass guitar and chess.",
  ],
  emailCta: "Email me",
  cvCta: "Download CV (PDF)",

  workHeading: "Selected work",
  work: [
    {
      title: "Tikkie Business",
      role: "Software engineer at ABN AMRO, via Harvest",
      period: "Feb 2025 to now",
      paragraphs: [
        "Tikkie Business lets companies send payment requests to their customers by WhatsApp, email or QR code. I build the merchant portal in TypeScript and React, and the AWS services that verify a new business and activate its account. I also work on the pipeline that pays merchants out.",
        "Next to feature work I brought our technical debt to the team retrospective with a plan to reduce it. We have started handing simple, repetitive tasks to AI agents.",
      ],
      stack: [
        "TypeScript",
        "React",
        "Node.js",
        "AWS (Lambda, DynamoDB, S3)",
        "PostgreSQL",
        "Vitest",
      ],
    },
    {
      title: "Bitsized",
      role: "Co-founder and lead frontend engineer",
      period: "Jan 2023 to Feb 2025",
      paragraphs: [
        "Bitsized was a web platform for computer science classes at Dutch secondary schools. Students wrote and ran code in the browser, so nothing had to be installed on school computers.",
        "I built the frontend in Vue.js on Meteor. With the teachers who used it I worked out how assignments were handed out, and how to word an error message so a beginner could act on it.",
      ],
      stack: ["Vue.js", "Meteor", "JavaScript", "Node.js", "MongoDB"],
    },
  ],
  workLink: "Full work experience",
};
