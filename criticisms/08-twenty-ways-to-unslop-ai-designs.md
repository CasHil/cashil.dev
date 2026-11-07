# 08: 20 Ways to Unslop AI Designs

This critique codifies the **20 Ways to Unslop AI Designs** into actionable design laws for Casper Hildebrand's portfolio website (`cashil.dev` / `cashil.github.io`).

AI-assisted web generation often falls into predictable traps: excessive badges, unneeded monospacing, decorative embellishments, geometric radius mismatch, poor text contrast, and sterile jargon. This document establishes concrete remedies and architectural rules to keep the portfolio handcrafted, human, and engineering-grade.

---

## The 20 Anti-Slop Design Laws

### 1. Delete Filler Badges
- **The Anti-Pattern**: Slapping pill badges, status tags, and chips around every header, card, and section (e.g. `✨ AI Powered`, `PRODUCTION`, `ONLINE`, `v1.0.0`).
- **The Remedy**: Remove gratuitous tags. Badges are reserved solely for high-signal metadata that cannot be conveyed through visual hierarchy or typography alone. If a badge only restates what the surrounding copy says, delete it.

### 2. Drop Redundant Labels
- **The Anti-Pattern**: Prefixing values with redundant field names like `"Stack: React"`, `"Role: Full-Stack Engineer"`, or `"Date: 2025"`.
- **The Remedy**: Let typography, layout, and visual hierarchy communicate data types. Recognizable tech names (TypeScript, React, AWS) do not need `"Stack:"` prepended. Dates positioned in metadata slots do not need `"Date:"`.

### 3. Unitalicize Random Words
- **The Anti-Pattern**: Italicizing random words in sentences or headlines for fake editorial flair (e.g. *"crafting *seamless* cloud backends"*).
- **The Remedy**: Keep font styles intentional. Reserve italics strictly for formal publication titles or book citations. Emphasize ideas through active verbs and crisp sentence construction, not random italicization.

### 4. Mono Only Where Needed
- **The Anti-Pattern**: Applying `font-mono` to buttons, navigation menus, section headers, job titles, or dates under the mistaken belief that monospace equates to "developer aesthetic".
- **The Remedy**: Use proportional sans (`Instrument Sans` / `system-ui`) or editorial serif (`Newsreader`) for all UI and prose. Restrict `font-mono` strictly to actual code syntax, terminal snippets, API endpoints, and file paths.

### 5. Use a Design System
- **The Anti-Pattern**: Scattering arbitrary one-off Tailwind values (`p-[13px]`, `rounded-[19px]`, `#3a5b42`) without systemic coherence.
- **The Remedy**: Rely strictly on defined CSS variables and semantic design tokens:
  - Surfaces: `--canvas`, `--surface`, `--surface-hover`, `--surface-subtle`
  - Borders: `--border-subtle`, `--border-hover`
  - Typography: `--text-primary`, `--text-secondary`, `--text-muted`
  - Brand: `--brand`, `--brand-hover`, `--brand-subtle`, `--brand-border`
  - Radii: Standardized squircle tokens (`squircle-sm`, `squircle`, `squircle-lg`, `squircle-xl`).

### 6. Show the Actual Product
- **The Anti-Pattern**: Abstract marketing boxes, generic vector illustrations, or empty card outlines claiming "We built an innovative platform".
- **The Remedy**: Ground features in concrete evidence: live Web Worker sandboxes, real typed API contracts, realistic UI mocks, and verifiable interactive demos.

### 7. Enlarge the Main Feature
- **The Anti-Pattern**: Flat visual hierarchies where all cards, sections, and items share identical scale, forcing the reader to hunt for what matters most.
- **The Remedy**: Command the page with an unmistakable focal point. In Casper's portfolio, the primary production engineering flagship (Tikkie Business) and the hero headline must possess commanding visual weight over secondary items.

### 8. Group with Spacing
- **The Anti-Pattern**: Slicing up layouts with heavy borders, divider lines (`<hr />`), and boxes-inside-boxes to separate related content.
- **The Remedy**: Utilize whitespace as an active structural tool. Let macro-spacing (`space-y-16`, `gap-8`) separate major concerns and micro-spacing (`space-y-2`, `gap-2`) bind related elements together naturally.

### 9. Make Headlines Specific
- **The Anti-Pattern**: Fluffy corporate throat-clearing slogans like *"Engineering Future Horizons"* or *"Transformative Architecture"*.
- **The Remedy**: Direct, factual engineering truth: *"Software engineer at Tikkie Business and computer science educator"* or *"In-Browser Python Execution Platform for Dutch Classrooms"*.

### 10. Emphasize the CTA
- **The Anti-Pattern**: Primary actions that look identical to secondary links, muted outlines, or passive text.
- **The Remedy**: Primary call-to-action buttons (e.g. `Explore Work Experience`, `Download PDF (CV)`) must feature strong surface contrast, crisp padding, clear directional indicators (`→`), and tactile hover/active states.

### 11. Add an Accent Colour
- **The Anti-Pattern**: Either completely monochromatic, sterile gray-on-gray palettes or chaotic multi-colored rainbows.
- **The Remedy**: Commit to a single intentional accent color (`--brand`, forest sage `#4a6b56` in light, `#8da896` in dark). Use it consistently for focus rings, active navigation indicators, key links, and interactive states.

### 12. Keep Icons Consistent
- **The Anti-Pattern**: Mixing disparate icon sets—some thick outline, some thin stroke, some filled silhouettes, with inconsistent viewports and bounding boxes.
- **The Remedy**: Maintain uniform icon geometry (e.g., Lucide-style 24x24 viewBox, 1.8px stroke width, rounded caps and joins) across mobile bottom navigation, masthead actions, and inline indicators.

### 13. Remove Embellishments
- **The Anti-Pattern**: Gratuitous background gradients, spinning orbital circles, pulsing radar pings (`animate-ping`), particle meshes, and glowing neon box shadows.
- **The Remedy**: Strip all decorative visual noise. Physical surface elevation (solid cards with clean borders and subtle drop shadows: `shadow-sm hover:shadow-md`) provides elegance without circus tricks.

### 14. Inner Radius = Outer Radius – Padding
- **The Anti-Pattern**: Random nested corner radii that create pinched, unnatural gaps or inconsistent curves between containers and their child elements.
- **The Mathematical Law**:
  $$R_{\text{inner}} = \max(0, R_{\text{outer}} - P)$$
  When a container has corner radius $R_{\text{outer}}$ and uniform internal padding $P$, any child element hugging the boundary must have corner radius $R_{\text{inner}} = R_{\text{outer}} - P$. If $P \ge R_{\text{outer}}$, the inner corner should be nearly square or zero.
- **Example**: A card with `rounded-squircle` (18px) and `p-4` (16px) requires inner elements to have a radius of $18 - 16 = 2\text{px}$. A navigation container with `rounded-squircle` (18px) and `p-1` (4px) requires inner pill buttons to have a radius of $18 - 4 = 14\text{px}$.

### 15. Improve Text Contrast
- **The Anti-Pattern**: Ultra-light gray text (`text-zinc-400` on white) that fails accessibility audits and strains reading comfort.
- **The Remedy**: Enforce WCAG AA contrast compliance across all text:
  - Normal text ($< 18\text{pt}$): Minimum contrast ratio of **4.5:1** against the background.
  - Large text ($\ge 18\text{pt}$ or bold $\ge 14\text{pt}$): Minimum contrast ratio of **3.0:1**.
  - Light theme `--text-muted`: `#59665f` on `#fafaf7` (contrast ratio $\approx 5.8:1$).

### 16. Wrap Headlines Properly
- **The Anti-Pattern**: Uncontrolled line breaks leaving a single lonely word ("orphan") dangling on the second line.
- **The Remedy**: Enforce `text-wrap: balance` on all headings (`h1` through `h6`) and `text-wrap: pretty` on paragraphs and list items.

### 17. Align by Eye, Not Pixels
- **The Anti-Pattern**: Relying strictly on raw geometric centering that leaves icons or arrows visually sagging or floating off-center.
- **The Remedy**: Optically balance elements. Raise directional arrows slightly (`translate-y-[0.5px]`), optically center play buttons, and align list bullets with the baseline of the first line of text.

### 18. Use Tabular Numbers
- **The Anti-Pattern**: Proportional numbers in counters, metrics, dates, and elapsed times that cause layout jitter as digits change width (`1` vs `8`).
- **The Remedy**: Always apply `tabular-nums` (`font-variant-numeric: tabular-nums; font-feature-settings: "tnum" 1;`) to all numbers, metrics, dates, and live counters.

### 19. Add Loading States
- **The Anti-Pattern**: Asynchronous actions (such as PDF viewing or dynamic fetch) resulting in frozen screens or abrupt layout shifts without feedback.
- **The Remedy**: Provide graceful skeleton screens, subtle spinner states, and `aria-busy="true"` feedback for any pending operations.

### 20. Animate Useful Feedback
- **The Anti-Pattern**: Constant looping ambient animations that distract the user without providing utility.
- **The Remedy**: Restrict animation to responsive, tactile user feedback: button click compressions (`active:scale-[0.98]`), spring transitions on active navigation pills, smooth theme cross-fades, and polite confirmation messages.
