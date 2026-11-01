import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  kicker: "Full-Stack & Agentic Software Developer · Amsterdam, NL",
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
  tikkieTag: "ABN AMRO · 2026 – Heden",
  tikkieTitle: "Tikkie Zakelijk",
  tikkieSubtitle: "Zakelijk Webportaal & Onboarding-services · ABN AMRO",
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
      title: "Zakelijk Portaal",
      subtitle: "Webapplicatie",
      description: "Single-page applicatie in React en TypeScript voor betaalverzoeken, transactie-inzicht en instellingen.",
    },
    {
      id: "services",
      stage: "03",
      title: "Backend Services",
      subtitle: "Node.js & AWS",
      description: "Backend-services en REST-API's op AWS serverless infrastructuur voor zakelijke interacties.",
    },
    {
      id: "data",
      stage: "04",
      title: "Data Layer",
      subtitle: "PostgreSQL",
      description: "Relationele datamodellering, inrichting van zakelijke accounts en transactiestatus in PostgreSQL.",
    },
  ],
  tikkieHighlights: [
    "**Zakelijk Portaal**: Webinterfaces ontwikkeld in React en TypeScript voor het aanmaken van betaalverzoeken, transactiemonitoring en accountbeheer.",
    "**Onboarding Backend**: Onboardingworkflows en backend-verificatiediensten gebouwd voor geautomatiseerde accountvalidatie en configuratie.",
    "**Codekwaliteit & Testen**: Geautomatiseerde testdekking gerealiseerd (Vitest, integratietests) en gestructureerde logging over AWS services ingericht.",
  ],
  tikkieLink: "Bekijk in Tijdlijn",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Medeoprichter & Lead Engineer · 2023 – 2025",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Geïsoleerde browser-uitvoeringsruntime voor informatica-onderwijs",
  bitsizedDescription:
    "Medeoprichter van een interactief code-evaluatieplatform dat in gebruik is genomen op Nederlandse middelbare scholen. In-browser executie-omgevingen, geautomatiseerde opdrachtevaluatie en docentendashboards gebouwd.",
  bitsizedArchTitle: "Sandboxed In-Browser Executie-architectuur",
  bitsizedArchSubtitle: "Geïsoleerde worker-executie, script-timeouts en directe evaluatie",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolatie",
      description: "Leerlingencode draait in aparte Web Workers, afgezonderd van de DOM en UI-hoofddraad.",
    },
    {
      title: "Executie-watchdogs",
      description: "Uitvoeringstimers beëindigen oneindige lussen en niet-reagerende scripts voordat de browser bevriest.",
    },
    {
      title: "Directe Feedback",
      description: "In-browser assertion-runners geven leerlingen realtime syntactische en inhoudelijke feedback zonder serverkosten.",
    },
  ],
  bitsizedHighlights: [
    "**In-Browser Sandboxing**: Client-side executie-runtime ontworpen met Web Workers om niet-vertrouwde leerlingencode veilig lokaal uit te voeren.",
    "**Onderwijsadoptie**: Uitgerold op Nederlandse middelbare scholen ter ondersteuning van dagelijkse programmeerlessen.",
    "**Full-Stack Platform**: Voortgangsmonitors, opdrachtbeheerdashboards en code-evaluatieworkflows gebouwd in React en Node.js.",
  ],
  bitsizedLink: "Bekijk in Tijdlijn",

  // Engineering Ethos / Pillars
  ethosTag: "Engineering Filosofie · TU Delft Dubbele MSc",
  ethosTitle: "Codekwaliteit, Agentic Workflows & Didactische Rigor",
  ethosSubtitle: "Hoe software-ambacht en wetenschapsonderwijs engineeringteams versterken",
  ethosDescription:
    "De combinatie van informatica en wetenschapsonderwijs bepaalt hoe ik software ontwikkel: code moet betrouwbaar zijn, goed getest, en gebouwd voor mensen om te begrijpen en te onderhouden.",
  ethosPillars: [
    {
      title: "Agentic Software Development",
      description:
        "Inzet van AI-agenten voor specificatie-gedreven ontwikkeling, geautomatiseerde testgeneratie en snelle refactoring, bewaakt door strikte verificatie en typechecks.",
    },
    {
      title: "Codekwaliteit & Testdiscipline",
      description:
        "Strikte typegrenzen in TypeScript, deterministische statusverwerking, geautomatiseerde CI-testsuites en een heldere componentarchitectuur.",
    },
    {
      title: "Didactiek & Heldere Communicatie",
      description:
        "Bevoegd eerstegraads docent informatica. Didactische helderheid inzetten voor duidelijke documentatie, constructieve code reviews en versnelde inwerktrajecten.",
    },
  ],
  outsideTitle: "Buiten het Beeldscherm",
  outsideDescription:
    "Buiten de codebase speel ik elektrische basgitaar en schaak ik graag.",
};
