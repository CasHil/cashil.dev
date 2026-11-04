import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="space-y-8 pt-4 sm:pt-8">
      {/* 2-line maximum headline */}
      <h1
        id="hero-title"
        className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-text-primary leading-[1.05] max-w-[24ch]"
      >
        {t.intro.heroTitle}
      </h1>

      {/* Grounded narrative */}
      <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[65ch]">
        <p>{t.intro.bioParagraph1}</p>
        <p>{t.intro.bioParagraph2}</p>
      </div>

      {/* Clear primary actions */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          to="/work-experience"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-squircle bg-text-primary text-canvas font-medium text-sm hover:opacity-90 active:scale-[0.99] transition-opacity"
        >
          <span>{t.intro.exploreWork}</span>
          <span className="ml-1.5" aria-hidden="true">→</span>
        </Link>
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-squircle text-text-secondary hover:text-brand text-sm font-medium transition-colors underline underline-offset-4 decoration-border-hover hover:decoration-brand"
        >
          {t.intro.viewCv}
        </Link>
      </div>
    </section>
  );
}
