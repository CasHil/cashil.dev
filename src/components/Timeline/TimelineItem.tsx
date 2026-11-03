import { TimelineItemData } from "../../types";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

interface TimelineItemProps {
  data: TimelineItemData;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <article className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        {/* Role Title & Organization with Inline Logo */}
        <div className="flex items-start gap-3">
          {data.image && (
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt}
              className="h-8 w-8 rounded object-contain bg-white p-1 ring-1 ring-border-subtle shrink-0 mt-0.5"
              loading="lazy"
            />
          )}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-text-primary leading-tight">
              {data.title}
            </h3>
            <p className="text-sm text-text-muted">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Date & Status Meta */}
        <div className="text-xs sm:text-sm text-text-muted sm:text-right shrink-0">
          <span>
            {data.startDate} {t.workExperience.to} {data.endDate}
          </span>
          {data.current && (
            <span className="text-brand font-medium ml-2">
              · {t.workExperience.currentBadge}
            </span>
          )}
        </div>
      </div>

      {/* Narrative / Achievements */}
      {data.text && (
        <ul className="space-y-1.5 text-sm sm:text-base text-text-secondary max-w-[70ch]">
          {data.text.split("\n").map((line, idx) => (
            <FormattedBullet key={idx} text={line} />
          ))}
        </ul>
      )}

      {/* Tech Stack in Proportional Text */}
      {data.skills && data.skills.length > 0 && (
        <p className="text-sm text-text-muted leading-relaxed">
          <strong className="text-text-primary font-medium">Stack:</strong>{" "}
          {data.skills.join(", ")}
        </p>
      )}
    </article>
  );
}
