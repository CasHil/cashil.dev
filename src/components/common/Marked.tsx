import { Fragment } from "react";

interface MarkedProps {
  text: string;
  plain?: boolean;
}

const MARKER = /\*\*(.+?)\*\*/g;

/** Removes the `**marker**` syntax and keeps the words. */
export function stripMarkers(text: string) {
  return text.replace(MARKER, "$1");
}

/**
 * Renders copy with the design language's one emphasis: `**words**` becomes
 * the sunflower marker. See DESIGN.md, "Mark what matters".
 */
export default function Marked({ text, plain = false }: MarkedProps) {
  if (plain) return <>{stripMarkers(text)}</>;

  const parts = text.split(MARKER);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <mark key={index} className="marker">
            {part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
