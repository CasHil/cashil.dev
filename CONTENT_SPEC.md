# Content Specification & Information Architecture Guide

## Golden Rule of Content
> **Be complete, but ruthlessly eliminate any information that is duplicate, generic, or fails to give a technical recruiter or engineering lead immediate, high-signal context.**
> *Every card must have an elevated shadow, clear boundaries, and purposeful information hierarchy that builds trust.*

---

## 1. Global Navigation & Masthead

### 1.1 Identity & Masthead
- **Avatar**:
  - *Goal*: Provide immediate human authenticity with a refined double-ring photographic frame.
  - *Rule*: Never use pulsing green dots or artificial "live" indicators. Professional posture is established through clean typography and verified engineering accomplishments.
- **Name (`Casper Hildebrand`)**:
  - *Goal*: Establish candidate identity in bold Instrument Sans.
- **Role (`Full-Stack & Agentic Software Engineer · Tikkie Business`)**:
  - *Goal*: Instant headline indexing for recruiters in 2 seconds.
  - *Typographic Rule*: Use `font-sans` with medium weight and muted tone (`text-zinc-500`). Never use monospace terminal fonts for executive titles.
- **Social Profiles (GitHub, LinkedIn, Email)**:
  - *Goal*: Provide direct, frictionless communication channels with accessible touch targets (44px mobile hit area).
- **Controls (Language Toggle `EN/NL`, Theme Toggle)**:
  - *Goal*: Allow bilingual recruiters (Dutch tech/fintech market + international tech hubs) and light/dark preference switching.
  - *Typographic Rule*: Use `font-sans` for language labels (`EN`, `NL`), matching top-level navigation aesthetics.

### 1.2 Primary Navigation
- **Routes**: `Overview` (`/`), `CV` (`/cv`), `Work Experience` (`/work-experience`), `Education` (`/education`).
- *Goal*: Direct access to specialized views without burying credentials or repeating copy.

---

## 2. Overview Page (`/`)

### 2.1 Hero Statement & Value Proposition
- **H1 Headline**:
  - *Goal*: Clearly position Casper's core engineering specialty: *"Shipping resilient web applications with agentic workflows and high code standards."*
- **Bio Paragraph 1 (Current Production Scope)**:
  - *Goal*: Establish technical ownership and scale at Tikkie Business (merchant web portal in React/TypeScript, AWS serverless onboarding services).
- **Bio Paragraph 2 (Foundations & Code Quality Standards)**:
  - *Goal*: Highlight the double Master's foundation (Computer Science & Science Education) and prioritize code quality, automated testing, and clear technical communication.
- **CTAs (Strict 2-CTA Hierarchy)**:
  - *Primary*: Direct access to CV (`Curriculum Vitae →`).
  - *Secondary*: Deep dive into production systems (`Explore Work Experience →`).

### 2.2 Core Engineering Pillars (Elevated Shadowed Cards)
- Three foundational pillars in distinct, shadowed cards:
  1. **Agentic Software Development**: Spec-driven workflows, automated test generation, and AI-accelerated delivery with strict human verification.
  2. **Code Quality & Testing Rigor**: Strict type boundaries in TypeScript, deterministic state handling, automated CI test suites, and clean component architecture.
  3. **Didactics & Pedagogical Clarity**: Trained as a certified computer science teacher. Applying pedagogical clarity to write clean documentation, conduct thorough code reviews, and accelerate team onboarding.
- **Outside the Terminal**: Grounded, authentic hobbies (Electric bass guitar and chess) without pretentious pseudo-intellectual commentary.

### 2.3 Selected Work Showcases
- **Tikkie Business (`ABN AMRO · 2026 – Present`)**:
  - Elevated card with shadow: merchant portal, onboarding services, automated test coverage on AWS.
- **Bitsized Sandbox Engine (`Co-Founder & Lead Engineer · 2023 – 2025`)**:
  - Compact case study with shadow: in-browser client-side Web Worker execution, script timeouts, and exercise feedback for Dutch secondary schools.

---

## 3. Work Experience Page (`/work-experience`)

### 3.1 Overview & Structure
- **Production Systems (Always Visible Cards)**:
  - **Tikkie Business (ABN AMRO)**: Merchant portal, onboarding backend, automated testing, agentic workflows.
  - **Harvest**: Technical development traineeship, masterclasses in cloud systems, Temporal workflows, and event-driven architecture.
  - **Bitsized**: Platform architecture, in-browser Web Worker execution engine, teacher tooling.
  - **Netcompany**: Public sector enterprise applications and sustainability assessment tools.
- **Foundational Engineering (Progressive Disclosure)**:
  - **Bexter (2019–2021)**: TrackOnline asset logistics platform APIs and frontend development.
- **Computer Science Teaching & Academic Leadership (Direct Visibility)**:
  - **CS Teaching & Board of Studies (2018–2025)**: Teaching ~200 secondary school students across 10 classes in algorithms, computer architecture, digital logic, and web development; PTA examination design; TU Delft Board of Studies curriculum governance.
- **Card Hierarchy**:
  - Every role is rendered as a distinct, tactile card with a shadow (`shadow-sm hover:shadow-md`) and clean border on both desktop and mobile.

---

## 4. Education & Research Page (`/education`)

### 4.1 Academic Degrees
- All degrees presented in elevated shadowed cards:
  - *MSc Computer Science* · TU Delft (Distributed systems, software architecture, algorithms).
  - *MSc Science Education & Communication* · TU Delft (First-degree teaching qualification, didactics, curriculum design).
  - *Exchange Studies in CS* · KTH Stockholm (HCI, Information Visualization, UX Design).
  - *BSc Computer Science & Engineering* · TU Delft (Data structures, algorithms, operating systems, networking).

### 4.2 Research Publication Card
- Elegant shadowed card featuring the Master's thesis (*Debugging the Divide*) with a concise abstract and direct link to the TU Delft repository.
- No oversized data science telemetry grids or ML methodology jargon.

---

## 5. Curriculum Vitae Page (`/cv`)

- Clean in-browser viewing and 1-click download of the 1-page ATS-compliant PDF resume in English and Dutch.
- Title and summary aligned with Agentic Software Developer positioning and code quality focus.
