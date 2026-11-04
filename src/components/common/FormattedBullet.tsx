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
  // Strip leading list bullet or hyphen prefix and any markdown bold markers
  const clean = text
    .replace(/^(?:[•\u2013\u2014]|\-(?!\*))\s*/, "")
    .replace(/\*\*/g, "")
    .trim();

  return (
    <li className={className}>
      <span
        className={`w-1.5 h-1.5 rounded-full ${bulletColor} mt-2 shrink-0`}
        aria-hidden="true"
      />
      <span>{clean}</span>
    </li>
  );
}
