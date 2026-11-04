import { useLanguage } from "../../context/LanguageContext";
import HeroSection from "./HeroSection";
import TikkieShowcase from "./TikkieShowcase";
import BitsizedShowcase from "./BitsizedShowcase";
import TechExperienceTracker from "../common/TechExperienceTracker";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. Hero Pitch */}
      <HeroSection />

      {/* 2. Featured Engineering (Tikkie & Bitsized) */}
      <section aria-labelledby="featured-engineering-title" className="space-y-14">
        <div>
          <h2
            id="featured-engineering-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text-primary"
          >
            {t.intro.featuredHeading}
          </h2>
          {t.intro.featuredSubtitle && (
            <p className="text-base text-text-muted mt-2 max-w-[65ch]">
              {t.intro.featuredSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-16 sm:space-y-20">
          {/* Flagship 1: Production Business Portal & Onboarding Backend */}
          <TikkieShowcase />

          {/* Flagship 2: In-Browser Sandbox Platform */}
          <BitsizedShowcase />
        </div>
      </section>

      {/* 3. Technology Experience Counters */}
      <TechExperienceTracker />

      {/* 4. Mentorship & Beyond Engineering */}
      <section aria-labelledby="mentorship-heading" className="space-y-6 pt-4">
        <div className="space-y-2">
          <h2
            id="mentorship-heading"
            className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary"
          >
            {t.intro.mentorshipHeading}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed max-w-[70ch]">
            {t.intro.mentorshipDescription}
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm">
          <div>
            <span className="font-medium text-text-primary block">
              {t.intro.outsideTitle}
            </span>
            <span className="text-text-secondary mt-0.5 block">
              {t.intro.outsideDescription}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
