// Writes cv/Casper_Hildebrand_CV.tex and cv/Casper_Hildebrand_CV_NL.tex from the
// site copy in src/i18n, so the PDF and the web CV cannot drift apart.
// The .tex files are generated: edit the copy in src/i18n/locales, then run
// `pnpm run build:cv`. The result must stay on one page.
import fs from "node:fs";
import path from "node:path";
import { loadTranslations, root } from "./load-translations.mjs";

const EMAIL = "casperhildebrand@gmail.com";

const tex = (text) =>
  text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([&%$#_{}])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");

// The site writes in the first person ("I build ..."). A CV drops the pronoun.
function cvLine(line, language) {
  const pronoun = language === "nl" ? /^Ik\s+/ : /^I\s+/;
  const stripped = line.replace(pronoun, "");
  return tex(stripped.charAt(0).toUpperCase() + stripped.slice(1));
}

function entry(heading, dates, subheading, lines, language) {
  const items = lines.map((line) => `      \\item ${cvLine(line, language)}`).join("\n");
  return [
    "  \\resumeSubheading",
    `    {${tex(heading)}}{${tex(dates)}}`,
    `    {${tex(subheading)}}`,
    "    \\resumeItemListStart",
    items,
    "    \\resumeItemListEnd",
  ].join("\n");
}

function document(t, language) {
  const dates = (item) => `${item.startDate} -- ${item.endDate}`;

  const experience = t.workExperience.items
    .map((role) => entry(role.title, dates(role), role.subtitle, role.text.split("\n"), language))
    .join("\n\n");

  const education = t.education.items
    .map((item) => entry(item.subtitle, dates(item), item.title, item.text.split("\n"), language))
    .join("\n\n");

  const skills = t.cv.skills
    .map((group) => `  \\textbf{${tex(group.category)}} & ${tex(group.items)} \\\\`)
    .join("\n");

  return `% -----------------------------------------------------------------------------
% GENERATED FILE. Do not edit by hand.
% Source: src/i18n/locales/${language}/ (cv.ts, experience.ts, education.ts)
% Regenerate and compile with: pnpm run build:cv
% CONSTRAINT: this document must compile to exactly one page.
% -----------------------------------------------------------------------------
\\documentclass[10pt,a4paper]{article}

\\usepackage[utf8]{inputenc}
\\usepackage{titlesec}
\\usepackage[usenames,dvipsnames]{xcolor}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage[margin=0.55in, top=0.5in, bottom=0.5in]{geometry}
\\usepackage{tabularx}

\\definecolor{primary}{RGB}{17, 24, 39}
\\definecolor{accent}{RGB}{74, 107, 86}
\\definecolor{subtle}{RGB}{75, 85, 99}
\\definecolor{rulecolor}{RGB}{229, 231, 235}

\\urlstyle{same}
\\pagestyle{empty}

\\titleformat{\\section}{
  \\vspace{-2pt}\\raggedright\\normalsize\\bfseries\\color{primary}
}{}{0em}{}[\\color{rulecolor}\\titlerule \\vspace{-2pt}]

\\newcommand{\\resumeSubheading}[3]{
  \\vspace{1pt}
  \\item[]
  \\begin{tabular*}{\\linewidth}{@{}l@{\\extracolsep{\\fill}}r@{}}
    \\textbf{#1} & \\footnotesize \\color{subtle} #2 \\\\
    \\small #3 & \\\\
  \\end{tabular*}\\vspace{-2pt}
}

\\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=1.1em, label=\\textcolor{accent}{\\scriptsize$\\bullet$}, itemsep=1.5pt, topsep=1.5pt]\\footnotesize}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-2pt}}

\\begin{document}

\\begin{center}
  {\\LARGE \\textbf{${tex(t.sidebar.name)}}} \\\\ \\vspace{3pt}
  \\small ${tex(t.cv.headline)}, ${tex(t.sidebar.location)} \\\\ \\vspace{3pt}
  \\footnotesize
  \\href{mailto:${EMAIL}}{${EMAIL}} \\quad$\\vert$\\quad
  \\href{https://cashil.dev}{cashil.dev} \\quad$\\vert$\\quad
  \\href{https://github.com/CasHil}{github.com/CasHil} \\quad$\\vert$\\quad
  \\href{https://www.linkedin.com/in/casper-hildebrand/}{linkedin.com/in/casper-hildebrand}
\\end{center}
\\vspace{-4pt}

\\section{${tex(t.cv.profileHeading)}}
{\\footnotesize ${tex(t.cv.profile)}}

\\section{${tex(t.cv.experienceHeading)}}
\\begin{itemize}[leftmargin=0em, label={}]

${experience}

\\end{itemize}

\\section{${tex(t.cv.educationHeading)}}
\\begin{itemize}[leftmargin=0em, label={}]

${education}

\\end{itemize}

\\section{${tex(t.cv.skillsHeading)}}
\\begingroup
\\footnotesize
\\begin{tabularx}{\\linewidth}{@{}l X@{}}
${skills}
\\end{tabularx}
\\endgroup

\\end{document}
`;
}

const translations = await loadTranslations();
const targets = { en: "Casper_Hildebrand_CV.tex", nl: "Casper_Hildebrand_CV_NL.tex" };

for (const [language, fileName] of Object.entries(targets)) {
  const file = path.join(root, "cv", fileName);
  fs.writeFileSync(file, document(translations[language], language), "utf-8");
  console.log(`Wrote cv/${fileName} from src/i18n/locales/${language}`);
}
