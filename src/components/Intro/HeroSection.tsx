import { useLanguage } from "../../context/LanguageContext";
import { EMAIL, cvPdf, primaryButton, secondaryButton } from "../common/links";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);

  return (
    <section aria-labelledby="hero-title" className="pt-4 sm:pt-8">
      <h1
        id="hero-title"
        className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary leading-[1.08] max-w-[22ch]"
      >
        {t.intro.heroTitle}
      </h1>

      <p className="mt-5 text-base sm:text-lg text-text-secondary max-w-[60ch]">
        {t.intro.heroFacts}
      </p>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <a href={`mailto:${EMAIL}`} className={primaryButton}>
          {t.intro.emailCta}
        </a>
        <a href={pdf.url} download={pdf.fileName} className={secondaryButton}>
          {t.intro.cvCta}
        </a>
      </div>

      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
        <img
          src="/images/profile.webp"
          alt="Casper Hildebrand"
          width={96}
          height={96}
          className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover shrink-0"
        />
        <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[62ch]">
          {t.intro.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
