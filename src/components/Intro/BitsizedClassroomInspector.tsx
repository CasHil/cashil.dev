import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function BitsizedClassroomInspector() {
  const { t } = useLanguage();
  const perspectives = t.intro.bitsizedPerspectives;
  const [activeId, setActiveId] = useState<string>(perspectives[0]?.id || "teacher");

  const activePerspective =
    perspectives.find((p) => p.id === activeId) || perspectives[0];

  return (
    <div className="space-y-4 pt-1">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
          {t.intro.bitsizedPerspectivesTitle}
        </h4>
        <span className="text-xs text-text-muted">Classroom UX preview</span>
      </div>

      {/* Interactive Perspective Selector */}
      <div
        role="tablist"
        aria-label="Bitsized Classroom Perspectives"
        className="grid grid-cols-2 gap-2"
      >
        {perspectives.map((perspective) => {
          const isActive = perspective.id === activeId;
          return (
            <button
              key={perspective.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`perspective-panel-${perspective.id}`}
              id={`perspective-tab-${perspective.id}`}
              onClick={() => setActiveId(perspective.id)}
              className={`p-3 rounded-xl text-center sm:text-left border transition-all duration-150 min-h-[52px] flex items-center justify-center sm:justify-between ${
                isActive
                  ? "bg-surface border-brand shadow-sm text-text-primary ring-1 ring-brand/30"
                  : "bg-surface-subtle/50 hover:bg-surface-subtle border-border-subtle text-text-secondary hover:text-text-primary"
              }`}
            >
              <span className="text-xs sm:text-sm font-semibold">
                {perspective.role}
              </span>
              {isActive && (
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Perspective Panel */}
      {activePerspective && (
        <div
          role="tabpanel"
          id={`perspective-panel-${activePerspective.id}`}
          aria-labelledby={`perspective-tab-${activePerspective.id}`}
          className="rounded-xl p-4 sm:p-5 bg-surface-subtle/40 border border-border-subtle space-y-4 transition-colors"
        >
          <div className="space-y-1">
            <span className="text-xs font-medium text-brand">
              {activePerspective.role}
            </span>
            <h5 className="text-sm font-semibold text-text-primary">
              {activePerspective.title}
            </h5>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {activePerspective.description}
            </p>
          </div>

          {/* Concrete Interactive UI Snippet Demonstrating Simplicity */}
          {activePerspective.id === "teacher" ? (
            <div className="p-3.5 rounded-lg bg-surface border border-border-subtle space-y-2.5">
              <div className="flex items-center justify-between text-xs border-b border-border-subtle pb-2">
                <span className="font-medium text-text-primary">Classroom Cohort: 4 VWO</span>
                <span className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded text-[11px] font-medium border border-emerald-200 dark:border-emerald-800/60">
                  24 / 24 Active
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2 rounded bg-surface-subtle/60 border border-border-subtle/60">
                  <span className="text-text-muted text-[11px] block">Completed Exercise</span>
                  <span className="font-semibold text-text-primary text-sm" data-tabular>18 students</span>
                </div>
                <div className="p-2 rounded bg-surface-subtle/60 border border-border-subtle/60">
                  <span className="text-text-muted text-[11px] block">In Progress</span>
                  <span className="font-semibold text-brand text-sm" data-tabular>5 students</span>
                </div>
                <div className="p-2 rounded bg-surface-subtle/60 border border-border-subtle/60">
                  <span className="text-text-muted text-[11px] block">Needs Review</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-300 text-sm" data-tabular>1 student</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-lg bg-surface border border-border-subtle space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-text-muted border-b border-border-subtle pb-1.5 font-sans">
                <span>Exercise 03: Temperature Converter</span>
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">✓ Tests passing</span>
              </div>
              <div className="text-text-primary leading-relaxed bg-surface-subtle/40 p-2.5 rounded border border-border-subtle/60 font-mono text-[11px]">
                <span className="text-brand">def</span> celsius_to_fahrenheit(c):<br />
                &nbsp;&nbsp;<span className="text-brand">return</span> (c * 9/5) + 32
              </div>
              <div className="text-[11px] text-text-secondary font-sans leading-relaxed flex items-start gap-1.5 pt-0.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">✓</span>
                <span>Plain feedback: <code>celsius_to_fahrenheit(0)</code> returned <code>32.0</code> as expected.</span>
              </div>
            </div>
          )}

          {/* Key Deliverables */}
          <div className="pt-1 border-t border-border-subtle/60">
            <span className="text-xs font-medium text-text-muted block mb-2">
              Classroom didactics in practice:
            </span>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              {activePerspective.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand shrink-0 mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
