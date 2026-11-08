import { Link } from "react-router-dom";
import Header from "../Header/Header";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

export default function Masthead() {
  const { t } = useLanguage();

  return (
    <header className="pt-6 sm:pt-8 pb-8 sm:pb-12">
      <div className="flex items-center justify-between gap-4">
        {/* Candidate Identity */}
        <Link to="/" className="group flex items-center gap-3.5 focus:outline-none min-w-0">
          <div className="relative shrink-0">
            <img
              src="/images/profile.webp"
              alt="Casper Hildebrand"
              className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-1 ring-border-subtle ring-offset-2 ring-offset-canvas transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-base sm:text-lg text-text-primary tracking-tight group-hover:text-brand transition-colors duration-150 truncate">
                {t.sidebar.name}
              </span>
              <span className="hidden sm:inline-block text-xs font-normal text-text-muted shrink-0">
                · {t.sidebar.timezone}
              </span>
            </div>
            <p className="text-xs font-normal text-text-muted truncate">
              {t.sidebar.role}
            </p>
          </div>
        </Link>

        {/* Primary Navigation (Desktop: md and up) */}
        <div className="hidden md:block">
          <Header orientation="horizontal" />
        </div>

        {/* Unified Utility Island: Language & Theme Toggles */}
        <div
          role="toolbar"
          aria-label="Preferences and utilities"
          className="flex items-center gap-1.5 shrink-0"
        >
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Primary Navigation (Tablet: between sm and md) */}
      <div className="hidden sm:flex md:hidden justify-center pt-4">
        <Header orientation="horizontal" />
      </div>
    </header>
  );
}
