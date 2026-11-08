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
      {/* Settings Trigger Icon Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative inline-flex items-center justify-center h-9 w-9 sm:h-8 sm:w-8 rounded-squircle-sm border transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95 ${
          isOpen
            ? "bg-surface border-brand text-brand ring-2 ring-brand/20"
            : "border-border-subtle bg-surface-subtle hover:bg-surface text-text-muted hover:text-text-primary"
        }`}
        aria-label={t.nav.settings}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        title={t.nav.settings}
      >
        <svg
          className="w-4 h-4 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
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
            transition={{ duration: 0.12, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 z-50 w-52 rounded-squircle-sm bg-surface border border-border-subtle shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-1.5 space-y-1 backdrop-blur-md"
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
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
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
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
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
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-subtle hover:bg-surface border border-border-subtle text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-2xs active:scale-95"
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
