export type Language = "en" | "nl";

export interface NavTranslations {
  overview: string;
  cv: string;
  workExperience: string;
  workShort: string;
  education: string;
  menu: string;
  close: string;
  settings: string;
  language: string;
  theme: string;
  lightTheme: string;
  darkTheme: string;
}

export interface SidebarTranslations {
  name: string;
  role: string;
  location: string;
  year: string;
}

export interface CvTranslations {
  title: string;
  subtitle: string;
  openPdf: string;
  downloadPdf: string;
  pdfLanguageLabel: string;
  englishPdf: string;
  dutchPdf: string;
  profileHeading: string;
  profile: string;
  experienceHeading: string;
  educationHeading: string;
  skillsHeading: string;
  skills: SkillGroup[];
}

export interface SkillGroup {
  category: string;
  items: string;
}

export interface WorkHighlight {
  title: string;
  meta: string;
  paragraphs: string[];
  stack: string[];
}

export interface IntroTranslations {
  heroTitle: string;
  heroFacts: string;
  story: string[];
  emailCta: string;
  cvCta: string;
  workHeading: string;
  work: WorkHighlight[];
  workLink: string;
  stackHeading: string;
  stack: SkillGroup[];
}

export interface WorkRole {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  text: string;
  skills: string[];
  image?: {
    uri: string;
    alt: string;
  };
}

export interface WorkExperienceTranslations {
  title: string;
  intro: string;
  to: string;
  items: WorkRole[];
}

export interface EducationItem {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  text: string;
  skills: string[];
  image?: {
    uri: string;
    alt: string;
  };
}

export interface ThesisTranslations {
  title: string;
  meta: string;
  paragraphs: string[];
  repositoryLink: string;
  repositoryText: string;
}

export interface EducationTranslations {
  title: string;
  intro: string;
  thesis: ThesisTranslations;
  items: EducationItem[];
}

export interface ContactTranslations {
  heading: string;
  body: string;
  emailBtn: string;
  cvBtn: string;
}

export interface TranslationDictionary {
  nav: NavTranslations;
  sidebar: SidebarTranslations;
  cv: CvTranslations;
  intro: IntroTranslations;
  workExperience: WorkExperienceTranslations;
  education: EducationTranslations;
  contact: ContactTranslations;
}
