import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

export default function BitsizedShowcase() {
  const { t } = useLanguage();
  const bitsizedSkills = ["TypeScript", "React", "Node.js", "Docker", "Web Workers", "AST Evaluation"];

  return (
    <article className="rounded-xl p-6 sm:p-7 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/90 dark:border-white/[0.08] shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {t.intro.bitsizedTag}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
            {t.intro.bitsizedTitle}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {t.intro.bitsizedSubtitle}
          </p>
        </div>
        <Link
          to="/work-experience"
          className="group inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors self-start sm:self-auto py-1"
        >
          <span>{t.intro.bitsizedLink}</span>
          <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        {t.intro.bitsizedDescription}
      </p>

      {/* Real Systems Sandbox Architecture Breakdown */}
      <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 p-4 space-y-3">
        <div>
          <h4 className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
            {t.intro.bitsizedArchTitle}
          </h4>
          <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
            {t.intro.bitsizedArchSubtitle}
          </span>
        </div>

        {/* 3 Architecture Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          {t.intro.bitsizedPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-white/5 space-y-1 shadow-2xs"
            >
              <div className="font-bold text-xs text-zinc-900 dark:text-white">
                {item.title}
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Highlights */}
      {t.intro.bitsizedHighlights && (
        <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[62ch]">
          {t.intro.bitsizedHighlights.map((point, idx) => (
            <FormattedBullet key={idx} text={point} />
          ))}
        </ul>
      )}

      {/* Clean Tech Stack Tags */}
      <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="font-mono text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
        {bitsizedSkills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
