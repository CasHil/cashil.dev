# Round 03: Anti-AI Portfolio Theater & Modular Architecture

**Archive Date**: October 31, 2026  
**Conversation Context**: Conversations `eb136f8e-4a6f-402a-9cb0-352fa102b4fa`, `800c65fb-c7db-4528-98e3-0d321d23ce1b`, `2c64a854-ceba-493e-ba14-25925fa3d6a6`, `79e2c5e6-c1c5-4be4-b4a1-0e0ea6d6fa80`  
**Reviewer Perspectives**: Principal Anti-AI Critic, Staff Systems Architect (Matt Pocock / Ousterhout Lens), Executive Recruiter  
**Key Problem**: Blatant AI portfolio tropes (green status pings, fake terminal chrome, mock test runners), monolithic 1,167-line files, and interactive toys masquerading as systems engineering.

---

## 1. The Core Criticisms

### 1.1 Pulsing Green Dots & Live Status Pills
- **The Issue**:
  - The hero and avatars featured pulsing green dots (`bg-emerald-500 rounded-full animate-ping`) alongside badges like `"AVAILABLE FOR ROLES"` or `"SYSTEM LIVE"`.
  - In modern web design, glowing green dots have become the single most identifiable signature of low-effort AI portfolio generators and crypto dashboards.
  - To seasoned engineering managers and CTOs, it looks gimmicky and juvenile rather than established and professional.
- **The Fix**:
  - Completely purged all pulsing green dots and pseudo-live status indicators.
  - Replaced with calm, high-legibility typographic badges (`CURRENT` / `HUIDIG`) or quiet editorial provenance kickers.

---

### 1.2 "Portfolio Theater" & Fake Mock Test Runners
- **The Issue**:
  - In the Bitsized showcase, an earlier iteration created a fake macOS window with decorative red/yellow/green window buttons, running an in-browser mock test runner.
  - When inspected under the hood, the component literally ran a dummy `setTimeout(550)` that printed hardcoded string outputs like `[PASS] Worker Sandbox Initialized` to a fake terminal log.
  - **The Risk**: Any CTO or staff engineer opening DevTools or checking the source code immediately sees that the "interactive test harness" is completely fake.
  - Nothing destroys senior engineering credibility faster than simulated stage magic pretending to be real runtime code execution.
- **The Fix**:
  - Replaced the toy terminal with an authentic, architectural breakdown of Bitsized's actual client-side execution model: Web Worker isolation, AST transformation, deterministic watchdog timers, and memory limits.

---

### 1.3 Interactive Tab Gimmicks (The 4-Button Tab Switcher)
- **The Issue**:
  - The Tikkie showcase hid simple systems architecture information behind a 4-button tab switcher (`API Gateways`, `Event Streams`, `Security`, `Merchant Dashboards`) with a flashing `"INTERACTIVE"` badge.
  - Each tab contained exactly *one sentence* of text.
  - Users were forced to click four times just to read 50 words of information.
- **The Fix**:
  - Killed the tab switcher.
  - Replaced it with a static, full-visibility systems pipeline diagram where all architectural stages are readable simultaneously without requiring user interaction.

---

### 1.4 Monolithic Code Coupling (The 1,167-Line Dictionary & 444-Line Intro)
- **The Issue**:
  - `src/i18n/translations.ts` had ballooned to 1,167 lines of monolithic TypeScript, coupling navigation, work experience, degrees, and sidebar copy into one giant dictionary.
  - Modifying a single comma in a job description triggered change amplification and merge conflicts across unrelated PRs.
  - `Intro.tsx` was 444 lines long, mixing UI layout, SVG math, copy state, and interactive handlers.
  - `Heading.tsx` was a 67-line shallow module with dead CSS that failed the Deletion Test.
- **The Fix (Matt Pocock / John Ousterhout Deep Modules)**:
  - Decomposed `translations.ts` into strongly typed domain modules (`nav.ts`, `sidebar.ts`, `cv.ts`, `intro.ts`, `experience.ts`, `education.ts`, `outreach.ts`) across `src/i18n/locales/en/` and `src/i18n/locales/nl/`.
  - The barrel file `translations.ts` shrank from 1,167 lines to 18 lines while preserving strict bilingual parity.
  - Decomposed `Intro.tsx` from 444 lines to 44 lines by extracting cohesive sub-components (`HeroSection.tsx`, `TikkieShowcase.tsx`, `BitsizedShowcase.tsx`, `EngineeringEthos.tsx`).
  - Extracted `Masthead.tsx` and `Footer.tsx` from `App.tsx` (dropping `App.tsx` from 210 lines to 48 lines).
  - Deleted dead CSS and shallow wrappers (`Heading.tsx`, `Heading.css`, `Intro.css`).

---

### 1.5 Pill-Shaped Button Obsession
- **The Issue**:
  - Every single button, chip, badge, and input was forced into `rounded-full` pills.
  - Excessive border radii make a site look like an iOS candy app or a consumer social toy rather than serious enterprise software tooling.
- **The Fix**:
  - Replaced `rounded-full` on buttons and major components with crisp, modern `rounded-lg` geometry.
  - Reserved subtle pill styling only for compact inline status tags.

---

## 2. Identified AI Slop Anti-Patterns

| Anti-Pattern Name | The AI Tell | The Engineering Reality |
|---|---|---|
| **Portfolio Theater** | Fake terminals with fake `setTimeout()` execution logs pretending to be live benchmarks. | Real engineers explain architecture, trade-offs, and boundary isolation with clear diagrams, not simulated toy CLIs. |
| **The Pulsing Green Dot** | `animate-ping` emerald dots signaling fake online/live availability. | Universal trope of AI templates. Professional portfolios communicate availability through clean typographic badges. |
| **Interactive Hide-and-Seek** | Hiding 1-sentence explanations behind tabs with "INTERACTIVE" badges. | High information density: let the reader scan all architectural layers at a glance. |
| **The Monolithic Dump** | LLMs throwing 1,200 lines of copy or UI into a single file to avoid modular refactoring. | Deep, modular code architecture following separation of concerns and single-responsibility principles. |

---

## 3. Standard Established for Future Agents

> [!IMPORTANT]
> **Anti-Theater & Code Quality Guardrails:**
> 1. Never add fake timers (`setTimeout`), simulated terminal execution, or toy clickers to demonstrate engineering capability.
> 2. Keep components under ~150 lines and localized copy files under ~100 lines.
> 3. Standardize button geometry to `rounded-lg` with high-contrast monochrome hover states.
> 4. Run `pnpm run lint:copy` to verify zero banned AI buzzwords across all i18n modules.
