import { useLanguage } from "../../context/LanguageContext";
import Marked from "../common/Marked";
import { EMAIL, cvPdf, primaryButton, secondaryButton } from "../common/links";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);

  return (
    <section aria-labelledby="hero-title" className="pt-4 sm:pt-8">
      <h1
        id="hero-title"
        className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary leading-[1.1] max-w-[24ch]"
      >
        <Marked text={t.intro.heroTitle} />
      </h1>

      <div className="mt-6 flex items-center gap-4">
        <img
          src="/images/profile.webp"
          alt="Casper Hildebrand"
          width={64}
          height={64}
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shrink-0"
        />
        <p className="text-base sm:text-lg text-text-secondary max-w-[44ch]">
          <Marked text={t.intro.heroFacts} />
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <a href={`mailto:${EMAIL}`} className={primaryButton}>
          {t.intro.emailCta}
        </a>
        <a href={pdf.url} download={pdf.fileName} className={secondaryButton}>
          {t.intro.cvCta}
        </a>
      </div>

      <div className="mt-12 sm:mt-16 space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[62ch]">
        {t.intro.story.map((paragraph) => (
          <p key={paragraph}>
            <Marked text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
