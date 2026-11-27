import { IntroTranslations } from "../../types";

export const nlIntro: IntroTranslations = {
  heroTitle:
    "Software engineer bij Tikkie, met masters in informatica en in het lesgeven ervan.",
  heroFacts:
    "Full-stack in TypeScript, React, Node.js en AWS. Ik woon in Amsterdam en werk in het Nederlands en Engels.",
  story: [
    "Bij Tikkie Zakelijk, onderdeel van ABN AMRO, bouw ik de software waarmee bedrijven betaalverzoeken versturen en hun geld ontvangen. Ik begon in februari 2025 via Harvest, een programma dat engineers bij bedrijven als ABN AMRO plaatst en ze naast hun werk opleidt. Ik leid nu mijn eerste grotere project in het team.",
    "Vlak nadat ik in 2024 mijn scriptie aan de TU Delft had afgerond, kreeg ik een mail van een middelbare school. De leerlingen hadden al maanden geen informaticadocent. Ik nam de baan aan en gaf dat schooljaar op twee scholen les aan ongeveer 200 leerlingen in tien klassen. Tijdens mijn master had ik Bitsized mee opgericht. Leerlingen schreven en draaiden daar code in de browser, zodat een les kon beginnen zonder iets te installeren.",
    "Lesgeven heeft veranderd hoe ik software schrijf. Ik schrijf code en documentatie voor wie er na mij mee verder moet. Bij Tikkie ben ik daardoor ook dingen gaan organiseren: een AI-hackathon voor heel Tikkie en workshops over werken met coding agents.",
    "Buiten mijn werk speel ik basgitaar en schaak ik.",
  ],
  emailCta: "Mail me",
  cvCta: "Download cv (pdf)",

  workHeading: "Uitgelicht werk",
  work: [
    {
      title: "Tikkie Zakelijk",
      role: "Software engineer bij ABN AMRO, via Harvest",
      period: "feb 2025 tot nu",
      paragraphs: [
        "Met Tikkie Zakelijk sturen bedrijven betaalverzoeken naar hun klanten via WhatsApp, e-mail of een QR-code. Ik bouw het portaal voor ondernemers in TypeScript en React. Ik bouw ook de AWS-services die een nieuw bedrijf controleren en het account activeren, en ik werk aan de pipeline die ondernemers uitbetaalt.",
        "Naast featurewerk heb ik onze technical debt op de retrospective van het team gezet, met een plan om die af te bouwen. We zijn begonnen eenvoudige, terugkerende taken aan AI-agents over te laten.",
      ],
      stack: [
        "TypeScript",
        "React",
        "Node.js",
        "AWS (Lambda, DynamoDB, S3)",
        "PostgreSQL",
        "Vitest",
      ],
    },
    {
      title: "Bitsized",
      role: "Medeoprichter en lead frontend engineer",
      period: "jan 2023 tot feb 2025",
      paragraphs: [
        "Bitsized was een webplatform voor informaticalessen op Nederlandse middelbare scholen. Leerlingen schreven en draaiden code in de browser, dus er hoefde niets op schoolcomputers te worden geïnstalleerd.",
        "Ik bouwde de frontend in Vue.js op Meteor. Met de docenten die het gebruikten bepaalde ik hoe opdrachten werden uitgedeeld. We zochten ook uit hoe je een foutmelding schrijft waar een beginner iets mee kan.",
      ],
      stack: ["Vue.js", "Meteor", "JavaScript", "Node.js", "MongoDB"],
    },
  ],
  workLink: "Alle werkervaring",
};
