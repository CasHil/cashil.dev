import { Link } from "react-router-dom";
import Header from "../Header/Header";
import SettingsMenu from "../navigation/SettingsMenu";
import { useLanguage } from "../../context/LanguageContext";

export default function Masthead() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-canvas/90 dark:bg-canvas/90 border-b border-border-subtle/60 transition-colors">
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-3 sm:gap-4">
        {/* Candidate Typographic Brand (Anchored with refined CH monogram mark) */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md min-w-0"
          aria-label={t.sidebar.name}
        >
          <span
            className="w-8 h-8 rounded-squircle-sm bg-surface-subtle border border-border-subtle flex items-center justify-center font-display font-semibold text-xs tracking-tight text-text-primary group-hover:text-brand group-hover:border-brand/40 shadow-2xs transition-colors shrink-0"
            aria-hidden="true"
          >
            CH
          </span>
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-display font-semibold text-base sm:text-lg text-text-primary tracking-tight group-hover:text-brand transition-colors duration-150 whitespace-nowrap">
              {t.sidebar.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-normal text-text-muted shrink-0">
              <span aria-hidden="true">·</span>
              <span>Software Engineer</span>
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <Header orientation="horizontal" />
        </div>

        {/* Right: Recruiter Quick Access & Settings Menu */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Recruiter Quick CV Link (Desktop) */}
          <Link
            to="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-squircle-sm text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition-colors border border-border-subtle shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95"
            aria-label={t.nav.cv}
          >
            <svg
              className="w-3.5 h-3.5 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>{t.nav.cv}</span>
          </Link>

          {/* Settings & Preferences Popover */}
          <SettingsMenu />
        </div>
      </div>
    </header>
  );
}
