import { useLanguage } from "../../context/LanguageContext";

export default function Cv() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-white/10">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.cv.title}
          </h1>
          <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400 mt-1">
            {t.cv.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
          <a
            href="/cv/Casper_Hildebrand_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-[0.98] transition-all min-h-[40px]"
          >
            <span>{t.cv.openNewTab}</span>
            <span className="font-mono opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </a>
          <a
            href="/cv/Casper_Hildebrand_CV.pdf"
            download="Casper_Hildebrand_CV.pdf"
            className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[40px]"
          >
            <span>{t.cv.downloadPdf}</span>
            <span className="font-mono text-zinc-400 transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Embedded Document Frame */}
      <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/60 shadow-xs">
        {/* Mobile helper notice (Vertical stacked for full accessibility) */}
        <div className="sm:hidden p-4 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 flex flex-col gap-3">
          <span className="leading-relaxed">{t.cv.mobilePrompt}</span>
          <a
            href="/cv/Casper_Hildebrand_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-[0.98] transition-all min-h-[44px] w-full"
          >
            <span>{t.cv.viewFullscreen}</span>
            <span className="font-mono" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="w-full h-[700px] sm:h-[880px] lg:h-[960px]">
          <object
            data="/cv/Casper_Hildebrand_CV.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Casper Hildebrand Curriculum Vitae PDF"
          >
            <iframe
              src="/cv/Casper_Hildebrand_CV.pdf#view=FitH"
              title="Casper Hildebrand Curriculum Vitae"
              className="w-full h-full border-0"
            >
              <div className="p-8 text-center space-y-3">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Your browser does not support embedded PDF viewing.
                </p>
                <a
                  href="/cv/Casper_Hildebrand_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                >
                  {t.cv.openNewTab} ↗
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
