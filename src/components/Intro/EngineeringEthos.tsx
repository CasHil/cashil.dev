import { useLanguage } from "../../context/LanguageContext";

export default function EngineeringEthos() {
  const { t } = useLanguage();

  return (
    <article className="rounded-xl p-6 sm:p-7 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/90 dark:border-white/[0.08] shadow-xs space-y-6">
      <div>
        <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          {t.intro.ethosTag}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
          {t.intro.ethosTitle}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {t.intro.ethosSubtitle}
        </p>
      </div>

      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        {t.intro.ethosDescription}
      </p>

      {/* 3 Didactic Systems Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {t.intro.ethosPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-lg bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/70 dark:border-white/5 space-y-1.5"
          >
            <div className="text-xs font-bold text-zinc-900 dark:text-white">
              {pillar.title}
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Outside of Work / Authentic Human Grounding */}
      <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-1.5">
        <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
          {t.intro.outsideTitle}
        </h4>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
          {t.intro.outsideDescription}
        </p>
      </div>
    </article>
  );
}
