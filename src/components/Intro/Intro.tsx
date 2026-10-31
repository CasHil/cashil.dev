import { useLanguage } from "../../context/LanguageContext";
import HeroSection from "./HeroSection";
import TikkieShowcase from "./TikkieShowcase";
import BitsizedShowcase from "./BitsizedShowcase";
import EngineeringEthos from "./EngineeringEthos";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* 1. Hero Elevator Pitch & Direct Recruiter Actions */}
      <HeroSection />

      {/* 2. Featured Engineering Showcases */}
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
          {/* Flagship 1: Production Fintech Payment Services */}
          <TikkieShowcase />

          {/* Flagship 2: 0-to-1 In-Browser Sandbox Platform */}
          <BitsizedShowcase />

          {/* Pillar 3: Didactics & Systems Force Multiplier */}
          <EngineeringEthos />
        </div>
      </section>
    </div>
  );
}
