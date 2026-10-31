import { TimelineItemData } from "../../types";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

interface TimelineItemProps {
  data: TimelineItemData;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <article className="group space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        {/* Role Title & Organization with Inline Logo */}
        <div className="flex items-start gap-2.5">
          {data.image && (
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt}
              className="h-8 w-8 rounded-lg object-contain bg-white p-1 ring-1 ring-zinc-200/80 dark:ring-white/10 shadow-2xs shrink-0 mt-0.5"
              loading="lazy"
            />
          )}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
              {data.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Date & Status Meta */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 sm:text-right shrink-0" data-tabular>
          <span>
            {data.startDate} {t.workExperience.to} {data.endDate}
          </span>
          {data.current && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-sans font-semibold tracking-wider uppercase bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300/60 dark:border-white/10">
              {t.workExperience.currentBadge}
            </span>
          )}
        </div>
      </div>

      {/* Narrative / Achievements using FormattedBullet */}
      {data.text && (
        data.text.includes("\n") ? (
          <ul className="space-y-1.5 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-[62ch]">
            {data.text.split("\n").map((line, idx) => (
              <FormattedBullet key={idx} text={line} />
            ))}
          </ul>
        ) : (
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[62ch] pt-1">
            {data.text}
          </p>
        )
      )}

      {/* Tech Stack / Skills (Clean neutral tags) */}
      {data.skills && data.skills.length > 0 && (
        <div className="pt-1.5 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-mono text-zinc-500 dark:text-zinc-400 mr-1">
            Stack:
          </span>
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
