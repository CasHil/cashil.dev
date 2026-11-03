# Design System & Visual Guidelines: Casper Hildebrand Portfolio

This document establishes the design principles, tokens, typography scale, and layout hierarchy for Casper Hildebrand's personal portfolio, adhering strictly to **`taste-skill` rules** (open editorial broadside, card-free, eyebrow-free, pill-free, zero monospace fonts, anti-slop).

The active visual world is **The Open Typographic Editorial** — an authoritative monograph inspired by classic European editorial design, typographically driven broadsides, and TU Delft academic publications.

---

## 1. Core Principles

- **Strictly No Cards**: Content is never trapped inside boxed rectangles with hairline borders and soft drop shadows (`rounded-2xl bg-surface border shadow-sm`). The layout breathes through generous vertical rhythm (32px–64px section separation), natural reading hierarchy, and whitespace.
- **Strictly No Eyebrows or Pill Badges**: Absolute ban on floating kicker labels (`CHAPTER I`, `SYSTEM 01`, `text-xs uppercase tracking-wider`) and pill chips (`rounded-full`, chip tags). Headlines are confident and stand on their own merit.
- **Strictly No Monospace Fonts**: Monospace type is banished from all UI, timestamps, stack chips, and labels. Pure proportional typography is used everywhere (`Newsreader` serif and modern system-ui proportional sans).
- **Two-Line Headline Rule**: All `h1`–`h6` headings are formatted to occupy two lines or fewer at all viewport sizes.
- **Authenticity as Software Engineer & Educator**: Grounded narrative highlighting Casper Hildebrand's production systems at Tikkie Business (ABN AMRO via Harvest), in-browser sandbox architecture at Bitsized, and double Master's degrees in Computer Science and Science Education from TU Delft.
- **Substantive Architecture over Gimmicks**: Elimination of synthetic developer toys (such as fake HMAC tamper buttons or prime sieve counters). Replaced with clear, authoritative systems telemetry: distributed AWS event workflows, Chamber of Commerce (KvK) verification pipelines, and client-side AST didactic diagnostic engines.

---

## 2. Color Palette & Tokens

Calibrated grayish light green (sage / celadon) aesthetic:

| Token Name | Light Value | Dark Value | Usage |
| :--- | :--- | :--- | :--- |
| **`canvas`** | `#fafaf7` (warm ivory paper) | `#0c100e` (obsidian spruce) | Main background canvas |
| **`surface`** | `#ffffff` | `#121714` | Interactive background containers |
| **`surface-hover`** | `#f3f6f4` | `#18201b` | Hover and focus background states |
| **`surface-subtle`** | `#edf2ee` (tinted sage wash) | `#1a241e` | Control fills (buttons, tab panels) |
| **`border-subtle`** | `#e1e7e2` (mineral sage gray) | `#222c25` | Subtle datum rules and table boundaries |
| **`border-hover`** | `#c4cdc6` | `#334238` | Hovered and focused borders |
| **`text-primary`** | `#141715` (deep pine ink) | `#f2f5f3` (parchment white) | Headlines, primary titles, high-emphasis copy |
| **`text-secondary`** | `#3b443e` (mineral slate) | `#c9d4cd` (soft sage slate) | Body copy, narrative paragraphs |
| **`text-muted`** | `#6b7770` (muted sage gray) | `#798a80` (muted celadon) | Timestamps, dates, location, secondary metadata |
| **`brand`** | `#4a6b56` (deep sage green) | `#8da896` (luminous celadon) | Primary links, active indicators, focus rings |

---

## 3. Typography Hierarchy

### Font Families
- **Display / Serif**: `"Newsreader"`, Georgia, serif
  - *Usage*: Main page titles, featured engineering headings, section titles, ethos principles.
- **Sans / Proportional**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - *Usage*: All body paragraphs, timeline descriptions, metadata, navigation, stack lists, tabular dates.
- **Mono**: Disabled. Mapped to proportional sans in Tailwind configuration to prevent accidental monospace rendering.

### Typographic Scale
- **Display 1 (Hero)**: `text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight font-serif text-text-primary leading-[1.05]`
- **Heading 2 (Featured Sections)**: `text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight font-serif text-text-primary`
- **Heading 3 (Workflows & Roles)**: `text-xl sm:text-2xl font-normal font-serif text-text-primary`
- **Body Large**: `text-base sm:text-lg text-text-secondary leading-relaxed`
- **Body Standard**: `text-sm sm:text-base text-text-secondary leading-relaxed`
- **Metadata / Dates**: `text-xs sm:text-sm text-text-muted`
- **Tech Stack**: Natural proportional text lists (`Stack: TypeScript, React, Node.js, AWS`)

---

## 4. Spacing & Layout Architecture

- **Whitespace as Structure**: Sections breathe with `space-y-16 sm:space-y-24`.
- **Max Content Width**: `max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl` for open broadside layout.
- **Zero Resting Shadows**: Elements at rest carry zero drop shadows. Elevation is conveyed strictly through tone, typography, and clear visual hierarchy.
