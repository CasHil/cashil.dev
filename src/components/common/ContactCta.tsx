import { useLanguage } from "../../context/LanguageContext";
import {
  EMAIL,
  LINKEDIN_URL,
  cvPdf,
  primaryButton,
  secondaryButton,
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
          {t.contact.body}{" "}
          <span className="select-all whitespace-nowrap text-text-primary">{EMAIL}</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
        <a href={`mailto:${EMAIL}`} className={primaryButton}>
          {t.contact.emailBtn}
        </a>
        {showCv && (
          <a href={pdf.url} download={pdf.fileName} className={secondaryButton}>
            {t.contact.cvBtn}
          </a>
        )}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${textLink} text-sm inline-flex items-center justify-center min-h-[44px] px-1`}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
