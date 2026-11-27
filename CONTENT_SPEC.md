# Content specification

The reader is a tech recruiter or hiring manager who gives the site under a minute. Each page answers one question and ends with the same way to get in touch.

## Shared rules

- Write in the first person, in plain sentences. Say what the product is, then what Casper built.
- State a fact once. The home page tells the story. The work page lists the roles. The CV page is the one-page document.
- No claim without a source: his CV, his thesis record, or his own notes. No computed years of experience.
- Headings use sentence case in both languages.
- Every page ends with the contact block: email, CV download, LinkedIn.
- English and Dutch stay in step. Run `pnpm run lint:prose` after any copy change.
- Every text has a word limit and at most one marker. The limits are in `DESIGN.md` and a test enforces them.

## Home (`/`)

Question: who is this, and is he worth a call?

1. Headline: his role and the one thing that sets him apart. Currently "Software engineer at Tikkie, trained as a computer science teacher."
2. His photo beside one line of facts a recruiter filters on: stack, city, languages.
3. Two actions: email him, download the CV.
4. The story in at most four short paragraphs and 120 words: what he does now, how he ended up teaching, what teaching still changes, one line about life outside work.
5. Selected work: Tikkie Business and Bitsized, one paragraph each, with the stack on one line. No bullets here.

## Work experience (`/work-experience`)

Question: what did he do, where, and when?

Email and CV links under the title, then one reverse-chronological list. Each role has the employer, the title, the dates, at most three bullets, and the stack where it applies. Teaching is a role in this list, at its real dates. Part-time roles say so.

## Education (`/education`)

Question: what did he study, and is the thesis real?

Email and CV links under the title, then the four programmes with one line each. Then the thesis, told once: exact title, what he measured, what he found, and the link to the TU Delft repository record.

## CV (`/cv`)

Question: can I have this as a file?

Download and open buttons, a link to the PDF in the other language, and a web version with the same roles and degrees. `pnpm run build:cv` generates `cv/*.tex` from the site copy and compiles the PDFs. They must stay on one page.
