import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="space-y-4 pt-1 sm:pt-2">
      {/* Editorial Headline */}
      <h1
        id="hero-title"
        className="font-display text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-tight text-text-primary leading-[1.22] max-w-[28ch]"
      >
        {t.intro.heroTitle}
      </h1>

      {/* Grounded Bio */}
      <div className="space-y-2 text-sm sm:text-base text-text-secondary leading-relaxed max-w-[62ch]">
        <p>{t.intro.bioParagraph1}</p>
        <p>{t.intro.bioParagraph2}</p>
      </div>

      {/* Precise Action Buttons (No Glued Arrows, Floor Gate 63) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 text-sm">
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-brand-hover active:scale-[0.99] transition-colors duration-150 min-h-[40px]"
        >
          {t.intro.viewCv}
        </Link>
        <Link
          to="/work-experience"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-border-subtle bg-surface text-text-primary font-medium text-xs sm:text-sm shadow-sm hover:border-border-hover hover:bg-surface-hover active:scale-[0.99] transition-colors duration-150 min-h-[40px]"
        >
          {t.intro.exploreWork}
        </Link>
      </div>
    </section>
  );
}
