import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <div
        className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300/80 dark:via-zinc-700/80 to-transparent"
        aria-hidden="true"
      />
      <footer className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <div>{t.sidebar.year}</div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:casperhildebrand@gmail.com"
            className="hover:text-brand dark:hover:text-brand transition-colors"
          >
            casperhildebrand@gmail.com
          </a>
          <span className="opacity-40" aria-hidden="true">·</span>
          <a
            href="https://github.com/CasHil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand dark:hover:text-brand transition-colors"
          >
            GitHub
          </a>
          <span className="opacity-40" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/casper-hildebrand/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand dark:hover:text-brand transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
