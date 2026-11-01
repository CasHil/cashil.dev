import { useLanguage } from "../../context/LanguageContext";

export default function EngineeringEthos() {
  const { t } = useLanguage();

  return (
    <article className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow space-y-5">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          {t.intro.ethosTag}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mt-1">
          {t.intro.ethosTitle}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
          {t.intro.ethosSubtitle}
        </p>
      </div>

      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        {t.intro.ethosDescription}
      </p>

      {/* 3 Core Engineering Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
        {t.intro.ethosPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-white/10 shadow-2xs space-y-1.5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="text-xs font-bold text-brand">
              0{idx + 1}
            </div>
            <div className="text-sm font-bold text-zinc-950 dark:text-white">
              {pillar.title}
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Outside Engineering / Grounded Personal Interests */}
      <div className="pt-3 border-t border-zinc-200/80 dark:border-white/10 space-y-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
          {t.intro.outsideTitle}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {t.intro.outsideDescription}
        </p>
      </div>
    </article>
  );
}
