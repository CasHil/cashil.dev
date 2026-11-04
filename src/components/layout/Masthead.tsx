import { Link } from "react-router-dom";
import Header from "../Header/Header";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

export default function Masthead() {
  const { t } = useLanguage();

  return (
    <header className="pt-6 sm:pt-8 pb-8 sm:pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Candidate Identity */}
        <Link to="/" className="group flex items-center gap-3.5 focus:outline-none">
          <div className="relative shrink-0">
            <img
              src="/images/profile.webp"
              alt="Casper Hildebrand"
              className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-1 ring-border-subtle ring-offset-2 ring-offset-canvas transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-base sm:text-lg text-text-primary tracking-tight group-hover:text-brand transition-colors duration-150">
                {t.sidebar.name}
              </span>
              <span className="hidden sm:inline-block text-xs font-normal text-text-muted">
                · {t.sidebar.timezone}
              </span>
            </div>
            <p className="text-xs font-normal text-text-muted">
              {t.sidebar.role}
            </p>
          </div>
        </Link>

        {/* Primary Navigation (Desktop) */}
        <div className="hidden sm:block">
          <Header orientation="horizontal" />
        </div>

        {/* Action Controls & Social Channels */}
        <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 w-full sm:w-auto">
          {/* Direct Channels */}
          <nav aria-label="Direct Channels & Profiles" className="flex items-center text-text-muted gap-0.5">
            <a
              href="mailto:casperhildebrand@gmail.com"
              className="w-8 h-8 flex items-center justify-center rounded-squircle-sm hover:bg-surface-subtle hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Send direct email"
              title="casperhildebrand@gmail.com"
            >
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://github.com/CasHil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-squircle-sm hover:bg-surface-subtle hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="GitHub profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/casper-hildebrand/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-squircle-sm hover:bg-surface-subtle hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="LinkedIn profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </nav>

          <span className="h-4 w-px bg-border-subtle shrink-0 mx-0.5" aria-hidden="true" />

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-1.5 shrink-0">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
