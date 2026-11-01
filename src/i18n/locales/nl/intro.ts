import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  kicker: "Full-Stack Software Engineer · Amsterdam, NL",
  heroTitle: "Bouwen aan het zakelijke portaal en backend-systemen bij Tikkie Zakelijk.",
  bioParagraph1:
    "Full-stack software engineer bij Tikkie Zakelijk (ABN AMRO). Ik werk aan het zakelijke webportaal en achterliggende backend-systemen, waaronder onboardingflows en zakelijke accountservices.",
  bioParagraph2:
    "Dubbele Master van de TU Delft in Computer Science en Science Education. Eerder medeoprichter van Bitsized, waar ik een in-browser code-sandbox voor scholen bouwde, en scriptieonderzoek gedaan naar telemetrie van 175.000 cursisten.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Bekijk Werkervaring",
  featuredHeading: "Uitgelichte Engineering",
  featuredSubtitle: "Productiewebapplicaties, onboarding-backendsystemen en browser-zandbakken.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO · 2026 – Heden",
  tikkieTitle: "Tikkie Zakelijk",
  tikkieSubtitle: "Zakelijk Portaal & Onboarding-systemen · ABN AMRO",
  tikkieDescription:
    "Full-stack software engineering voor Tikkie Zakelijk, gericht op zakelijke webportalen en cloudservices. Ontwikkeling van soepele onboardingflows voor bedrijven, interfaces voor transactiebeheer en betrouwbare backend-diensten op AWS.",
  tikkiePipelineTitle: "Zakelijk Portaal- & Onboarding-architectuur",
  tikkiePipelineSubtitle: "Full-stack architectuur van zakelijke registratie tot portaalbeheer",
  tikkiePipelineStages: [
    {
      id: "onboarding",
      stage: "01",
      title: "Onboarding Flow",
      subtitle: "Registratie",
      description: "Geautomatiseerde registratie van bedrijven, verificatie van bedrijfsgegevens en kwalificatieworkflows.",
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
      subtitle: "API & Services",
      description: "Node.js-services en API's op AWS serverless infrastructuur voor zakelijke interacties.",
    },
    {
      id: "data",
      stage: "04",
      title: "Data Layer",
      subtitle: "Persistentie",
      description: "Relationele datamodellering, inrichting van zakelijke accounts en transactiestatus in PostgreSQL.",
    },
  ],
  tikkieHighlights: [
    "**Zakelijk Portaal**: Webinterfaces ontwikkeld in React en TypeScript voor het aanmaken van betaalverzoeken, transactiemonitoring en accountbeheer.",
    "**Onboarding Backend**: Onboardingworkflows en backend-verificatiediensten gebouwd voor geautomatiseerde accountvalidatie en configuratie.",
    "**Cloudservices**: Backend-services gerealiseerd op AWS serverless infrastructuur met PostgreSQL, geautomatiseerde tests en gestructureerde logging.",
  ],
  tikkieLink: "Bekijk in Tijdlijn",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Medeoprichter & Lead Engineer · 2023 – 2025",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Geïsoleerde browser-uitvoeringsruntime en informatica-onderwijsplatform",
  bitsizedDescription:
    "Medeoprichter en engineer van een interactief code-evaluatieplatform dat in gebruik is genomen op Nederlandse middelbare scholen. In-browser code-executiezandbakken, geautomatiseerde beoordelingstests en tools voor opdrachtenbeheer gerealiseerd.",
  bitsizedArchTitle: "Sandboxed In-Browser Executie-architectuur",
  bitsizedArchSubtitle: "Deterministische isolatie, oneindige-lusterminatie en directe code-evaluatie",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolatie",
      description: "Leerlingencode draait in dedicated, niet-blokkerende Web Workers, volledig afgezonderd van de DOM en UI-hoofddraad.",
    },
    {
      title: "Executie-watchdogs",
      description: "Configureerbare uitvoeringstimers beëindigen op hol geslagen lussen en niet-reagerende scripts voordat de browser bevriest.",
    },
    {
      title: "Directe Feedback",
      description: "In-browser assertion-runners geven leerlingen realtime syntactische en inhoudelijke feedback zonder serverlatentie.",
    },
  ],
  bitsizedHighlights: [
    "**In-Browser Sandboxing**: Client-side geïsoleerde executie-runtime ontworpen met Web Workers, waardoor serverkosten en vertraging nihil zijn.",
    "**Onderwijsadoptie**: Uitgerold op Nederlandse middelbare scholen ter ondersteuning van diverse klassen en docenten tijdens dagelijkse lessen.",
    "**Full-Stack Platform**: Realtime voortgangsmonitors, opdrachtbeheerdashboards en code-evaluatieworkflows gebouwd in React en Node.js.",
  ],
  bitsizedLink: "Bekijk in Tijdlijn",

  // Engineering Force Multiplier
  ethosTag: "Engineering Multiplier · TU Delft Dubbele MSc",
  ethosTitle: "Het Voordeel van Didactiek & Systemen",
  ethosSubtitle: "Hoe informaticadidactiek fungeert als een krachtvermenigvuldiger in software-engineeringteams",
  ethosDescription:
    "Het bezit van universitaire diploma's in zowel Informatica als Wetenschapsonderwijs biedt een onderscheidend perspectief: programmacode is niet louter machine-instructie, maar bovenal een menselijk communicatiemiddel.",
  ethosPillars: [
    {
      title: "API-Ontwerp als Menselijke Communicatie",
      description:
        "Elk endpoint, interface en foutbericht is een interactiecontract. Didactische helderheid leidt tot zelfdocumenterende API's met minimale cognitieve belasting en heldere randgevallen.",
    },
    {
      title: "Strikte Typegrenzen & RFC's",
      description:
        "Expliciete domeingrenzen, grondige architectuurdocumentatie en gedisciplineerde technische voorstellen versnellen afstemming en reduceren bugs.",
    },
    {
      title: "Mentorschap & Teamsnelheid",
      description:
        "Gekwalificeerd eerstegraads docent met ervaring in het versnellen van kennisoverdracht bij junior en medior engineers en het versterken van een leercultuur.",
    },
  ],
  outsideTitle: "Buiten de Codebase",
  outsideDescription:
    "Buiten het beeldscherm richt ik me op twee passies die patroonherkenning en bewuste oefening vereisen: Elektrische Basgitaar (groove, timing en harmonische precisie) en Schaken (tactische berekening en diepgaande positionele strategie).",
};
