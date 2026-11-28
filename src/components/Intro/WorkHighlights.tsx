import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { textLink } from "../common/links";

/** The same story as above, as five rows for someone who only has ten seconds. */
export default function WorkHighlights() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="work-heading" className="space-y-6">
      <h2
        id="work-heading"
        className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary"
      >
        {t.intro.workHeading}
      </h2>

      <dl className="border-t border-border-subtle divide-y divide-border-subtle">
        {t.intro.timeline.map((row) => (
          <div
            key={row.what}
            className="py-4 grid gap-1 sm:gap-10 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-baseline"
          >
            <dt className="text-base text-text-muted tabular-nums">{row.period}</dt>
            <dd className="text-lg sm:text-xl font-semibold text-text-primary">{row.what}</dd>
          </div>
        ))}
      </dl>

      <Link
        to="/work-experience"
        className={`${textLink} text-base inline-flex items-center min-h-[44px]`}
      >
        {t.intro.workLink}
      </Link>
    </section>
  );
}
