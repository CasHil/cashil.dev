import { Language } from "../../i18n/types";

export const EMAIL = "casperhildebrand@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/casper-hildebrand/";
export const GITHUB_URL = "https://github.com/CasHil";

export function cvPdf(language: Language) {
  const fileName =
    language === "nl" ? "Casper_Hildebrand_CV_NL.pdf" : "Casper_Hildebrand_CV.pdf";
  return { fileName, url: `/cv/${fileName}` };
}

export const primaryButton =
  "inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-lg bg-text-primary text-canvas font-medium text-sm hover:opacity-85 active:scale-[0.98] transition-[opacity,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export const secondaryButton =
  "inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-lg border border-border-hover text-text-primary font-medium text-sm hover:bg-surface-hover active:scale-[0.98] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export const textLink =
  "font-medium text-brand underline underline-offset-4 decoration-brand-border hover:decoration-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm";
