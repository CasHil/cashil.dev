import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

export default function Masthead() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

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
    <header className="pt-8 sm:pt-12 pb-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Candidate Identity */}
        <Link to="/" className="group flex items-center gap-3.5 focus:outline-none">
          <div className="relative shrink-0">
            <img
              src="/images/profile.webp"
              alt="Casper Hildebrand"
              className="relative h-12 w-12 rounded-full object-cover ring-1 ring-zinc-300/80 dark:ring-white/20 ring-offset-2 ring-offset-canvas transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {t.sidebar.name}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10" data-tabular>
                {t.sidebar.timezone}
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {t.sidebar.role}
            </p>
          </div>
        </Link>

        {/* Action Controls & Social Channels */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 self-start sm:self-auto">
          {/* Quick Copy Email Interaction */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all shadow-2xs min-h-[36px]"
            title="Click to copy email address"
            aria-label={copied ? t.sidebar.copiedEmail : t.sidebar.copyEmail}
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-emerald-700 dark:text-emerald-300 font-semibold">{t.sidebar.copiedEmail}</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{t.sidebar.copyEmail}</span>
              </>
            )}
          </button>

          {/* Social Profiles */}
          <nav aria-label="Social Profiles" className="flex items-center text-zinc-500 dark:text-zinc-400">
            <a
              href="https://github.com/CasHil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white transition-colors"
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
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </nav>

          <span className="h-4 w-[1px] bg-zinc-200 dark:bg-white/10" aria-hidden="true" />

          {/* Theme & Language Toggles */}
          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="border-b border-zinc-200/80 dark:border-white/10 pb-3">
        <Header orientation="horizontal" />
      </div>
    </header>
  );
}
