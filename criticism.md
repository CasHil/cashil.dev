# Portfolio Critique Knowledge Base & Anti-Slop Codex

This master document compiles all reviews, audits, and subagent critiques conducted on Casper Hildebrand's portfolio website (`cashil.dev` / `cashil.github.io`) between **October 25 and November 1, 2026**.

All detailed round notes and conversation archives are stored in the [`criticisms/`](./criticisms/) directory.

---

## Quick Navigation

- [Numbered Critique Archive Index](#1-numbered-critique-archive-index)
- [The Taxonomy of AI Slop: 8 Core Anti-Patterns](#2-the-taxonomy-of-ai-slop-8-core-anti-patterns)
- [The Anti-Slop Prevention Checklist (Pre-Flight Audit)](#3-the-anti-slop-prevention-checklist-pre-flight-audit)
- [Casper's Authentic Profile & Ground Truth](#4-caspers-authentic-profile--ground-truth)
- [Design & Technical Guardrails](#5-design--technical-guardrails)

---

## 1. Numbered Critique Archive Index

The audits are arranged chronologically in the [`criticisms/`](./criticisms/) directory:

- [**`criticisms/00-typography-and-visual-hierarchy.md`**](./criticisms/00-typography-and-visual-hierarchy.md): Three-font stack collision (Instrument Sans vs Segoe UI vs JetBrains Mono), alternating font sandwiches in cards, monospace fetish on non-code UI, and illegible `<12px` micro-labels.
- [**`criticisms/01-resume-jargon-and-hallucinated-hobbies.md`**](./criticisms/01-resume-jargon-and-hallucinated-hobbies.md): Quadruple redundancy in the first 300px, "Production Systems" category filler, zero-signal subtitles, and AI-hallucinated hobbies ("Synthesizers & Audio").
- [**`criticisms/02-information-architecture-and-cognitive-overload.md`**](./criticisms/02-information-architecture-and-cognitive-overload.md): Duplicate `/about` route trap, resume hoarding (dumping 11 roles on page), inverted chronological sections, mobile PDF iframe crashes, and semantic heading collisions.
- [**`criticisms/03-anti-ai-portfolio-theater-and-modularization.md`**](./criticisms/03-anti-ai-portfolio-theater-and-modularization.md): Pulsing green dots (`animate-ping`), fake terminal chrome with `setTimeout()` mock test runners, interactive tab gimmicks hiding 1 sentence, and monolithic 1,167-line code files.
- [**`criticisms/04-vibecoding-and-spatial-coherence.md`**](./criticisms/04-vibecoding-and-spatial-coherence.md): "Vibecoded" decorative SVG conduits and orbital rings, borderless "dissolving cards" on desktop, padding drift, and canvas contrast tuning.
- [**`criticisms/05-mobile-native-ux-and-touch-patterns.md`**](./criticisms/05-mobile-native-ux-and-touch-patterns.md): Desktop-ported top hamburger menu vs thumb-zone bottom navigation bar, mobile-native CV preview, micro touch targets (`<44px`), and horizontal scroll leakage.
- [**`criticisms/06-no-ai-slop-copy-and-positioning-audit.md`**](./criticisms/06-no-ai-slop-copy-and-positioning-audit.md): Harvest traineeship puffery ("elite engineering fellowship"), unearned senior claims ("mentoring mid-level engineers"), thesis telemetry fixation obscuring software engineering, hiding the CS teaching superpower, and corporate throat-clearing jargon.
- [**`criticisms/07-showmanship-featured-engineering-and-pruning-audit.md`**](./criticisms/07-showmanship-featured-engineering-and-pruning-audit.md): Over-correction into a sterile corporate morgue, 768px desktop void, static pseudo-architectural boxification in "Featured Engineering", sextuple redundancy, live Web Worker sandbox execution, and native Web Crypto HMAC verification showmanship.

---

## 2. The Taxonomy of AI Slop: 8 Core Anti-Patterns

Any subagent modifying this codebase must actively avoid these eight recurring AI slop traps:

1. **The Resume Inflator (Puffery & False Seniority)**:
   - *Slop*: Inflating a Dutch consultancy traineeship into an "elite engineering fellowship" or claiming an early-career engineer "mentors mid-level engineers" and ensures "zero ambiguous edge cases".
   - *Fix*: Stick to factual ownership of services, APIs, tests, and cloud infrastructure.

2. **The Fake Metric Ledger (Telemetry Distraction)**:
   - *Slop*: Putting 80 lines of offline academic thesis statistics (`174,988 learners`, `K-Means Clustering`) on a developer portfolio.
   - *Fix*: Demote thesis to a concise, prestigious publication card linking to TU Delft repository. Focus on software engineering.

3. **The Monospace Fetish (Simulated Developer Energy)**:
   - *Slop*: Using `font-mono` on buttons, navigation items, job titles, and subtitles.
   - *Fix*: Proportional sans (`Instrument Sans`) for all editorial text; monospace strictly for actual code, syntax, paths, and stack chips.

4. **The Portfolio Theater (Stage Magic)**:
   - *Slop*: Adding fake macOS terminal windows running `setTimeout()` mock runners or pulsing green dots (`animate-ping`).
   - *Fix*: Real architecture diagrams, interface contracts, and explanations of system trade-offs.

5. **The Vibecoding Mud (Superficial Aesthetics & Missing Surfaces)**:
   - *Slop*: Decorative SVG bezier curves, spinning orbital circles, and borderless cards that dissolve into backgrounds on desktop.
   - *Fix*: Every card must have a physical surface, border, and drop shadow (`shadow-sm hover:shadow-md`) on all screen sizes.

6. **The Cognitive Optimization Metaphor (Pseudo-Intellectualization)**:
   - *Slop*: Describing hobbies like electric bass or chess as "acoustic frequency calibration" or "neurological optimization".
   - *Fix*: Write like a human being: *"Outside of work, I play electric bass guitar and play chess."*

7. **The Buried Real Superpower (Misaligned Positioning)**:
   - *Slop*: Hiding Casper's double Master's in Science Education and teaching of 200+ high school students in collapsed drawers.
   - *Fix*: Promote CS didactics as an Engineering Ethos pillar—translating into cleaner code reviews, API clarity, and mentorship.

8. **The Corporate Brochure Throat-Clearer (Vocabulary Slop)**:
   - *Slop*: Over-indexing on empty buzzwords (`seamless`, `pivotal`, `spearheaded`, `orchestrated`, `crucible`, `beacon`).
   - *Fix*: Active engineering verbs describing concrete mechanisms and outcomes. Run `pnpm run lint:copy`.

---

## 3. The Anti-Slop Prevention Checklist (Pre-Flight Audit)

Run this checklist before finalizing any changes:

```markdown
- [ ] 1. Factual Grounding: Are all titles, dates, and roles 100% factual and aligned with Casper's LinkedIn and CV?
- [ ] 2. No Unearned Seniority: Does copy avoid claiming unearned executive titles or non-existent mentorship of senior peers?
- [ ] 3. Typographic Discipline: Is font-mono restricted strictly to code, syntax, paths, and stack chips?
- [ ] 4. Physical Card Elevation: Does EVERY card maintain a border, surface, and shadow (shadow-sm hover:shadow-md)?
- [ ] 5. Bilingual Parity: Are all copy changes in src/i18n/locales/en/ matched with 100% semantic symmetry in nl/?
- [ ] 6. Banned Word Scan: Did pnpm run lint:copy pass with zero violations?
- [ ] 7. No Portfolio Theater: Are there zero setTimeout() mock runners, fake terminal chrome, or pulsing green dots?
- [ ] 8. Mobile Thumb-Zone & A11y: Is mobile navigation anchored to bottom thumb zone? Are tap targets at least 44x44px?
- [ ] 9. Pedagogical Clarity: Is Casper's teaching background positioned as an engineering strength for code quality?
- [ ] 10. ATS 1-Page CV Budget: Does pnpm run build:cv compile both English and Dutch CVs to strictly 1 page?
```

---

## 4. Casper's Authentic Profile & Ground Truth

- **Current Role**: Full-Stack Software Engineer at **Tikkie Business (ABN AMRO)** via **Harvest Young Talent Program** (2025 – Present).
- **Core Stack & Focus**: Agentic software engineering, AWS Lambda, DynamoDB, EventBridge, TypeScript, automated test verification, and code quality.
- **Previous Startup**: Co-Founder & Lead Engineer at **Bitsized** (2023 – 2025), building in-browser sandboxed Python execution with Web Workers and AST analysis.
- **Earlier Engineering**: Software Engineering Consultant at **Netcompany** (2024), full-stack intern at **Muziekweb** (2020), engineering intern at **Bexter** (2019).
- **Academic Degrees (TU Delft)**:
  * **MSc Computer Science** (2021 – 2024)
  * **MSc Science Education & Communication** (2021 – 2024; ~200 high school students taught across 10 cohorts)
  * **BSc Computer Science & Engineering** (2017 – 2021)
- **Authentic Hobbies**: Electric Bass Guitar and Chess.
