import { EducationTranslations } from "../../types";

export const enEducation: EducationTranslations = {
  title: "Education",
  intro:
    "Two master's degrees from TU Delft, one in computer science and one in teaching it, with a semester at KTH in Stockholm.",
  thesis: {
    title:
      "Debugging the Divide: Exploring Men's and Women's Motivations and Engagement in Computer Science MOOCs",
    meta: "Master's thesis, TU Delft, 2024",
    paragraphs: [
      "I wanted to know why people enrol in online computer science courses and whether that reason predicts how far they get. I combined enrolment surveys with clickstream data from four introductory courses that TU Delft ran between 2015 and 2022, and used k-means clustering to find patterns in how learners engaged.",
      "Women more often enrolled for their career and men more often out of interest. Men were more likely to finish. The reason someone gave for enrolling did not predict how engaged they were.",
    ],
    repositoryLink:
      "https://repository.tudelft.nl/record/uuid:f4aceeec-5947-4578-834c-4bb43288c91a",
    repositoryText: "Read the thesis in the TU Delft repository",
  },
  items: [
    {
      title: "Delft University of Technology",
      subtitle: "MSc Computer Science",
      startDate: "Sep 2021",
      endDate: "Jan 2025",
      text: "Courses in software architecture and distributed systems.\nThesis on motivation and engagement in online computer science courses.",
      skills: [],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
    {
      title: "Delft University of Technology",
      subtitle: "MSc Science Education and Communication, Computer Science track",
      startDate: "Sep 2021",
      endDate: "Jan 2025",
      text: "Includes the Dutch first-degree (eerstegraads) teaching qualification for computer science, valid at every level of secondary education.\nTraining in curriculum design and cognitive load theory.",
      skills: [],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
    {
      title: "KTH Royal Institute of Technology",
      subtitle: "Exchange semester, Computer Science",
      startDate: "Aug 2022",
      endDate: "Jan 2023",
      text: "Courses in human-computer interaction, information visualisation and UX design in Stockholm.",
      skills: [],
      image: {
        uri: "kth.webp",
        alt: "KTH logo",
      },
    },
    {
      title: "Delft University of Technology",
      subtitle: "BSc Computer Science and Engineering",
      startDate: "Sep 2018",
      endDate: "Jul 2021",
      text: "Data structures, algorithms, operating systems and networking.\nStudent representative on the programme's Board of Studies.",
      skills: [],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
  ],
};
