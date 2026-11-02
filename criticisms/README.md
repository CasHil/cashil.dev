# Portfolio Critique Knowledge Base & Anti-Slop Codex

This directory archives, categorizes, and synthesizes all comprehensive reviews, ruthless audits, and subagent critiques conducted on Casper Hildebrand's portfolio website (`cashil.dev` / `cashil.github.io`) between **October 25 and November 1, 2026**.

Its purpose is to serve as a **permanent institutional memory** for AI subagents, human reviewers, and developers, preventing future agents from "starting from scratch" or re-introducing common AI slop patterns.

---

## Table of Contents

1. [Numbered Critique Archive Index](#1-numbered-critique-archive-index)
2. [The Taxonomy of AI Slop: 8 Core Anti-Patterns](#2-the-taxonomy-of-ai-slop-8-core-anti-patterns)
3. [The Anti-Slop Prevention Checklist (Pre-Flight Audit)](#3-the-anti-slop-prevention-checklist-pre-flight-audit)
4. [Casper's Authentic Profile & Ground Truth](#4-caspers-authentic-profile--ground-truth)
5. [Design & Technical Guardrails](#5-design--technical-guardrails)

---

## 1. Numbered Critique Archive Index

Every major audit round is documented in a self-contained, numbered markdown file in this directory:

| Document | Theme / Focus | Core Problems Solved |
|---|---|---|
| [**`00-typography-and-visual-hierarchy.md`**](./00-typography-and-visual-hierarchy.md) | Typography & Type Stacks | Three-font stack collision (Instrument Sans vs Segoe UI vs JetBrains Mono), alternating font sandwiches in cards, monospace fetish on non-code UI, and illegible `<12px` micro-labels. |
| [**`01-resume-jargon-and-hallucinated-hobbies.md`**](./01-resume-jargon-and-hallucinated-hobbies.md) | Copy Quality & Factual Grounding | Quadruple redundancy in the first 300px, "Production Systems" category filler, zero-signal subtitles, and AI-hallucinated hobbies ("Synthesizers & Audio"). |
| [**`02-information-architecture-and-cognitive-overload.md`**](./02-information-architecture-and-cognitive-overload.md) | Information Architecture & Recruiter UX | Duplicate `/about` route trap, resume hoarding (dumping 11 roles on page), inverted chronological sections, mobile PDF iframe crashes, and semantic heading collisions. |
| [**`03-anti-ai-portfolio-theater-and-modularization.md`**](./03-anti-ai-portfolio-theater-and-modularization.md) | Anti-AI Purge & Architecture | Pulsing green dots (`animate-ping`), fake terminal chrome with `setTimeout()` mock test runners, interactive tab gimmicks hiding 1 sentence, and monolithic 1,167-line code files. |
| [**`04-vibecoding-and-spatial-coherence.md`**](./04-vibecoding-and-spatial-coherence.md) | Visual Polish & Card Elevation | "Vibecoded" decorative SVG conduits and orbital rings, borderless "dissolving cards" on desktop, padding drift, and canvas contrast tuning. |
| [**`05-mobile-native-ux-and-touch-patterns.md`**](./05-mobile-native-ux-and-touch-patterns.md) | Mobile Ergonomics & A11y | Desktop-ported top hamburger menu vs thumb-zone bottom navigation bar, mobile-native CV preview, micro touch targets (`<44px`), and horizontal scroll leakage. |
| [**`06-no-ai-slop-copy-and-positioning-audit.md`**](./06-no-ai-slop-copy-and-positioning-audit.md) | /no-ai-slop & Candidate Positioning | Harvest traineeship puffery ("elite engineering fellowship"), unearned senior claims ("mentoring mid-level engineers"), thesis telemetry fixation obscuring software engineering, hiding the CS teaching superpower, and corporate throat-clearing jargon. |
| [**`07-showmanship-featured-engineering-and-pruning-audit.md`**](./07-showmanship-featured-engineering-and-pruning-audit.md) | Engineering Showmanship & Pruning | Over-correction into a sterile corporate morgue, 768px desktop void, static pseudo-architectural boxification in "Featured Engineering", sextuple redundancy, live Web Worker sandbox execution, and native Web Crypto HMAC verification showmanship. |

---

## 2. The Taxonomy of AI Slop: 8 Core Anti-Patterns

Through successive rounds of subagent critiques, eight distinct archetypes of "AI Slop" repeatedly manifested in code, styling, and copy. Future agents must understand these patterns to actively prevent them:

```
                                  ┌──────────────────────────┐
                                  │   THE TAXONOMY OF SLOP   │
                                  └─────────────┬────────────┘
         ┌──────────────────────────────┬───────┴──────────────────────┬──────────────────────────────┐
         ▼                              ▼                              ▼                              ▼
 ┌───────────────┐              ┌───────────────┐              ┌───────────────┐              ┌───────────────┐
 │  THE RESUME   │              │   THE FAKE    │              │ THE MONOSPACE │              │   PORTFOLIO   │
 │   INFLATOR    │              │ METRIC LEDGER │              │    FETISH     │              │    THEATER    │
 └───────────────┘              └───────────────┘              └───────────────┘              └───────────────┘
         │                              │                              │                              │
         ▼                              ▼                              ▼                              ▼
 ┌───────────────┐              ┌───────────────┐              ┌───────────────┐              ┌───────────────┐
 │  VIBECODING   │              │   COGNITIVE   │              │  THE BURIED   │              │   THROAT-     │
 │      MUD      │              │ OPTIMIZATION  │              │  SUPERPOWER   │              │   CLEARING    │
 └───────────────┘              └───────────────┘              └───────────────┘              └───────────────┘
```

### 1. The Resume Inflator (Puffery & Unearned Authority)
- **The Symptom**: Converting normal early-career experiences into grandiose executive achievements. For example, framing a standard Dutch Young Talent consultancy traineeship at Harvest as an *"elite engineering fellowship"*, or claiming an early-career developer is *"mentoring mid-level engineers"* and guaranteeing *"zero ambiguous edge cases"*.
- **The Engineering Damage**: Technical recruiters and CTOs spot this instantly. It raises immediate credibility doubts and invites grilling on unearned claims during technical screens.
- **The Antidote**: Strict factual honesty. Highlight ownership of concrete services, API contract design, automated testing rigor, and systems resilience.

### 2. The Fake Metric Ledger (Telemetry Distraction)
- **The Symptom**: Dedicating 80–100 lines of screen space to giant statistical counters (`174,988 learners`, `14 course runs`) and dense statistical methodology badges (`K-Means Clustering`, `Logistic Regression`).
- **The Engineering Damage**: Confuses the candidate's core identity. Recruiters wonder if Casper is applying for an EdTech data scientist position or a production software engineer role.
- **The Antidote**: Streamline academic research into a prestigious, single-card thesis publication with an external link to the university repository. Keep the site's center of gravity on production software systems.

### 3. The Monospace Fetish (Simulated Developer Energy)
- **The Symptom**: Slapping `font-mono` on everything—language switchers, navigation links, job titles, and subtitles—in the belief that monospaced text makes a site look "developer-grade".
- **The Engineering Damage**: Destroys typography hierarchy and reading rhythm (the "Font Sandwich"). Makes professional job titles look like Unix terminal daemons or compiler errors.
- **The Antidote**: Use proportional sans (`Instrument Sans`) for all editorial text, titles, subtitles, and navigation. Reserve monospace strictly for literal code tokens, shell commands, file paths, and stack chips.

### 4. The Portfolio Theater (Stage Magic)
- **The Symptom**: Adding fake macOS terminal chrome (red/yellow/green dots) running `setTimeout()` mock test runners that print fake pass/fail logs, or adding pulsing green dots (`animate-ping`) to simulate "live online" status.
- **The Engineering Damage**: Insults the intelligence of visiting senior engineers. Any developer opening DevTools sees simulated stage magic rather than authentic engineering capability.
- **The Antidote**: Present real architecture diagrams, typed interface contracts, and explanations of real technical trade-offs.

### 5. The Vibecoding Mud (Superficial Aesthetics & Missing Surfaces)
- **The Symptom**: Adding wavy decorative SVG bezier curves (`FlowRibbonConduit`) or concentric spinning radar rings (`SandboxCrucible`) that convey zero meaning. Simultaneously stripping card borders and shadows on desktop screens (`sm:border-none sm:shadow-none sm:bg-transparent`).
- **The Engineering Damage**: Content dissolves into unanchored text floating over distracting background noise.
- **The Antidote**: Remove decorative curves. Give every card physical surface presence with crisp borders and drop shadows (`bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md rounded-2xl`).

### 6. The Cognitive Optimization Metaphor (Pseudo-Intellectual Pursuits)
- **The Symptom**: Describing standard human hobbies (playing electric bass guitar or chess) through pseudo-intellectual engineering metaphors (e.g., *"neurological acoustic calibration"* or *"algorithmic pattern recognition training"*).
- **The Engineering Damage**: Sounds cringe, pretentious, and robotic. Makes the candidate seem like an LLM roleplaying as a human.
- **The Antidote**: Speak like a normal human being: *"Outside of work, I play electric bass guitar and play chess."*

### 7. The Buried Real Superpower (Misaligned Positioning)
- **The Symptom**: Hiding rare, high-value differentiators (like Casper's double Master's in Science Education and teaching 200+ high school students in CS) in collapsed drawers, while prominently featuring generic web development coursework.
- **The Engineering Damage**: In senior engineering, pedagogical ability—didactics, clear documentation, mentorship, and high-signal PR reviews—is a massive force multiplier. Hiding it leaves Casper competing solely on generic framework familiarity.
- **The Antidote**: Elevate teaching to a marquee Engineering Ethos pillar on the homepage and a core section of the Work Experience page.

### 8. The Corporate Brochure Throat-Clearer (Vocabulary Slop)
- **The Symptom**: Over-indexing on corporate marketing buzzwords: *"seamless"*, *"pivotal"*, *"spearheaded"*, *"orchestrated"*, *"testament"*, *"beacon"*, *"crucible"*, *"force multiplier"*.
- **The Engineering Damage**: Empty puffery that communicates no real technical mechanics.
- **The Antidote**: Active, concrete engineering verbs: *designed*, *built*, *benchmarked*, *refactored*, *verified*, *deployed*. Enforce automated scanning via `pnpm run lint:copy`.

---

## 3. The Anti-Slop Prevention Checklist (Pre-Flight Audit)

Before any future subagent or developer commits copy, UI, or architectural changes to this repository, run through this **10-point Pre-Flight Checklist**:

```markdown
- [ ] 1. Factual Grounding: Are all titles, dates, and roles 100% factual and aligned with Casper's LinkedIn and CV?
- [ ] 2. No Unearned Seniority: Does the copy avoid claiming unearned executive titles, "fellowships", or unverified mentorship of senior peers?
- [ ] 3. Typographic Discipline: Is `font-mono` restricted strictly to code, syntax, paths, and stack chips? Is all editorial prose in proportional sans?
- [ ] 4. Physical Card Elevation: Does EVERY card maintain a border, surface, and shadow (`shadow-sm hover:shadow-md`) on BOTH desktop and mobile?
- [ ] 5. Bilingual Parity: Are all copy changes in `src/i18n/locales/en/` matched with 100% semantic symmetry in `src/i18n/locales/nl/`?
- [ ] 6. Banned Word Scan: Did `pnpm run lint:copy` pass with zero violations (no "seamless", "spearheaded", "crucible", etc.)?
- [ ] 7. No Portfolio Theater: Are there zero `setTimeout()` mock runners, fake terminal windows, or `animate-ping` pulsing green dots?
- [ ] 8. Mobile Thumb-Zone & A11y: Is mobile navigation anchored to the bottom thumb zone? Are all tap targets at least 44x44px?
- [ ] 9. Pedagogical Clarity: Is Casper's teaching background positioned as an engineering strength for code quality and didactics?
- [ ] 10. ATS 1-Page CV Budget: Does `pnpm run build:cv` compile both English and Dutch CVs to strictly 1 page without overflow?
```

---

## 4. Casper's Authentic Profile & Ground Truth

When writing copy or presenting Casper, adhere strictly to these verified facts:

- **Current Primary Role**: Full-Stack Software Engineer at **Tikkie Business (ABN AMRO)** via the **Harvest Young Talent Program** (2025 – Present).
- **Core Technical Focus**: Agentic software engineering, cloud backend APIs (AWS Lambda, DynamoDB, EventBridge), code quality, automated test verification, and TypeScript.
- **Previous Startup Experience**: Co-Founder & Lead Engineer at **Bitsized** (2023 – 2025), building in-browser sandboxed Python execution for Dutch secondary education using Web Workers and AST analysis.
- **Earlier Engineering**: Software Engineering Consultant at **Netcompany** (2024), full-stack intern at **Muziekweb** (2020), and software engineering intern at **Bexter** (2019).
- **Academic Background (Double Master's from TU Delft)**:
  * **MSc Computer Science** (2021 – 2024): Master's thesis on online student course navigation, published in the TU Delft Education Repository.
  * **MSc Science Education & Communication** (2021 – 2024): Certified Computer Science teacher; taught ~200 students across 10 high school cohorts, designed official PTA examination curricula, and served on the TU Delft Board of Studies.
  * **BSc Computer Science & Engineering** (2017 – 2021): TU Delft.
- **Authentic Outside Passions**: Electric Bass Guitar and Chess.

---

## 5. Design & Technical Guardrails

- **Runtime & Architecture**: React 18, TypeScript, Vite, Tailwind CSS. Modularized i18n dictionaries under `src/i18n/locales/{en,nl}/`.
- **CV LaTeX**: `cv/Casper_Hildebrand_CV.tex` and `cv/Casper_Hildebrand_CV_NL.tex` must always compile to **strictly 1 page** via `pnpm run build:cv`.
- **Card Tokens**:
  * Light mode: `bg-white border border-zinc-200/90 shadow-sm hover:shadow-md rounded-2xl`
  * Dark mode: `dark:bg-zinc-900 dark:border-white/10 dark:shadow-sm dark:hover:shadow-md rounded-2xl`
- **Shell Commands**: Windows PowerShell environment. Use `;` or sequential commands; **never use `&&`**.
- **Automated Verification**:
  ```powershell
  pnpm run lint:copy    # Copy linting against AI buzzwords
  pnpm exec tsc         # TypeScript typecheck
  pnpm test run         # Vitest unit test suite
  pnpm run build:cv     # LaTeX 1-page CV compilation
  ```
