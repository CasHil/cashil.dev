import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import FormattedBullet from "../common/FormattedBullet";

export default function Cv() {
  const { t, language } = useLanguage();
  const [viewMode, setViewMode] = useState<"sheet" | "pdf">("sheet");
  const [pdfLang, setPdfLang] = useState<"en" | "nl">(language);

  const isNl = language === "nl";

  useEffect(() => {
    setPdfLang(language);
  }, [language]);

  const pdfUrl =
    pdfLang === "nl"
      ? "/cv/Casper_Hildebrand_CV_NL.pdf"
      : "/cv/Casper_Hildebrand_CV.pdf";

  const pdfFileName =
    pdfLang === "nl"
      ? "Casper_Hildebrand_CV_NL.pdf"
      : "Casper_Hildebrand_CV.pdf";

  const pdfTitle =
    pdfLang === "nl"
      ? "Casper Hildebrand Curriculum Vitae (Nederlands)"
      : "Casper Hildebrand Curriculum Vitae (English)";

  const competencies = [
    {
      category: isNl ? "Talen:" : "Languages:",
      items: "TypeScript, JavaScript, Python, SQL (PostgreSQL, MySQL), C#, HTML/CSS",
    },
    {
      category: "Frontend:",
      items: "React, Vite, Tailwind CSS, Web Workers, Next.js, Accessibility (a11y)",
    },
    {
      category: "Backend & Cloud:",
      items: "Node.js, Express, AWS (Lambda, S3, RDS), RESTful APIs, Docker",
    },
    {
      category: isNl ? "Data & Systemen:" : "Data & Systems:",
      items: "Relational Data Modeling, Clickstream Analysis, Pandas, Agentic Engineering, Temporal Workflows",
    },
    {
      category: isNl ? "Methodieken:" : "Practices:",
      items: "Git, GitHub Actions, CI/CD, Unit Testing (Vitest, Jest), Curriculum Design, Technical Writing",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-white/10">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.cv.title}
          </h1>
          <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400 mt-1">
            {t.cv.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Mode Switcher */}
          <div
            role="group"
            aria-label="CV presentation mode"
            className="inline-flex items-center text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800/80 p-0.5 border border-zinc-200/80 dark:border-white/10"
          >
            <button
              type="button"
              onClick={() => setViewMode("sheet")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                viewMode === "sheet"
                  ? "bg-white dark:bg-zinc-700 text-zinc-950 dark:text-white font-semibold shadow-2xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              {isNl ? "Webweergave" : "Interactive View"}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                viewMode === "pdf"
                  ? "bg-white dark:bg-zinc-700 text-zinc-950 dark:text-white font-semibold shadow-2xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              PDF Embed
            </button>
          </div>

          {/* PDF Language Switcher */}
          <div
            role="group"
            aria-label={t.cv.pdfLanguageLabel}
            className="inline-flex items-center text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800/80 p-0.5 border border-zinc-200/80 dark:border-white/10"
          >
            <button
              type="button"
              onClick={() => setPdfLang("en")}
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                pdfLang === "en"
                  ? "bg-white dark:bg-zinc-700 text-zinc-950 dark:text-white font-semibold shadow-2xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
              aria-pressed={pdfLang === "en"}
              aria-label={t.cv.englishPdf}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setPdfLang("nl")}
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                pdfLang === "nl"
                  ? "bg-white dark:bg-zinc-700 text-zinc-950 dark:text-white font-semibold shadow-2xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
              aria-pressed={pdfLang === "nl"}
              aria-label={t.cv.dutchPdf}
            >
              NL
            </button>
          </div>

          <a
            href={pdfUrl}
            download={pdfFileName}
            className="group inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand text-white font-semibold text-xs shadow-xs hover:bg-brand-hover active:scale-[0.98] transition-all min-h-[34px]"
            aria-label={`${t.cv.downloadPdf} (${pdfLang.toUpperCase()})`}
          >
            <span>{t.cv.downloadPdf}</span>
            <span className="text-xs opacity-75 uppercase">({pdfLang})</span>
            <span className="opacity-70 group-hover:translate-y-0.5 transition-transform" aria-hidden="true">
              ↓
            </span>
          </a>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs hover:border-brand/40 dark:hover:border-brand/40 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all min-h-[34px]"
            aria-label={`${t.cv.openNewTab} (${pdfLang.toUpperCase()})`}
          >
            <span>{t.cv.openNewTab}</span>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      {viewMode === "sheet" ? (
        /* Native ATS Document Sheet */
        <article
          aria-label="Curriculum Vitae Document"
          className="rounded-xl p-6 sm:p-10 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xs border border-zinc-200/90 dark:border-white/[0.08] shadow-sm space-y-8 print:p-0 print:border-none print:shadow-none"
        >
          {/* Document Header */}
          <header className="border-b border-zinc-200/80 dark:border-white/10 pb-6 space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Casper Hildebrand
            </h2>
            <p className="text-sm sm:text-base font-semibold text-brand">
              Full-Stack Software Engineer
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
              <span>Amsterdam, Netherlands</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <a
                href="mailto:casperhildebrand@gmail.com"
                className="hover:text-brand dark:hover:text-brand transition-colors"
              >
                casperhildebrand@gmail.com
              </a>
              <span className="opacity-40" aria-hidden="true">·</span>
              <a
                href="https://cashil.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand dark:hover:text-brand transition-colors"
              >
                cashil.github.io
              </a>
              <span className="opacity-40" aria-hidden="true">·</span>
              <a
                href="https://github.com/CasHil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand dark:hover:text-brand transition-colors"
              >
                github.com/CasHil
              </a>
              <span className="opacity-40" aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com/in/casper-hildebrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand dark:hover:text-brand transition-colors"
              >
                linkedin.com/in/casper-hildebrand
              </a>
            </div>
          </header>

          {/* Profile Section */}
          <section aria-labelledby="cv-profile-heading" className="space-y-3">
            <h3
              id="cv-profile-heading"
              className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200/60 dark:border-white/10 pb-1"
            >
              {isNl ? "Profiel" : "Profile"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {isNl
                ? "Full-stack software engineer bij Tikkie (ABN AMRO) bouwend aan Tikkie Zakelijk, met een dubbele Master in Computer Science (Data Science) en Science Education van de TU Delft. Ervaren in TypeScript, React, Node.js, AWS en PostgreSQL. Geïnteresseerd in agentic engineering en AI-ondersteunde ontwikkelworkflows."
                : "Full-stack software engineer at Tikkie (ABN AMRO) building Tikkie Business, with a double Master's degree in Computer Science (Data Science) and Science Education from Delft University of Technology. Experienced across TypeScript, React, Node.js, AWS, and PostgreSQL. Interested in agentic engineering and AI-enabled software development workflows."}
            </p>
          </section>

          {/* Experience Section */}
          <section aria-labelledby="cv-experience-heading" className="space-y-6">
            <h3
              id="cv-experience-heading"
              className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200/60 dark:border-white/10 pb-1"
            >
              {isNl ? "Werkervaring" : "Experience"}
            </h3>
            <div className="space-y-6">
              {t.workExperience.items.map((role) => (
                <div key={role.title} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                        {role.title}
                      </h4>
                      <p className="text-xs font-medium text-brand">
                        {role.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 shrink-0" data-tabular>
                      {role.startDate} {t.workExperience.to} {role.endDate}
                    </span>
                  </div>

                  {role.text && (
                    <ul className="space-y-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      {role.text.split("\n").map((line, idx) => (
                        <FormattedBullet key={idx} text={line} className="flex items-start gap-2 leading-relaxed" />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education & Research Section */}
          <section aria-labelledby="cv-education-heading" className="space-y-6">
            <h3
              id="cv-education-heading"
              className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200/60 dark:border-white/10 pb-1"
            >
              {isNl ? "Opleiding & Onderzoek" : "Education & Research"}
            </h3>
            <div className="space-y-6">
              {t.education.items.map((edu, idx) => (
                <div key={`${edu.title}-${idx}`} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                        {edu.title}
                      </h4>
                      <p className="text-xs font-medium text-brand">
                        {edu.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 shrink-0" data-tabular>
                      {edu.startDate} {t.workExperience.to} {edu.endDate}
                    </span>
                  </div>

                  {edu.text && (
                    <ul className="space-y-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      {edu.text.split("\n").map((line, lIdx) => (
                        <FormattedBullet key={lIdx} text={line} className="flex items-start gap-2 leading-relaxed" />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Competencies Section */}
          <section aria-labelledby="cv-skills-heading" className="space-y-3">
            <h3
              id="cv-skills-heading"
              className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200/60 dark:border-white/10 pb-1"
            >
              {isNl ? "Technische Competenties" : "Technical Competencies"}
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {competencies.map((comp) => (
                <div key={comp.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-semibold text-zinc-950 dark:text-white">
                    {comp.category}
                  </span>
                  <span className="sm:col-span-3 text-zinc-600 dark:text-zinc-400">
                    {comp.items}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </article>
      ) : (
        /* Embedded PDF Object View */
        <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/60 shadow-xs">
          <div className="sm:hidden p-4 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 flex flex-col gap-3">
            <span className="leading-relaxed">{t.cv.mobilePrompt}</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand text-white font-semibold text-xs shadow-xs hover:bg-brand-hover active:scale-[0.98] transition-all min-h-[44px] w-full"
            >
              <span>{t.cv.viewFullscreen}</span>
              <span className="text-xs opacity-75 uppercase">({pdfLang})</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="w-full h-[700px] sm:h-[880px] lg:h-[960px]">
            <object
              key={pdfUrl}
              data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
              type="application/pdf"
              className="w-full h-full"
              aria-label={pdfTitle}
            >
              <iframe
                src={`${pdfUrl}#view=FitH`}
                title={pdfTitle}
                className="w-full h-full border-0"
              >
                <div className="p-8 text-center space-y-3">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {isNl
                      ? "Je browser ondersteunt geen ingesloten PDF-weergave."
                      : "Your browser does not support embedded PDF viewing."}
                  </p>
                  <a
                    href={pdfUrl}
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
      )}
    </div>
  );
}
