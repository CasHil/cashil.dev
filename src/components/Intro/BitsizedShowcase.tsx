import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

export default function BitsizedShowcase() {
  const { t } = useLanguage();
  const bitsizedSkills = ["TypeScript", "React", "Node.js", "Docker", "Web Workers", "Browser Sandboxing"];

  return (
    <article className="relative rounded-2xl p-5 sm:p-6 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow space-y-5">
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              {t.intro.bitsizedTag}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Classroom Production</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.intro.bitsizedTitle}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {t.intro.bitsizedSubtitle}
          </p>
        </div>
        <Link
          to="/work-experience"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors self-start sm:self-auto py-1"
        >
          <span>{t.intro.bitsizedLink}</span>
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {/* Narrative */}
      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        {t.intro.bitsizedDescription}
      </p>

      {/* Client-Side Sandbox Architecture */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-zinc-950 dark:text-white tracking-tight uppercase">
              {t.intro.bitsizedArchTitle}
            </h4>
            <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t.intro.bitsizedArchSubtitle}
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
            Client-Side Sandbox
          </span>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex sm:hidden items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 pt-0.5">
          <span>Core Principles</span>
          <span className="flex items-center gap-1 text-brand font-medium">
            <span>Swipe</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* 3 Principles: Mobile Swipe Deck + Desktop Grid */}
        <div
          data-carousel="true"
          className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pt-1 pb-1 sm:pb-0"
        >
          {t.intro.bitsizedPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="w-[78vw] max-w-[270px] shrink-0 snap-center rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-white/10 shadow-2xs sm:w-auto sm:max-w-none space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-brand">Principle {idx + 1}</span>
              </div>
              <div className="font-bold text-sm text-zinc-950 dark:text-white">
                {item.title}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Highlights */}
      {t.intro.bitsizedHighlights && (
        <ul className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[62ch]">
          {t.intro.bitsizedHighlights.map((point, idx) => (
            <FormattedBullet key={idx} text={point} />
          ))}
        </ul>
      )}

      {/* Deliberate Tech Stack Chips */}
      <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="font-medium text-zinc-400 dark:text-zinc-500 mr-1">Stack:</span>
        {bitsizedSkills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/10 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
