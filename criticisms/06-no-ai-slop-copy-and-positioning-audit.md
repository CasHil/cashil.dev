# Round 06: /no-ai-slop Copy Audit & Positioning Overhaul

**Archive Date**: November 1, 2026  
**Conversation Context**: Conversations `91887f02-4c29-4f59-bc42-dc0df16f2899`, `bda28e5b-f515-4635-b334-44e4a2420b78`, `2ee56a88-2223-4ee7-aa19-0b1d4b26e1ec`  
**Reviewer Perspectives**: Ruthless Copy Editor (`no-ai-slop` skill), Executive Tech Recruiter & CTO Strategist  
**Key Problem**: Factual inflation ("BS"), secondment puffery, unearned senior claims, academic telemetry obsession obscuring software engineering, buried teaching superpower, and corporate marketing jargon.

---

## 1. The Core Criticisms

### 1.1 The "Resume Inflator": Harvest Traineeship as "Elite Fellowship"
- **The Issue**:
  - The copy previously framed Casper's role at Harvest as:
    > *"Engineering Fellow participating in an elite distributed systems fellowship parallel to high-throughput production delivery at Tikkie."*
  - **The Factual Reality**:
    Casper entered Harvest as part of their **Young Talent Program / Technical Traineeship** (a standard 2-year Dutch secondment/consultancy program combining client placement with masterclasses).
  - Calling a commercial young talent traineeship an "elite engineering fellowship" is classic AI resume puffery. CTOs and Dutch recruiters immediately recognize the exaggeration.
- **The Fix**:
  - Restored 100% factual accuracy:
    > *"Software Engineer participating in the Harvest Young Talent Program, combining intensive masterclasses in cloud infrastructure, event-driven architecture, and systems resilience with production engineering at Tikkie Business."*
  - Authentic, professional, and completely transparent.

---

### 1.2 Unearned Senior Authority & False Mentorship Claims
- **The Issue**:
  - Previous copy claimed Casper was *"mentoring mid-level engineers"*, *"orchestrating company-wide architectural shifts"*, and guaranteeing *"zero ambiguous edge cases"*.
  - Casper is an early-career software engineer (graduated 2024). Claiming to mentor mid-level engineers and eliminate all edge cases sounds absurd to senior engineering leaders and instantly raises red flags during hiring manager screens.
- **The Fix**:
  - Replaced inflated managerial claims with genuine software engineering ownership:
    * Designing resilient REST/GraphQL APIs and merchant onboarding workflows.
    * Writing rigorous automated tests (Vitest, integration suites) and enforcing strict TypeScript types.
    * Leveraging spec-driven agentic workflows to accelerate feature delivery while maintaining strict code standards.

---

### 1.3 The Data Science / MOOC Telemetry Trap
- **The Issue**:
  - Over 100 lines of UI and copy were dedicated to Casper's Master's thesis telemetry:
    * Giant statistical counters: `174,988 learners`, `14 Course Runs`, `+16.7% gap`.
    * Methodology tags: `K-Means Clustering`, `Logistic Regression`, `Survival Analysis`, `Cohen's d`.
  - Recruiters and CTOs visiting the site were confused about his identity:
    * *"Is this candidate an EdTech data scientist? A machine learning researcher? Or a software engineer?"*
  - Offline regression on static CSV datasets is irrelevant to building scalable payment backends at Tikkie.
- **The Fix**:
  - Demoted and streamlined thesis telemetry:
    * Removed the 80-line data stats grid and methodology badges.
    * Replaced with a prestigious, concise Master's Thesis publication card under Education linking directly to the TU Delft repository.
    * Shifted the entire site narrative squarely onto **software engineering, cloud backend architecture, and code craftsmanship**.

---

### 1.4 Hiding the Core Superpower (The Computer Science Educator)
- **The Issue**:
  - Casper holds a **double Master's degree** from TU Delft: an MSc in Computer Science and an MSc in Science Education & Communication.
  - He taught **~200 high school students across 10 cohorts**, designed PTA examinations, and served on the Board of Studies.
  - The previous portfolio had hidden all teaching experience inside an expandable drawer at the bottom of the Work Experience page.
  - In senior engineering, **didactics, mentorship, clear communication, and high-signal code reviews** are massive force multipliers. Hiding this background was a huge strategic mistake.
- **The Fix**:
  - Elevated Computer Science Didactics as one of Casper's three core **Engineering Ethos pillars** on the homepage:
    > *"Didactics & Pedagogical Clarity: With a Master's in Science Education and experience teaching 200+ students across 10 high school cohorts, I treat code, documentation, and APIs as human communication. Clear didactics translate into cleaner PR reviews, intuitive interfaces, and accelerated team onboarding."*
  - Elevated the CS teaching position directly into the primary Work Experience timeline.

---

### 1.5 The Corporate Brochure Syndrome (AI Throat-Clearing Words)
- **The Issue**:
  - The copy was riddled with banned AI fluff words flagged by `scripts/lint-copy.js` and `/no-ai-slop`:
    * *"Seamless"*, *"Pivotal"*, *"Spearheaded"*, *"Orchestrated"*, *"Testament"*, *"Delve"*, *"Beacon"*, *"Crucible"*, *"Force Multiplier"*.
  - Every project was described as "mission-critical" and "transformative".
- **The Fix**:
  - Stripped all corporate throat-clearing.
  - Every sentence was rewritten to describe **concrete actions, real constraints, and measurable systems outcomes**:
    * Instead of *"Spearheaded seamless payment orchestration..."* -> *"Built merchant onboarding endpoints and API integrations with AWS Lambda and DynamoDB."*
    * Instead of *"Cognitive optimization through acoustic frequencies..."* -> *"Outside of work, I play electric bass guitar and play chess."*

---

### 1.6 Missing Card Shadows & Information Hierarchy
- **The Issue**:
  - Cards across the site lacked physical elevation, dissolving into borderless text blocks on desktop screens.
  - Information was presented haphazardly, with Bitsized and the thesis taking up disproportionate visual weight over Casper's current work at Tikkie Business.
- **The Fix**:
  - Enforced consistent elevation across all cards:
    `bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md rounded-2xl`
  - Re-anchored the information hierarchy:
    1. **Hero**: High-signal positioning as Full-Stack & Agentic Software Developer.
    2. **Ethos**: Three elevated pillar cards (Agentic Workflows, Code Quality, Didactics).
    3. **Selected Work**: Tikkie Business (merchant payments) followed by Bitsized (client-side execution).

---

## 2. Identified AI Slop Anti-Patterns

| Anti-Pattern Name | The AI Tell | The Engineering Reality |
|---|---|---|
| **The Resume Inflator** | Turning a junior traineeship into an "elite fellowship" and claiming unearned senior mentorship. | Authentic, grounded honesty: highlight actual production responsibilities, cloud services, and testing rigor. |
| **The Academic Distraction** | Flooding a developer portfolio with 80 lines of ML regression stats and student dropout counts. | Keep academic research concise and linked to the university repository; focus on software engineering systems. |
| **The Buried Superpower** | Hiding teaching credentials in an archive drawer while leading with generic tech buzzwords. | Showcase pedagogical mastery as an engineering superpower for clear APIs, documentation, and mentorship. |
| **The Pseudo-Intellectual Hobby** | Describing playing bass or chess as "calibrating neurological pathways". | Describe hobbies like a normal human being. |
| **Corporate Throat-Clearing** | "Seamlessly orchestrated pivotal mission-critical solutions..." | Use active, direct verbs describing actual technical mechanics. |

---

## 3. Standard Established for Future Agents

> [!IMPORTANT]
> **Anti-Slop Guardrail for All Copy:**
> 1. Always verify factual claims against git history or LinkedIn. Never invent titles, fellowships, or metrics.
> 2. Zero tolerance for banned AI buzzwords (`seamless`, `spearhead`, `orchestrate`, `testament`, `crucible`, `beacon`).
> 3. Highlight Casper's teaching background as a software engineering strength (clarity, communication, code review quality).
> 4. Ensure every card has a visible shadow (`shadow-sm hover:shadow-md`) and 100% bilingual parity (`en` and `nl`).
