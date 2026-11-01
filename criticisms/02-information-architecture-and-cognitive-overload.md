# Round 02: Information Architecture & Cognitive Overload

**Archive Date**: October 29–30, 2026  
**Conversation Context**: Conversations `c8c0c177-8025-46aa-b2b9-beffc61c28c8`, `88bf2f2e-4dbd-4fe3-be3c-1b77464010eb`, `e05b3bf6-2911-4ebc-b3a0-f33e7d69dc20`  
**Reviewer Perspectives**: Recruiter IA Specialist & Staff Software Architect  
**Key Problem**: Route duplication, resume hoarding, broken chronological logic, semantic heading collisions, and CTA disconnects.

---

## 1. The Core Criticisms

### 1.1 The Duplicate Route Trap (`/` vs. `/about`)
- **The Issue**:
  - The site had both `/` (Overview) and `/about` in the primary navigation.
  - When clicking `/about`, recruiters found the exact same 3-paragraph bio, identical headshot, and identical hobby cards that they had already scrolled past on the home page.
- **The Impact on Recruiter Journey**:
  - Recruiters spend an average of 15–30 seconds reviewing a candidate's portfolio.
  - Forcing them through a redundant route wastes a precious click and makes the candidate look disorganized, with artificially padded site architecture.
- **The Fix**:
  - Completely killed the `/about` route.
  - Consolidated navigation down to four razor-sharp destinations:
    1. **Overview** (`/`): The core thesis, ethos, and featured software engineering.
    2. **CV** (`/cv`): High-signal, ATS-compliant single-page resume with direct PDF download.
    3. **Work Experience** (`/work-experience`): Detailed production history and teaching experience.
    4. **Education** (`/education`): Academic degrees and Master's thesis publication.

---

### 1.2 Resume Hoarding (All 11 Roles Exposed Simultaneously)
- **The Issue**:
  - The Work Experience page dumped all 11 past roles simultaneously:
    * 4 current/recent engineering jobs (Tikkie, Harvest, Bitsized, Netcompany)
    * 2 early internships (Bexter 2019, Muziekweb 2020)
    * 5 teaching roles across TU Delft and three separate high schools
  - The sheer volume created an overwhelming wall of text. Crucial systems engineering achievements at Tikkie were visually diluted by a two-month summer student internship from five years prior.
- **The Fix**:
  - Built an accessible progressive disclosure system (`DisclosureSection.tsx`):
    * **Core Engineering**: Directly visible marquee roles.
    * **Foundational Roles**: Collapsed behind an informative count summary (`Show prior engineering roles (2)`).
    * **Teaching & Academia**: Grouped into a dedicated pedagogical section that highlights mentorship and communication without cluttering the main engineering timeline.

---

### 1.3 Inverted Chronology & Category Collisions
- **The Issue**:
  - The page had been split arbitrarily into `"Featured Experience"` and `"Prior Experience"`.
  - A 2025 senior high school computer science teaching role sat under "Prior Experience", while a 2019 junior developer job sat under "Featured Experience".
  - The subtitle claimed: *"Chronological history across engineering, consulting, and education"*, but the items below it completely violated chronological order.
- **The Fix**:
  - Replaced arbitrary "Featured vs. Prior" buckets with clear, domain-honest sections:
    * **Software Engineering** (chronological from present to past).
    * **Computer Science Teaching & Didactics** (highlighting educational impact, curriculum design, and mentorship).

---

### 1.4 Primary CTA Disconnect & Mobile PDF Trap
- **The Issue**:
  - The primary, high-contrast action button on the hero was `"View Curriculum Vitae →"`, linking to `/cv`.
  - At the time, `/cv` embedded a raw desktop `<iframe src="...pdf">`.
  - On iOS Safari and mobile Chrome, raw PDF iframes either fail to scroll, display as a blank grey canvas, or force an unwanted binary download.
  - Meanwhile, exploring actual interactive software engineering projects was demoted to a ghost button.
- **The Fix**:
  - Redesigned `/cv` with a dedicated mobile-friendly action bar (direct download, print, external viewer).
  - Elevated the primary portfolio CTA to showcase actual systems engineering and architecture first.

---

### 1.5 Semantic Heading Collisions (A11y Violations)
- **The Issue**:
  - In `WorkExperience.tsx`, the section header was an `<h2>` (`<h2>Software Engineering</h2>`).
  - In `TimelineItem.tsx`, each job title was *also* rendered as an `<h2>` (`<h2>Tikkie Business</h2>`).
  - Screen readers traversing the heading outline encountered a flat list of 11 consecutive H2s with zero parent-child relationship, failing WCAG Level AA heading structure audits.
- **The Fix**:
  - Fixed heading levels strictly: Section titles are `<h2>`, job titles are `<h3>`, and subsections within cards are `<h4>`.

---

## 2. Identified AI Slop Anti-Patterns

| Anti-Pattern Name | The AI Tell | The Engineering Reality |
|---|---|---|
| **Route Sprawl** | Generating `/about`, `/projects`, `/bio`, `/contact` when one crisp narrative suffices. | Four clear destinations that answer who the candidate is, what they've built, and how to hire them. |
| **Resume Hoarding** | Keeping every two-month student internship on equal visual footing with senior production roles. | Progressive disclosure: spotlight marquee production achievements; tuck early student jobs into an expandable archive. |
| **Temporal Fiction** | Grouping older jobs into "Featured" and newer jobs into "Prior" while claiming chronological order. | Never contradict the timeline. Group by clear domain or adhere strictly to reverse chronological order. |
| **The Iframe PDF Trap** | Dropping `<iframe src="cv.pdf">` into a web page and assuming mobile works. | Mobile browsers cannot reliably render raw PDF iframes. Provide responsive previews and clean download triggers. |

---

## 3. Standard Established for Future Agents

> [!IMPORTANT]
> **Information Architecture Rules:**
> 1. Do not re-create an `/about` route. Casper's personal background, ethos, and outside pursuits belong directly on `/`.
> 2. Always respect heading hierarchy: Page title is `<h1>`, major sections are `<h2>`, card titles are `<h3>`, card subsections are `<h4>`.
> 3. Progressive disclosure is mandatory for extensive work histories—never force users to scroll through five-year-old student internships to reach recent achievements.
