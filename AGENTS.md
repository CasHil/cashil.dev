# Agent Guidelines

## Architecture & Data Navigation
- **Resume & Profile Copy**: `src/i18n/translations.ts` contains all bilingual (EN/NL) copy, including work milestones, degrees, thesis telemetry, and principles. There are no separate `TimelineJobs.ts` or `TimelineEducation.ts` files.
- **Curriculum Vitae (LaTeX)**: `cv/Casper_Hildebrand_CV.tex` and `cv/Casper_Hildebrand_CV_NL.tex` are compiled to `public/cv/Casper_Hildebrand_CV.pdf` and `public/cv/Casper_Hildebrand_CV_NL.pdf` using `pnpm run build:cv`. Must strictly adhere to a **1-page budget**.
- **Research Publication**: Master's thesis telemetry and publication citation are presented under `/education` linking to the official TU Delft repository.

## Tooling & Environment Constraints
- **Shell**: Host is Windows PowerShell 5.1/7. Always run commands sequentially as separate invocations. Never join with `;`, `&&`, or wrap with `cmd /c` / `powershell -Command` as this breaks permission prefix matching.
- **Node.js Runtime**: Project uses ES modules (`"type": "module"` in `package.json`). Scripts must use `import` or `.cjs` extensions.
- **Host Execution for Pre-Approved Workspace**: For this repository (`f:\Projects\cashil.github.io`), always execute terminal commands natively with `BypassSandbox: true`. On Windows, the container sandbox runner frequently freezes on Node/pnpm/git operations. Because all commands, binaries, and subcommands in this repository are pre-approved in user settings, running with `BypassSandbox: true` executes natively in milliseconds with zero manual approval prompts.
- **No Complex Inline Scripts**: Never execute multi-line inline scripts (e.g. `python -c "..."` or complex string evaluations) directly via command line, as shell argument parsers force exact-string matches and trigger approval prompts. Instead, write dedicated script files in scratch or scripts directories and invoke them cleanly.
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
- **No Fake Live Telemetry (Rule 21)**: Never implement live minute/hour countdown clocks, interval tickers, or simulated telemetry for career experience duration.
- **Absolute Ban on Card-in-Card & Cardocalypse (Rule 22)**: Cards are the lazy container; nested cards are always wrong. Never nest cards inside cards, never wrap timeline entries in boxed cards, and never render chips with borders inside cards. Let typography and whitespace structure the page.
- **Absolute Ban on Eyebrows & Kickers (Rule 23)**: Headings carry their own weight; delete the label and let the heading speak. Never place uppercase overlines, pill tags, or avatar kickers above headings.
- **Ban Bento Grid Monoculture (Rule 24)**: Never scaffold features or metrics into identical 3-card or 6-card bento grids. Use clean editorial layouts with hairline dividers (`divide-y`).
- **Ban Border Accents on Rounded Containers (Rule 25)**: Never apply thick borders (`border-b-2`) inside or on rounded containers. Use 1px borders (`border-b border-border-subtle`).
- **Ban the Em Dash (—) Bullet Epidemic (Rule 26)**: Never use colored em dashes (`—`) as bullet points. Use authentic circular bullets (`FormattedBullet`).
- **Clean Navigation & No Duplicate CTAs (Rule 27 & 28)**: Never duplicate primary navigation routes (e.g. CV) as adjacent utility buttons. Never prefix navigation labels with artificial zero-padded numbers (`01`, `02`).
- **Mobile Touch Ergonomics (Rule 29)**: All interactive buttons, toggles, and links on mobile must have a minimum hit target of 44×44px (minimum 40px with spacing). Never render 28px/32px micro-buttons.
- **No Trailing Colons on Categories (Rule 30)**: Omit trailing colons (`Languages:`, `Frontend:`) on CV skill categories; use typographic weight instead.
- **Authentic Monospace Configuration (Rule 31)**: Never map `font-mono` to `system-ui` to bypass unit tests. Maintain true monospace fonts for code and enforce sans-serif on editorial prose.

## Safety & File System Guardrails
- **Permitted File Modification & Deletion Whitelist**: File writes, mutations, and deletions (`Remove-Item`, `del`, `rmdir`, `rm`, `git rm`) are strictly prohibited outside:
  1. `F:\Projects\` (project repositories)
  2. `C:\Users\Casper\.gemini\` (Antigravity configs, scratch, tools)
  3. `C:\Users\Casper\.claude\` (Claude configs, skills, memory)
  4. `C:\Users\Casper\.agents\` (Agent skills and global rules)
  5. OS temporary scratch locations (`$env:TEMP`, `.gemini/.../scratch`)
  Modifying or deleting files outside these 5 locations is strictly prohibited.

## Pre-Approved Safe Operations & Auto-Execution Scope
- **Workspace Scope Guarantee**: Any command, file modification, or build executed within this repository (`f:\Projects\cashil.github.io`) is 100% pre-approved and safe. Agents must execute these operations proactively without prompting the user for approval.
- **Git & PR Automation**: Creating branches (`git checkout -b <branch>`), switching branches (`git checkout`), staging (`git add`), committing (`git commit`), pushing (`git push -u origin`), creating PRs (`gh pr create`), and merging PRs (`gh pr merge`) are fully pre-approved.
- **Quality & Verification Suites**: Local verification (`pnpm test`, `vitest`, `pnpm run lint:copy`, `tsc`, `pnpm exec tsc`, `pnpm run build`) is fully pre-approved and must run automatically before PR creation or completion.
- **Visual & Browser Verification (Playwright)**: Taking screenshots or inspecting the browser (`pnpm run screenshot`, `node scripts/screenshot.mjs`, `npx playwright`, `pnpm run preview`) to verify layout, responsive appearance, and visual polish is 100% pre-approved. Agents should proactively run visual inspections and embed screenshots rather than asking the user to manually verify.
- **Zero-Friction Autonomous Implementation**: When the user requests a feature, bugfix, or refactor with instructions to implement, review, and merge, do NOT block on interactive plan approval modals (`RequestFeedback: false`). Execute autonomously, verify thoroughly with tests and Playwright, spawn review subagents, and merge upon consensus. Only present blocking plan modals (`RequestFeedback: true`) when the user explicitly requests an upfront design plan or architectural review before starting.


