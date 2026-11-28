import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";
import ContactCta from "../common/ContactCta";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  cvPdf,
  textLink,
} from "../common/links";

const sectionHeading =
  "font-display text-lg font-extrabold text-text-primary border-b border-border-subtle pb-1.5";

const bulletClass =
  "flex items-start gap-2.5 leading-relaxed text-sm text-text-secondary";

export default function Cv() {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);
  const otherPdf = cvPdf(language === "nl" ? "en" : "nl");

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="space-y-6 pt-4 sm:pt-8">
        <div className="space-y-3">
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-text-primary">
            {t.cv.title}
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[60ch]">
            {t.cv.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6">
          <a
            href={pdf.url}
            download={pdf.fileName}
            className={`${textLink} text-[15px] inline-flex items-center min-h-[44px]`}
          >
            {t.cv.downloadPdf}
          </a>
          <a
            href={otherPdf.url}
            download={otherPdf.fileName}
            className={`${textLink} text-[15px] inline-flex items-center min-h-[44px]`}
          >
            {t.cv.otherLanguagePdf}
          </a>
        </div>
      </div>

      <article
        data-ui
        aria-label={t.cv.title}
        className="rounded-3xl p-6 sm:p-10 bg-surface border border-border-subtle shadow-sm space-y-8 print:p-0 print:border-none print:shadow-none"
      >
        <header className="space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
            {t.sidebar.name}
          </h2>
          <p className="text-base text-text-secondary">
            {t.cv.headline}, {t.sidebar.location}
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 text-sm text-text-muted">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center min-h-[44px] sm:min-h-0 hover:text-brand transition-colors"
            >
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] sm:min-h-0 hover:text-brand transition-colors"
            >
              github.com/CasHil
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] sm:min-h-0 hover:text-brand transition-colors"
            >
              linkedin.com/in/casper-hildebrand
            </a>
          </div>
        </header>

        <section aria-labelledby="cv-profile-heading" className="space-y-3">
          <h3 id="cv-profile-heading" className={sectionHeading}>
            {t.cv.profileHeading}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed max-w-[75ch]">
            {t.cv.profile}
          </p>
        </section>

        <section aria-labelledby="cv-experience-heading" className="space-y-5">
          <h3 id="cv-experience-heading" className={sectionHeading}>
            {t.cv.experienceHeading}
          </h3>
          {t.workExperience.items.map((role) => (
            <div key={role.title} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                <div>
                  <h4 className="text-base font-medium text-text-primary">{role.title}</h4>
                  <p className="text-sm text-text-secondary">{role.subtitle}</p>
                </div>
                <span className="text-sm text-text-muted shrink-0 tabular-nums">
                  {role.startDate} {t.workExperience.to} {role.endDate}
                </span>
              </div>
              <ul className="space-y-1 max-w-[75ch]">
                {role.text.split("\n").map((line) => (
                  <FormattedBullet key={line} text={line} plain className={bulletClass} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="cv-education-heading" className="space-y-5">
          <h3 id="cv-education-heading" className={sectionHeading}>
            {t.cv.educationHeading}
          </h3>
          {t.education.items.map((edu, index) => (
            <div key={edu.subtitle} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                <div>
                  <h4 className="text-base font-medium text-text-primary">{edu.subtitle}</h4>
                  <p className="text-sm text-text-secondary">{edu.title}</p>
                </div>
                <span className="text-sm text-text-muted shrink-0 tabular-nums">
                  {edu.startDate} {t.workExperience.to} {edu.endDate}
                </span>
              </div>
              <ul className="space-y-1 max-w-[75ch]">
                {[
                  ...edu.text.split("\n"),
                  ...(index === 0 ? [t.education.thesis.cvLine] : []),
                ].map((line) => (
                  <FormattedBullet key={line} text={line} plain className={bulletClass} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="cv-skills-heading" className="space-y-3">
          <h3 id="cv-skills-heading" className={sectionHeading}>
            {t.cv.skillsHeading}
          </h3>
          <dl className="space-y-2 text-sm">
            {t.cv.skills.map((group) => (
              <div key={group.category} className="grid grid-cols-1 sm:grid-cols-4 gap-0.5 sm:gap-4">
                <dt className="font-medium text-text-primary">{group.category}</dt>
                <dd className="sm:col-span-3 text-text-secondary">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <ContactCta showCv={false} />
    </div>
  );
}
