import { TimelineItemData } from "../../types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: TimelineItemData[];
}

export default function Timeline({ data }: TimelineProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="border-t border-border-subtle divide-y divide-border-subtle">
      {data.map((item, idx) => (
        <TimelineItem key={`${item.title}-${item.startDate}-${idx}`} data={item} />
      ))}
    </div>
  );
}
