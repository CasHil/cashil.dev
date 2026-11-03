import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function BitsizedClassroomInspector() {
  const { t, language } = useLanguage();
  const perspectives = t.intro.bitsizedPerspectives;
  const [activeId, setActiveId] = useState<string>(perspectives[0]?.id || "sandbox");

  const activePerspective =
    perspectives.find((p) => p.id === activeId) || perspectives[0];

  return (
    <div className="space-y-4 pt-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-text-primary">
          {t.intro.bitsizedPerspectivesTitle}
        </h4>
        <span className="text-xs text-brand font-medium">Client-Side Architecture</span>
      </div>

      {/* Accessible Proportional Navigation Tabs */}
      <div
        role="tablist"
        aria-label="Bitsized Platform Architecture"
        className="flex flex-wrap gap-6 border-b border-border-subtle" /* taste-skill-ignore: tab navigation bar */
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
              className={`pb-3 text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? "border-b-2 border-brand text-text-primary"
                  : "text-text-muted hover:text-text-primary border-b-2 border-transparent"
              }`}
            >
              {perspective.role}
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
          className="space-y-4 pt-2"
        >
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            {activePerspective.description}
          </p>

          {/* Substantive Technical Implementation Contract */}
          {activePerspective.id === "sandbox" ? (
            <div className="space-y-2 pt-1" data-ui>
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span className="font-medium text-text-primary">
                  {language === "nl" ? "Thread-isolatiecontract: sandbox.worker.ts" : "Thread Isolation Contract: sandbox.worker.ts"}
                </span>
                <span className="text-brand font-medium">Pyodide WebAssembly</span>
              </div>
              <div className="text-xs text-text-primary leading-relaxed bg-surface-subtle p-3 rounded border border-border-subtle space-y-1">
                <p className="text-text-muted">
                  {language === "nl"
                    ? "// Client-side Web Worker voert Python uit zonder serveroverhead; watchdog beveiligt de browser"
                    : "// Client-side Web Worker executes Python without server overhead; watchdog safeguards the host thread"}
                </p>
                <p>
                  <span className="text-brand font-medium">const</span> watchdog = setTimeout(() =&gt; worker.terminate(), <span className="text-brand font-medium">3000</span>);
                </p>
                <p>
                  worker.postMessage(&#123; code: studentScript, timeout: <span className="text-brand font-medium">3000</span>, memoryLimitMb: <span className="text-brand font-medium">128</span> &#125;);
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2 pt-1" data-ui>
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span className="font-medium text-text-primary">
                  {language === "nl" ? "Didactische AST-analyse: diagnostics.ts" : "Didactic AST Pipeline: diagnostics.ts"}
                </span>
                <span className="text-brand font-medium">Client-Side Parser</span>
              </div>
              <div className="text-xs text-text-primary leading-relaxed bg-surface-subtle p-3 rounded border border-border-subtle space-y-1">
                <p className="text-text-muted">
                  {language === "nl"
                    ? "// Parseert Python syntax nodes om denkfouten direct te vertalen naar begrijpelijke hints"
                    : "// Parses Python syntax nodes to translate misconceptions directly into plain-language hints"}
                </p>
                <p>
                  <span className="text-brand font-medium">const</span> ast = parsePythonSyntax(studentCode);
                </p>
                <p>
                  <span className="text-brand font-medium">const</span> hints = mapConceptualMisunderstandings(ast.nodes);
                </p>
              </div>
            </div>
          )}

          {/* Architecture Mechanics */}
          <div className="pt-2 space-y-2">
            <span className="text-xs font-semibold text-text-muted block">
              {language === "nl" ? "Didactische en technische garanties:" : "Technical and pedagogical guarantees:"}
            </span>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              {activePerspective.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand shrink-0" aria-hidden="true">—</span>
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
