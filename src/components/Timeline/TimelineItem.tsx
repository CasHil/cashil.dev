import { TimelineItemData } from "../../types";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

interface TimelineItemProps {
  data: TimelineItemData;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <article className="group space-y-3 p-5 sm:p-6 rounded-xl bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-shadow duration-150">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
        {/* Role Title & Organization with Inline Logo */}
        <div className="flex items-start gap-3">
          {data.image && (
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt}
              className="h-8 w-8 rounded-lg object-contain bg-white p-1 ring-1 ring-border-subtle shrink-0 mt-0.5"
              loading="lazy"
            />
          )}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-brand transition-colors duration-150 leading-tight">
              {data.title}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-0.5">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Date & Status Meta */}
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted sm:text-right shrink-0" data-tabular>
          <span>
            {data.startDate} {t.workExperience.to} {data.endDate}
          </span>
          {data.current && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-brand-subtle text-brand border border-brand-border">
              {t.workExperience.currentBadge}
            </span>
          )}
        </div>
      </div>

      {/* Narrative / Achievements using FormattedBullet */}
      {data.text && (
        <ul className="space-y-1.5 pt-1 text-sm sm:text-base text-text-secondary max-w-[62ch]">
          {data.text.split("\n").map((line, idx) => (
            <FormattedBullet key={idx} text={line} />
          ))}
        </ul>
      )}

      {/* Tech Stack / Skills (Clean deliberate chips) */}
      {data.skills && data.skills.length > 0 && (
        <div className="pt-1.5 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-medium text-text-muted mr-1">Stack:</span>
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md bg-surface-subtle text-text-secondary border border-border-subtle font-mono text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
