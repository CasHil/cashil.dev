
interface FormattedBulletProps {
  text: string;
  bulletColor?: string;
  className?: string;
}

export default function FormattedBullet({
  text,
  bulletColor = "bg-emerald-600 dark:bg-emerald-400",
  className = "flex items-start gap-2.5 leading-relaxed text-sm sm:text-base text-zinc-600 dark:text-zinc-300",
}: FormattedBulletProps) {
  // Strip leading list bullet or hyphen prefix (e.g. "• ", "- ", "– ") if present, without stripping markdown bold `**`
  const clean = text.replace(/^(?:[•\u2013\u2014]|\-(?!\*))\s*/, "").trim();
  const match = clean.match(/^\*\*(.+?)\*\*[:\-—]?\s*(.*)$/);

  return (
    <li className={className}>
      <span
        className={`w-1.5 h-1.5 rounded-full ${bulletColor} mt-2 shrink-0`}
        aria-hidden="true"
      />
      <span>
        {match ? (
          <>
            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">
              {match[1]}:
            </strong>{" "}
            {match[2]}
          </>
        ) : (
          clean
        )}
      </span>
    </li>
  );
}
