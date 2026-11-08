import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header/Header";
import SettingsMenu from "../navigation/SettingsMenu";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Masthead() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDark = theme === "dark";

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { to: "/", index: "01", label: t.nav.overview },
    { to: "/cv", index: "02", label: t.nav.cv },
    { to: "/work-experience", index: "03", label: t.nav.workExperience },
    { to: "/education", index: "04", label: t.nav.education },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-canvas border-b border-border-subtle transition-colors">
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 h-14 flex items-center justify-between gap-4">
        {/* Candidate Typographic Identity */}
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md group"
          aria-label={t.sidebar.name}
        >
          <span className="font-sans font-semibold text-sm sm:text-base text-text-primary tracking-tight group-hover:text-brand transition-colors whitespace-nowrap">
            {t.sidebar.name}
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 text-xs font-normal text-text-muted shrink-0">
            <span aria-hidden="true">·</span>
            <span>Software Engineer</span>
          </span>
        </Link>

        {/* Desktop Primary Navigation with Magnetic Sliding Pill */}
        <div className="hidden md:flex items-center justify-center">
          <Header orientation="horizontal" />
        </div>

        {/* Right Utilities (Desktop: Recruiter CV + Settings; Mobile: Recruiter CV + Menu Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Recruiter 1-Click CV Action */}
          <Link
            to="/cv"
            className="inline-flex items-center gap-1.5 h-8 px-2.5 sm:px-3 rounded-squircle-sm text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition-colors border border-border-subtle shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95"
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

          {/* Desktop Settings Menu */}
          <div className="hidden md:block">
            <SettingsMenu />
          </div>

          {/* Mobile Menu Toggle with Animated Minimalist 2-Line Morphing Indicator */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-squircle-sm border border-border-subtle bg-surface-subtle hover:bg-surface text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95 shadow-2xs"
            aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative w-3.5 h-2.5 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-transform duration-200 ease-out origin-center ${
                  mobileMenuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-transform duration-200 ease-out origin-center ${
                  mobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden border-t border-border-subtle bg-surface px-4 py-3 shadow-lg overflow-hidden space-y-3"
          >
            {/* Primary Page Navigation (Editorial Monograph Style - Zero Arrows) */}
            <nav aria-label="Mobile Dropdown Navigation">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2.5 rounded-squircle-sm transition-colors min-h-[44px] ${
                          isActive
                            ? "bg-surface-subtle text-text-primary font-semibold"
                            : "text-text-secondary hover:text-text-primary hover:bg-surface-subtle/50"
                        }`
                      }
                    >
                      <span className="font-sans tabular-nums text-xs text-brand/80 font-medium mr-3 tracking-wider select-none" aria-hidden="true">
                        {item.index}
                      </span>
                      <span className="text-sm sm:text-base font-medium tracking-tight">
                        {item.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Preferences & Utilities Colophon */}
            <div className="pt-2.5 border-t border-border-subtle/80 flex items-center justify-between text-xs">
              {/* Language Switch */}
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <div role="group" aria-label="Language selection" className="flex items-center gap-1 font-sans text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-0.5 rounded-squircle-sm transition-colors ${
                      language === "en" ? "bg-surface-subtle text-text-primary font-semibold shadow-2xs border border-border-subtle/80" : "text-text-muted hover:text-text-primary"
                    }`}
                    aria-pressed={language === "en"}
                    aria-label="English"
                  >
                    EN
                  </button>
                  <span className="text-text-muted/40 font-light select-none">/</span>
                  <button
                    type="button"
                    onClick={() => setLanguage("nl")}
                    className={`px-2 py-0.5 rounded-squircle-sm transition-colors ${
                      language === "nl" ? "bg-surface-subtle text-text-primary font-semibold shadow-2xs border border-border-subtle/80" : "text-text-muted hover:text-text-primary"
                    }`}
                    aria-pressed={language === "nl"}
                    aria-label="Nederlands"
                  >
                    NL
                  </button>
                </div>
              </div>

              {/* Theme Switch */}
              <button
                type="button"
                onClick={toggleTheme}
                className="px-2.5 py-1 rounded-squircle-sm text-xs font-medium bg-surface-subtle hover:bg-surface border border-border-subtle text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-2xs active:scale-95"
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {isDark ? (
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                <span>{isDark ? t.nav.darkTheme : t.nav.lightTheme}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
