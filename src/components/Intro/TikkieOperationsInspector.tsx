import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function TikkieOperationsInspector() {
  const { t } = useLanguage();
  const workflows = t.intro.tikkieWorkflows;
  const [activeId, setActiveId] = useState<string>(workflows[0]?.id || "onboarding");

  const activeWorkflow = workflows.find((w) => w.id === activeId) || workflows[0];

  return (
    <div className="space-y-4 pt-1">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
          {t.intro.tikkieWorkflowsTitle}
        </h4>
        <span className="text-xs text-text-muted">Interactive preview</span>
      </div>

      {/* Interactive Workflow Tabs */}
      <div
        role="tablist"
        aria-label="Tikkie Business Operations Workflows"
        className="grid grid-cols-1 sm:grid-cols-3 gap-2"
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
              className={`p-3.5 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between gap-2 min-h-[76px] ${
                isActive
                  ? "bg-surface border-brand shadow-sm text-text-primary ring-1 ring-brand/30"
                  : "bg-surface-subtle/50 hover:bg-surface-subtle border-border-subtle text-text-secondary hover:text-text-primary"
              }`}
            >
              <div className="flex items-center justify-between w-full text-xs">
                <span
                  className={`font-mono font-semibold ${
                    isActive ? "text-brand" : "text-text-muted"
                  }`}
                  data-tabular
                >
                  Stage {workflow.badge}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold leading-snug">
                {workflow.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Workflow Panel */}
      {activeWorkflow && (
        <div
          role="tabpanel"
          id={`workflow-panel-${activeWorkflow.id}`}
          aria-labelledby={`workflow-tab-${activeWorkflow.id}`}
          className="rounded-xl p-4 sm:p-5 bg-surface-subtle/40 border border-border-subtle space-y-3.5 transition-colors"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-brand" data-tabular>
                Stage {activeWorkflow.badge}
              </span>
              <span className="text-text-muted/40">/</span>
              <span className="text-xs font-semibold text-text-primary">
                {activeWorkflow.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {activeWorkflow.description}
            </p>
          </div>

          <div className="pt-1 border-t border-border-subtle/60">
            <span className="text-xs font-medium text-text-muted block mb-2">
              Key operational deliverables:
            </span>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              {activeWorkflow.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand shrink-0 mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
