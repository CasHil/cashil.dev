import { EducationTranslations } from "../../types";

export const nlEducation: EducationTranslations = {
  title: "Opleiding & Onderzoek",
  intro:
    "Universitaire basis van de Technische Universiteit Delft en KTH Royal Institute of Technology, een combinatie van computer science met wetenschapsonderwijs en didactische scholing.",
  thesisTitle: "Academische Graden",
  publication: {
    badge: "Masterthesis Publicatie, TU Delft 2024",
    title: "Debugging the Divide: Leerdersmotivaties & Betrokkenheid in CS MOOCs",
    subtitle: "Empirische clickstream-loganalyse over 14 online cursusedities",
    datasetStat: "175.000",
    datasetLabel: "Cursusinschrijvingen",
    runsStat: "14",
    runsLabel: "Cursusedities",
    gapStat: "+16,7%",
    gapLabel: "Loopbaantransitie-intentie",
    abstract:
      "Onderzoek gedaan naar betrokkenheidspatronen over 14 Open edX informaticacursusedities. Interactielogs en enquêtegegevens geanalyseerd in Python, gedragsclusters in kaart gebracht en aangetoond dat vrouwelijke deelnemers vaker startten met het oog op een carrièreswitch (+16,7%) dan mannelijke deelnemers.",
    methods: ["Python", "Clickstream-analyse", "Gedragsmodellering", "Enquête-analyse"],
    repositoryLink: "https://repository.tudelft.nl/islandora/object/uuid%3A021fa315-bb8a-4db3-97ea-e8a0fa2c1a5b",
    repositoryText: "Lees de gepubliceerde thesis in het TU Delft Repository",
  },
  items: [
    {
      title: "Technische Universiteit Delft",
      subtitle: "MSc Computer Science",
      startDate: "sep 2021",
      endDate: "jan 2025",
      text: "**Focus**: Gedistribueerde systemen, softwarearchitectuur, algoritmen en empirische analyse.\n**Masterthesis**: Debugging the Divide: Exploring Men's and Women's Motivations and Engagement in Computer Science MOOCs.",
      skills: ["Softwarearchitectuur", "Gedistribueerde Systemen", "Algoritmen", "Python"],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
    {
      title: "Technische Universiteit Delft",
      subtitle: "MSc Science Education & Communication — Informatica",
      startDate: "sep 2021",
      endDate: "jan 2025",
      text: "**Eerstegraads Bevoegdheid**: Formele Nederlandse eerstegraads onderwijsbevoegdheid behaald in de Informatica voor alle onderwijsniveaus.\n**Didactiek & Onderwijskunde**: Training in curriculumontwerp, cognitieve belastingstheorie, didactische helderheid en technische communicatie.",
      skills: ["Informaticadidactiek", "Cognitieve Belastingstheorie", "Technische Communicatie", "Curriculumontwerp"],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
    {
      title: "KTH Royal Institute of Technology",
      subtitle: "Exchange Studies — Computer Science",
      startDate: "aug 2022",
      endDate: "jan 2023",
      text: "**Studie**: Vakken afgerond in Human-Computer Interaction, Information Visualization en UX Design in Stockholm, Zweden.",
      skills: ["Human-Computer Interaction", "Information Visualization", "UX Design"],
      image: {
        uri: "kth.webp",
        alt: "KTH logo",
      },
    },
    {
      title: "Technische Universiteit Delft",
      subtitle: "BSc Technische Informatica",
      startDate: "sep 2018",
      endDate: "jul 2021",
      text: "**Fundament**: Gedegen basis in datastructuren, algoritmen, besturingssystemen, computernetwerken, berekenbaarheid en software testing.\n**Onderwijsbestuur**: Verkozen studentvertegenwoordiger in de Opleidingscommissie Technische Informatica.",
      skills: ["Datastructuren", "Algoritmen", "Besturingssystemen", "Netwerken", "Software Engineering"],
      image: {
        uri: "tudelft.webp",
        alt: "TU Delft logo",
      },
    },
  ],
};
