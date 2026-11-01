import { useLanguage } from "../../context/LanguageContext";
import HeroSection from "./HeroSection";
import EngineeringEthos from "./EngineeringEthos";
import TikkieShowcase from "./TikkieShowcase";
import BitsizedShowcase from "./BitsizedShowcase";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Hero Elevator Pitch & Direct Recruiter Actions */}
      <HeroSection />

      {/* 2. Featured Engineering Showcases (Production Impact First) */}
      <section aria-labelledby="featured-engineering-title" className="space-y-6 pt-2">
        <div>
          <h2
            id="featured-engineering-title"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"
          >
            {t.intro.featuredHeading}
          </h2>
          {t.intro.featuredSubtitle && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t.intro.featuredSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-6">
          {/* Flagship 1: Production Business Portal & Onboarding Backend */}
          <TikkieShowcase />

          {/* Flagship 2: In-Browser Sandbox Platform */}
          <BitsizedShowcase />
        </div>
      </section>

      {/* 3. Core Engineering Approach (Pragmatic Developer Values) */}
      <EngineeringEthos />
    </div>
  );
}
