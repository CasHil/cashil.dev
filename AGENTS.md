# Agent Guidelines

## Architecture & Data Navigation
- **Resume & Profile Copy**: `src/i18n/translations.ts` contains all bilingual (EN/NL) copy, including work milestones, degrees, thesis telemetry, and principles. There are no separate `TimelineJobs.ts` or `TimelineEducation.ts` files.
- **Curriculum Vitae (LaTeX)**: `cv/Casper_Hildebrand_CV.tex` and `cv/Casper_Hildebrand_CV_NL.tex` are compiled to `public/cv/Casper_Hildebrand_CV.pdf` and `public/cv/Casper_Hildebrand_CV_NL.pdf` using `pnpm run build:cv`. Must strictly adhere to a **1-page budget**.
- **Research Publication**: Master's thesis telemetry and publication citation are presented under `/education` linking to the official TU Delft repository.

## Tooling & Environment Constraints
- **Shell**: Host is Windows PowerShell 5.1/7. Always run commands sequentially as separate invocations. Never join with `;`, `&&`, or wrap with `cmd /c` / `powershell -Command` as this breaks permission prefix matching.
- **Node.js Runtime**: Project uses ES modules (`"type": "module"` in `package.json`). Scripts must use `import` or `.cjs` extensions.
- **Sandbox**: Operations within the repository execute sandboxed (`BypassSandbox: false`). Only escalate to `BypassSandbox: true` when external network access or host-specific binaries (e.g., Tectonic package downloads) strictly require it.
- **Cloudflare**: Use the `cf` CLI unless the project has a Wrangler configuration file.

## Git & PR Workflow
- **Branch-Isolated Development**: Develop all changes on dedicated branches (`feat/*` or `chore/*`). Never commit or push directly to `main` or `master`.
- **Automated Verification**: Always run `pnpm test run` and `pnpm run build` locally before pushing.
- **PR Lifecycle**: Push to branch (`git push -u origin <branch>`), open PR (`gh pr create`), and merge when verified (`gh pr merge <num> --merge --delete-branch`). Never use `git push --force`.


## Quality & Design Guardrails
- **Anti-Slop Knowledge Base**: Before proposing copy, styling, or architecture changes, review `criticism.md`, `criticisms/README.md`, and `criticisms/08-twenty-ways-to-unslop-ai-designs.md`. Adhere strictly to the **20-point Anti-Slop Prevention Checklist**.
- **Card Elevation**: Every card must feature a visible border and drop shadow (`shadow-sm hover:shadow-md`) on both mobile and desktop. Never strip borders or shadows on desktop (`sm:border-none sm:shadow-none`).
- **Concentric Corner Radius ($R_{\text{inner}} = R_{\text{outer}} - P$)**: Always ensure nested corner radii follow $R_{\text{inner}} = \max(0, R_{\text{outer}} - P)$ to prevent pinched gaps and mismatched curves.
- **Bilingual Parity**: Any copy added or modified in `src/i18n/` must maintain 100% symmetry between `en` and `nl`.
- **Typography & Accessibility**: Maintain minimum `text-xs` (12px) for UI copy to prevent `[tiny-text]` violations. Reserve `font-mono` strictly for code, syntax, paths, and stack chips.
- **ATS Single-Page CV**: Never allow `cv/Casper_Hildebrand_CV.tex` or `cv/Casper_Hildebrand_CV_NL.tex` to spill onto page 2.

## Safety & File System Guardrails
- **Permitted File Modification & Deletion Whitelist**: File writes, mutations, and deletions (`Remove-Item`, `del`, `rmdir`, `rm`, `git rm`) are strictly prohibited outside:
  1. `F:\Projects\` (project repositories)
  2. `C:\Users\Casper\.gemini\` (Antigravity configs, scratch, tools)
  3. `C:\Users\Casper\.claude\` (Claude configs, skills, memory)
  4. `C:\Users\Casper\.agents\` (Agent skills and global rules)
  5. OS temporary scratch locations (`$env:TEMP`, `.gemini/.../scratch`)
  Modifying or deleting files outside these 5 locations is strictly prohibited.

