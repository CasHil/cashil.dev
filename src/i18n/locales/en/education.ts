import { EducationTranslations } from "../../types";

export const enEducation: EducationTranslations = {
  title: "Education & Research",
  intro:
    "Academic foundation from Delft University of Technology and KTH Royal Institute of Technology, combining computer science with science education and pedagogical training.",
  thesisTitle: "Academic Degrees",
  publication: {
    badge: "Master's Thesis Publication · TU Delft 2024",
    title: "Debugging the Divide: Learner Motivations & Engagement in CS MOOCs",
    subtitle: "Empirical clickstream log analysis across 14 online course runs",
    datasetStat: "175,000",
    datasetLabel: "Course Enrollments",
    runsStat: "14",
    runsLabel: "Course Runs",
    gapStat: "+16.7%",
    gapLabel: "Career Transition Intent",
    abstract:
      "Investigated learner engagement patterns across 14 Open edX computer science course runs. Analyzed student interaction logs and survey responses in Python, identifying behavioral clusters and showing that female learners enrolled with higher career-transition motivation (+16.7%) compared to male peers.",
    methods: ["Python", "Clickstream Analysis", "Behavioral Modeling", "Survey Analysis"],
    repositoryLink: "https://repository.tudelft.nl/islandora/object/uuid%3A021fa315-bb8a-4db3-97ea-e8a0fa2c1a5b",
    repositoryText: "Read published thesis in TU Delft Repository",
  },
  items: [
    {
      title: "Delft University of Technology",
      subtitle: "MSc Computer Science",
      startDate: "Sep 2021",
      endDate: "Jan 2025",
      text: "**Focus**: Distributed systems, software architecture, algorithms, and empirical analysis.\n**Master's Thesis**: Debugging the Divide: Exploring Men's and Women's Motivations and Engagement in Computer Science MOOCs.",
      skills: ["Software Architecture", "Distributed Systems", "Algorithms", "Python"],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
    {
      title: "Delft University of Technology",
      subtitle: "MSc Science Education & Communication — Computer Science",
      startDate: "Sep 2021",
      endDate: "Jan 2025",
      text: "**First-Degree Qualification**: Formal Dutch first-degree (eerstegraads) teaching credential in Computer Science for all educational levels.\n**Pedagogy & Didactics**: Training in curriculum design, cognitive load theory, instructional clarity, and technical communication.",
      skills: ["Computer Science Pedagogy", "Cognitive Load Theory", "Technical Communication", "Curriculum Design"],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
    {
      title: "KTH Royal Institute of Technology",
      subtitle: "Exchange Studies — Computer Science",
      startDate: "Aug 2022",
      endDate: "Jan 2023",
      text: "**Studies**: Completed coursework in Human-Computer Interaction, Information Visualization, and UX Design in Stockholm, Sweden.",
      skills: ["Human-Computer Interaction", "Information Visualization", "UX Design"],
      image: {
        uri: "kth.webp",
        alt: "KTH logo",
      },
    },
    {
      title: "Delft University of Technology",
      subtitle: "BSc Computer Science & Engineering",
      startDate: "Sep 2018",
      endDate: "Jul 2021",
      text: "**Foundations**: Solid grounding in data structures, algorithms, operating systems, networking, computability, and software testing.\n**Curriculum Governance**: Elected student representative on the BSc Computer Science & Engineering Board of Studies.",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Networking", "Software Engineering"],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
  ],
};
