import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  // Dismiss on outside click and Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="relative shrink-0"
      role="toolbar"
      aria-label="Preferences and utilities"
    >
      {/* Agency Preferences Pill Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative inline-flex items-center gap-2 h-9 px-2.5 min-h-[36px] rounded-squircle-sm border transition-all duration-150 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95 touch-manipulation select-none ${
          isOpen
            ? "bg-surface border-brand/60 text-text-primary ring-2 ring-brand/20 shadow-xs"
            : "border-border-subtle bg-surface-subtle/80 hover:bg-surface text-text-secondary hover:text-text-primary hover:border-border-subtle/90"
        }`}
        aria-label={t.nav.settings}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        title={t.nav.settings}
      >
        <span className="text-xs font-semibold tracking-wider text-text-primary uppercase">
          {language}
        </span>
        <span className="w-px h-3.5 bg-border-subtle" aria-hidden="true" />
        <span className="flex items-center justify-center text-text-muted">
          {isDark ? (
            <svg
              className="w-3.5 h-3.5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </span>
        <svg
          className={`w-3 h-3 text-text-muted transition-transform duration-150 ${
            isOpen ? "rotate-180 text-brand" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Streamlined Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            aria-label={t.nav.settings}
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="absolute right-0 top-full mt-2 z-50 w-56 rounded-squircle-sm bg-surface/95 backdrop-blur-lg border border-border-subtle shadow-xl dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] p-2 space-y-1.5 transform-gpu"
          >
            {/* Language Row */}
            <div className="flex items-center justify-between px-2 py-1.5 rounded-[8px] hover:bg-surface-subtle/60 transition-colors">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-text-primary">
                <svg
                  className="w-4 h-4 text-text-muted shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span>{t.nav.language}</span>
              </span>

              <div
                role="group"
                aria-label="Language selection"
                className="flex items-center gap-0.5 p-0.5 rounded-md bg-surface-subtle border border-border-subtle"
              >
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors touch-manipulation active:scale-95 ${
                    language === "en"
                      ? "bg-surface text-text-primary font-semibold shadow-2xs border border-border-subtle/50"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                  aria-pressed={language === "en"}
                  aria-label="English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("nl")}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors touch-manipulation active:scale-95 ${
                    language === "nl"
                      ? "bg-surface text-text-primary font-semibold shadow-2xs border border-border-subtle/50"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                  aria-pressed={language === "nl"}
                  aria-label="Nederlands"
                >
                  NL
                </button>
              </div>
            </div>

            {/* Theme Row */}
            <div className="flex items-center justify-between px-2 py-1.5 rounded-[8px] hover:bg-surface-subtle/60 transition-colors">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-text-primary">
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-amber-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-amber-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
                <span>{t.nav.theme}</span>
              </span>

              <button
                type="button"
                onClick={toggleTheme}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-subtle hover:bg-surface border border-border-subtle text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-2xs active:scale-95 touch-manipulation"
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              >
                <span>{isDark ? t.nav.darkTheme : t.nav.lightTheme}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
