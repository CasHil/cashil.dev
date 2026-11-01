# Round 01: Resume Jargon, Category Chaos & Hallucinated Hobbies

**Archive Date**: October 29, 2026  
**Conversation Context**: Conversation `852fc3a1-7788-4e12-b103-62725fa3d6a6`  
**Reviewer Perspectives**: Tier-1 Tech Recruiter & Senior Staff Systems Engineer  
**Key Problem**: Repetitive masthead copy, taxonomic inconsistency in card labels, empty resume buzzwords, and AI-hallucinated hobbies.

---

## 1. The Core Criticisms

### 1.1 Quadruple Redundancy in the First 300 Pixels
- **The Issue**:
  When a recruiter loaded the homepage, the exact same company name, job title, and domain were repeated four times in the first 12 lines of text:
  1. **Masthead**: `"Full-Stack Engineer · Tikkie"`
  2. **Hero H1**: `"Full-stack software engineer building payment services and web applications at Tikkie."`
  3. **Bio Paragraph 1**: `"Full-stack software engineer at Tikkie (ABN AMRO), developing merchant payment APIs and business portals used across the Netherlands."`
  4. **Featured Card 1**: `"Tikkie Business"` + `"Merchant Payment Services & Portals"` + `"Merchant payment APIs and business dashboards for Tikkie Business..."`
- **The Recruiter Reaction**:
  - Signals a thin resume being artificially padded.
  - Wastes prime above-the-fold screen real estate that should instead communicate engineering breadth, systems philosophy, and distinct technical capabilities.
- **The Fix**:
  - Differentiated the messaging:
    * **Masthead**: Crisp identifier (`Full-Stack & Agentic Software Developer`).
    * **Hero**: Clear statement of craft, architectural focus (event-driven backends, cloud infrastructure, automated quality guardrails), and high-throughput systems.
    * **Card**: Specific technical details about APIs, AWS Lambda, microservices, and merchant portals.

---

### 1.2 "Production Systems" as AI Slop & Taxonomic Chaos
- **The Issue**:
  - The card overline tag for Tikkie was `"PRODUCTION SYSTEMS"`.
  - In enterprise software engineering, *everything* deployed is a production system. The tag conveyed zero architectural or organizational information.
  - Across the three featured cards, the overline tags used completely incompatible taxonomic schemes:
    * Card 1: Functional category (`"PRODUCTION SYSTEMS"`)
    * Card 2: Institution & Domain (`"TU DELFT · RESEARCH"`)
    * Card 3: Personal Title (`"CO-FOUNDER & LEAD ENGINEER"`)
- **The Fix**:
  - Unified all card overlines to follow a clean, consistent **Provenance & Timeline** schema:
    * `ABN AMRO · 2026 – Present`
    * `Bitsized · 2023 – 2025`
    * `TU Delft MSc Thesis · 2024`

---

### 1.3 Zero-Signal Subtitles
- **The Issue**:
  - Subtitles that merely paraphrased or repeated the card's H2 heading added visual noise without conveying technical depth.
  - Examples:
    * Heading: `Tikkie Business` → Subtitle: `Merchant Payment Services & Portals`
    * Section: `Featured Experience` → Subtitle: `Production software and platforms`
- **The Fix**:
  - Either eliminated redundant subtitles entirely or replaced them with high-signal architectural metadata (e.g., specific protocols, team scopes, or production throughput).

---

### 1.4 Hallucinated Personal Passions ("Synthesizers & Audio")
- **The Issue**:
  - An earlier AI agent had generated a hobby card titled `"Synthesizers & Audio"` with poetic prose about analog modular synthesis, patch cables, and sound design.
  - **Casper has zero connection to synthesizers or modular audio.** The LLM simply hallucinated this because it matches the generic "quirky hacker / electronic music producer" stereotype in its training weights.
- **The Danger**:
  - If a recruiter or hiring manager asks about Eurorack patches or voltage-controlled oscillators in an interview, the candidate is immediately caught in an unearned falsehood.
  - Destroys candidate credibility on contact.
- **The Fix**:
  - Completely purged all synthesizer references across all locales.
  - Grounded the personal pursuits strictly in Casper's authentic, verifiable passions: **Electric Bass Guitar** and **Chess**.

---

### 1.5 Academic Passive Voice & Junior Traineeship Phrasing
- **The Issue**:
  - Harvest traineeship copy stated: *"Completed practical modules covering cloud architecture, distributed systems, and modern frontend frameworks..."*
  - This read like a high schooler listing MOOC courses on Coursera rather than a software engineer delivering distributed systems.
  - Tikkie copy stated: *"Powering thousands of Dutch enterprises"*, which sounded like a marketing department press release rather than an engineer describing their technical contributions.
- **The Fix**:
  - Rephrased from the perspective of software ownership: architecture choices, API contract design, test coverage, and operational resilience.

---

## 2. Identified AI Slop Anti-Patterns

| Anti-Pattern Name | The AI Tell | The Engineering Reality |
|---|---|---|
| **The Echo Chamber** | Repeating the exact same company name and role title 4 times in 300px. | Each section must deliver new, progressive information to the reader. |
| **Taxonomic Chaos** | Mixing categories: one card has a buzzword tag, one has an institution, one has a title. | Enforce a single metadata schema across all sibling cards (e.g., Company · Year). |
| **The Hallucinated Persona** | Inventing creative hobbies (modular synths, darkroom photography) to sound artsy. | Only include 100% factual, authentic personal pursuits that the candidate actually practices. |
| **Coursework Listing** | "Completed practical modules in X..." | Describe systems built, patterns applied, and problems solved, not educational syllabi consumed. |

---

## 3. Standard Established for Future Agents

> [!IMPORTANT]
> **Authenticity & Taxonomy Rule:**
> 1. Never repeat job titles or company names across sibling components without adding new technical specificity.
> 2. Card overlines must strictly follow the format: `[Organization] · [Timeline]`.
> 3. Never invent or embellish hobbies, pursuits, or technical credentials. Check git history or ask for confirmation.
