import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18nDir = path.join(__dirname, "..", "src", "i18n");

if (!fs.existsSync(i18nDir)) {
  console.error(`Error: i18n directory not found at ${i18nDir}`);
  process.exit(1);
}

// Banned generic AI buzzwords and superficial filler
const BANNED_PATTERNS = [
  /\bdelve\b/i,
  /\bfoster(?:s|ing|ed)?\b/i,
  /\butilize(?:s|d|ing)?\b/i,
  /\bfacilitate(?:s|d|ing)?\b/i,
  /\bempower(?:s|ed|ing)?\b/i,
  /\bstreamline(?:s|d|ing)?\b/i,
  /\bcutting[- ]edge\b/i,
  /\bparadigm shift\b/i,
  /\btapestry\b/i,
  /\brealm\b/i,
  /\bbeacon\b/i,
  /\bmultifaceted\b/i,
  /\bmeticulous(?:ly)?\b/i,
  /\bintricate(?:ly)?\b/i,
  /\bparamount\b/i,
  /\btransformative\b/i,
  /\belevate(?:s|d|ing)?\b/i,
  /\bembark(?:s|ed|ing)?\b/i,
  /\bsupercharge(?:s|d|ing)?\b/i,
  /\bharness(?:es|ed|ing)?\b/i,
  /\bever[- ]evolving\b/i,
];

function getAllTsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTsFiles(fullPath));
    } else if (file.endsWith(".ts")) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getAllTsFiles(i18nDir);
let violations = 0;

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const relativePath = path.relative(path.join(__dirname, ".."), filePath);
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("*")) return;

    for (const pattern of BANNED_PATTERNS) {
      const match = line.match(pattern);
      if (match) {
        console.error(
          `[Copy Guardrail Violation] ${relativePath}:${index + 1}: Found banned AI buzzword "${match[0]}"`
        );
        console.error(`  > ${line.trim()}`);
        violations++;
      }
    }
  });
});

if (violations > 0) {
  console.error(`\nFound ${violations} banned buzzword violation(s) across i18n files.`);
  console.error("Please replace them with concrete, direct engineering language.");
  process.exit(1);
} else {
  console.log(`✓ Copy guardrail passed: Zero banned AI buzzwords found across ${files.length} i18n files`);
  process.exit(0);
}
