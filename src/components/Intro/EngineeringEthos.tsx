import { useLanguage } from "../../context/LanguageContext";

export default function EngineeringEthos() {
  const { t } = useLanguage();

  return (
    <article className="rounded-xl p-5 sm:p-6 bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-shadow duration-150 space-y-5">
      <div>
        <span className="text-xs font-medium text-brand">
          {t.intro.ethosTag}
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary mt-1">
          {t.intro.ethosTitle}
        </h2>
        <p className="text-xs sm:text-sm text-text-muted mt-0.5">
          {t.intro.ethosSubtitle}
        </p>
      </div>

      <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-[62ch]">
        {t.intro.ethosDescription}
      </p>

      {/* 3 Core Engineering Pillars (Single containment layer, Gate 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 sm:divide-x sm:divide-border-subtle">
        {t.intro.ethosPillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`space-y-1.5 ${idx > 0 ? "sm:pl-4" : ""}`}
          >
            <div className="text-xs font-semibold text-brand" data-tabular>
              0{idx + 1}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-text-primary">
              {pillar.title}
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Outside Engineering / Grounded Personal Interests */}
      <div className="pt-3 border-t border-border-subtle space-y-1">
        <h3 className="text-xs font-semibold text-text-primary">
          {t.intro.outsideTitle}
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          {t.intro.outsideDescription}
        </p>
      </div>
    </article>
  );
}
