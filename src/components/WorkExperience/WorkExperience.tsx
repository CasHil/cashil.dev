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
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
          {t.workExperience.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {t.workExperience.intro}
        </p>
      </div>

      {/* Section 1: Software Engineering & Production Systems */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.workExperience.primaryHeading}
          </h2>
          {t.workExperience.primarySubtitle && (
            <p className="text-xs font-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t.workExperience.primarySubtitle}
            </p>
          )}
        </div>

        <div className="pt-2">
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

      {/* Section 2: Teaching & Academic Experience (Progressive Disclosure) */}
      {educationRoles.length > 0 && (
        <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 space-y-4">
          <DisclosureSection
            idPrefix="academic-experience"
            title={t.workExperience.academicHeading}
            badge={t.workExperience.academicBadge}
            summary={t.workExperience.academicSummary}
            openLabel={t.workExperience.showAcademic}
            closeLabel={t.workExperience.hideAcademic}
          >
            <Timeline data={educationRoles} />
          </DisclosureSection>
        </div>
      )}

      {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Link
          to="/cv"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.workExperience.cvBtn}</span>
          <span className="font-mono opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
        <Link
          to="/education"
          className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[42px]"
        >
          <span>{t.workExperience.educationBtn}</span>
          <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
