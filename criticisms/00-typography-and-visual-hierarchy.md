# Round 00: Typography, Font Stacks & Visual Hierarchy

**Archive Date**: October 28–29, 2026  
**Conversation Context**: Initial visual audit and typography cleanup  
**Reviewer Perspectives**: Typography Specialist & Senior Design Systems Engineer  
**Key Problem**: Subtle typographic dissonance, competing font families, monospace overuse, and illegible micro-labels across the site.

---

## 1. The Core Criticisms

### 1.1 The "Three-Font Imposter" (Global Font Stack Collision)
- **The Issue**:
  - `tailwind.config.js` defined `Instrument Sans` for both `font-sans` and `font-display`.
  - However, `src/index.css` contained a hardcoded rule on `body`:
    ```css
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    ```
  - Code blocks and metadata tags used `JetBrains Mono`.
- **The Visual Result**:
  - Headings rendered in `Instrument Sans` (editorial, geometric, sharp terminals).
  - Body paragraphs rendered in `Segoe UI` on Windows or `SF Pro` on macOS (neutral, corporate system sans).
  - Numbers and tags rendered in `JetBrains Mono`.
  - Readers experienced subconscious dissonance: the headings felt like an independent design publication, while the body text felt like an Azure portal dashboard.
- **The Fix**:
  - Harmonized the global stack so `Instrument Sans` governs all proportional text (`sans` and `display`), with a fallback to high-quality system faces, reserving `JetBrains Mono` exclusively for literal code, file paths, and syntax tokens.

---

### 1.2 The "Alternating Font Sandwich"
- **The Issue**:
  Within a single 150px-high work experience card, the typeface flipped five times:
  ```
  [Overline Tag]     -> JetBrains Mono (uppercase, green)
  [Company/Title]    -> Instrument Sans (bold proportional display)
  [Role Subtitle]    -> JetBrains Mono (green terminal subtitle)
  [Summary Body]     -> Segoe UI (neutral system sans)
  [Tech Stack Pills] -> JetBrains Mono (monospaced pill chips)
  ```
- **The Psychological Impact**:
  - Jerky reading rhythm. The eye was forced to constantly readjust between fixed-width tabular characters and variable-width proportional glyphs.
  - Gave the site the unmistakable look of an early-stage AI generator that cycles through font utility classes at random.
- **The Fix**:
  - Enforced strict role-based typography:
    * Headings, subtitles, and body text are **100% proportional sans**.
    * Monospace is restricted to syntactic values: git hashes, CLI commands, file extensions, and exact version numbers.

---

### 1.3 Monospace Fetishization on Non-Code UI
- **The Issue**:
  - **Language Toggle**: `LanguageToggle.tsx` rendered `"EN"` and `"NL"` in `font-mono`. A language switcher is primary editorial navigation, not a terminal pipe command. JetBrains Mono made the two-letter codes wide, boxy, and misaligned with the header.
  - **Masthead Job Subtitle**: `<p className="text-xs font-mono text-emerald-800 ...">{t.sidebar.role}</p>` treated Casper's senior title like a Unix daemon status output or compiler error flag.
  - **CV Subtitle**: `"Single-Page ATS Format • Full-Stack Software Engineer"` in all-caps monospace looked like an applicant tracking debug log.
- **The Fix**:
  - Converted navigation, subtitles, and status kickers to proportional sans with refined letter-spacing (`tracking-normal` or subtle `tracking-wide`).

---

### 1.4 Micro-Labels Violating Accessibility Scales
- **The Issue**:
  - Section metadata used `text-[10px] font-mono uppercase tracking-widest` for labels like `"STACK:"` and `"METHODS:"`.
  - `10px` is below standard WCAG legibility guidelines, especially on high-DPI laptop displays and mobile devices.
  - Automated linters flagged `[tiny-text]` and `[undersized-ui-text]` violations.
- **The Fix**:
  - Enforced a strict minimum baseline of `text-xs` (12px / 0.75rem) across all UI labels, adhering to the project's quality guardrails in `AGENTS.md`.

---

## 2. Identified AI Slop Anti-Patterns

| Anti-Pattern Name | The AI Tell | The Engineering Reality |
|---|---|---|
| **Monospace Fetishization** | Throwing `font-mono` on buttons, titles, subtitles, and nav items to signal "I am a programmer". | True systems poise uses clean, legible proportional typography for editorial prose and reserves monospace for actual syntax. |
| **The Font Sandwich** | Alternating between sans and mono line-by-line within the same card. | Destroys reading rhythm and causes eye fatigue. One card should have one dominant reading face. |
| **Micro-Label Clutter** | Sprinkling `text-[10px]` all-caps tracking-widest labels everywhere. | Illegible on mobile; violates accessibility standards. Minimum UI type is 12px (`text-xs`). |

---

## 3. Standard Established for Future Agents

> [!IMPORTANT]
> **Typographic Rule for Casper's Portfolio:**
> 1. Use `Instrument Sans` for all headings, titles, subtitles, buttons, and prose.
> 2. Use `JetBrains Mono` **only** for actual code snippets, API endpoints, stack chips, and metric values.
> 3. Never use monospace for candidate job titles, navigation items, or prose subtitles.
> 4. Never drop below `text-xs` (12px) for any user-facing text.
