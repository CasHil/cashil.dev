import { useLanguage } from "../../context/LanguageContext";
import { GITHUB_URL, LINKEDIN_URL } from "../common/links";

const footerLink =
  "inline-flex items-center min-h-[44px] px-1 hover:text-brand transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pb-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-muted">
      <div>{t.sidebar.year}</div>
      <div className="flex items-center gap-5">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={footerLink}>
          GitHub
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={footerLink}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
