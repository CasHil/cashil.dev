
interface FormattedBulletProps {
  text: string;
  bulletColor?: string;
  className?: string;
}

export default function FormattedBullet({
  text,
  bulletColor = "text-emerald-700 dark:text-emerald-400",
  className = "flex items-start gap-2 leading-relaxed",
}: FormattedBulletProps) {
  const clean = text.replace(/^[•\-*]\s*/, "");
  const match = clean.match(/^\*\*(.*?)\*\*:\s*(.*)$/);

  return (
    <li className={className}>
      <span className={`${bulletColor} font-bold shrink-0 mt-0.5`} aria-hidden="true">
        •
      </span>
      <span>
        {match ? (
          <>
            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
            {match[2]}
          </>
        ) : (
          clean
        )}
      </span>
    </li>
  );
}
