import { useState, useEffect } from "react";
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

function calculateDuration(
  startDate: Date,
  currentDate: Date,
  isNl: boolean
): { primary: string; secondary: string } {
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();
  let hours = currentDate.getHours() - startDate.getHours();
  let minutes = currentDate.getMinutes() - startDate.getMinutes();

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const yrLabel = isNl ? "jr" : "yrs";
  const moLabel = isNl ? "mnd" : "mos";
  const dLabel = isNl ? "d" : "d";
  const hLabel = isNl ? "u" : "h";
  const mLabel = isNl ? "m" : "m";

  return {
    primary: `${years} ${yrLabel}, ${months} ${moLabel}`,
    secondary: `${days}${dLabel} · ${hours}${hLabel} ${minutes}${mLabel}`,
  };
}

export default function TechExperienceTracker() {
  const { t, language } = useLanguage();
  const isNl = language === "nl";
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section aria-labelledby="tech-experience-heading" className="space-y-6 pt-4">
      {/* Header with live pulse */}
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

        {/* Live Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-squircle-sm bg-brand/10 border border-brand/20 text-brand text-xs font-medium shrink-0 self-start sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
          <span>{t.intro.techLiveBadge}</span>
        </div>
      </div>

      {/* Grid of Apple-squircle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TECH_ITEMS.map((item) => {
          const duration = calculateDuration(item.startDate, now, isNl);
          return (
            <div
              key={item.id}
              data-ui
              className="rounded-squircle border border-border-subtle bg-surface p-4 shadow-sm hover:shadow-md transition-shadow duration-150 flex flex-col justify-between space-y-3" /* taste-skill-ignore: card elevation per AGENTS.md */
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-text-primary tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-medium text-brand px-2 py-0.5 rounded-squircle-sm bg-brand/10 border border-brand/20 shrink-0">
                    {isNl ? item.focusNl : item.focusEn}
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-1">
                  {isNl ? item.highlightNl : item.highlightEn}
                </p>
              </div>

              {/* Counter Display */}
              <div className="pt-2 flex items-baseline justify-between gap-2">
                <span className="font-serif text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                  {duration.primary}
                </span>
                <span className="text-xs text-text-muted font-medium tabular-nums" title={isNl ? "Dagen, uren en minuten sinds aanvang" : "Days, hours, and minutes elapsed"}>
                  {duration.secondary}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
