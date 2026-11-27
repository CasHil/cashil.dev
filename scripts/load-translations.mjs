// Compiles src/i18n/translations.ts to plain ESM with Vite (already a dependency)
// and returns the dictionaries, so Node scripts can read the site copy.
import { build } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const outDir = path.join(root, ".vale-copy");

export async function loadTranslations() {
  fs.mkdirSync(outDir, { recursive: true });
  await build({
    configFile: false,
    logLevel: "silent",
    publicDir: false,
    build: {
      ssr: path.join(root, "src", "i18n", "translations.ts"),
      outDir,
      emptyOutDir: false,
      rollupOptions: { output: { entryFileNames: "translations.mjs" } },
    },
  });
  const bundle = pathToFileURL(path.join(outDir, "translations.mjs"));
  const { translations } = await import(`${bundle.href}?t=${Date.now()}`);
  return translations;
}
