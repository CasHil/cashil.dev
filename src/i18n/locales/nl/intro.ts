import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  kicker: "Full-Stack Software Engineer · Amsterdam, NL",
  heroTitle: "Robuuste betaaldiensten en webplatforms bouwen bij Tikkie.",
  bioParagraph1:
    "Full-stack software engineer bij Tikkie (ABN AMRO), verantwoordelijk voor idempotente betaal-API's, partnerwebhooks en zakelijke beheerportalen voor duizenden ondernemingen in heel Nederland.",
  bioParagraph2:
    "In het bezit van een Dubbele Master van de Technische Universiteit Delft in Computer Science en Science Education. Ik combineer gedistribueerde systemen met didactische principes om intuïtieve developer interfaces, betrouwbare API-contracten en efficiënte engineering-workflows te ontwerpen.",
  viewCv: "Curriculum Vitae",
  exploreWork: "Geselecteerde Systemen",
  featuredHeading: "Uitgelichte Engineering",
  featuredSubtitle: "Productiebetaalsystemen, in-browser uitvoeringszandbakken en software-architectuur.",

  // Tikkie Business Flagship
  tikkieTag: "ABN AMRO · 2026 – Heden",
  tikkieTitle: "Tikkie Zakelijk Betaaldiensten",
  tikkieSubtitle: "Zakelijke betaalinfrastructuur, idempotente afwikkeling en rapportageportalen",
  tikkieDescription:
    "Kern-betaal-endpoints en realtime zakelijke webportalen ontworpen en gebouwd voor Tikkie Zakelijk. End-to-end betaalafwikkelingsworkflows, webhook-dispatchsystemen en geautomatiseerde reconciliatiepipelines gerealiseerd voor zakelijke financiële transacties.",
  tikkiePipelineTitle: "Zakelijke Betaal- & Afwikkelingspipeline",
  tikkiePipelineSubtitle: "End-to-end transactieleveringscyclus met gegarandeerde strikte idempotentie en nul dubbele afschrijvingen",
  tikkiePipelineStages: [
    {
      id: "ingestion",
      stage: "01",
      title: "Merchant API",
      subtitle: "Ingestionlaag",
      description: "Cryptografische handtekeningverificatie, schemacontrole en rate-limiting aan de edge gateway.",
    },
    {
      id: "idempotency",
      stage: "02",
      title: "Idempotency Guard",
      subtitle: "Deduplicatie",
      description: "Atomische Redis- en databasevergrendelingen die nul dubbele financiële autorisaties garanderen.",
    },
    {
      id: "settlement",
      stage: "03",
      title: "Settlement Engine",
      subtitle: "Async Workerlaag",
      description: "Event-driven verwerkingsworkers voor geautomatiseerde bankoverboekingen en partnerwebhooks.",
    },
    {
      id: "ledger",
      stage: "04",
      title: "ACID Ledger",
      subtitle: "Persistentie",
      description: "Onveranderlijke dubbele boekhoudtransacties opgeslagen in PostgreSQL met point-in-time recovery.",
    },
  ],
  tikkieHighlights: [
    "**Idempotentie & Reconciliatie**: Fouttolerante betaal-ingestion ontworpen die dubbele afschrijvingen voorkomt bij netwerk-retries.",
    "**Zakelijke Rapportage**: Responsieve analysedashboards gebouwd in React, TypeScript en AWS serverloze infrastructuur met live telemetrie.",
    "**Partnerintegraties**: Geautomatiseerde webhook-dispatchmechanismen geïmplementeerd met exponential backoff en dead-letter queues.",
  ],
  tikkieLink: "Bekijk in Tijdlijn",

  // Bitsized 0-to-1 Flagship
  bitsizedTag: "Medeoprichter & Lead Engineer · 2023 – 2025",
  bitsizedTitle: "Bitsized Sandbox Engine",
  bitsizedSubtitle: "Geïsoleerde browser-uitvoeringsruntime en informatica-onderwijsplatform",
  bitsizedDescription:
    "Medeoprichter en engineer van een interactief code-evaluatieplatform dat in gebruik is genomen op Nederlandse middelbare scholen. In-browser code-executiezandbakken, geautomatiseerde beoordelingstests en tools voor opdrachtenbeheer gerealiseerd.",
  bitsizedArchTitle: "Sandboxed In-Browser Executie-architectuur",
  bitsizedArchSubtitle: "Deterministische isolatie, oneindige-lustermatie en realtime codebeoordeling",
  bitsizedPrinciples: [
    {
      title: "Web Worker Isolatie",
      description: "Leerlingencode draait in dedicated, niet-blokkerende Web Workers, volledig afgezonderd van de DOM en UI-hoofddraad.",
    },
    {
      title: "Deterministische Watchdogs",
      description: "Uitvoeringstimers en AST-pre-checks beëindigen op hol geslagen lussen en geheugenpieken direct voordat de browser bevriest.",
    },
    {
      title: "Directe Evaluatie",
      description: "Testrunners voeren assertion-suites uit in minder dan 25ms en geven leerlingen realtime syntactische en inhoudelijke feedback.",
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
