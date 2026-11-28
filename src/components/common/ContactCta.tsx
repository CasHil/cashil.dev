import { useLanguage } from "../../context/LanguageContext";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  cvPdf,
  primaryButton,
  textLink,
} from "./links";

interface ContactCtaProps {
  showCv?: boolean;
}

export default function ContactCta({ showCv = true }: ContactCtaProps) {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);

  return (
    <section
      aria-labelledby="contact-heading"
      className="border-t border-border-subtle pt-10 sm:pt-12 space-y-5"
    >
      <div className="space-y-2">
        <h2
          id="contact-heading"
          className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary"
        >
          {t.contact.heading}
        </h2>
        <p className="text-base text-text-secondary leading-relaxed max-w-[60ch]">
          {t.contact.body}
        </p>
        <p className="text-base text-text-primary select-all">{EMAIL}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <a href={`mailto:${EMAIL}`} className={primaryButton}>
          {t.contact.emailBtn}
        </a>
        <div className="flex items-center gap-x-6 w-full sm:w-auto">
          {showCv && (
            <a
              href={pdf.url}
              download={pdf.fileName}
              className={`${textLink} inline-flex items-center min-h-[44px]`}
            >
              {t.contact.cvBtn}
            </a>
          )}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${textLink} inline-flex items-center min-h-[44px]`}
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${textLink} inline-flex items-center min-h-[44px]`}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
