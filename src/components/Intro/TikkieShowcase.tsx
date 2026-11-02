import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import TikkieOperationsInspector from "./TikkieOperationsInspector";

export default function TikkieShowcase() {
  const { t } = useLanguage();
  const tikkieSkills = [
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "Client Onboarding",
    "Payouts",
  ];

  return (
    <article className="rounded-xl p-5 sm:p-6 bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-shadow duration-150 space-y-5">
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
            <span className="text-brand">{t.intro.tikkieTag}</span>
            <span className="text-text-muted/40">/</span>
            <span>Production</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
            {t.intro.tikkieTitle}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary">
            {t.intro.tikkieSubtitle}
          </p>
        </div>
        <Link
          to="/work-experience"
          className="text-xs font-medium text-brand hover:text-brand-hover transition-colors duration-150 self-start sm:self-auto py-1"
        >
          {t.intro.tikkieLink}
        </Link>
      </div>

      {/* Narrative */}
      <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-[62ch]">
        {t.intro.tikkieDescription}
      </p>

      {/* Interactive Operations Workflow Inspector */}
      <TikkieOperationsInspector />

      {/* Deliberate Tech Stack Chips */}
      <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="font-medium text-text-muted mr-1">Stack:</span>
        {tikkieSkills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded-md bg-surface-subtle text-text-secondary border border-border-subtle font-mono text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
