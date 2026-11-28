import { useLanguage } from "../../context/LanguageContext";
import Marked from "../common/Marked";
import { EMAIL, cvPdf, primaryButton, textLink } from "../common/links";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const pdf = cvPdf(language);

  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-12">
      <h1
        id="hero-title"
        className="font-serif text-3xl sm:text-[2.75rem] lg:text-5xl font-normal tracking-tight text-text-primary leading-[1.15] max-w-[26ch] lg:max-w-[30ch]"
      >
        {t.intro.heroTitle}
      </h1>

      <div className="mt-8 flex items-center gap-4">
        <img
          src="/images/profile.webp"
          alt="Casper Hildebrand"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover shrink-0"
        />
        <p className="text-base sm:text-lg text-text-secondary leading-snug max-w-[40ch]">
          {t.intro.heroFacts}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        <a href={`mailto:${EMAIL}`} className={primaryButton}>
          {t.intro.emailCta}
        </a>
        <a
          href={pdf.url}
          download={pdf.fileName}
          className={`${textLink} text-[15px] inline-flex items-center min-h-[44px]`}
        >
          {t.intro.cvCta}
        </a>
      </div>

      <div className="mt-12 sm:mt-16 space-y-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[62ch]">
        {t.intro.story.map((paragraph) => (
          <p key={paragraph}>
            <Marked text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}
