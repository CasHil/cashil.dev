import { useLanguage } from "../../context/LanguageContext";
import HeroSection from "./HeroSection";
import EngineeringEthos from "./EngineeringEthos";
import TikkieShowcase from "./TikkieShowcase";
import BitsizedShowcase from "./BitsizedShowcase";

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

      {/* 3. Core Engineering Approach */}
      <EngineeringEthos />
    </div>
  );
}
