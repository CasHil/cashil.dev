import { TimelineItemData } from "../../types";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

interface TimelineItemProps {
  data: TimelineItemData;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <article className="py-7 grid gap-3 sm:gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <div className="space-y-1">
        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-text-primary leading-tight">{data.title}</h2>
        <p className="text-base text-text-secondary">{data.subtitle}</p>
        <p className="text-sm text-text-muted tabular-nums">
          {data.startDate} {t.workExperience.to} {data.endDate}
        </p>
      </div>

      <div className="space-y-3 max-w-[62ch]">
        {data.text && (
          <ul className="space-y-2">
            {data.text.split("\n").map((line) => (
              <FormattedBullet key={line} text={line} />
            ))}
          </ul>
        )}
        {data.skills && data.skills.length > 0 && (
          <p className="text-sm text-text-muted">{data.skills.join(", ")}</p>
        )}
      </div>
    </article>
  );
}
