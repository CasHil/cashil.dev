import { useLanguage } from "../../context/LanguageContext";
import Marked from "../common/Marked";
import { EMAIL, cvPdf, panelLink, primaryButton } from "../common/links";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);

  return (
    <section aria-labelledby="hero-title" className="space-y-12 sm:space-y-16">
      <div className="bg-ink rounded-[2rem] sm:rounded-[2.5rem] px-6 py-10 sm:p-12 lg:p-16 grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <h1
            id="hero-title"
            className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.04] text-on-ink max-w-[17ch]"
          >
            <Marked text={t.intro.heroTitle} />
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-snug text-on-ink/80 max-w-[36ch]">
            {t.intro.heroFacts}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={`mailto:${EMAIL}`} className={primaryButton}>
              {t.intro.emailCta}
            </a>
            <a
              href={pdf.url}
              download={pdf.fileName}
              className={`${panelLink} inline-flex items-center min-h-[44px]`}
            >
              {t.intro.cvCta}
            </a>
          </div>
        </div>

        <img
          src="/images/profile.webp"
          alt="Casper Hildebrand"
          width={224}
          height={224}
          className="order-first lg:order-none h-24 w-24 sm:h-32 sm:w-32 lg:h-56 lg:w-56 rounded-[28%] object-cover rotate-3 ring-4 ring-accent"
        />
      </div>

      <div className="space-y-5 text-text-secondary max-w-[58ch]">
        {t.intro.story.map((paragraph) => (
          <p key={paragraph} className="text-lg sm:text-xl leading-relaxed">
            <Marked text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
