import HeroSection from "./HeroSection";
import WorkHighlights from "./WorkHighlights";
import StackList from "./StackList";
import ContactCta from "../common/ContactCta";

export default function Intro() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <HeroSection />
      <WorkHighlights />
      <StackList />
      <ContactCta />
    </div>
  );
}
