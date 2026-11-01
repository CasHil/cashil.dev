import { useLanguage } from "../../context/LanguageContext";
import HeroSection from "./HeroSection";
import EngineeringEthos from "./EngineeringEthos";
import TikkieShowcase from "./TikkieShowcase";
import BitsizedShowcase from "./BitsizedShowcase";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <div className="space-y-14">
      {/* 1. Hero Elevator Pitch & Direct Recruiter Actions */}
      <HeroSection />

      {/* 2. Core Engineering Pillars (Agentic Development, Code Quality, Pedagogy) */}
      <EngineeringEthos />

      {/* 3. Featured Engineering Showcases */}
      <section aria-labelledby="featured-engineering-title" className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-8">
        <div>
          <h2
            id="featured-engineering-title"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"
          >
            {t.intro.featuredHeading}
          </h2>
          {t.intro.featuredSubtitle && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t.intro.featuredSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-8">
          {/* Flagship 1: Production Business Portal & Onboarding Backend */}
          <TikkieShowcase />

          {/* Flagship 2: In-Browser Sandbox Platform */}
          <BitsizedShowcase />
        </div>
      </section>
    </div>
  );
}
