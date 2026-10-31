import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="space-y-6">
      {/* Clean Typographic Eyebrow (Zero AI pills, zero green ping dots) */}
      <div className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
        {t.intro.kicker}
      </div>

      {/* Editorial Hero Statement */}
      <h1
        id="hero-title"
        className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.18]"
      >
        {t.intro.heroTitle}
      </h1>

      {/* Concise Scannable Bio */}
      <div className="space-y-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        <p>{t.intro.bioParagraph1}</p>
        <p>{t.intro.bioParagraph2}</p>
      </div>

      {/* Crisp, Deliberate Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 text-sm">
        <Link
          to="/cv"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.intro.viewCv}</span>
          <span className="font-mono opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
        <Link
          to="/work-experience"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.intro.exploreWork}</span>
          <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
