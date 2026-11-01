# Design System & Visual Guidelines: Casper Hildebrand Portfolio

This document establishes the design principles, tokens, typography scale, and layout hierarchy for Casper Hildebrand's personal portfolio, adhering strictly to **Impeccable design principles** (clean, distinctive, high-craft, anti-slop).

---

## 1. Core Principles

- **Authenticity over Cliché**: Eliminate AI tropes (e.g. waving hands `👋`, generic buzzwords like "AI-enabled SDLC", stark pure-white cards floating on pitch black). Voice is confident, direct, and first-person.
- **Calibrated Dark Mode**: Avoid raw `#111827` (gray-900) and pure-black `#000000`. Use deep, warm obsidian/slate tones with subtle hue harmony.
- **Surface Elevation Hierarchy**: Every card has a tactile presence with a defined shadow (`shadow-sm hover:shadow-md`) and clean hairline border, creating an unmistakable, organized information hierarchy.
- **Typographic Hierarchy**: Bold editorial display type is strictly preserved for titles and focal accents; all body copy, dates, metadata, and tags use a readable, neutral system sans stack with balanced leading and tracking.
- **Deliberate Craft Details**: Purposeful indicators, subtle skill tags, and fluid responsive transitions that build trust and professionalism.

---

## 2. Color Palette & Tokens

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| **`canvas`** | `#0b0c0e` | Deep obsidian base background |
| **`surface`** | `#13151a` | Primary card, sidebar, and elevated panel background |
| **`surface-hover`** | `#1a1d24` | Interactive hover and active card states |
| **`surface-subtle`** | `#1e222b` | Tag pills, badge backgrounds, and secondary interactive areas |
| **`border-subtle`** | `rgba(255, 255, 255, 0.08)` | Standard hairline borders on cards and dividers |
| **`border-active`** | `rgba(255, 255, 255, 0.16)` | Hovered and focused element borders |
| **`text-primary`** | `#f3f4f6` (gray-100) | Main headlines, titles, and high-emphasis text |
| **`text-secondary`** | `#9ca3af` (gray-400) | Body paragraphs, descriptions, and standard labels |
| **`text-muted`** | `#6b7280` (gray-500) | Timestamps, dates, location, secondary metadata |
| **`accent-emerald`**| `#10b981` (emerald-500) | Tikkie / Fintech active indicators, current status dot |
| **`accent-cyan`** | `#06b6d4` (cyan-500) | Interactive link hover states, accents |
| **`accent-amber`** | `#f59e0b` (amber-500) | Education & creative craft accents |

---

## 3. Typography Hierarchy

### Font Families
- **Display**: `"League Spartan"`, -apple-system, sans-serif
  - *Usage*: Section titles, hero name, high-impact numbers, editorial emphasis.
- **Sans / Body**: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - *Usage*: All body paragraphs, timeline descriptions, metadata, navigation, skill tags.
- **Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
  - *Usage*: Code snippets, status tags, tech pills.

### Typographic Scale
- **Display 1 (Hero)**: `text-3xl md:text-5xl font-bold tracking-tight text-primary` (League Spartan)
- **Heading 2 (Section)**: `text-xl md:text-2xl font-bold tracking-tight text-primary` (League Spartan)
- **Heading 3 (Card Titles)**: `text-lg md:text-xl font-semibold text-primary` (League Spartan or Sans)
- **Body Large**: `text-base md:text-lg text-secondary leading-relaxed`
- **Body Standard**: `text-sm md:text-base text-secondary leading-relaxed`
- **Metadata / Timestamps**: `text-xs md:text-sm text-muted font-medium`
- **Skill / Status Tags**: `text-xs font-medium tracking-wide uppercase`

---

## 4. Spacing, Radii & Elevation

### Spacing Scale
- `p-2` (8px), `p-3` (12px), `p-4` (16px), `p-6` (24px), `p-8` (32px), `p-12` (48px)
- Max content width: `max-w-4xl` for reading comfort, `max-w-6xl` for full layout.

### Border Radii
- Cards & Modals: `rounded-xl` (12px) or `rounded-2xl` (16px)
- Chips & Badges: `rounded-md` (6px) or `rounded-full` (9999px)
- Profile Avatar: `rounded-full` with `ring-2 ring-white/10 ring-offset-2 ring-offset-canvas`

### Elevation & Shadows
- **Card**: `border border-white/8 bg-surface shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)]`
- **Hover**: `border-white/15 bg-surface-hover transition-all duration-200`
