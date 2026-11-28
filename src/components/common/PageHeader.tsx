import { useLanguage } from "../../context/LanguageContext";
import Marked from "./Marked";
import { EMAIL, cvPdf, textLink } from "./links";

interface PageHeaderProps {
  title: string;
  intro: string;
}

/** Page title, one line of introduction, and the two actions a recruiter needs. */
export default function PageHeader({ title, intro }: PageHeaderProps) {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);
  const link = `${textLink} text-[15px] inline-flex items-center min-h-[44px]`;

  return (
    <div className="space-y-3 pt-4 sm:pt-8">
      <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-text-primary">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[60ch]">
        <Marked text={intro} />
      </p>
      <div className="flex flex-wrap items-center gap-x-6">
        <a href={`mailto:${EMAIL}`} className={link}>
          {t.contact.emailBtn}
        </a>
        <a href={pdf.url} download={pdf.fileName} className={link}>
          {t.contact.cvBtn}
        </a>
      </div>
    </div>
  );
}
