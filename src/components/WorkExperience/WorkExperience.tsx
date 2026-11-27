import Timeline from "../Timeline/Timeline";
import ContactCta from "../common/ContactCta";
import { useLanguage } from "../../context/LanguageContext";

export default function WorkExperience() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="space-y-3 pt-4 sm:pt-8">
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-text-primary">
          {t.workExperience.title}
        </h1>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[60ch]">
          {t.workExperience.intro}
        </p>
      </div>

      <Timeline data={t.workExperience.items} />

      <ContactCta />
    </div>
  );
}
