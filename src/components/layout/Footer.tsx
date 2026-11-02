import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-normal text-text-muted">
      <div>{t.sidebar.year}</div>
      <div className="flex items-center gap-3">
        <a
          href="mailto:casperhildebrand@gmail.com"
          className="hover:text-brand transition-colors duration-150"
        >
          casperhildebrand@gmail.com
        </a>
        <span className="text-text-muted/40" aria-hidden="true">/</span>
        <a
          href="https://github.com/CasHil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand transition-colors duration-150"
        >
          GitHub
        </a>
        <span className="text-text-muted/40" aria-hidden="true">/</span>
        <a
          href="https://www.linkedin.com/in/casper-hildebrand/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand transition-colors duration-150"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
