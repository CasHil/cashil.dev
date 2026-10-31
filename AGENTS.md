# Agent Guidelines

## Architecture & Data Navigation
- **Resume & Profile Copy**: `src/i18n/translations.ts` contains all bilingual (EN/NL) copy, including work milestones, degrees, thesis telemetry, and principles. There are no separate `TimelineJobs.ts` or `TimelineEducation.ts` files.
- **Curriculum Vitae (LaTeX)**: `cv/Casper_Hildebrand_CV.tex` is compiled to `public/cv/Casper_Hildebrand_CV.pdf` using `pnpm run build:cv`. Must strictly adhere to a **1-page budget**.
- **Research Publication**: Master's thesis telemetry and publication citation are presented under `/education` linking to the official TU Delft repository.

## Tooling & Environment Constraints
- **Shell**: Host is Windows PowerShell 5.1/7. Use `;` or sequential commands; never use `&&`.
- **Node.js Runtime**: Project uses ES modules (`"type": "module"` in `package.json`). Scripts must use `import` or `.cjs` extensions.
- **Sandbox**: Operations that inspect drive root `F:\` or run build/compilation binaries require `BypassSandbox: true`.
- **Cloudflare**: Use the `cf` CLI unless the project has a Wrangler configuration file.

## Quality & Design Guardrails
- **Bilingual Parity**: Any copy added or modified in `src/i18n/translations.ts` must maintain 100% symmetry between `en` and `nl`.
- **Typography & Accessibility**: Maintain minimum `text-xs` (12px) for UI copy to prevent `[tiny-text]` or `[undersized-ui-text]` violations in `impeccable detect`.
- **ATS Single-Page CV**: Never allow `cv/Casper_Hildebrand_CV.tex` to spill onto page 2.

## Safety & File System Guardrails
- **Strict Deletion Boundary**: NEVER run deletion commands (`Remove-Item`, `del`, `rmdir`, `rm`) on files or directories outside the project root (`f:\Projects\cashil.github.io`) and temporary scratch locations (`$env:TEMP`, `.gemini/.../scratch`). Deletion of external files, system roots, or arbitrary user directories is strictly prohibited.
- **Scoped Writes**: Agents must never mutate or write files outside the workspace repository, the `.gemini` agent state directory, or the designated OS temp folder.

