import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

export default function TikkieShowcase() {
  const { t } = useLanguage();
  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Onboarding Systems"];

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

      {/* Systems Architecture Stations (Single containment layer with internal hairline grid, Gate 4) */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-semibold text-text-primary">
              {t.intro.tikkiePipelineTitle}
            </h4>
            <span className="block text-xs text-text-muted mt-0.5">
              {t.intro.tikkiePipelineSubtitle}
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs font-medium text-text-muted">
            End-to-end pipeline
          </span>
        </div>

        {/* 4 Architectural Stations: Mobile Snap Strip + Desktop Hairline Grid */}
        <div
          data-carousel="true"
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-0 sm:border sm:border-border-subtle sm:rounded-lg sm:divide-x sm:divide-border-subtle sm:bg-surface-subtle/40 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pt-1 pb-1 sm:py-0"
        >
          {t.intro.tikkiePipelineStages.map((stage) => (
            <div
              key={stage.id}
              className="w-[78vw] max-w-[260px] shrink-0 snap-center rounded-lg sm:rounded-none p-3.5 bg-surface-subtle/50 sm:bg-transparent border border-border-subtle sm:border-none sm:w-auto sm:max-w-none space-y-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-brand" data-tabular>Stage {stage.stage.replace(/^0/, "")}</span>
                <span className="text-xs text-text-muted truncate">
                  {stage.subtitle}
                </span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-text-primary">
                {stage.title}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Highlights */}
      {t.intro.tikkieHighlights && (
        <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-text-secondary max-w-[62ch]">
          {t.intro.tikkieHighlights.map((point, idx) => (
            <FormattedBullet key={idx} text={point} />
          ))}
        </ul>
      )}

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
