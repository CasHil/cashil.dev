import Timeline from "../Timeline/Timeline";
import ContactCta from "../common/ContactCta";
import PageHeader from "../common/PageHeader";
import { useLanguage } from "../../context/LanguageContext";

export default function WorkExperience() {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 sm:space-y-12">
      <PageHeader title={t.workExperience.title} intro={t.workExperience.intro} />
      <Timeline data={t.workExperience.items} />
      <ContactCta />
    </div>
  );
}
