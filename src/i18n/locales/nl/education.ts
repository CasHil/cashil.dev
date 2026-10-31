import { EducationTranslations } from "../../types";

export const nlEducation: EducationTranslations = {
  title: "Opleiding & Onderzoek",
  intro:
    "Universitaire academische basis van de Technische Universiteit Delft en KTH Royal Institute of Technology, een combinatie van computer science en didactische communicatiemethodiek.",
  thesisTitle: "Academische Titels & Graden",
  publication: {
    badge: "Masterthesis Onderzoek · TU Delft 2024",
    title: "Debugging the Divide: Leerdersmotivaties & Betrokkenheid in CS MOOCs",
    subtitle: "Empirische clickstream-telemetrieanalyse over 174.988 geregistreerde studenten in Python en Pandas",
    datasetStat: "174.988",
    datasetLabel: "Geregistreerde Deelnemers",
    runsStat: "14",
    runsLabel: "Cursusedities",
    gapStat: "+16,7%",
    gapLabel: "Loopbaantransitiekloof",
    abstract:
      "Grootschalige data-analyse uitgevoerd op basis van clickstream-telemetrie en enquêtegegevens over 14 edities van Open edX-cursussen. Onderscheid gemaakt tussen gedragsclusters (samplers, auditors, completers) en aangetoond dat vrouwelijke deelnemers online informaticacursussen aanzienlijk vaker startten met het oog op een carrièreswitch (+16,7%, p < 0,001) dan mannelijke deelnemers.",
    methods: ["Python", "Pandas", "K-Means Clustering", "Clickstream Telemetrie", "Logistische Regressie"],
    repositoryLink: "https://repository.tudelft.nl/islandora/object/uuid%3A021fa315-bb8a-4db3-97ea-e8a0fa2c1a5b",
    repositoryText: "Lees de gepubliceerde thesis in het TU Delft Repository",
  },
  items: [
    {
      title: "Technische Universiteit Delft",
      subtitle: "MSc Computer Science — Data Science Track",
      startDate: "sep 2021",
      endDate: "mei 2024",
      text: "**Focus**: Geavanceerde algoritmen, gedistribueerde gegevensverwerking, toegepaste machine learning en kwantitatieve telemetrie-analyse.\n**Masterthesis**: Debugging the Divide: Exploring Men's and Women's Motivations and Engagement in Computer Science MOOCs.",
      skills: ["Data Science", "Python", "Algoritmen", "Machine Learning", "Gedistribueerde Systemen"],
      image: {
        uri: "tudelft.svg",
        alt: "TU Delft logo",
      },
    },
    {
      title: "Technische Universiteit Delft",
      subtitle: "MSc Science Education & Communication — Informatica",
      startDate: "sep 2021",
      endDate: "mei 2024",
      text: "**Eerstegraads Bevoegdheid**: Formele Nederlandse eerstegraads onderwijsbevoegdheid behaald in de Informatica voor lesbevoegdheid op alle niveaus in het vo en hoger onderwijs.\n**Didactiek & Onderwijskunde**: Diepgaande training in curriculumontwerp, diagnostische toetsing, cognitieve belastingstheorie en technische communicatie.",
      skills: ["Informaticadidactiek", "Cognitieve Belastingstheorie", "Technische Communicatie", "Curriculumontwerp"],
      image: {
        uri: "tudelft.svg",
        alt: "TU Delft logo",
      },
    },
    {
      title: "KTH Royal Institute of Technology",
      subtitle: "Exchange Studies — Computer Science",
      startDate: "aug 2022",
      endDate: "jan 2023",
      text: "**Studie**: Gericht op machine-learning-algoritmen, informatievisualisatie en mens-computerinteractie in Stockholm, Zweden.",
      skills: ["Machine Learning", "Informatievisualisatie", "HCI"],
      image: {
        uri: "kth.svg",
        alt: "KTH logo",
      },
    },
    {
      title: "Technische Universiteit Delft",
      subtitle: "BSc Technische Informatica",
      startDate: "sep 2017",
      endDate: "jul 2021",
      text: "**Fundament**: Gedegen basis in datastructuren, algoritmen, besturingssystemen, computernetwerken, berekenbaarheid en softwarearchitectuur.\n**Bestuur**: Verkozen studentvertegenwoordiger in de Opleidingscommissie Technische Informatica.",
      skills: ["Datastructuren", "Algoritmen", "Besturingssystemen", "Netwerken", "Software Engineering"],
      image: {
        uri: "tudelft.svg",
        alt: "TU Delft logo",
      },
    },
  ],
};
