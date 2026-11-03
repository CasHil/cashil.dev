import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function TikkieOperationsInspector() {
  const { t, language } = useLanguage();
  const workflows = t.intro.tikkieWorkflows;
  const [activeId, setActiveId] = useState<string>(workflows[0]?.id || "onboarding");

  const activeWorkflow = workflows.find((w) => w.id === activeId) || workflows[0];

  const domainSpecs: Record<string, { contract: string; guarantee: string }> = {
    onboarding: {
      contract:
        language === "nl"
          ? "AWS API Gateway → Lambda → KVK Handelsregister API → DynamoDB auditspoor"
          : "AWS API Gateway → Lambda → Dutch Chamber of Commerce (KvK) Registry → DynamoDB audit trail",
      guarantee:
        language === "nl"
          ? "Sub-seconde validatielatentie; deterministische statustransities voorkomen dubbele merchant-registraties."
          : "Sub-second validation latency; deterministic state machine prevents duplicate merchant provisioning.",
    },
    payouts: {
      contract:
        language === "nl"
          ? "Dagelijkse batch-trigger → EventBridge → Reconciliatie Lambda → Bankjournaal"
          : "Daily batch trigger → EventBridge → Reconciliation Lambda → Reconciled Bank Ledger",
      guarantee:
        language === "nl"
          ? "Idempotente batch-executie met dead-letter queue garandeert nul verlies in betalingsstromen."
          : "Idempotent batch execution with dead-letter queue recovery guarantees zero lost transactions.",
    },
    portal: {
      contract:
        language === "nl"
          ? "React SPA (TypeScript) ↔ Beveiligde REST APIs ↔ Realtime Transactiedatabase"
          : "React SPA (TypeScript) ↔ Authenticated REST APIs ↔ Real-Time Transaction Database",
      guarantee:
        language === "nl"
          ? "Strikte type-veiligheid, WCAG 2.1 AA toegankelijkheid en volledige testdekking met Vitest."
          : "Strict type safety, WCAG 2.1 AA accessibility compliance, and high test coverage via Vitest.",
    },
  };

  const currentSpec = domainSpecs[activeWorkflow.id] || domainSpecs.onboarding;

  return (
    <div className="space-y-4 pt-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-text-primary">
          {t.intro.tikkieWorkflowsTitle}
        </h4>
        <span className="text-xs text-brand font-medium">Production Architecture</span>
      </div>

      {/* Accessible Proportional Navigation Tabs */}
      <div
        role="tablist"
        aria-label="Tikkie Business Architectural Domains"
        className="flex flex-wrap gap-6 border-b border-border-subtle" /* taste-skill-ignore: tab navigation bar */
      >
        {workflows.map((workflow) => {
          const isActive = workflow.id === activeId;
          return (
            <button
              key={workflow.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`workflow-panel-${workflow.id}`}
              id={`workflow-tab-${workflow.id}`}
              onClick={() => setActiveId(workflow.id)}
              className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? "border-b-2 border-brand text-text-primary"
                  : "text-text-muted hover:text-text-primary border-b-2 border-transparent"
              }`}
            >
              {workflow.title}
            </button>
          );
        })}
      </div>

      {/* Active Architecture Panel */}
      {activeWorkflow && (
        <div
          role="tabpanel"
          id={`workflow-panel-${activeWorkflow.id}`}
          aria-labelledby={`workflow-tab-${activeWorkflow.id}`}
          className="space-y-4 pt-2"
        >
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            {activeWorkflow.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-text-muted block">
              {language === "nl" ? "Architectuurspecificaties in productie:" : "Architectural implementation details:"}
            </span>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              {activeWorkflow.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand shrink-0" aria-hidden="true">—</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Substantive Architecture Contract & Guarantees */}
          <div className="pt-3 space-y-2" data-ui>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-text-muted">
              <span className="font-medium text-text-primary">
                {language === "nl" ? "Gedistribueerd Servicecontract:" : "Distributed Service Contract:"}
              </span>
              <span className="text-brand font-medium">AWS Event-Driven Pipeline</span>
            </div>
            <div className="text-xs text-text-secondary leading-relaxed bg-surface-subtle p-3 rounded border border-border-subtle space-y-1.5">
              <p className="text-text-primary font-medium">
                <code>{currentSpec.contract}</code>
              </p>
              <p className="text-text-muted">
                <span className="font-medium text-text-primary">
                  {language === "nl" ? "Betrouwbaarheidsgarantie: " : "Operational Guarantee: "}
                </span>
                {currentSpec.guarantee}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
