import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const isNl = language === "nl";
  const cvPath = isNl
    ? "/cv/Casper_Hildebrand_CV_NL.pdf"
    : "/cv/Casper_Hildebrand_CV.pdf";
  const cvFilename = isNl
    ? "Casper_Hildebrand_CV_NL.pdf"
    : "Casper_Hildebrand_CV.pdf";

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("casperhildebrand@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:casperhildebrand@gmail.com";
    }
  };

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

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            aria-label={t.nav.settings}
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 z-50 w-64 sm:w-72 rounded-squircle bg-surface border border-border-subtle shadow-lg dark:shadow-[0_12px_36px_rgba(0,0,0,0.6)] p-3 text-xs space-y-3.5 backdrop-blur-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-1 border-b border-border-subtle">
              <span className="font-semibold text-text-primary text-xs tracking-tight">
                {t.nav.settings}
              </span>
              <span className="text-[12px] text-text-muted">
                {t.sidebar.timezone}
              </span>
            </div>

            {/* Language Selection with Globe Icon */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-text-secondary">
                <span className="inline-flex items-center gap-1.5 font-medium text-xs">
                  {/* Globe Icon */}
                  <svg
                    className="w-4 h-4 text-brand shrink-0"
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
                <span className="text-[12px] text-text-muted font-sans uppercase">
                  {language}
                </span>
              </div>

              {/* Segmented language buttons */}
              <div
                role="group"
                aria-label="Language options"
                className="grid grid-cols-2 gap-1 p-0.5 rounded-squircle-sm bg-surface-subtle border border-border-subtle"
              >
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`py-1.5 px-2 rounded-[10px] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    language === "en"
                      ? "bg-surface text-text-primary font-semibold shadow-xs border border-border-subtle"
                      : "text-text-muted hover:text-text-primary hover:bg-surface/50"
                  }`}
                  aria-pressed={language === "en"}
                  aria-label="English"
                >
                  <span>English</span>
                  {language === "en" && (
                    <span className="text-brand text-xs font-bold" aria-hidden="true">✓</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("nl")}
                  className={`py-1.5 px-2 rounded-[10px] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    language === "nl"
                      ? "bg-surface text-text-primary font-semibold shadow-xs border border-border-subtle"
                      : "text-text-muted hover:text-text-primary hover:bg-surface/50"
                  }`}
                  aria-pressed={language === "nl"}
                  aria-label="Nederlands"
                >
                  <span>Nederlands</span>
                  {language === "nl" && (
                    <span className="text-brand text-xs font-bold" aria-hidden="true">✓</span>
                  )}
                </button>
              </div>
            </div>

            {/* Theme Selection */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-text-secondary">
                <span className="inline-flex items-center gap-1.5 font-medium text-xs">
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
                <span className="text-[12px] text-text-muted capitalize">
                  {isDark ? t.nav.darkTheme : t.nav.lightTheme}
                </span>
              </div>

              {/* Segmented theme buttons */}
              <div
                role="group"
                aria-label="Theme options"
                className="grid grid-cols-2 gap-1 p-0.5 rounded-squircle-sm bg-surface-subtle border border-border-subtle"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (isDark) toggleTheme();
                  }}
                  className={`py-1.5 px-2 rounded-[10px] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    !isDark
                      ? "bg-surface text-text-primary font-semibold shadow-xs border border-border-subtle"
                      : "text-text-muted hover:text-text-primary hover:bg-surface/50"
                  }`}
                  aria-pressed={!isDark}
                  aria-label="Switch to light theme"
                >
                  <svg
                    className="w-3.5 h-3.5 text-amber-500 shrink-0"
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
                  <span>{t.nav.lightTheme}</span>
                  {!isDark && (
                    <span className="text-brand text-xs font-bold" aria-hidden="true">✓</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!isDark) toggleTheme();
                  }}
                  className={`py-1.5 px-2 rounded-[10px] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    isDark
                      ? "bg-surface text-text-primary font-semibold shadow-xs border border-border-subtle"
                      : "text-text-muted hover:text-text-primary hover:bg-surface/50"
                  }`}
                  aria-pressed={isDark}
                  aria-label="Switch to dark theme"
                >
                  <svg
                    className="w-3.5 h-3.5 text-amber-400 shrink-0"
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
                  <span>{t.nav.darkTheme}</span>
                  {isDark && (
                    <span className="text-brand text-xs font-bold" aria-hidden="true">✓</span>
                  )}
                </button>
              </div>
            </div>

            {/* Recruiter Quick Actions */}
            <div className="pt-2 border-t border-border-subtle space-y-1">
              <span className="text-[12px] font-medium text-text-muted block">
                {t.nav.quickActions}
              </span>

              {/* Download CV */}
              <a
                href={cvPath}
                download={cvFilename}
                className="w-full flex items-center justify-between p-2 rounded-squircle-sm bg-surface-subtle/60 hover:bg-surface-subtle border border-border-subtle text-text-primary transition-colors text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-brand shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{t.nav.downloadCv}</span>
                </span>
                <span className="text-[12px] text-text-muted uppercase font-sans">
                  {language} · PDF
                </span>
              </a>

              {/* Copy Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2 rounded-squircle-sm bg-surface-subtle/60 hover:bg-surface-subtle border border-border-subtle text-text-primary transition-colors text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-brand shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{copied ? t.sidebar.copiedEmail : t.sidebar.copyEmail}</span>
                </span>
                <span className="text-[12px] text-text-muted">
                  casperhildebrand@...
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
