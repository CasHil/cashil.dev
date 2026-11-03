import { useLanguage } from "../../context/LanguageContext";

export default function EngineeringEthos() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="engineering-ethos-title" className="space-y-8 pt-10">
      <div className="space-y-2">
        <h2
          id="engineering-ethos-title"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-text-primary"
        >
          {t.intro.ethosTitle}
        </h2>
        <p className="text-sm text-text-muted">
          {t.intro.ethosSubtitle}
        </p>
        <p className="text-base text-text-secondary leading-relaxed max-w-[70ch] pt-1">
          {t.intro.ethosDescription}
        </p>
      </div>

      {/* 3 Core Engineering Pillars in Open Typographic Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
        {t.intro.ethosPillars.map((pillar, idx) => (
          <div key={idx} className="space-y-2 border-t-2 border-brand/30 pt-4">
            <h3 className="text-lg font-serif font-normal text-text-primary">
              {pillar.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Outside Engineering */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm">
        <div>
          <span className="font-medium text-text-primary block">
            {t.intro.outsideTitle}
          </span>
          <span className="text-text-secondary mt-0.5 block">
            {t.intro.outsideDescription}
          </span>
        </div>
      </div>
    </section>
  );
}
