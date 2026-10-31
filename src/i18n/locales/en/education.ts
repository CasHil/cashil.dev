import { EducationTranslations } from "../../types";

export const enEducation: EducationTranslations = {
  title: "Education & Research",
  intro:
    "Formal academic foundation from Delft University of Technology and KTH Royal Institute of Technology, combining computer science with didactic communication methodology.",
  thesisTitle: "Academic Credentials",
  publication: {
    badge: "Master's Thesis Research · TU Delft 2024",
    title: "Debugging the Divide: Learner Motivations & Engagement in CS MOOCs",
    subtitle: "Empirical clickstream telemetry analysis across 174,988 enrolled learners in Python and Pandas",
    datasetStat: "174,988",
    datasetLabel: "Enrolled Learners",
    runsStat: "14",
    runsLabel: "Course Runs",
    gapStat: "+16.7%",
    gapLabel: "Career Transition Gap",
    abstract:
      "Conducted large-scale behavioral data science evaluating clickstream telemetry and survey responses across 14 Open edX MOOC runs. Identified distinct behavioral clusters (samplers, auditors, completers) and discovered that female learners entered online computer science courses with significantly higher career-transition intent (+16.7%, p < 0.001) compared to male peers.",
    methods: ["Python", "Pandas", "K-Means Clustering", "Clickstream Telemetry", "Logistic Regression"],
    repositoryLink: "https://repository.tudelft.nl/islandora/object/uuid%3A021fa315-bb8a-4db3-97ea-e8a0fa2c1a5b",
    repositoryText: "Read published thesis in TU Delft Repository",
  },
  items: [
    {
      title: "Delft University of Technology",
      subtitle: "MSc Computer Science — Data Science Track",
      startDate: "Sep 2021",
      endDate: "May 2024",
      text: "**Focus**: Advanced algorithms, distributed data processing, applied machine learning, and quantitative telemetry analysis.\n**Master's Thesis**: Debugging the Divide: Exploring Men's and Women's Motivations and Engagement in Computer Science MOOCs.",
      skills: ["Data Science", "Python", "Algorithms", "Machine Learning", "Distributed Systems"],
      image: {
        uri: "tudelft.svg",
        alt: "TU Delft logo",
      },
    },
    {
      title: "Delft University of Technology",
      subtitle: "MSc Science Education & Communication — Computer Science",
      startDate: "Sep 2021",
      endDate: "May 2024",
      text: "**First-Degree Qualification**: Awarded formal Dutch first-degree teaching qualification (Eerste Graads) in Computer Science, authorizing instruction at all secondary and tertiary levels.\n**Pedagogy & Didactics**: Rigorous training in educational curriculum design, diagnostic assessment, cognitive load theory, and technical communication.",
      skills: ["Computer Science Didactics", "Cognitive Load Theory", "Technical Communication", "Curriculum Design"],
      image: {
        uri: "tudelft.svg",
        alt: "TU Delft logo",
      },
    },
    {
      title: "KTH Royal Institute of Technology",
      subtitle: "Exchange Studies — Computer Science",
      startDate: "Aug 2022",
      endDate: "Jan 2023",
      text: "**Studies**: Focused on machine learning algorithms, information visualization, and human-computer interaction in Stockholm, Sweden.",
      skills: ["Machine Learning", "Information Visualization", "HCI"],
      image: {
        uri: "kth.svg",
        alt: "KTH logo",
      },
    },
    {
      title: "Delft University of Technology",
      subtitle: "BSc Computer Science & Engineering",
      startDate: "Sep 2017",
      endDate: "Jul 2021",
      text: "**Foundations**: Solid grounding in data structures, algorithms, operating systems, networking, computability, and software architecture.\n**Leadership**: Elected student representative on the BSc Computer Science & Engineering Board of Studies.",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Networking", "Software Engineering"],
      image: {
        uri: "tudelft.svg",
        alt: "TU Delft logo",
      },
    },
  ],
};
