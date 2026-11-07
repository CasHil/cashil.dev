import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline";
import { useLanguage } from "../../context/LanguageContext";

export default function WorkExperience() {
  const { t } = useLanguage();

  const engineeringRoles = t.workExperience.items.filter(
    (item) => item.category === "engineering"
  );
  const educationRoles = t.workExperience.items.filter(
    (item) => item.category === "education"
  );

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text-primary">
          {t.workExperience.title}
        </h1>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[65ch]">
          {t.workExperience.intro}
        </p>
      </div>

      {/* Section 1: Software Engineering & Production Systems */}
      <div className="space-y-6">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-text-primary">
            {t.workExperience.primaryHeading}
          </h2>
          {t.workExperience.primarySubtitle && (
            <p className="text-sm text-text-muted mt-1">
              {t.workExperience.primarySubtitle}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Timeline data={engineeringRoles} />
        </div>
      </div>

      {/* Section 2: Teaching & Academic Leadership */}
      {educationRoles.length > 0 && (
        <div className="pt-10 space-y-6">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-text-primary">
              {t.workExperience.academicHeading}
            </h2>
            <p className="text-sm text-text-muted mt-1">
              {t.workExperience.academicSummary} · {t.workExperience.academicBadge}
            </p>
          </div>

          <div className="pt-2">
            <Timeline data={educationRoles} />
          </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-squircle bg-text-primary text-canvas font-medium text-xs sm:text-sm hover:opacity-90 active:scale-[0.98] shadow-sm hover:shadow-md transition-all min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {t.workExperience.cvBtn}
        </Link>
        <Link
          to="/education"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-squircle border border-border-subtle bg-surface hover:bg-surface-hover text-text-primary font-medium text-xs sm:text-sm active:scale-[0.99] transition-colors min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {t.workExperience.educationBtn}
        </Link>
      </div>
    </div>
  );
}
