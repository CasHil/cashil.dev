import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DisclosureSectionProps {
  idPrefix?: string;
  title: string;
  badge?: string;
  summary: string;
  openLabel: string;
  closeLabel: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  showBottomCollapse?: boolean;
}

export default function DisclosureSection({
  idPrefix,
  title,
  badge,
  summary,
  openLabel,
  closeLabel,
  defaultOpen = false,
  children,
  showBottomCollapse = true,
}: DisclosureSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const reactId = useId();
  const contentId = idPrefix ? `${idPrefix}-${reactId}` : reactId;

  return (
    // taste-skill-ignore: collapsible section container
    <div className="rounded-xl p-5 sm:p-6 bg-surface-subtle transition-colors space-y-4">
      {/* Informative Header / Trigger Card */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
          <div className="flex items-center gap-2.5">
            <h3 className="font-display text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
              {title}
            </h3>
            {badge && (
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/10">
                {badge}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md self-start sm:self-auto py-2 sm:py-1 min-h-[36px]"
          >
            <span>{isOpen ? closeLabel : openLabel}</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-xs"
              aria-hidden="true"
            >
              ▼
            </motion.span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[62ch]">
          {summary}
        </p>
      </div>

      {/* Smoothly Animated Drawer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden pt-4 border-t border-zinc-200/80 dark:border-white/10" /* taste-skill-ignore */
          >
            <div className="space-y-4">
              {children}

              {showBottomCollapse && (
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors py-1"
                  >
                    <span>{closeLabel}</span>
                    <span aria-hidden="true">↑</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
