import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const pub = t.education.publication;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text-primary">
          {t.education.title}
        </h1>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[65ch]">
          {t.education.intro}
        </p>
      </div>

      {/* Section 1: Academic Degrees */}
      <div className="space-y-6">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-text-primary">
            {t.education.thesisTitle}
          </h2>
        </div>
        <Timeline data={t.education.items} />
      </div>

      {/* Section 2: Master's Thesis Research Publication */}
      <section aria-labelledby="thesis-publication-title" className="pt-6 space-y-4">
        <div>
          <h2 id="thesis-publication-title" className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-text-primary">
            {pub.title}
          </h2>
          <p className="text-sm text-text-muted mt-1">
            {pub.subtitle} · {pub.badge}
          </p>
        </div>

        {/* Abstract */}
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-[70ch]">
          {pub.abstract}
        </p>

        {/* Direct Repository Link */}
        <div className="pt-1">
          <a
            href={pub.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand hover:underline inline-flex items-center gap-1"
          >
            <span>{pub.repositoryText}</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Action Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-squircle bg-text-primary text-canvas font-medium text-xs sm:text-sm hover:opacity-90 active:scale-[0.98] shadow-sm hover:shadow-md transition-all min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {t.outreach.cvBtn}
        </Link>
        <Link
          to="/work-experience"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-squircle border border-border-subtle bg-surface hover:bg-surface-hover text-text-primary font-medium text-xs sm:text-sm active:scale-[0.99] transition-colors min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {t.workExperience.title}
        </Link>
      </div>
    </div>
  );
}
