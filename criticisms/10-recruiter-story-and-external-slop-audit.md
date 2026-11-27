# 10: Recruiter story and external slop audit

Audit of `cashil.dev` on 27 November 2026, measured against published lists of AI tells and against what recruiters say they need from a portfolio. Earlier rounds judged the site against its own rules. This round used outside sources, listed at the end.

## Problems found

### The site read as a résumé, and the résumé was on it three times

The home page showed two cards for Tikkie and Bitsized. Each card repeated the bullets from the work page almost word for word, and the CV page printed them again. A link labelled "View in Work Timeline" led to the same text. Nothing on the site said how the jobs connect, so there was no reason to keep reading.

### The copy had the tells that the sources list

- Bullets that all opened with a gerund and closed with an `-ing` rider or a purpose clause: "Supporting payout processing pipelines to ensure merchant settlements flow accurately and on schedule." Wikipedia lists trailing `-ing` clauses as a tell. The résumé sources add uniform bullet length and polish with no named tool or checkable fact.
- Triads used for rhythm: "writing maintainable software, crafting clean interfaces, and helping teammates thrive."
- Stock vocabulary: "crafting", "thrive", "high-signal reviews", "team velocity", "an educator's clarity and empathy".
- Title Case on every heading, in Dutch too, where it is a calque from English: "Uitgelicht Werk", "Onderwijs & Teamgenoten Helpen Floreren".
- A subtitle under each heading that restated the heading: "Featured Work" followed by "Selected production and educational projects."
- Em dashes in degree names.
- A broken Dutch sentence produced by splitting one clause over a label and a value: "Buiten Software Engineering" followed by "Speel ik elektrische basgitaar en schaak ik."

### Claims a recruiter could not check, or that were wrong

- "7+ yrs" of TypeScript and Node.js, computed in the browser from September 2019. That date is the start of a job held during a bachelor's degree. The AWS counter started a year before the Tikkie job did.
- The teaching entry ran from 2018 to 2025 and merged a year of teaching with a student committee seat.
- The thesis title was reworded, and the link to the TU Delft repository returned a 404.
- The LinkedIn-style labels next to each technology ("Reactive Full-Stack", "Microservices") named nothing he had built.

### A recruiter could not act

- No page had a contact action. The only email address was 12px text in the footer.
- The home page's two actions both led deeper into the site. Neither was "email me" or "download the CV".
- The CV page had five controls in a row for one PDF: a view switch, a language switch, download, and open in a new tab.
- The page title was "Portfolio Casper Hildebrand", the description was "Casper Hildebrand's portfolio", and there were no Open Graph tags. A link pasted into LinkedIn or Slack showed nothing.
- The CV pointed at `cashil.github.io`, the old address.

### Visual tells

The site had already dropped gradients, glass cards, pill badges and bento grids in earlier rounds. What remained:

- `A · B · C` strings for every stack list, a middle dot between role and employer, and a dot before "CURRENT".
- An arrow on every link.
- A floating "Production & Academic" label with nothing to label.
- Touch targets of 36px in the mobile menu.
- Small employer logos in white boxes next to every role, at 32px, where two of the five were illegible and one (TU Delft for a secondary school) was wrong.

One source also files "cream background, serif headings, one muted accent" under a second wave of AI looks. The site still uses that palette. Changing a palette does not make a site more honest, so this round left it alone and fixed what the palette was carrying.

## Changes made

| Before | After |
| --- | --- |
| Headline was a job title | Headline names his employer and his teaching background |
| Two résumé cards on the home page | A four-paragraph story, then two short case descriptions that say what the product is and what he built |
| Computed "7+ yrs" counters | Removed. The stack is named once in the facts line and once per role |
| Three pages ending in navigation buttons | Every page ends with the same contact block: email, CV download, LinkedIn |
| Home actions led to other pages | Home actions are "Email me" and "Download CV (PDF)" |
| Five controls on the CV page | Download, open, and a link to the other language |
| PDF CV written separately from the site | PDF generated from the site copy by `scripts/generate-cv-tex.mjs` |
| Colour tokens ignored opacity modifiers, so bullets were invisible and dark borders fell back to light grey | Tokens stored as RGB channels |
| Bullets in gerunds | First-person sentences in the past or present tense |
| Thesis as a reworded title and a dead link | Exact title, what he measured, what he found, working link |
| Teaching 2018 to 2025 | Teacher at two named schools, February to July 2025 |
| No metadata | Title, description, Open Graph tags and a `Person` record |

The story on the home page uses facts from his own notes: the school that had gone months without a teacher, the hackathon, the workshops, the technical debt plan. Nothing in it is invented. If a detail should not be public, remove the sentence instead of softening it.

## Third pass: less text, and a design language

Casper read the result and said it was still far too much text. He also corrected the dates: teaching ran from February to July 2025, Tikkie started in March 2026, and Bexter and Netcompany were part-time at about two days a week.

`DESIGN.md` is now a design language with three rules: clarity, keep it simple, and mark what matters. It sets a word limit for every text and allows one sunflower marker per paragraph, on a fact. `src/design-language.test.tsx` reads the limits from `DESIGN.md` and fails when copy exceeds them.

| Text | Limit | English copy now |
| --- | --- | --- |
| Hero headline | 15 words | 14 |
| Home story | 4 paragraphs, 120 words | 4 paragraphs, 114 words |
| Work highlight | 45 words | 41 and 40 |
| Bullets per role | 3 | 3 at most (the Tikkie role had 5) |
| Thesis summary | 45 words | 37 (was two paragraphs) |

Also changed in this pass: the photo sits beside the facts line, the work and education pages have email and CV links under their title, the thesis is no longer told twice on the education page, the header monogram and the dropdown blur are gone, and Bitsized is in the past tense everywhere.

## Linting

Site copy lives in TypeScript, which Vale reads as code. `pnpm run lint:prose` extracts every string to Markdown and runs Vale on it: the `Tropes` style on English and the `CasperNL` style on Dutch. Both styles come from the home repo. Warnings fail the run. Suggestions print for the author to weigh, because a list of four school subjects is a list and not a rhetorical triad.

## Sources

AI tells in prose:

- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- [tropes.fyi](https://tropes.fyi)
- [Simplify: can recruiters tell if AI wrote your résumé](https://simplify.jobs/blog/can-recruiters-tell-if-ai-wrote-your-resume)
- [Enhancv: signs of an AI-generated résumé](https://enhancv.com/blog/signs-of-ai-generated-resume/)
- [Welingelichte Kringen: woorden en zinnen die AI verraden](https://www.welingelichtekringen.nl/tech/zo-herken-je-chatgpt-deze-woorden-en-zinnen-verraden-ai)
- [How Many Words: ChatGPT-schrijfstijl](https://howmanywords.app/nl/blog/chatgpt-schrijfstijl-aanwijzingen)

AI tells in interfaces:

- [Capital and Compute: fix AI slop design](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- [The Fountain Institute: signs of a vibe-coded UI](https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui)
- [Noqta: overused UI patterns](https://noqta.tn/blog/ai-design-slop-overused-ui-patterns-fix-2026)
- [Spot the slop: a UI designer's guide](https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c)
- [MindStudio: avoid vibe-coded landing pages](https://www.mindstudio.ai/blog/avoid-vibecoded-landing-pages)
- [Dev.to: 100 vibe-coded websites and their common mistakes](https://dev.to/kaplich/i-analyzed-100-vibe-coded-websites-and-found-these-common-mistakes-5275)

What recruiters need:

- [Fueler: what recruiters look at first](https://www.fueler.io/blog/your-portfolio-has-7-seconds-what-recruiters-look-at-first)
- [Dev.to: most developer portfolios get rejected in seven seconds](https://dev.to/zansuken/most-developer-portfolios-get-rejected-in-7-seconds-heres-what-i-learned-fixing-mine-280p)
- [Scrimba: a web developer portfolio that gets you hired](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired)
- [Dev.to: hiring managers do not care about your portfolio website](https://dev.to/oseni03/hiring-managers-dont-care-about-your-portfolio-website-heres-what-they-do-care-about-30lf)
