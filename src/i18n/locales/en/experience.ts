import { WorkExperienceTranslations } from "../../types";

export const enExperience: WorkExperienceTranslations = {
  title: "Work experience",
  intro:
    "I work on payments at Tikkie. During my master's I co-founded a coding platform for schools, and I taught computer science for a school year. Earlier I built software at a consultancy and for a logistics company.",
  to: "to",
  items: [
    {
      title: "Tikkie Business (ABN AMRO)",
      subtitle: "Software engineer, via the Harvest talent programme",
      startDate: "Feb 2025",
      endDate: "now",
      current: true,
      text: "I build the merchant portal in TypeScript and React: payment requests, transaction overviews and account settings.\nI build the AWS services that verify a new business and activate its account.\nI work on the payout pipeline and the reconciliation that checks merchants are paid the right amount on time.\nI lead my first larger project in the team.\nI organised an AI hackathon for all of Tikkie and give workshops on working with coding agents.",
      skills: ["TypeScript", "React", "Node.js", "AWS (Lambda, DynamoDB, S3)", "PostgreSQL", "Vitest"],
      image: {
        uri: "tikkie.svg",
        alt: "Tikkie logo",
      },
    },
    {
      title: "CSG De Lage Waard and Stanislascollege",
      subtitle: "Computer science teacher",
      startDate: "Aug 2024",
      endDate: "Jul 2025",
      text: "I taught about 200 students in ten classes: algorithms, digital logic, computer architecture and web development.\nI supervised final-year projects and designed the programme of tests and examinations (PTA).",
      skills: [],
    },
    {
      title: "Bitsized",
      subtitle: "Co-founder and lead frontend engineer",
      startDate: "Jan 2023",
      endDate: "Feb 2025",
      text: "I co-founded a web platform where secondary-school students write and run code in the browser, with nothing to install.\nI built the frontend in Vue.js on Meteor.\nI worked with computer science teachers on how assignments are handed out, how progress is tracked and how errors are explained to beginners.",
      skills: ["Vue.js", "Meteor", "JavaScript", "Node.js", "MongoDB"],
      image: {
        uri: "bitsized.webp",
        alt: "Bitsized logo",
      },
    },
    {
      title: "Netcompany",
      subtitle: "Software analyst and consultant",
      startDate: "Sep 2021",
      endDate: "Jun 2022",
      text: "I developed and maintained applications for two Dutch education funds, Vervangingsfonds and Participatiefonds.\nI built a web tool that assesses how sustainable a residential or commercial building is under Dutch regulations.",
      skills: ["C#", ".NET", "SQL Server", "JavaScript"],
      image: {
        uri: "netcompany.webp",
        alt: "Netcompany logo",
      },
    },
    {
      title: "Bexter",
      subtitle: "Software developer",
      startDate: "Sep 2019",
      endDate: "May 2021",
      text: "I built REST APIs and background services for TrackOnline, a platform that tracks reusable transport packaging through supply chains.\nI maintained and modernised the customer-facing web interface in TypeScript.",
      skills: ["TypeScript", "JavaScript", "REST APIs", "SQL"],
      image: {
        uri: "bexter.webp",
        alt: "Bexter logo",
      },
    },
  ],
};
