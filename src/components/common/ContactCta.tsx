import { useLanguage } from "../../context/LanguageContext";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  cvPdf,
  panelLink,
  primaryButton,
} from "./links";

interface ContactCtaProps {
  showCv?: boolean;
}

export default function ContactCta({ showCv = true }: ContactCtaProps) {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);
  const link = `${panelLink} inline-flex items-center min-h-[44px]`;

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-ink rounded-[2rem] sm:rounded-[2.5rem] px-6 py-10 sm:p-12 lg:p-16 space-y-6"
    >
      <div className="space-y-3">
        <h2
          id="contact-heading"
          className="font-display text-3xl sm:text-4xl font-extrabold text-on-ink"
        >
          {t.contact.heading}
        </h2>
        <p className="text-lg sm:text-xl leading-snug text-on-ink/80 max-w-[44ch]">
          {t.contact.body}
        </p>
        <p className="text-lg font-semibold text-on-ink select-all">{EMAIL}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href={`mailto:${EMAIL}`} className={primaryButton}>
          {t.contact.emailBtn}
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 w-full sm:w-auto">
          {showCv && (
            <a href={pdf.url} download={pdf.fileName} className={link}>
              {t.contact.cvBtn}
            </a>
          )}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={link}>
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={link}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
