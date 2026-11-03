import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import BitsizedClassroomInspector from "./BitsizedClassroomInspector";

export default function BitsizedShowcase() {
  const { t } = useLanguage();
  const bitsizedSkills = [
    "TypeScript",
    "React",
    "Web Workers",
    "AST Parsing",
    "WebAssembly",
    "Client-Side Sandboxing",
    "Node.js",
  ];

  return (
    <article className="space-y-6">
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-text-primary">
            {t.intro.bitsizedTitle}
          </h3>
          <p className="text-base text-brand font-medium mt-1">
            {t.intro.bitsizedSubtitle}
          </p>
          <p className="text-xs text-text-muted mt-0.5">
            {t.intro.bitsizedTag}
          </p>
        </div>
        <Link
          to="/work-experience"
          className="text-sm font-medium text-brand hover:underline shrink-0 inline-flex items-center gap-1"
        >
          <span>{t.intro.bitsizedLink}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Narrative */}
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[70ch]">
        {t.intro.bitsizedDescription}
      </p>

      {/* Interactive Architecture Inspector */}
      <BitsizedClassroomInspector />

      {/* Tech Stack in Proportional Text */}
      <p className="text-sm text-text-muted leading-relaxed">
        <strong className="text-text-primary font-medium">Stack:</strong>{" "}
        {bitsizedSkills.join(", ")}
      </p>
    </article>
  );
}
