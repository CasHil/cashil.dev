import Marked from "./Marked";

interface FormattedBulletProps {
  text: string;
  plain?: boolean;
  className?: string;
}

export default function FormattedBullet({
  text,
  plain = false,
  className = "flex items-start gap-2.5 leading-relaxed text-base text-text-secondary",
}: FormattedBulletProps) {
  return (
    <li className={className}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.6em] shrink-0" aria-hidden="true" />
      <span>
        <Marked text={text} plain={plain} />
      </span>
    </li>
  );
}
