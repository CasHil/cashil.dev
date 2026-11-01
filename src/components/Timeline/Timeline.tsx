import { TimelineItemData } from "../../types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: TimelineItemData[];
}

export default function Timeline({ data }: TimelineProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="relative pl-6 sm:pl-8 space-y-10">
      {/* Handcrafted Organic Vertical Vector Spine */}
      <div className="absolute left-2 sm:left-3 top-3 bottom-3 w-px pointer-events-none select-none" aria-hidden="true">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            className="stroke-zinc-200/90 dark:stroke-zinc-800"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      {data.map((item, idx) => (
        <div key={`${item.title}-${item.startDate}-${idx}`} className="relative">
          {/* Organic Node Marker on the Spine */}
          <div
            className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 -translate-x-1/2 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-canvas border-2 border-emerald-600 dark:border-emerald-400" />
          </div>

          <TimelineItem data={item} />
        </div>
      ))}
    </div>
  );
}
