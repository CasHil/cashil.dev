import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  heroTitle: "Software engineer bij Tikkie, opgeleid als docent informatica.",
  heroFacts:
    "Full-stack in TypeScript, React, Node.js en AWS. Ik woon in Amsterdam en werk in het Nederlands en Engels.",
  story: [
    "Bij Tikkie Zakelijk, onderdeel van ABN AMRO, werk ik aan het portaal waarmee bedrijven betaalverzoeken versturen. Ik bouw ook de AWS-services die deze bedrijven aanmelden en uitbetalen. Ik begon in februari 2025 via het talentprogramma van Harvest en leid nu mijn eerste grotere project in het team.",
    "De dag na mijn afstuderen aan de TU Delft kreeg ik een mail van een middelbare school. De leerlingen hadden al maanden geen informaticadocent. Ik nam de baan aan en gaf dat schooljaar les aan ongeveer 200 leerlingen in tien klassen. Daarvoor was ik medeoprichter van Bitsized. Leerlingen schreven en draaiden daar code in de browser, zodat een les kon beginnen zonder iets te installeren.",
    "Lesgeven heeft veranderd hoe ik software schrijf. Ik schrijf code en documentatie voor degene die ze na mij moet begrijpen. Bij Tikkie ging ik daardoor ook dingen organiseren: een AI-hackathon voor heel Tikkie en workshops over werken met coding agents.",
    "Buiten mijn werk speel ik basgitaar en schaak ik.",
  ],
  emailCta: "Mail mij",
  cvCta: "Download cv (pdf)",

  workHeading: "Uitgelicht werk",
  work: [
    {
      title: "Tikkie Zakelijk",
      meta: "Software engineer bij ABN AMRO, via Harvest. Februari 2025 tot nu.",
      paragraphs: [
        "Met Tikkie Zakelijk sturen bedrijven betaalverzoeken naar hun klanten via WhatsApp, e-mail of een QR-code. Ik bouw het portaal voor ondernemers in TypeScript en React. Ik bouw ook de AWS-services die een nieuw bedrijf controleren en het account activeren, en ik werk aan de pipeline die ondernemers uitbetaalt.",
        "Naast het bouwen van features heb ik onze technical debt in de retrospective van het team ingebracht, met een plan om die af te bouwen. Eenvoudige, terugkerende taken laten we nu door AI-agents doen.",
      ],
      stack: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Vitest"],
    },
    {
      title: "Bitsized",
      meta: "Medeoprichter en lead frontend engineer. Januari 2023 tot februari 2025.",
      paragraphs: [
        "Bitsized was een webplatform voor informaticalessen op Nederlandse middelbare scholen. Leerlingen schreven en draaiden code in de browser, dus er hoefde niets op schoolcomputers te worden geïnstalleerd.",
        "Ik bouwde de frontend in Vue.js op Meteor. Met de docenten die het gebruikten bepaalde ik hoe opdrachten werden uitgedeeld. We zochten ook uit hoe je een foutmelding schrijft waar een beginner iets mee kan.",
      ],
      stack: ["Vue.js", "Meteor", "JavaScript", "Node.js", "MongoDB"],
    },
  ],
  workLink: "Alle werkervaring",

  stackHeading: "Stack",
  stack: [
    {
      category: "Dagelijks",
      items: "TypeScript, React, Node.js, AWS (Lambda, DynamoDB, S3), PostgreSQL, Vitest",
    },
    {
      category: "Eerder",
      items: "Vue.js, Meteor, MongoDB, C# en .NET, SQL Server, Python",
    },
  ],
};
