import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import TikkieOperationsInspector from "./TikkieOperationsInspector";

export default function TikkieShowcase() {
  const { t } = useLanguage();
  const tikkieSkills = [
    "TypeScript",
    "React",
    "Node.js",
    "AWS Lambda",
    "DynamoDB",
    "EventBridge",
    "PostgreSQL",
    "KvK Validation",
    "Payouts",
  ];

  return (
    <article className="space-y-6">
      {/* Header & Direct Link */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-text-primary">
            {t.intro.tikkieTitle}
          </h3>
          <p className="text-base text-brand font-medium mt-1">
            {t.intro.tikkieSubtitle}
          </p>
          <p className="text-xs text-text-muted mt-0.5">
            {t.intro.tikkieTag}
          </p>
        </div>
        <Link
          to="/work-experience"
          className="text-sm font-medium text-brand hover:underline shrink-0 inline-flex items-center gap-1"
        >
          <span>{t.intro.tikkieLink}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Narrative */}
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[70ch]">
        {t.intro.tikkieDescription}
      </p>

      {/* Interactive Operations Workflow */}
      <TikkieOperationsInspector />

      {/* Technologies in Proportional Text */}
      <p className="text-sm text-text-muted leading-relaxed">
        <strong className="text-text-primary font-medium">Stack:</strong>{" "}
        {tikkieSkills.join(", ")}
      </p>
    </article>
  );
}
