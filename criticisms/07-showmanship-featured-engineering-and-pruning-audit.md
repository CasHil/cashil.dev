# Round 07: Engineering Showmanship, "Featured Engineering" Overhaul & Ruthless Pruning Audit

**Archive Date**: November 2, 2026  
**Conversation Context**: Conversation `dc3522df-9e9e-43fa-832c-65c093665b56`  
**Reviewer Perspectives**: 
- Staff Software Engineer & Principal Frontend Designer (`d0d29225`)
- Principal Systems Architect & Interactive Product Reviewer (`1818f39a`)
- Tier-1 Technical Recruiter & Content Strategist (`cf1df071`)  
**Triggering User Feedback**: 
> *"Still looks completely uninteresting. Where's the showmanship? How does this look like a professional developer? The 'Featured engineering' section is the worst. Spawn subagents to criticize every single part of this site. If it has no place, it has to go."*

---

## 1. Executive Summary: The Pendulum Over-Correction

In aggressively purging AI slop (pulsing green dots, fake `setTimeout` terminals, wavy decorative SVGs), the portfolio over-corrected into a **Sterile Corporate Morgue** dominated by **Academic Inertia and Static Boxification**:

1. **The Desktop Void**: The site was locked to a single 768px (`max-w-3xl`) column centered on screen, consuming barely 28% of a 1440p/4K display and leaving 70% of the screen as dead white/black gutters.
2. **Pseudo-Architectural Boxification ("Featured Engineering")**:
   - `TikkieShowcase`: Divided into 4 grey boxes stating *"Stage 01 Onboarding Flow, Stage 02 Merchant Portal, Stage 03 Backend Services, Stage 04 Data Layer"*. This is a trivial definition of basic 3-tier web architecture, communicating zero technical difficulty, concurrency, or idempotency guarantees.
   - `BitsizedShowcase`: Divided into 3 grey boxes stating *"Principle 1 Web Worker Isolation, Principle 2 Execution Watchdogs, Principle 3 Immediate Feedback"*.
   - Both were followed by bullet points that re-read the exact same sentences!
3. **The "Tell, Don't Show" Irony**: Casper built an in-browser Python execution sandbox in Web Workers for Dutch high schools, yet the website displayed only static text cards explaining that code can run in the browser.
4. **Sextuple Redundancy (The Hall of Mirrors)**: Casper's career milestones were sliced across 4 routes (`/`, `/work-experience`, `/education`, `/cv`), repeating identical sentences and bullets up to 6 times.
5. **Traineeship Dilution**: Listing Harvest as an independent primary job where the only accomplishment was *"attending bi-weekly masterclasses"* framed Casper as a passive student rather than an autonomous production engineer.

---

## 2. The Ruthless "If It Has No Place, It Has to Go" Deletion Hit List

| Component / Artifact | Current State | Verdict | Justification |
|---|---|---|---|
| **Tikkie 4-Stage Pipeline Grid** (`tikkiePipelineStages`) | 4 boxes: Onboarding, Portal, Services, Data. | **PERMANENTLY DELETE** | Zero technical density. Pure brochure filler that states obvious architectural layers. |
| **Bitsized 3-Principle Grid** (`bitsizedPrinciples`) | 3 boxes: Worker Isolation, Watchdogs, Immediate Feedback. | **PERMANENTLY DELETE** | Lecture slide text that paraphrases the bullet points 20px below it. |
| **Showcase Resume Bullets on Homepage** (`tikkieHighlights`, `bitsizedHighlights`) | 6 bullet points total on Intro page. | **PERMANENTLY DELETE** | 100% verbatim duplicate of `/work-experience`. Stripping them frees the canvas for interactive systems. |
| **Standalone Harvest Job Card** (`experience.ts:40-53`) | Standalone card listing "attending masterclasses". | **MERGE INTO TIKKIE** | Passive student framing. Merge as `(via Harvest Young Talent)` provenance tag under Tikkie Business. |
| **Duplicative Timeline Loop in `/cv`** (`Cv.tsx:233-296`) | "Interactive View" looping over work and education items. | **PURGE DUPLICATE LOOPS** | Redundant clone of `/work-experience` and `/education`. `/cv` must be a razor-sharp, 1-page ATS resume sheet matching LaTeX 1:1. |
| **7 Throat-Clearing Subtitles** | `intro.ts`, `experience.ts`, `education.ts`. | **PERMANENTLY DELETE** | Tautological descriptions ("Merchant Portal Architecture: Architecture across interfaces...") that slow down reading. |
| **Desktop Single-Column Prison** (`max-w-3xl`) | Locks desktop to 768px in `App.tsx` and `Body.tsx`. | **EXPAND TO RESPONSIVE DESKTOP CANVAS** | Expand to `max-w-5xl` / `max-w-6xl` on desktop for balanced, high-density presentation. |
| **Contractor "Copy Email" Button in Masthead** | Giant button with clipboard icon in top nav. | **REPLACE WITH SLEEK SOCIAL/CONTACT ARRAY** | Eliminates freelance rate-card vibe. |

---

## 3. High-Signal Showmanship Blueprints (Zero Fake Theater)

To achieve true engineering showmanship without violating anti-slop rules (no fake `setTimeout` timers, no fake terminal chrome):

### Blueprint A: Bitsized Real In-Browser Web Worker Sandbox (`BitsizedSandboxEngine.tsx`)
- Runs **real code client-side inside an isolated Web Worker (`new Worker(Blob URL)`)**.
- Equipped with **true microsecond execution telemetry** via `performance.now()`.
- Features an **actual main-thread watchdog timer** with an `AbortController` / `worker.terminate()` killing runaway executions after 500ms.
- 3 interactive presets:
  1. *Algorithmic Computation*: Prime sieve / Array mapping with microsecond benchmark (<1ms).
  2. *Runaway Loop Buster (`while(true)`)`: Demonstrates the 500ms watchdog terminating the runaway thread cleanly while the browser UI thread remains 60 FPS.
  3. *Sandbox Security Boundary*: Demonstrates DOM isolation throwing `ReferenceError: window is not defined in WorkerGlobalScope`.
- **100% DevTools verifiable**: Open Chrome DevTools, inspect Threads, and see the real worker thread spawn and terminate.

### Blueprint B: Tikkie Business Cryptographic Webhook & State Inspector (`TikkieSystemsInspector.tsx`)
- Models ABN AMRO merchant onboarding and payment lifecycle state transitions (`INITIATED` → `AUTHORIZED` → `SETTLED`).
- Uses native browser **Web Crypto API (`window.crypto.subtle`)** to compute real HMAC-SHA256 signatures over merchant payment payloads in real time.
- **Interactive Tamper Testing**: The visitor can click "Tamper Payload" (e.g. modifying `amount_cents` from 2500 to 2501); the inspector recalculates the cryptographic digest instantly, showing `401 Unauthorized (Signature Mismatch)`.
- Displays real, typed TypeScript schemas for merchant interfaces.

---

## 4. Anti-Slop Codex Rules Updated

1. **Rule 11 (Authentic Execution)**: If a project claims in-browser execution or cryptography, provide a live, client-side, DevTools-verifiable demonstration rather than static text boxes.
2. **Rule 12 (Zero Sibling Echoes)**: Never repeat resume bullets on the homepage that are already present in `/work-experience`. The homepage is the proof-of-craft hook; the timeline is the chronological ledger.
3. **Rule 13 (Widescreen Balance)**: Never trap desktop viewports in mobile-width containers (`max-w-3xl`) with 70% dead screen space. Exploit wider viewports with structured, multi-column density.
