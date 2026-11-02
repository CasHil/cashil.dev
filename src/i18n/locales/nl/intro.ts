import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  kicker: "Full-Stack Software Engineer, Amsterdam",
  heroTitle: "Betrouwbare webapplicaties bouwen met agentic workflows en hoge codestandaarden.",
  bioParagraph1:
    "Full-stack software engineer bij Tikkie Zakelijk (ABN AMRO). Ik ontwikkel zakelijke webapplicaties in TypeScript en React, ondersteund door onboarding-backendservices op AWS serverless infrastructuur.",
  bioParagraph2:
    "Dubbele Master van de TU Delft in Computer Science en Science Education. Ik geef prioriteit aan codekwaliteit, geautomatiseerde testdekking en heldere technische communicatie binnen de ontwikkelcyclus.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Bekijk Werkervaring",
  featuredHeading: "Uitgelichte Engineering",
  featuredSubtitle: "Productiesystemen bij Tikkie Zakelijk en client-side code-executieomgevingen.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO (2026 – Heden)",
  tikkieTitle: "Tikkie Zakelijk",
  tikkieSubtitle: "Zakelijk Webportaal & Onboarding-services, ABN AMRO",
  tikkieDescription:
    "Full-stack software engineering voor Tikkie Zakelijk. Ontwikkeling van het zakelijke webportaal voor transactiebeheer en backend-verificatieworkflows voor geautomatiseerde onboarding op AWS.",
  tikkiePipelineTitle: "Zakelijk Portaal- & Onboarding-architectuur",
  tikkiePipelineSubtitle: "Architectuur over webportaalinterfaces, onboarding-services en persistentie",
  tikkiePipelineStages: [
    {
      id: "onboarding",
      stage: "01",
      title: "Onboarding Flow",
      subtitle: "Verificatie",
      description: "Controle van bedrijfsgegevens, registratievalidatie en geautomatiseerde onboardingworkflows.",
    },
    {
      id: "portal",
      stage: "02",
      title: "Merchant Portal",
      subtitle: "Webapplicatie",
      description: "Single-page applicatie in React en TypeScript voor betaalverzoeken, transacties en accountinstellingen.",
    },
    {
      id: "services",
      stage: "03",
      title: "Backend Services",
      subtitle: "Node.js & AWS",
      description: "Services en REST-API's op AWS serverless infrastructuur voor zakelijke betalingen.",
    },
    {
      id: "data",
      stage: "04",
      title: "Data Layer",
      subtitle: "PostgreSQL",
      description: "Relationele datamodellering, merchant-accountstatus en transactietracking in PostgreSQL.",
    },
  ],
  tikkieHighlights: [
    "**Zakelijk Portaal**: Responsieve webinterfaces in React en TypeScript ontwikkeld voor het aanmaken van betaalverzoeken, monitoren van transacties en beheren van bedrijfsaccounts.",
    "**Onboarding-backend**: Onboardingworkflows en backend-verificatieservices gebouwd voor het valideren van bedrijfsgegevens en het inrichten van accounts.",
    "**Codekwaliteit & Testen**: Geautomatiseerde testdekking (Vitest, integratietests) en gestructureerde logging geïmplementeerd over serverless AWS-services.",
  ],
  tikkieLink: "Bekijk in Tijdlijn",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Medeoprichter & Lead Engineer (2023 – 2025)",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Geïsoleerde browser-executieruntime voor informaticaonderwijs",
  bitsizedDescription:
    "Medeoprichter van een interactief code-evaluatieplatform voor Nederlandse middelbare scholen. Client-side executiesandboxes, automatische opgave-evaluatie en docentendashboards ontwikkeld.",
  bitsizedArchTitle: "Sandboxed In-Browser Execution Architecture",
  bitsizedArchSubtitle: "Geïsoleerde worker-executie, script-timeouts en directe feedback",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolation",
      description: "Code van leerlingen draait in afzonderlijke Web Worker threads, geïsoleerd van het DOM en de UI thread.",
    },
    {
      title: "Execution Watchdogs",
      description: "Executietimers stoppen oneindige lussen en vastlopende scripts voordat de browser bevriest.",
    },
    {
      title: "Directe Feedback",
      description: "In-browser assertietestrunners geven directe syntax- en testfeedback zonder servercompute-kosten.",
    },
  ],
  bitsizedHighlights: [
    "**Client-side Sandboxing**: Een executieruntime in Web Workers ontworpen om onvertrouwde studentencode veilig in de browser uit te voeren.",
    "**Gebruik in het Onderwijs**: Uitgerold naar Nederlandse middelbare scholen voor dagelijkse programmeerlessen en praktijkopdrachten.",
    "**Full-Stack Platform**: Voortgangsmonitors, opgavenbeheerdashboards en codereviewworkflows gerealiseerd in React en Node.js.",
  ],
  bitsizedLink: "Bekijk in Tijdlijn",

  // Engineering Approach
  ethosTag: "Engineeringaanpak",
  ethosTitle: "Hoe ik software bouw",
  ethosSubtitle: "Kernprincipes over full-stack engineering, tooling en teamsamenwerking",
  ethosDescription:
    "Een pragmatische focus op betrouwbare productiecode, moderne geautomatiseerde workflows en heldere technische communicatie.",
  ethosPillars: [
    {
      title: "Betrouwbare Full-Stack Architectuur",
      description:
        "Strikte type-grenzen in TypeScript, deterministische statusverwerking en geautomatiseerde testdekking over React-interfaces en Node.js serverless services.",
    },
    {
      title: "Specificatie-gedreven Workflows",
      description:
        "Moderne AI-codingtools inzetten voor snellere scaffolding en testgeneratie, ondersteund door grondige menselijke codereviews, typestriktheid en CI-checks.",
    },
    {
      title: "Didactische Helderheid & Mentorschap",
      description:
        "Onderwijservaring toepassen om onderhoudbare code te schrijven, architectuur helder te documenteren en teamleden te ondersteunen via constructieve codereviews.",
    },
  ],
  outsideTitle: "Buiten Software Engineering",
  outsideDescription:
    "Naast coderen speel ik elektrische basgitaar en schaak ik.",
};
