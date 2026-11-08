import { useLanguage } from "../../context/LanguageContext";

interface TechItem {
  id: string;
  name: string;
  startDate: Date;
  focusEn: string;
  focusNl: string;
  highlightEn: string;
  highlightNl: string;
}

const TECH_ITEMS: TechItem[] = [
  {
    id: "ts-js",
    name: "TypeScript & JavaScript",
    startDate: new Date(2019, 8, 1), // Sep 2019
    focusEn: "Full-Stack Web & APIs",
    focusNl: "Full-stack web & API's",
    highlightEn: "Tikkie Business, Bexter, Client Portals",
    highlightNl: "Tikkie Zakelijk, Bexter, Klantportalen",
  },
  {
    id: "react",
    name: "React",
    startDate: new Date(2023, 0, 1), // Jan 2023
    focusEn: "Frontend Applications",
    focusNl: "Frontend-applicaties",
    highlightEn: "Merchant Web Portal, SPA Architecture",
    highlightNl: "Zakelijk Merchantportaal, SPA-architectuur",
  },
  {
    id: "vue-meteor",
    name: "Vue.js & Meteor",
    startDate: new Date(2023, 0, 1), // Jan 2023
    focusEn: "Reactive Full-Stack",
    focusNl: "Reactieve full-stack",
    highlightEn: "Bitsized Classroom Coding Platform",
    highlightNl: "Bitsized Klaslokaal Programmeerplatform",
  },
  {
    id: "nodejs",
    name: "Node.js",
    startDate: new Date(2019, 8, 1), // Sep 2019
    focusEn: "Backend Services & Runtimes",
    focusNl: "Backend-services & Runtimes",
    highlightEn: "REST APIs, Event Handlers, Microservices",
    highlightNl: "REST API's, Event-handlers, Microservices",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    startDate: new Date(2024, 1, 1), // Feb 2024
    focusEn: "Serverless Architecture",
    focusNl: "Serverless architectuur",
    highlightEn: "Lambda, DynamoDB, EventBridge",
    highlightNl: "Lambda, DynamoDB, EventBridge",
  },
  {
    id: "sql",
    name: "PostgreSQL & SQL",
    startDate: new Date(2019, 8, 1), // Sep 2019
    focusEn: "Relational Data Modeling",
    focusNl: "Relationele datamodellering",
    highlightEn: "PostgreSQL, MySQL, SQL Server, Migrations",
    highlightNl: "PostgreSQL, MySQL, SQL Server, Migraties",
  },
];

function calculateExperience(
  startDate: Date,
  isNl: boolean
): { primary: string; secondary: string } {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  if (months < 0) {
    years -= 1;
  }
  const yrLabel = isNl ? "jr" : "yrs";
  const startYear = startDate.getFullYear();
  return {
    primary: `${years}+ ${yrLabel}`,
    secondary: isNl ? `Sinds ${startYear}` : `Since ${startYear}`,
  };
}

export default function TechExperienceTracker() {
  const { t, language } = useLanguage();
  const isNl = language === "nl";

  return (
    <section aria-labelledby="tech-experience-heading" className="space-y-6 pt-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2
            id="tech-experience-heading"
            className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary"
          >
            {t.intro.techHeading}
          </h2>
          <p className="text-sm text-text-muted mt-1 max-w-[60ch]">
            {t.intro.techSubtitle}
          </p>
        </div>

        {/* Honest Production Badge */}
        <span className="text-xs text-text-muted shrink-0 self-start sm:self-auto inline-flex items-center gap-1.5 font-medium">
          <span>{t.intro.techLiveBadge}</span>
        </span>
      </div>

      {/* Editorial Technical Experience List (Clean hairline structure, no bento cards) */}
      <div className="border-t border-border-subtle divide-y divide-border-subtle">
        {TECH_ITEMS.map((item) => {
          const duration = calculateExperience(item.startDate, isNl);
          return (
            <div
              key={item.id}
              className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
            >
              <div className="space-y-0.5 sm:max-w-[50ch]">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="text-sm sm:text-base font-medium text-text-primary">
                    {item.name}
                  </h3>
                  <span className="text-xs text-brand font-medium">
                    · {isNl ? item.focusNl : item.focusEn}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted">
                  {isNl ? item.highlightNl : item.highlightEn}
                </p>
              </div>

              {/* Experience Summary */}
              <div className="text-xs sm:text-sm text-text-muted sm:text-right shrink-0 tabular-nums">
                <span className="font-medium text-text-primary">
                  {duration.primary}
                </span>
                <span className="ml-1.5">· {duration.secondary}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
