import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="space-y-8 pt-4 sm:pt-6">
      {/* 2-line maximum headline speaks first with full editorial authority (No eyebrow/kicker) */}
      <h1
        id="hero-title"
        className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-text-primary leading-[1.05] max-w-[24ch]"
      >
        {t.intro.heroTitle}
      </h1>

      {/* Grounded narrative with organic profile avatar */}
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
        <img
          src="/images/profile.webp"
          alt="Casper Hildebrand"
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-1 ring-border-subtle ring-offset-2 ring-offset-canvas shadow-xs shrink-0"
        />
        <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[65ch]">
          <p>{t.intro.bioParagraph1}</p>
          <p>{t.intro.bioParagraph2}</p>
        </div>
      </div>

      {/* Clear primary actions (Emphasized CTA per Rule 10) */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          to="/work-experience"
          className="group inline-flex items-center justify-center px-5 py-2.5 rounded-squircle bg-text-primary text-canvas font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <span>{t.intro.exploreWork}</span>
          <span className="ml-1.5 transition-transform duration-150 group-hover:translate-x-0.5 inline-block" aria-hidden="true">→</span>
        </Link>
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-squircle text-text-secondary hover:text-brand text-sm font-medium transition-colors underline underline-offset-4 decoration-border-hover hover:decoration-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {t.intro.viewCv}
        </Link>
      </div>
    </section>
  );
}
