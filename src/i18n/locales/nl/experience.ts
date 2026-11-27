import { WorkExperienceTranslations } from "../../types";

export const nlExperience: WorkExperienceTranslations = {
  title: "Werkervaring",
  intro:
    "Betalingen bij Tikkie, een programmeerplatform voor in de klas dat ik mee oprichtte, en een jaar voor de klas. Daarvoor bouwde ik software bij een consultancy en in de logistiek.",
  to: "tot",
  items: [
    {
      title: "Tikkie Zakelijk (ABN AMRO)",
      subtitle: "Software engineer, via het talentprogramma van Harvest",
      startDate: "feb 2025",
      endDate: "nu",
      current: true,
      text: "Ik bouw het portaal voor ondernemers in TypeScript en React: betaalverzoeken, transactieoverzichten en accountinstellingen.\nIk bouw de AWS-services die een nieuw bedrijf controleren en het account activeren.\nIk werk aan de uitbetalingen en aan de reconciliatie die controleert of ondernemers op tijd het juiste bedrag krijgen.\nIk leid mijn eerste grotere project in het team, organiseerde een AI-hackathon voor heel Tikkie en geef workshops over werken met coding agents.",
      skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Vitest"],
      image: {
        uri: "tikkie.svg",
        alt: "Logo van Tikkie",
      },
    },
    {
      title: "CSG De Lage Waard en Stanislascollege",
      subtitle: "Docent informatica",
      startDate: "aug 2024",
      endDate: "jul 2025",
      text: "Ik gaf les aan ongeveer 200 leerlingen in tien klassen: algoritmen, digitale logica, computerarchitectuur en webontwikkeling.\nIk begeleidde eindprojecten en ontwierp het programma van toetsing en afsluiting (PTA).",
      skills: [],
    },
    {
      title: "Bitsized",
      subtitle: "Medeoprichter en lead frontend engineer",
      startDate: "jan 2023",
      endDate: "feb 2025",
      text: "Ik richtte mee een webplatform op waar middelbare scholieren code schrijven en draaien in de browser, zonder iets te installeren.\nIk bouwde de frontend in Vue.js op Meteor.\nSamen met informaticadocenten ontwierp ik hoe opdrachten worden uitgedeeld, hoe voortgang wordt bijgehouden en hoe fouten aan beginners worden uitgelegd.",
      skills: ["Vue.js", "Meteor", "JavaScript", "Node.js", "MongoDB"],
      image: {
        uri: "bitsized.webp",
        alt: "Logo van Bitsized",
      },
    },
    {
      title: "Netcompany",
      subtitle: "Software analist en consultant",
      startDate: "sep 2021",
      endDate: "jun 2022",
      text: "Ik ontwikkelde en onderhield applicaties voor twee Nederlandse onderwijsfondsen: het Vervangingsfonds en het Participatiefonds.\nIk bouwde een webtool die beoordeelt hoe duurzaam een woning of bedrijfspand is volgens de Nederlandse regels.",
      skills: ["C#", ".NET", "SQL Server", "JavaScript"],
      image: {
        uri: "netcompany.webp",
        alt: "Logo van Netcompany",
      },
    },
    {
      title: "Bexter",
      subtitle: "Softwareontwikkelaar",
      startDate: "sep 2019",
      endDate: "mei 2021",
      text: "Ik bouwde REST-API's en achtergrondservices voor TrackOnline, een platform dat herbruikbare transportverpakkingen volgt door de keten.\nIk onderhield en moderniseerde de webinterface voor klanten in TypeScript.",
      skills: ["TypeScript", "JavaScript", "REST-API's", "SQL"],
      image: {
        uri: "bexter.webp",
        alt: "Logo van Bexter",
      },
    },
  ],
};
