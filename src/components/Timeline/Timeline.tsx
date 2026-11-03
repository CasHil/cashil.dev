import { TimelineItemData } from "../../types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: TimelineItemData[];
}

export default function Timeline({ data }: TimelineProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="space-y-10 sm:space-y-12">
      {data.map((item, idx) => (
        <TimelineItem key={`${item.title}-${item.startDate}-${idx}`} data={item} />
      ))}
    </div>
  );
}
