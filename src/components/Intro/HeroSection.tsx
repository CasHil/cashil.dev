import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="space-y-5">
      {/* Intentional Eyebrow with Brand Indicator */}
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-brand" aria-hidden="true" />
        <span>{t.intro.kicker}</span>
      </div>

      {/* Editorial Hero Statement */}
      <h1
        id="hero-title"
        className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.18]"
      >
        {t.intro.heroTitle}
      </h1>

      {/* Concise Scannable Bio */}
      <div className="space-y-2.5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
        <p>{t.intro.bioParagraph1}</p>
        <p>{t.intro.bioParagraph2}</p>
      </div>

      {/* Crisp, Deliberate Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 text-sm">
        <Link
          to="/cv"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-white font-semibold text-xs sm:text-sm shadow-xs hover:bg-brand-hover active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.intro.viewCv}</span>
          <span className="opacity-75 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
        <Link
          to="/work-experience"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-brand/40 dark:hover:border-brand/40 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.intro.exploreWork}</span>
          <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
