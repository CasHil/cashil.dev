import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="space-y-4 pt-1 sm:pt-2">
      {/* Grounded Headline */}
      <h1
        id="hero-title"
        className="font-display text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-text-primary leading-[1.25] max-w-[34ch]"
      >
        {t.intro.heroTitle}
      </h1>

      {/* Direct Bio */}
      <div className="space-y-2.5 text-sm sm:text-base text-text-secondary leading-relaxed max-w-[65ch]">
        <p>{t.intro.bioParagraph1}</p>
        <p>{t.intro.bioParagraph2}</p>
      </div>

      {/* Confident, Quiet Action Links */}
      <div className="flex flex-wrap items-center gap-3 pt-1 text-sm">
        <Link
          to="/work-experience"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-brand-hover active:scale-[0.99] transition-colors duration-150 min-h-[38px]"
        >
          {t.intro.exploreWork}
        </Link>
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-text-secondary hover:text-text-primary text-xs sm:text-sm font-medium transition-colors duration-150 min-h-[38px]"
        >
          {t.intro.viewCv}
        </Link>
      </div>
    </section>
  );
}
