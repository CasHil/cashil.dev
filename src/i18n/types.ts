export type Language = "en" | "nl";

export interface NavTranslations {
  overview: string;
  cv: string;
  workExperience: string;
  workShort: string;
  education: string;
  menu: string;
  close: string;
  quickActions: string;
  preferences: string;
  swipeNav: string;
  downloadCv: string;
}

export interface SidebarTranslations {
  name: string;
  role: string;
  degrees: string;
  location: string;
  coreDomainsLabel: string;
  coreDomains: string[];
  year: string;
  cvDownload: string;
  copyEmail: string;
  copiedEmail: string;
  timezone: string;
}

export interface CvTranslations {
  title: string;
  subtitle: string;
  openNewTab: string;
  downloadPdf: string;
  mobilePrompt: string;
  viewFullscreen: string;
  pdfLanguageLabel: string;
  englishPdf: string;
  dutchPdf: string;
}

export interface IntroTranslations {
  kicker: string;
  heroTitle: string;
  bioParagraph1: string;
  bioParagraph2: string;
  viewCv: string;
  exploreWork: string;
  featuredHeading: string;
  featuredSubtitle: string;
  // Tikkie Business Flagship
  tikkieTag: string;
  tikkieTitle: string;
  tikkieSubtitle: string;
  tikkieDescription: string;
  tikkiePoints: string[];
  tikkieStack: string[];
  tikkieLink: string;
  // Bitsized Flagship
  bitsizedTag: string;
  bitsizedTitle: string;
  bitsizedSubtitle: string;
  bitsizedDescription: string;
  bitsizedPoints: string[];
  bitsizedStack: string[];
  bitsizedLink: string;
  // Engineering Ethos / Philosophy
  // Technology Experience Live Counter
  techHeading: string;
  techSubtitle: string;
  techLiveBadge: string;
  // Teaching & Mentorship
  mentorshipHeading: string;
  mentorshipDescription: string;
  outsideTitle: string;
  outsideDescription: string;
}

export interface WorkRole {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  text: string;
  skills: string[];
  category?: "engineering" | "education";
  tier?: "featured" | "foundational";
  image?: {
    uri: string;
    alt: string;
  };
}

export interface WorkExperienceTranslations {
  title: string;
  intro: string;
  currentBadge: string;
  to: string;
  cvBtn: string;
  educationBtn: string;
  primaryHeading: string;
  primarySubtitle: string;
  earlyEngineeringTitle: string;
  earlyEngineeringBadge: string;
  earlyEngineeringSubtitle: string;
  showEarlyEngineering: string;
  hideEarlyEngineering: string;
  academicHeading: string;
  academicBadge: string;
  academicSummary: string;
  showAcademic: string;
  hideAcademic: string;
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

export interface ResearchPublication {
  badge: string;
  title: string;
  subtitle: string;
  datasetStat: string;
  datasetLabel: string;
  runsStat: string;
  runsLabel: string;
  gapStat: string;
  gapLabel: string;
  abstract: string;
  methods: string[];
  repositoryLink: string;
  repositoryText: string;
}

export interface EducationTranslations {
  title: string;
  intro: string;
  thesisTitle: string;
  publication: ResearchPublication;
  items: EducationItem[];
}

export interface OutreachTranslations {
  heading: string;
  subheading: string;
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
  outreach: OutreachTranslations;
}
