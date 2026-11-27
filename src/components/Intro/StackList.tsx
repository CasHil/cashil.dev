import { useLanguage } from "../../context/LanguageContext";

export default function StackList() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="stack-heading" className="space-y-5">
      <h2
        id="stack-heading"
        className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-text-primary"
      >
        {t.intro.stackHeading}
      </h2>
      <dl className="space-y-3 text-base">
        {t.intro.stack.map((group) => (
          <div
            key={group.category}
            className="grid gap-0.5 sm:gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <dt className="font-medium text-text-primary">{group.category}</dt>
            <dd className="text-text-secondary max-w-[62ch]">{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
