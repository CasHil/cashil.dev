// Runs Vale over the site copy. The copy lives in TypeScript dictionaries, which
// Vale cannot read as prose, so this script extracts every user-facing string
// into Markdown (one file per language) and lints that:
//   English -> styles/Tropes   (the tropes.fyi rules, same as the home repo)
//   Dutch   -> styles/CasperNL (the Dutch rules from the home repo)
// Usage: node scripts/lint-prose.mjs
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { loadTranslations, root } from "./load-translations.mjs";

const translations = await loadTranslations();

// Strings that are not prose: URLs, file names, asset paths and tech lists.
const SKIP_KEYS = new Set(["repositoryLink", "uri", "stack", "skills", "items", "year"]);

// A skipped key only skips strings and string lists stored directly under it.
// Arrays of objects (work roles, degrees) are always walked.
function collect(value, key, out) {
  if (typeof value === "string") {
    if (!SKIP_KEYS.has(key) && /\s/.test(value)) out.push(value);
  } else if (Array.isArray(value)) {
    for (const entry of value) collect(entry, typeof entry === "string" ? key : "", out);
  } else if (value && typeof value === "object") {
    for (const [childKey, child] of Object.entries(value)) collect(child, childKey, out);
  }
}

const files = [];
for (const [language, dictionary] of Object.entries(translations)) {
  const lines = [];
  for (const [section, content] of Object.entries(dictionary)) {
    const strings = [];
    collect(content, section, strings);
    if (strings.length === 0) continue;
    lines.push(`<!-- ${section} -->`, "");
    for (const text of strings) {
      // Timeline text stores one bullet per line.
      for (const part of text.split("\n")) lines.push(part.replace(/\*\*(.+?)\*\*/g, "$1"), "");
    }
  }
  // Relative paths: the per-language sections in .vale.ini match on them.
  const file = `.vale-copy/site.${language}.md`;
  fs.writeFileSync(path.join(root, file), lines.join("\n"), "utf-8");
  files.push(file);
}

// Suggestions are printed for the author to weigh; warnings and errors fail the run.
const result = spawnSync("vale", ["--config", ".vale.ini", ...files], {
  stdio: "inherit",
  cwd: root,
});

if (result.error) {
  console.error("Vale is not installed or not on PATH. See https://vale.sh/docs/install");
  process.exit(2);
}
process.exit(result.status ?? 1);
