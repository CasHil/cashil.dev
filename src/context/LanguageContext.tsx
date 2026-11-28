import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, TranslationDictionary, translations } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

// The copy files keep straight apostrophes, which the prose linter requires.
// The page shows typographic ones: master's becomes master’s.
function typeset<T>(value: T): T {
  if (typeof value === "string") {
    return value.replace(/(?<=\p{L})'(?=\p{L})/gu, "’") as T;
  }
  if (Array.isArray(value)) return value.map(typeset) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, typeset(entry)])
    ) as T;
  }
  return value;
}

const typesetTranslations: Record<Language, TranslationDictionary> = {
  en: typeset(translations.en),
  nl: typeset(translations.nl),
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en" || saved === "nl") return saved;
    // Detect Dutch browser preference if available
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("nl")) return "nl";
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "nl" : "en"));
  };

  const t = typesetTranslations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
