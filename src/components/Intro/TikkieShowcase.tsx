import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

export default function TikkieShowcase() {
  const { t } = useLanguage();

  return (
    <article
      data-ui
      className="rounded-squircle bg-surface border border-border-subtle p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-150 space-y-5"
    >
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary">
            {t.intro.tikkieTitle}
          </h3>
          <p className="text-base text-brand font-medium">
            {t.intro.tikkieSubtitle}
          </p>
        </div>
        <span className="text-xs text-text-muted shrink-0 tabular-nums">
          {t.intro.tikkieTag}
        </span>
      </div>

      {/* Narrative */}
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[70ch]">
        {t.intro.tikkieDescription}
      </p>

      {/* Concrete, Authentic Responsibilities */}
      <ul className="space-y-1.5 text-sm sm:text-base text-text-secondary max-w-[70ch]">
        {t.intro.tikkiePoints.map((point, idx) => (
          <FormattedBullet key={idx} text={point} />
        ))}
      </ul>

      {/* Technologies in clean proportional text without nested cards/chips */}
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1 text-xs text-text-muted">
        {t.intro.tikkieStack.map((tech, idx) => (
          <span key={idx} className="text-text-secondary">
            {idx > 0 && <span className="text-border-hover mr-2.5 select-none" aria-hidden="true">·</span>}
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
          <span>{t.intro.tikkieLink}</span>
          <span className="transition-transform duration-150 group-hover:translate-x-0.5 inline-block" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
