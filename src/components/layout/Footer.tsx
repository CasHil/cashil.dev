import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pb-10 text-sm text-text-muted">
      {t.sidebar.year}
    </footer>
  );
}
