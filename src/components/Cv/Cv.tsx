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
      items: "React, Vue.js, Vite, Tailwind CSS, Next.js, Web Workers, Accessibility (a11y)",
    },
    {
      category: "Backend & Cloud:",
      items: "Node.js, Meteor, Express, AWS (Lambda, DynamoDB, S3), RESTful APIs, Docker",
    },
    {
      category: isNl ? "Databases & Architectuur:" : "Databases & Architecture:",
      items: "PostgreSQL, MySQL, MongoDB, Relational Data Modeling, Event-Driven Systems",
    },
    {
      category: isNl ? "Methodieken:" : "Practices:",
      items: "Git, GitHub Actions, CI/CD, Unit Testing (Vitest, Jest), Curriculum Design, Mentorship",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            {t.cv.title}
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-0.5">
            {t.cv.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
          <div
            role="group"
            aria-label="CV presentation mode"
            className="inline-flex items-center text-xs font-medium rounded-squircle-sm bg-surface-subtle p-0.5 border border-border-subtle"
          >
            <button
              type="button"
              onClick={() => setViewMode("sheet")}
              className={`px-3 py-1.5 rounded-[10px] transition-colors duration-150 ${
                viewMode === "sheet"
                  ? "bg-surface text-text-primary font-semibold shadow-xs"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {isNl ? "Webweergave" : "Interactive View"}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 rounded-[10px] transition-colors duration-150 ${
                viewMode === "pdf"
                  ? "bg-surface text-text-primary font-semibold shadow-xs"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              PDF Embed
            </button>
          </div>

          {/* PDF Language Switcher */}
          <div
            role="group"
            aria-label={t.cv.pdfLanguageLabel}
            className="inline-flex items-center text-xs font-medium rounded-squircle-sm bg-surface-subtle p-0.5 border border-border-subtle"
          >
            <button
              type="button"
              onClick={() => setPdfLang("en")}
              className={`px-2.5 py-1.5 rounded-[10px] transition-colors duration-150 ${
                pdfLang === "en"
                  ? "bg-surface text-text-primary font-semibold shadow-xs"
                  : "text-text-muted hover:text-text-primary"
              }`}
              aria-pressed={pdfLang === "en"}
              aria-label={t.cv.englishPdf}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setPdfLang("nl")}
              className={`px-2.5 py-1.5 rounded-[10px] transition-colors duration-150 ${
                pdfLang === "nl"
                  ? "bg-surface text-text-primary font-semibold shadow-xs"
                  : "text-text-muted hover:text-text-primary"
              }`}
              aria-pressed={pdfLang === "nl"}
              aria-label={t.cv.dutchPdf}
            >
              NL
            </button>
          </div>

          {/* Download PDF Button */}
          <a
            href={pdfUrl}
            download={pdfFileName}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-squircle bg-brand text-white font-medium text-xs hover:bg-brand-hover active:scale-[0.98] transition-colors duration-150 min-h-[34px]"
            aria-label={`${t.cv.downloadPdf} (${pdfLang.toUpperCase()})`}
          >
            <span>{t.cv.downloadPdf}</span>
            <span className="text-xs opacity-75 uppercase">({pdfLang})</span>
          </a>

          {/* Open in New Tab Button */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-squircle border border-border-subtle bg-surface text-text-primary font-medium text-xs hover:border-border-hover hover:bg-surface-hover active:scale-[0.98] transition-colors duration-150 min-h-[34px]"
            aria-label={`${t.cv.openNewTab} (${pdfLang.toUpperCase()})`}
          >
            <span>{t.cv.openNewTab}</span>
          </a>
        </div>
      </div>

      {viewMode === "sheet" ? (
        /* Native ATS Document Sheet */
        <article
          data-ui
          aria-label="Curriculum Vitae Document"
          className="rounded-squircle-lg p-6 sm:p-10 bg-surface border border-border-subtle space-y-8 print:p-0 print:border-none print:shadow-none"
        >
          {/* Document Header */}
          <header className="border-b border-border-subtle pb-6 space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
              Casper Hildebrand
            </h2>
            <p className="text-sm sm:text-base font-medium text-brand">
              Full-Stack Software Engineer
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted pt-1">
              <span>Amsterdam, Netherlands</span>
              <span className="text-text-muted/40" aria-hidden="true">/</span>
              <a
                href="mailto:casperhildebrand@gmail.com"
                className="hover:text-brand transition-colors"
              >
                casperhildebrand@gmail.com
              </a>
              <span className="text-text-muted/40" aria-hidden="true">/</span>
              <a
                href="https://cashil.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                cashil.github.io
              </a>
              <span className="text-text-muted/40" aria-hidden="true">/</span>
              <a
                href="https://github.com/CasHil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                github.com/CasHil
              </a>
              <span className="text-text-muted/40" aria-hidden="true">/</span>
              <a
                href="https://www.linkedin.com/in/casper-hildebrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                linkedin.com/in/casper-hildebrand
              </a>
            </div>
          </header>

          {/* Profile Section */}
          <section aria-labelledby="cv-profile-heading" className="space-y-3">
            <h3
              id="cv-profile-heading"
              className="text-xs font-semibold text-text-primary border-b-2 border-border-subtle pb-1"
            >
              {isNl ? "Profiel" : "Profile"}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {isNl
                ? "Full-stack software engineer bij Tikkie Zakelijk (ABN AMRO) met een dubbele Master in Computer Science en Science Education van de TU Delft. Ervaren in TypeScript, React, Vue.js, Node.js en AWS cloudworkflows. Combineert technische diepgang met didactische helderheid om onderhoudbare systemen te bouwen en teamgenoten te helpen floreren."
                : "Full-stack software engineer at Tikkie Business (ABN AMRO) with a double Master's degree in Computer Science and Science Education from Delft University of Technology. Experienced across TypeScript, React, Vue.js, Node.js, and AWS cloud workflows. Bringing a teacher's clarity and mentorship mindset to build maintainable systems and help engineering teams thrive."}
            </p>
          </section>

          {/* Experience Section */}
          <section aria-labelledby="cv-experience-heading" className="space-y-6">
            <h3
              id="cv-experience-heading"
              className="text-xs font-semibold text-text-primary border-b-2 border-border-subtle pb-1"
            >
              {isNl ? "Werkervaring" : "Experience"}
            </h3>
            <div className="space-y-6">
              {t.workExperience.items.map((role) => (
                <div key={role.title} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-text-primary">
                        {role.title}
                      </h4>
                      <p className="text-xs font-medium text-brand">
                        {role.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-text-muted shrink-0" data-tabular>
                      {role.startDate} {t.workExperience.to} {role.endDate}
                    </span>
                  </div>

                  {role.text && (
                    <ul className="space-y-1 text-xs sm:text-sm text-text-secondary">
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
              className="text-xs font-semibold text-text-primary border-b-2 border-border-subtle pb-1"
            >
              {isNl ? "Opleiding & Onderzoek" : "Education & Research"}
            </h3>
            <div className="space-y-6">
              {t.education.items.map((edu, idx) => (
                <div key={`${edu.title}-${idx}`} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-text-primary">
                        {edu.title}
                      </h4>
                      <p className="text-xs font-medium text-brand">
                        {edu.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-text-muted shrink-0" data-tabular>
                      {edu.startDate} {t.workExperience.to} {edu.endDate}
                    </span>
                  </div>

                  {edu.text && (
                    <ul className="space-y-1 text-xs sm:text-sm text-text-secondary">
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
              className="text-xs font-semibold text-text-primary border-b-2 border-border-subtle pb-1"
            >
              {isNl ? "Technische Competenties" : "Technical Competencies"}
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
              {competencies.map((comp) => (
                <div key={comp.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-medium text-text-primary">
                    {comp.category}
                  </span>
                  <span className="sm:col-span-3 text-text-secondary">
                    {comp.items}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </article>
      ) : (
        /* Embedded PDF Object View */
        <div className="relative w-full rounded-xl overflow-hidden border border-border-subtle bg-surface-subtle shadow-xs">
          <div className="sm:hidden p-4 bg-surface border-b-2 border-border-subtle text-xs text-text-secondary flex flex-col gap-3">
            <span className="leading-relaxed">{t.cv.mobilePrompt}</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand text-white font-medium text-xs hover:bg-brand-hover active:scale-[0.99] transition-colors duration-150 min-h-[44px] w-full"
            >
              <span>{t.cv.viewFullscreen}</span>
              <span className="text-xs opacity-75 uppercase">({pdfLang})</span>
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
                  <p className="text-sm text-text-secondary">
                    {isNl
                      ? "Je browser ondersteunt geen ingesloten PDF-weergave."
                      : "Your browser does not support embedded PDF viewing."}
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-surface text-text-primary border border-border-subtle text-xs font-medium hover:bg-surface-hover transition-colors"
                  >
                    {t.cv.openNewTab}
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
