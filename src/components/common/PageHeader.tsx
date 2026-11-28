import { useLanguage } from "../../context/LanguageContext";
import Marked from "./Marked";
import { EMAIL, cvPdf, panelLink } from "./links";

interface PageHeaderProps {
  title: string;
  intro: string;
}

/** The indigo panel that opens the work and education pages. */
export default function PageHeader({ title, intro }: PageHeaderProps) {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);
  const link = `${panelLink} inline-flex items-center min-h-[44px]`;

  return (
    <div className="bg-ink rounded-[2rem] sm:rounded-[2.5rem] px-6 py-10 sm:p-12 lg:p-16">
      <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.04] text-on-ink">
        {title}
      </h1>
      <p className="mt-5 text-lg sm:text-xl leading-snug text-on-ink/80 max-w-[44ch]">
        <Marked text={intro} />
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6">
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
