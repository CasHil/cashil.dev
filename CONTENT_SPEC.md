# Content Specification & Information Architecture Guide

## Golden Rule of Content
> **Be complete, but ruthlessly eliminate any information that is duplicate, generic, or fails to give a technical recruiter or engineering lead immediate, high-signal context.**
> *If you have doubts about whether an item or sentence earns its visual weight, leave it out.*

---

## 1. Global Navigation & Masthead

### 1.1 Identity & Masthead
- **Avatar**:
  - *Goal*: Provide immediate human authenticity with a refined double-ring photographic frame.
  - *Rule*: Never use pulsing green dots or artificial "live" indicators. Professional posture is established through clean typography and verified engineering accomplishments.
- **Name (`Casper Hildebrand`)**:
  - *Goal*: Establish candidate identity in bold Instrument Sans.
- **Role (`Full-Stack Engineer · Tikkie`)**:
  - *Goal*: Instant headline indexing for recruiters in 2 seconds.
  - *Typographic Rule*: Use `font-sans` with medium weight and muted tone (`text-zinc-500`). Never use monospace terminal fonts for executive titles.
- **Social Profiles (GitHub, LinkedIn, Email)**:
  - *Goal*: Provide direct, frictionless communication channels with accessible touch targets (44px mobile hit area).
- **Controls (Language Toggle `EN/NL`, Theme Toggle)**:
  - *Goal*: Allow bilingual recruiters (Dutch fintech market + international tech hubs) and light/dark preference switching.
  - *Typographic Rule*: Use `font-sans` for language labels (`EN`, `NL`), matching top-level navigation aesthetics.

### 1.2 Primary Navigation
- **Routes**: `Overview` (`/`), `CV` (`/cv`), `Work Experience` (`/work-experience`), `Education` (`/education`).
- *Goal*: Direct access to specialized views without burying any credentials or repeating bio copy.

---

## 2. Overview Page (`/`)

### 2.1 Hero Statement & Elevator Pitch
- **H1 Headline**:
  - *Goal*: Clearly position Casper's core engineering specialty: *"Full-stack software engineer building payment services and web applications at Tikkie."*
  - *Rule*: Never repeat this sentence in subsequent paragraphs.
- **Bio Paragraph 1 (Current Role & Architecture Scope)**:
  - *Goal*: Establish technical ownership, architectural scope, and scale at Tikkie (idempotent APIs, payment webhooks, business dashboards).
- **Bio Paragraph 2 (Foundational Rigor & 0-to-1 Proven Track Record)**:
  - *Goal*: Anchor the dual foundation: entrepreneurial execution (Bitsized browser sandboxes) + academic research depth (TU Delft Double MSc, 175k telemetry analysis).
- **CTAs (Strict 2-CTA Hierarchy)**:
  - *Primary*: Direct access to CV (`Curriculum Vitae →`). Zero green dots.
  - *Secondary*: Deep dive into production systems (`Explore Work Experience →`).

### 2.2 Selected Work Showcase
- *Goal*: Showcase three distinct pillars of Casper's background without overwhelm in tactile editorial panels.
- *Visual Design*: Elevated cards (`bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]`) that catch subtle ambient topographic glow.
- *Strict Ordering & Grounded Provenance*:
  1. **Item 1: Tikkie Business (`ABN AMRO · 2026 – Present`)**:
     - *Goal*: Proof of high-volume financial infrastructure, reliability, and enterprise partner integrations.
  2. **Item 2: Bitsized (`Co-Founder & Lead Engineer · 2023 – 2025`)**:
     - *Goal*: Proof of 0-to-1 systems engineering (isolated browser code execution engine adopted by real schools). Promoted ahead of the thesis to prioritize shipped software.
  3. **Item 3: Debugging the Divide (`TU Delft MSc Thesis · 2024`)**:
     - *Goal*: Proof of quantitative research depth, large-scale dataset modeling (174,988 learners), and Python/Pandas telemetry.
- *Tag Rule*: Every overline badge must follow a grounded provenance syntax `[Entity] · [Timeline/Status]` in clean proportional sans (no vague marketing labels like "EdTech · Co-Founder" or "Production Systems").
- *Subtitle Rule*: Subtitles must provide distinct technical metadata, never restate the card title.

---

## 3. Work Experience Page (`/work-experience`)

### 3.1 Overview & Intro
- *Goal*: State the range of engineering ownership cleanly before the timeline starts.

### 3.2 Progressive Disclosure Architecture
To prevent cognitive overload while remaining 100% complete, experience is structured into core visibility and accessible disclosure drawers:
- **Core Engineering (Always Visible)**:
  - **Tikkie (ABN AMRO)**: Merchant infrastructure, idempotency, webhook reliability, React/Node.js/AWS.
  - **Harvest**: Engineering Fellow participating in advanced distributed systems and event-driven architecture track parallel to production at Tikkie.
  - **Bitsized**: In-browser execution sandboxing, AST evaluation, education tooling.
  - **Netcompany**: Enterprise data migration (ETL) and energy simulation tooling in C#/.NET and SQL Server.
- **Foundational Engineering Drawer (Progressive Disclosure)**:
  - *Trigger*: `Show foundational engineering (1)`
  - *Summary*: Backend services, asset logistics APIs, and web modernization at Bexter (2019–2021).
  - *Items*: TrackOnline (Bexter).
- **Academic & Teaching Drawer (Progressive Disclosure)**:
  - *Trigger*: `Show academic & didactics timeline`
  - *Badge*: `Pedagogy · 2018 – 2025`
  - *Summary*: Computer science pedagogy across secondary education, undergraduate algorithms instruction at TU Delft, and curriculum governance on the BSc CS&E Board of Studies.
  - *Items*: CS Instruction & TU Delft Academic Governance.

### 3.3 Semantic & Typographic Hierarchy
- *Job Titles*: Must be semantically coded as `<h3>` nested under the `<h2>` section headers.
- *Status Badges*: Current roles display static, high-contrast `CURRENT` / `HUIDIG` typographic badges without green dots or animations.

---

## 4. Education & Research Page (`/education`)

### 4.1 Layout Architecture
- *Goal*: Connect formal academic credentials with tangible research output.
- **Section 1: Academic Degrees**:
  - *MSc Computer Science (Data Science)* · TU Delft
  - *MSc Science Education & Communication* · TU Delft (First-degree teaching qualification)
  - *Exchange Studies in CS* · KTH Stockholm (Machine learning & HCI)
  - *BSc Computer Science & Engineering* · TU Delft
- **Section 2: Research Publication Card**:
  - *Goal*: Highlight Casper's published master's thesis (*Debugging the Divide*, analyzing 174,988 learners and 14 course runs) with dataset metrics and direct external link to the TU Delft Education Repository.

---

## 5. Engineering Force Multiplier & Authentic Ethos (Overview Section 3)

### 5.1 Technical Ethos & Differentiation
- *Goal*: Highlight how the combination of Computer Science + Science Education acts as a force multiplier on engineering teams:
  - Treating API design as a human communication interface with clear contracts.
  - Enforcing strict type boundaries, documentation, and RFC-driven development.
  - Mentoring junior and mid-level engineers to accelerate team velocity.

### 5.2 Outside the Codebase
- *Goal*: Authentic personal grounding without fluff.
- *Strict Whitelist*: Electric Bass Guitar (groove, rhythm, harmonic precision) and Chess (tactical calculation, positional strategy).
- *Strict Blacklist*: Synthesizers, electronic music production, and generic hobbies are strictly forbidden.

---

## 6. Curriculum Vitae Page (`/cv`)

- *Goal*: Provide instant in-browser viewing and 1-click download of the 1-page ATS-compliant PDF resume.
- *Rule*: Subtitle must cleanly state professional credentials (`Full-Stack Software Engineer · Amsterdam, Netherlands`), avoiding self-referential resume-compliance jargon like "Single-Page ATS Format". Zero green dots on CTA buttons.

