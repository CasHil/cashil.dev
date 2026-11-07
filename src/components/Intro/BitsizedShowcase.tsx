import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function BitsizedShowcase() {
  const { t } = useLanguage();

  return (
    <article className="space-y-4">
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary">
            {t.intro.bitsizedTitle}
          </h3>
          <p className="text-base text-brand font-medium">
            {t.intro.bitsizedSubtitle}
          </p>
        </div>
        <span className="text-xs text-text-muted shrink-0 tabular-nums">
          {t.intro.bitsizedTag}
        </span>
      </div>

      {/* Narrative */}
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[70ch]">
        {t.intro.bitsizedDescription}
      </p>

      {/* Concrete, Authentic Responsibilities */}
      <ul className="space-y-2 text-sm sm:text-base text-text-secondary max-w-[70ch] pt-1">
        {t.intro.bitsizedPoints.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-brand shrink-0" aria-hidden="true">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack in clean proportional sans */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-text-muted">
        {t.intro.bitsizedStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-normal"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Navigation Link */}
      <div className="pt-1">
        <Link
          to="/work-experience"
          className="group text-sm font-medium text-brand hover:underline inline-flex items-center gap-1"
        >
          <span>{t.intro.bitsizedLink}</span>
          <span className="transition-transform duration-150 group-hover:translate-x-0.5 inline-block" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
