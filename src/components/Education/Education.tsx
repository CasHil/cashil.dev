import Timeline from "../Timeline/Timeline";
import ContactCta from "../common/ContactCta";
import PageHeader from "../common/PageHeader";
import Marked from "../common/Marked";
import { useLanguage } from "../../context/LanguageContext";
import { textLink } from "../common/links";

export default function Education() {
  const { t } = useLanguage();
  const thesis = t.education.thesis;

  return (
    <div className="space-y-10 sm:space-y-12">
      <PageHeader title={t.education.title} intro={t.education.intro} />

      <Timeline data={t.education.items} />

      <section
        aria-labelledby="thesis-title"
        className="border-t border-border-subtle pt-10 space-y-4"
      >
        <div className="space-y-2">
          <h2
            id="thesis-title"
            lang="en"
            className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary max-w-[34ch]"
          >
            {thesis.title}
          </h2>
          <p className="text-sm text-text-muted">{thesis.meta}</p>
        </div>
        <div className="space-y-4 max-w-[62ch]">
          {thesis.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base text-text-secondary leading-relaxed">
              <Marked text={paragraph} />
            </p>
          ))}
        </div>
        <a
          href={thesis.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${textLink} text-base inline-flex items-center min-h-[44px]`}
        >
          {thesis.repositoryText}
        </a>
      </section>

      <ContactCta />
    </div>
  );
}
