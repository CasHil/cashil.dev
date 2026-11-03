import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  kicker: "Software Engineer & Docent",
  heroTitle:
    "Software engineer bij Tikkie Zakelijk en docent informatica.",
  bioParagraph1:
    "Bij Tikkie Zakelijk (ABN AMRO via Harvest) ontwikkel ik zakelijke webapplicaties in TypeScript en React, samen met backendservices op AWS voor merchant-onboarding, KYC-verificatie en geautomatiseerde uitbetalingen.",
  bioParagraph2:
    "Met dubbele Mastertitels in Computer Science en Science Education van de Technische Universiteit Delft beschouw ik didactische helderheid als een engineering-standaard: duidelijke API-contracten, kwalitatieve documentatie en software die onderhoudbaar blijft naarmate teams groeien.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Bekijk Werkervaring",
  featuredHeading: "Uitgelichte Architectuur",
  featuredSubtitle:
    "Productiesystemen bij Tikkie Zakelijk en in-browser sandboxing bij Bitsized.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO (2025 – Heden)",
  tikkieTitle: "Tikkie Zakelijk",
  tikkieSubtitle: "Portaal, Onboarding-architectuur & Uitbetalingen",
  tikkieDescription:
    "Ontwikkeling van bedrijfskritische systemen voor Nederlandse ondernemingen. Ik bouw responsieve dashboards en cloudworkflows op AWS voor geautomatiseerde merchant-onboarding, bedrijfsverificatie en dagelijkse uitbetalingen.",
  tikkieWorkflowsTitle: "Belangrijkste Architectuurdomeinen",
  tikkieWorkflows: [
    {
      id: "onboarding",
      badge: "Onboarding",
      title: "Merchant-onboarding Pipeline",
      description:
        "Automatiseren van bedrijfsverificatie, KVK-controles en KYC-validatie voorafgaand aan het inrichten van zakelijke accounts op AWS.",
      details: [
        "Validatie van bedrijfsidentiteit via het Handelsregister (KVK)",
        "Geautomatiseerde provisioning en sleutelbeheer op AWS",
        "Deterministische statusbewaking en auditlogboek",
      ],
    },
    {
      id: "payouts",
      badge: "Uitbetalingen",
      title: "Uitbetaling & Reconciliatie",
      description:
        "Orkestreren van batch-uitbetalingen en transactiereconciliatie om te waarborgen dat zakelijke saldi accuraat worden uitgekeerd.",
      details: [
        "Batchvalidatie en continue reconciliatie van transacties",
        "Event-driven betalingsstatusupdates over gedistribueerde services",
        "Audit-klare uitbetalingsgeschiedenis en rapportages",
      ],
    },
    {
      id: "portal",
      badge: "Portaal",
      title: "Zakelijk Webportaal",
      description:
        "Bouwen en beheren van het centrale zakelijke portaal in TypeScript en React met hoge toegankelijkheid en testdekking.",
      details: [
        "Responsieve React-interfaces voor betaallinks en transactie-inzichten",
        "Uitgebreide geautomatiseerde testdekking met Vitest en integratietests",
        "Toegankelijke componenten die voldoen aan de WCAG-standaarden",
      ],
    },
  ],
  tikkieLink: "Bekijk in Tijdlijn",

  // Bitsized Flagship
  bitsizedTag: "Medeoprichter & Lead Frontend (2023 – 2025)",
  bitsizedTitle: "Bitsized Sandbox Platform",
  bitsizedSubtitle: "In-Browser Code-executie & Didactiek",
  bitsizedDescription:
    "Medeoprichter en lead engineer van een educatief platform voor informaticaonderwijs op Nederlandse middelbare scholen. Ontwikkelde client-side code-executie in sandboxes, realtime docentendashboards en AST-diagnostiek die installatiegedoe overbodig maakten.",
  bitsizedPerspectivesTitle: "Runtime & Didactische Architectuur",
  bitsizedPerspectives: [
    {
      id: "sandbox",
      role: "Runtime-architectuur",
      title: "Geïsoleerde Web Worker Executie",
      description:
        "Client-side uitvoeren van code van leerlingen zonder externe serverinfrastructuur, met beveiliging tegen oneindige lussen via timeouts en geheugenlimieten.",
      points: [
        "Web Worker executiedraad volledig geïsoleerd van de hoofd-DOM",
        "Configureerbare watchdogs die vastlopende scripts veilig beëindigen",
        "Geen serverkosten en directe executie op school-Chromebooks",
      ],
    },
    {
      id: "diagnostics",
      role: "Didactische Diagnostiek",
      title: "AST-Gedreven Feedback in Begrijpelijke Taal",
      description:
        "Parseren van Python-code naar een Abstract Syntax Tree om conceptuele denkfouten te identificeren en constructieve feedback te geven.",
      points: [
        "Client-side AST-analyse voor gerichte foutdiagnoses",
        "Opbouwende uitleg in plaats van intimiderende interpreter-tracebacks",
        "Realtime voortgangsoverzicht voor docenten tijdens practica",
      ],
    },
  ],
  bitsizedLink: "Bekijk in Tijdlijn",

  // Engineering Ethos
  ethosTag: "Engineeringprincipes",
  ethosTitle: "Mijn Aanpak in Software",
  ethosSubtitle:
    "Engineeringprincipes gevormd door productiesystemen en didactische praktijk",
  ethosDescription:
    "Betrouwbare software vraagt om zowel technische precisie als heldere communicatie. Ik ontwerp voor eenvoud, stabiliteit en teamsnelheid.",
  ethosPillars: [
    {
      title: "Eenvoud van Systemen",
      description:
        "Vermijden van onnodige complexiteit en overbodige afhankelijkheden. Duidelijke interfaces, deterministische states en voorspelbare datastromen maken systemen eenvoudiger te testen, debuggen en onderhouden.",
    },
    {
      title: "Productierigor",
      description:
        "Ondersteunen van implementaties met strikte TypeScript-types, geautomatiseerde Vitest-suites en gestructureerde foutafhandeling. Systemen moeten expliciet en veilig falen.",
    },
    {
      title: "Didactische Helderheid",
      description:
        "Onderwijservaring inzetten voor nauwkeurige technische documentatie, constructieve code-reviews en transparante architectuurkeuzes binnen het team.",
    },
  ],
  outsideTitle: "Buiten Software Engineering",
  outsideDescription:
    "Buiten software engineering speel ik elektrische basgitaar en schaak ik.",
};
