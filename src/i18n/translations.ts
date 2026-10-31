import { enLocale } from "./locales/en";
import { nlLocale } from "./locales/nl";
import { Language, TranslationDictionary } from "./types";

export type {
  Language,
  TranslationDictionary,
  NavTranslations,
  SidebarTranslations,
  CvTranslations,
  IntroTranslations,
  WorkExperienceTranslations,
  EducationTranslations,
  OutreachTranslations,
} from "./types";

export const translations: Record<Language, TranslationDictionary> = {
  en: enLocale,
  nl: nlLocale,
};
