import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const pub = t.education.publication;

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
          {t.education.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {t.education.intro}
        </p>
      </div>

      {/* Section 1: Academic Degrees & Credentials */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.education.thesisTitle}
          </h2>
        </div>
        <Timeline data={t.education.items} />
      </div>

      {/* Section 2: Master's Thesis Research Ledger (Open Editorial, Zero Boxed Cards) */}
      <section aria-labelledby="thesis-publication-title" className="pt-8 border-t border-zinc-200/80 dark:border-white/10 space-y-4">
        <article className="relative rounded-[2rem] p-6 sm:p-8 bg-gradient-to-b from-zinc-50/80 via-white/40 to-transparent dark:from-zinc-900/40 dark:via-zinc-950/20 dark:to-transparent space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                {pub.badge}
              </span>
              <span className="h-1 w-1 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">TU Delft Repository</span>
            </div>
            <h3 id="thesis-publication-title" className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {pub.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {pub.subtitle}
            </p>
          </div>

          {/* Floating Typographic Telemetry Ledger (Zero Box Enclosure) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2 border-y border-zinc-200/70 dark:border-white/10">
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-zinc-950 dark:text-white" data-tabular>
                {pub.datasetStat}
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {pub.datasetLabel}
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-700 dark:text-emerald-400" data-tabular>
                {pub.runsStat}
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {pub.runsLabel}
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-sky-700 dark:text-sky-400" data-tabular>
                {pub.gapStat}
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {pub.gapLabel}
              </span>
            </div>
          </div>

          {/* Abstract */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
            {pub.abstract}
          </p>

          {/* Methodology Run (Zero Pill Confetti) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-zinc-400 dark:text-zinc-500">Methods:</span>
            {pub.methods.map((method, idx) => (
              <span key={method} className="flex items-center gap-2">
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">{method}</span>
                {idx < pub.methods.length - 1 && (
                  <span className="text-zinc-300 dark:text-zinc-700 select-none">/</span>
                )}
              </span>
            ))}
          </div>

          {/* Direct Repository Link */}
          <div className="pt-1">
            <a
              href={pub.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
            >
              <span>{pub.repositoryText}</span>
              <span className="font-mono" aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>

      {/* Strict 2-CTA Action Bar */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Link
          to="/cv"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.outreach.cvBtn}</span>
          <span className="font-mono opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
        <Link
          to="/work-experience"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.workExperience.title}</span>
          <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
