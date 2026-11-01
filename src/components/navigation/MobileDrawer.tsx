import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  // Close on Escape key and manage body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("casperhildebrand@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:casperhildebrand@gmail.com";
    }
  };

  const isNl = language === "nl";
  const cvFile = isNl
    ? "/cv/Casper_Hildebrand_CV_NL.pdf"
    : "/cv/Casper_Hildebrand_CV.pdf";
  const cvFilename = isNl
    ? "Casper_Hildebrand_CV_NL.pdf"
    : "Casper_Hildebrand_CV.pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Scrim / Backdrop */}
          <motion.div
            key="drawer-backdrop"
            data-testid="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs sm:hidden"
            aria-hidden="true"
          />

          {/* Bottom Sheet Action Drawer */}
          <motion.div
            key="drawer-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.quickActions}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 400) {
                onClose();
              }
            }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-canvas dark:bg-zinc-900 border-t border-zinc-200/90 dark:border-white/10 p-5 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl sm:hidden space-y-4"
          >
            {/* Grab Handle */}
            <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-auto cursor-grab active:cursor-grabbing mb-1" />

            {/* Section 1: Quick Actions */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {t.nav.quickActions}
              </span>

              <div className="grid grid-cols-1 gap-2 pt-1">
                {/* 1-Tap Email Copy */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 active:scale-[0.98] transition-all min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      casperhildebrand@gmail.com
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {copied ? t.sidebar.copiedEmail : t.sidebar.copyEmail}
                  </span>
                </button>

                {/* Consolidated CV Download (Active Language) */}
                <a
                  href={cvFile}
                  download={cvFilename}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 active:scale-[0.98] transition-all min-h-[48px] text-zinc-900 dark:text-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-medium">
                      {t.nav.downloadCv}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase">
                    {language.toUpperCase()} · PDF
                  </span>
                </a>
              </div>
            </div>

            {/* Section 2: Preferences (Language & Theme) */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {t.nav.preferences}
              </span>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {/* Language Switcher */}
                <div className="flex items-center rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 p-1 border border-zinc-200/80 dark:border-white/10 min-h-[48px]">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    aria-label="English"
                    className={`flex-1 h-full py-2 text-xs font-semibold rounded-lg transition-all ${
                      language === "en"
                        ? "bg-white dark:bg-zinc-700 text-zinc-950 dark:text-white shadow-xs"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("nl")}
                    aria-label="Nederlands"
                    className={`flex-1 h-full py-2 text-xs font-semibold rounded-lg transition-all ${
                      language === "nl"
                        ? "bg-white dark:bg-zinc-700 text-zinc-950 dark:text-white shadow-xs"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    NL
                  </button>
                </div>

                {/* Theme Toggle */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 min-h-[48px] text-xs font-semibold text-zinc-800 dark:text-zinc-200 active:scale-95 transition-all"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                >
                  {theme === "dark" ? (
                    <>
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                      <span>{isNl ? "Lichte modus" : "Light Mode"}</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-zinc-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                      <span>{isNl ? "Donkere modus" : "Dark Mode"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Section 3: Social & External Profiles */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-200/80 dark:border-white/10">
              <a
                href="https://github.com/CasHil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 min-h-[48px] text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 active:scale-[0.98] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub ↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/casper-hildebrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 min-h-[48px] text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 active:scale-[0.98] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
