import Timeline from "../Timeline/Timeline";
import ContactCta from "../common/ContactCta";
import { useLanguage } from "../../context/LanguageContext";
import { textLink } from "../common/links";

export default function Education() {
  const { t } = useLanguage();
  const thesis = t.education.thesis;

  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="space-y-3 pt-4 sm:pt-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-text-primary">
          {t.education.title}
        </h1>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[60ch]">
          {t.education.intro}
        </p>
      </div>

      <Timeline data={t.education.items} />

      <section
        aria-labelledby="thesis-title"
        className="border-t border-border-subtle pt-10 sm:pt-12 space-y-4"
      >
        <div className="space-y-2">
          <h2
            id="thesis-title"
            lang="en"
            className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary max-w-[34ch]"
          >
            {thesis.title}
          </h2>
          <p className="text-sm text-text-muted">{thesis.meta}</p>
        </div>
        <div className="space-y-4 max-w-[62ch]">
          {thesis.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base text-text-secondary leading-relaxed"
            >
              {paragraph}
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
