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
        <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
          {t.education.title}
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-[65ch]">
          {t.education.intro}
        </p>
      </div>

      {/* Section 1: Academic Degrees */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-text-primary">
            {t.education.thesisTitle}
          </h2>
        </div>
        <Timeline data={t.education.items} />
      </div>

      {/* Section 2: Master's Thesis Research Publication Card */}
      <section aria-labelledby="thesis-publication-title" className="pt-6 border-t border-border-subtle space-y-4">
        <article className="rounded-xl p-5 sm:p-6 bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-shadow duration-150 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
              <span className="text-brand">{pub.badge}</span>
              <span className="text-text-muted/40">/</span>
              <span>TU Delft Repository</span>
            </div>
            <h3 id="thesis-publication-title" className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
              {pub.title}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted">
              {pub.subtitle}
            </p>
          </div>

          {/* Abstract */}
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-[62ch]">
            {pub.abstract}
          </p>

          {/* Direct Repository Link (No glued arrow, Gate 63) */}
          <div className="pt-1">
            <a
              href={pub.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-brand hover:text-brand-hover transition-colors duration-150"
            >
              {pub.repositoryText}
            </a>
          </div>
        </article>
      </section>

      {/* Strict 2-CTA Action Bar (No glued arrows, Gate 63) */}
      <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-brand-hover active:scale-[0.99] transition-colors duration-150 min-h-[40px]"
        >
          {t.outreach.cvBtn}
        </Link>
        <Link
          to="/work-experience"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-border-subtle bg-surface text-text-primary font-medium text-xs sm:text-sm shadow-sm hover:border-border-hover hover:bg-surface-hover active:scale-[0.99] transition-colors duration-150 min-h-[40px]"
        >
          {t.workExperience.title}
        </Link>
      </div>
    </div>
  );
}
