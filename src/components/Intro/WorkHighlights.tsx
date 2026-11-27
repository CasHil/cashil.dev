import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Marked from "../common/Marked";
import { textLink } from "../common/links";

export default function WorkHighlights() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="work-heading" className="space-y-6">
      <h2
        id="work-heading"
        className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary"
      >
        {t.intro.workHeading}
      </h2>

      <div className="border-t border-border-subtle divide-y divide-border-subtle">
        {t.intro.work.map((item) => (
          <article
            key={item.title}
            className="py-8 grid gap-3 sm:gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-text-primary">
                {item.title}
              </h3>
              <p className="text-base text-text-secondary">{item.role}</p>
              <p className="text-sm text-text-muted tabular-nums">{item.period}</p>
            </div>
            <div className="space-y-3 max-w-[62ch]">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base text-text-secondary leading-relaxed">
                  <Marked text={paragraph} />
                </p>
              ))}
              <p className="text-sm text-text-muted">{item.stack.join(", ")}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/work-experience"
        className={`${textLink} text-base inline-flex items-center min-h-[44px]`}
      >
        {t.intro.workLink}
      </Link>
    </section>
  );
}
