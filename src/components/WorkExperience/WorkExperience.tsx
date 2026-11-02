import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline";
import DisclosureSection from "./DisclosureSection";
import { useLanguage } from "../../context/LanguageContext";

export default function WorkExperience() {
  const { t } = useLanguage();

  const coreEngineeringRoles = t.workExperience.items.filter(
    (item) => item.category === "engineering" && item.tier !== "foundational"
  );
  const earlyEngineeringRoles = t.workExperience.items.filter(
    (item) => item.category === "engineering" && item.tier === "foundational"
  );
  const educationRoles = t.workExperience.items.filter(
    (item) => item.category === "education"
  );

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
          {t.workExperience.title}
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-[65ch]">
          {t.workExperience.intro}
        </p>
      </div>

      {/* Section 1: Software Engineering & Production Systems */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-text-primary">
            {t.workExperience.primaryHeading}
          </h2>
          {t.workExperience.primarySubtitle && (
            <p className="text-xs text-text-muted mt-0.5">
              {t.workExperience.primarySubtitle}
            </p>
          )}
        </div>

        <div className="pt-1">
          <Timeline data={coreEngineeringRoles} />
        </div>

        {/* Progressive Disclosure: Early Engineering Roles */}
        {earlyEngineeringRoles.length > 0 && (
          <div className="pt-2">
            <DisclosureSection
              idPrefix="early-engineering"
              title={t.workExperience.earlyEngineeringTitle}
              badge={t.workExperience.earlyEngineeringBadge}
              summary={t.workExperience.earlyEngineeringSubtitle}
              openLabel={t.workExperience.showEarlyEngineering}
              closeLabel={t.workExperience.hideEarlyEngineering}
              showBottomCollapse={false}
            >
              <Timeline data={earlyEngineeringRoles} />
            </DisclosureSection>
          </div>
        )}
      </div>

      {/* Section 2: Teaching & Academic Leadership (Direct Visibility) */}
      {educationRoles.length > 0 && (
        <div className="pt-6 border-t border-border-subtle space-y-6">
          <div>
            <span className="text-xs font-medium text-brand">
              {t.workExperience.academicBadge}
            </span>
            <h2 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-text-primary mt-1">
              {t.workExperience.academicHeading}
            </h2>
            {t.workExperience.academicSummary && (
              <p className="text-xs text-text-muted mt-0.5">
                {t.workExperience.academicSummary}
              </p>
            )}
          </div>

          <div className="pt-1">
            <Timeline data={educationRoles} />
          </div>
        </div>
      )}

      {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary (No glued arrows, Gate 63) */}
      <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <Link
          to="/cv"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-brand-hover active:scale-[0.99] transition-colors duration-150 min-h-[40px]"
        >
          {t.workExperience.cvBtn}
        </Link>
        <Link
          to="/education"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-border-subtle bg-surface text-text-primary font-medium text-xs sm:text-sm shadow-sm hover:border-border-hover hover:bg-surface-hover active:scale-[0.99] transition-colors duration-150 min-h-[40px]"
        >
          {t.workExperience.educationBtn}
        </Link>
      </div>
    </div>
  );
}
