# Agent Guidelines

## Architecture & Data Navigation
- **Resume & Profile Copy**: `src/i18n/translations.ts` contains all bilingual (EN/NL) copy, including work milestones, degrees, thesis telemetry, and principles. There are no separate `TimelineJobs.ts` or `TimelineEducation.ts` files.
- **Curriculum Vitae (LaTeX)**: `cv/Casper_Hildebrand_CV.tex` and `cv/Casper_Hildebrand_CV_NL.tex` are compiled to `public/cv/Casper_Hildebrand_CV.pdf` and `public/cv/Casper_Hildebrand_CV_NL.pdf` using `pnpm run build:cv`. Must strictly adhere to a **1-page budget**.
- **Research Publication**: Master's thesis telemetry and publication citation are presented under `/education` linking to the official TU Delft repository.

## Tooling & Environment Constraints
- **Shell**: Host is Windows PowerShell 5.1/7. Use `;` or sequential commands; never use `&&`.
- **Node.js Runtime**: Project uses ES modules (`"type": "module"` in `package.json`). Scripts must use `import` or `.cjs` extensions.
- **Sandbox**: Operations that inspect drive root `F:\` or run build/compilation binaries require `BypassSandbox: true`.
- **Cloudflare**: Use the `cf` CLI unless the project has a Wrangler configuration file.

## Quality & Design Guardrails
- **Anti-Slop Knowledge Base**: Before proposing copy, styling, or architecture changes, review `criticism.md` and `criticisms/README.md`. Adhere strictly to the 10-point Anti-Slop Prevention Checklist.
- **Card Elevation**: Every card must feature a visible border and drop shadow (`shadow-sm hover:shadow-md`) on both mobile and desktop. Never strip borders or shadows on desktop (`sm:border-none sm:shadow-none`).
- **Bilingual Parity**: Any copy added or modified in `src/i18n/` must maintain 100% symmetry between `en` and `nl`.
- **Typography & Accessibility**: Maintain minimum `text-xs` (12px) for UI copy to prevent `[tiny-text]` violations. Reserve `font-mono` strictly for code, syntax, paths, and stack chips.
- **ATS Single-Page CV**: Never allow `cv/Casper_Hildebrand_CV.tex` or `cv/Casper_Hildebrand_CV_NL.tex` to spill onto page 2.

## Safety & File System Guardrails
- **Strict Deletion Boundary**: NEVER run deletion commands (`Remove-Item`, `del`, `rmdir`, `rm`) on files or directories outside the project root (`f:\Projects\cashil.github.io`) and temporary scratch locations (`$env:TEMP`, `.gemini/.../scratch`). Deletion of external files, system roots, or arbitrary user directories is strictly prohibited.
- **Scoped Writes**: Agents must never mutate or write files outside the workspace repository, the `.gemini` agent state directory, or the designated OS temp folder.

