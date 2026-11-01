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

      {/* Section 1: Academic Degrees */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.education.thesisTitle}
          </h2>
        </div>
        <Timeline data={t.education.items} />
      </div>

      {/* Section 2: Master's Thesis Research Publication Card */}
      <section aria-labelledby="thesis-publication-title" className="pt-6 border-t border-zinc-200/80 dark:border-white/10 space-y-4">
        <article className="relative rounded-2xl p-5 sm:p-6 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {pub.badge}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">TU Delft Repository</span>
            </div>
            <h3 id="thesis-publication-title" className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {pub.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {pub.subtitle}
            </p>
          </div>

          {/* Abstract */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
            {pub.abstract}
          </p>

          {/* Direct Repository Link */}
          <div className="pt-1">
            <a
              href={pub.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
            >
              <span>{pub.repositoryText}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>

      {/* Strict 2-CTA Action Bar */}
      <div className="pt-6 border-t border-zinc-200/80 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Link
          to="/cv"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-white font-semibold text-xs sm:text-sm shadow-xs hover:bg-brand-hover active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.outreach.cvBtn}</span>
          <span className="opacity-75 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
        <Link
          to="/work-experience"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-brand/40 dark:hover:border-brand/40 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.workExperience.title}</span>
          <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
