import { WorkExperienceTranslations } from "../../types";

export const enExperience: WorkExperienceTranslations = {
  title: "Work experience",
  intro:
    "I work on payments now. Before that I co-founded a classroom coding platform, taught, and worked part-time as a developer during my studies.",
  to: "to",
  items: [
    {
      title: "Tikkie Business (ABN AMRO)",
      subtitle: "Software engineer, via the Harvest talent programme",
      startDate: "Mar 2026",
      endDate: "now",
      current: true,
      text: "I build **Tikkie Business**, which companies use to send payment requests and get paid.\nI train colleagues in working with AI.",
      skills: ["TypeScript", "React", "Node.js", "AWS"],
    },
    {
      title: "CSG De Lage Waard and Stanislascollege",
      subtitle: "Computer science teacher",
      startDate: "Feb 2025",
      endDate: "Jul 2025",
      text: "I taught **about 200 students in ten classes**: algorithms, digital logic, computer architecture and web development.\nI supervised final-year projects and designed the programme of tests and examinations (PTA).",
      skills: [],
    },
    {
      title: "Bitsized",
      subtitle: "Co-founder",
      startDate: "Jan 2023",
      endDate: "Feb 2025",
      text: "I co-founded a web platform where secondary-school students **wrote and ran code in the browser**.\nI built the frontend in Vue.js on Meteor.\nI designed with teachers how assignments were handed out and how errors were explained to beginners.",
      skills: ["Vue.js", "Meteor", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "Netcompany",
      subtitle: "Software analyst and consultant, part-time (about two days a week)",
      startDate: "Sep 2021",
      endDate: "Jun 2022",
      text: "I developed applications for two Dutch education funds, Vervangingsfonds and Participatiefonds.\nI built a web tool that assesses how sustainable a building is under Dutch regulations.",
      skills: ["C#", ".NET", "SQL Server", "JavaScript"],
    },
    {
      title: "Bexter",
      subtitle: "Software developer, part-time (about two days a week)",
      startDate: "Sep 2019",
      endDate: "May 2021",
      text: "I built REST APIs and background services for TrackOnline, which tracks reusable transport packaging through supply chains.\nI maintained and modernised the customer web interface in TypeScript.",
      skills: ["TypeScript", "JavaScript", "REST APIs", "SQL"],
    },
  ],
};
