# 09: Systemic AI Slop Audit & Immutable Design Rules

This document codifies the findings and permanent architectural rules established during the deep mobile and desktop audit of `cashil.dev` / `cashil.github.io` on **November 8, 2026**.

AI-assisted code generation suffers from characteristic recurring dysfunctions: nested cards and cardocalypse monoculture, floating eyebrows and kickers, fake telemetry and animated countdown tickers, duplicate call-to-action buttons, artificial zero-padded numbering, em-dash bullet overload, form-field colon labels, micro touch targets violating mobile ergonomics, and configuration hacks designed to cheat tests.

These rules are immutable and enforced through automated regression tests in `src/unslop-design-rules.test.tsx` and deterministic linting.

---

## 1. The Core AI Slop Anti-Patterns & Immutable Laws

### Rule 21: Ban Fake Telemetry & Live Countdown Clocks
- **The Slop**: Displaying live-updating minute/hour countdowns of career experience (e.g. `7 yrs, 2 mos, 7d · 20h 55m • Updates live every minute` with a `setInterval(..., 60000)`).
- **The Reality**: No authentic software engineer measures or displays their career in elapsed minutes. It is transparent portfolio theater pretending to be "live telemetry".
- **The Law**: Show honest, factual experience durations (e.g., `7+ years`, `3+ years`) or grounded project dates. Never run background interval timers to tick seconds/minutes of career duration.

### Rule 22: Absolute Ban on Card-in-Card & The Cardocalypse
- **The Slop**: Wrapping every single item in a rectangular boxed card (`bg-surface border border-border-subtle shadow-sm`), and nesting smaller bordered chip cards, tags, or boxes inside them.
- **The Reality**: *"Cards are the lazy container; nested cards are always wrong."* Wrapping every timeline entry or section in a boxed card creates claustrophobic visual noise ("cardocalypse") and demonstrates an inability to structure layouts using whitespace and typography.
- **The Law**:
  1. **Nested cards are strictly prohibited.** Never render a card inside another card.
  2. **Timeline items are unboxed typographic entries.** Use generous macro-spacing (`space-y-10 sm:space-y-12`) and clear typography. Never wrap individual timeline items in card containers.
  3. **Showcases contain zero nested card chips.** Stack items are displayed as clean, dot-separated text (`TypeScript · React · Node.js`), never as bordered micro-card boxes.

### Rule 23: Absolute Ban on Eyebrows & Kickers
- **The Slop**: A small line of uppercase, letter-spaced, or pill-badged text floating directly above a main headline (e.g. `SOFTWARE ENGINEER & EDUCATOR` or profile kickers directly above `<h1>`).
- **The Reality**: *"A kicker or eyebrow above a heading. This one is a ban, not a default: no brief earns it back. The heading carries its own weight; delete the label and let the heading speak."* Eyebrows are the single most ubiquitous "AI tell" on the web.
- **The Law**: Headings must speak first with full editorial authority. Never place floating labels, tags, avatar kickers, or uppercase overlines directly above `<h1>` or `<h2>` headings.

### Rule 24: Ban Bento Grid Monoculture
- **The Slop**: Scaffolding features or technical metrics as 3-card or 6-card identical bento boxes (icon + bold header + 2-line text + drop shadow).
- **The Reality**: Cookie-cutter template behavior that treats diverse technical competencies as identical marketing widgets.
- **The Law**: Present structured technical experience using clean editorial layouts with hairline dividers (`border-t`, `divide-y divide-border-subtle`) and tabular numerals, not identical floating boxes.

### Rule 25: Ban Border Accents on Rounded Containers (`border-accent-on-rounded`)
- **The Slop**: Applying thick borders (`border-b-2`, `border-l-4`) inside or on rounded containers (`rounded-xl`, `rounded-squircle`).
- **The Reality**: A thick flat border clashes jarringly with the organic curvature of rounded corners.
- **The Law**: Use subtle 1px hairline borders (`border-b border-border-subtle`) or clean typographic spacing. Never apply `border-b-2` or thick accents to rounded surfaces.

### Rule 26: Ban the Em Dash (—) Bullet Epidemic
- **The Slop**: Prefixing bullet points or responsibilities with colored em dashes (`<span className="text-brand">—</span>`).
- **The Reality**: The em dash is a statistical favorite of AI copy generation that looks like unstyled markdown output.
- **The Law**: Use clean, authentic circular bullets (`FormattedBullet`: `w-1.5 h-1.5 rounded-full bg-brand/70`) or standard typographic lists.

### Rule 27: Ban Quadruple Redundant Introductions
- **The Slop**: Printing the candidate's name and title in the sticky masthead, directly below in a hero avatar kicker, directly below in the H1 headline, and directly below in the first sentence of the bio—all within 250 vertical pixels.
- **The Reality**: Readers feel like they are reading an echo chamber written by independent prompts that never saw each other.
- **The Law**: The masthead establishes identity; the hero H1 establishes editorial voice; the bio provides depth. Never repeat `[Name] · Software Engineer` three times in immediate succession.

### Rule 28: Ban Duplicate In-View Primary Navigation Buttons
- **The Slop**: Having `CV` in the primary 4-link navigation bar (`Overview`, `CV`, `Work Experience`, `Education`) AND simultaneously placing an isolated `[CV icon] CV` button in the header right next to it, PLUS an underline `Curriculum Vitae` link in the hero.
- **The Reality**: Cluttered header utility bar that looks like multiple agents competed to place their favorite link.
- **The Law**: The primary navigation bar is the definitive home for site routes. Header utilities are reserved for genuine global controls (Theme, Language). Do not duplicate navigation items as adjacent utility buttons.

### Rule 29: Ban Artificial Monograph Numbering (`01`, `02`, `03`, `04`)
- **The Slop**: Prefixing navigation links with zero-padded numbers (`01 Overview`, `02 CV`, `03 Work Experience`, `04 Education`) to feign an "editorial monograph" or "brutalist terminal" aesthetic.
- **The Reality**: Cheap aesthetic veneer that clutters navigation labels and adds zero semantic value.
- **The Law**: Write plain, legible navigation labels without decorative number prefixes.

### Rule 30: Enforce 44px Minimum Touch Targets on Mobile
- **The Slop**: Generating buttons and toggles with `h-7`, `h-8`, or `py-0.5 px-2` (28px–32px height) on mobile touch screens, making buttons painful or impossible to tap accurately with fingers.
- **The Reality**: Violates Apple Human Interface Guidelines and WCAG 2.5.5 / 2.5.8 accessibility standards.
- **The Law**: All interactive elements (buttons, links, form toggles) on mobile must provide a minimum hit area of 44×44px (or 40px with generous spacing).

### Rule 31: Ban Form-Field Colons on Skill Categories
- **The Slop**: Prefixing skill groups in CV sheets with trailing colons: `Languages:`, `Frontend:`, `Backend & Cloud:`, `Databases & Architecture:`, `Practices:`.
- **The Reality**: Looks like an unstyled database key-value dump or form input sheet.
- **The Law**: Use typographic weight, color contrast, and layout structure to delineate categories. Omit trailing colons.

### Rule 32: Ban Awkward Inline Slash Wrappers
- **The Slop**: Joining contact items with literal slash characters (`Amsterdam / email / site / github / linkedin`) that break awkwardly across responsive line breaks, leaving dangling slashes at the ends or starts of lines.
- **The Reality**: Ragged, unpolished text layout.
- **The Law**: Use flexbox wrapping with clean gap tokens (`flex flex-wrap items-center gap-x-4 gap-y-1.5`) and semantic dot separators (`·`) or whitespace.

### Rule 33: Ban Configuration Hacking to Cheat Tests
- **The Slop**: Mapping `font-mono` to `system-ui` in `tailwind.config.js` to bypass a test forbidding monospace fonts on editorial text.
- **The Reality**: Corrupts genuine monospace usage for code, syntax, and paths, and demonstrates agent test evasion.
- **The Law**: Maintain genuine monospace font stacks (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas...`) and enforce typographic discipline at the component level, not by disabling the utility globally.

---

## 2. Automated Regression Enforcement

All rules above are codified into automated tests in `src/unslop-design-rules.test.tsx` and run on every build:
1. `TechExperienceTracker` must not instantiate `setInterval`, render minute-level elapsed counters, or render a 6-card bento grid.
2. `TimelineItem` must not have a card wrapper (`bg-surface`, `border`, `shadow-sm`).
3. `TikkieShowcase` and `BitsizedShowcase` must contain zero nested bordered chips/cards.
4. `HeroSection` must not render an avatar or kicker preceding `<h1>`.
5. `Cv.tsx` must not contain `border-b-2` on rounded containers (`border-accent-on-rounded`).
6. Showcases must not use `—` em-dash bullets.
7. Masthead navigation must not render artificial numeric prefixes (`01`, `02`, etc.) or duplicate CV buttons.
8. CV technical competencies must not contain trailing colons (`Category:`).
9. Interactive buttons on mobile must satisfy minimum touch target guidelines ($\ge 40$px).
10. Tailwind mono font family must resolve to authentic monospace typefaces.
