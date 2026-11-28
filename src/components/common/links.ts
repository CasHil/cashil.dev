import { Language } from "../../i18n/types";

export const EMAIL = "casperhildebrand@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/casper-hildebrand/";
export const GITHUB_URL = "https://github.com/CasHil";

export function cvPdf(language: Language) {
  const fileName =
    language === "nl" ? "Casper_Hildebrand_CV_NL.pdf" : "Casper_Hildebrand_CV.pdf";
  return { fileName, url: `/cv/${fileName}` };
}

const button =
  "inline-flex items-center justify-center px-6 min-h-[48px] rounded-full font-semibold text-base hover:opacity-90 active:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

/** The one filled button. Sunflower, because it only ever sits on an indigo panel. */
export const primaryButton = `${button} bg-accent text-ink-fixed focus-visible:ring-accent focus-visible:ring-offset-ink`;

const link =
  "font-semibold underline underline-offset-4 decoration-2 decoration-accent transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

/** A link on the cream page. */
export const textLink = `${link} text-text-primary hover:decoration-text-primary`;

/** A link on an indigo panel. */
export const panelLink = `${link} text-on-ink hover:decoration-on-ink`;
