import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="relative inline-flex items-center text-xs font-sans font-semibold tracking-wide rounded-squircle-sm bg-surface-subtle border border-border-subtle p-0.5 shadow-2xs"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 px-2.5 py-1 font-semibold rounded-[10px] transition-colors duration-150 min-h-[28px] sm:min-h-[26px] flex items-center justify-center text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
          language === "en"
            ? "text-text-primary"
            : "text-text-muted hover:text-text-primary"
        }`}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
      >
        {language === "en" && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-surface rounded-[10px] shadow-xs border border-border-subtle/60 -z-10"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
          />
        )}
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("nl")}
        className={`relative z-10 px-2.5 py-1 font-semibold rounded-[10px] transition-colors duration-150 min-h-[28px] sm:min-h-[26px] flex items-center justify-center text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
          language === "nl"
            ? "text-text-primary"
            : "text-text-muted hover:text-text-primary"
        }`}
        aria-pressed={language === "nl"}
        aria-label="Switch taal naar Nederlands"
      >
        {language === "nl" && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-surface rounded-[10px] shadow-xs border border-border-subtle/60 -z-10"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
          />
        )}
        NL
      </button>
    </div>
  );
}
