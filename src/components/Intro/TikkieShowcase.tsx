import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";
import FlowRibbonConduit from "../common/FlowRibbonConduit";

export default function TikkieShowcase() {
  const { t } = useLanguage();
  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Onboarding Systems"];

  return (
    <article className="relative rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow space-y-6">
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              {t.intro.tikkieTag}
            </span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Production</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.intro.tikkieTitle}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {t.intro.tikkieSubtitle}
          </p>
        </div>
        <Link
          to="/work-experience"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors self-start sm:self-auto py-1"
        >
          <span>{t.intro.tikkieLink}</span>
          <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {/* Narrative */}
      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        {t.intro.tikkieDescription}
      </p>

      {/* Systems Architecture Stations */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-zinc-950 dark:text-white tracking-tight uppercase font-mono">
              {t.intro.tikkiePipelineTitle}
            </h4>
            <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
              {t.intro.tikkiePipelineSubtitle}
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <svg viewBox="0 0 16 8" fill="none" className="w-4 h-2 stroke-current">
              <path d="M1 4h14m-4-3l4 3-4 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            End-to-End Flow
          </span>
        </div>

        {/* Continuous Flow Ribbon SVG (Desktop) */}
        <div className="hidden sm:block">
          <FlowRibbonConduit />
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex sm:hidden items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500 pt-1">
          <span>Pipeline Stages</span>
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <span>Swipe</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* 4 Architectural Stations: Mobile Swipe Deck + Desktop Grid */}
        <div
          data-carousel="true"
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pt-1 pb-2 sm:pb-0"
        >
          {t.intro.tikkiePipelineStages.map((stage) => (
            <div
              key={stage.id}
              className="w-[78vw] max-w-[270px] shrink-0 snap-center rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-white/10 shadow-xs sm:w-auto sm:max-w-none space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                <span className="font-bold text-emerald-700 dark:text-emerald-400">{stage.stage}</span>
                <span className="opacity-40">//</span>
                <span className="uppercase text-xs tracking-wider truncate">{stage.subtitle}</span>
              </div>
              <div className="font-bold text-sm text-zinc-950 dark:text-white">
                {stage.title}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Highlights */}
      {t.intro.tikkieHighlights && (
        <ul className="space-y-2 pt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[62ch]">
          {t.intro.tikkieHighlights.map((point, idx) => (
            <FormattedBullet key={idx} text={point} />
          ))}
        </ul>
      )}

      {/* Monospaced Editorial Stack Run */}
      <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
        <span className="text-zinc-400 dark:text-zinc-500">Stack:</span>
        {tikkieSkills.map((skill, idx) => (
          <span key={skill} className="flex items-center gap-2">
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">{skill}</span>
            {idx < tikkieSkills.length - 1 && (
              <span className="text-zinc-300 dark:text-zinc-700 select-none">/</span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}
