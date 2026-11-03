interface FormattedBulletProps {
  text: string;
  bulletColor?: string;
  className?: string;
}

export default function FormattedBullet({
  text,
  bulletColor = "bg-brand/70",
  className = "flex items-start gap-2.5 leading-relaxed text-sm sm:text-base text-text-secondary",
}: FormattedBulletProps) {
  // Strip leading list bullet or hyphen prefix if present
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
            <strong className="font-semibold text-text-primary">
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
