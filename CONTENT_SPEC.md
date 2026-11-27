# Content specification

The reader is a tech recruiter or hiring manager who gives the site under a minute. Each page answers one question and ends with the same way to get in touch.

## Shared rules

- Write in the first person, in plain sentences. Say what the product is, then what Casper built.
- State a fact once. The home page tells the story. The work page lists the roles. The CV page is the one-page document.
- No claim without a source: his CV, his thesis record, or his own notes. No computed years of experience.
- Headings use sentence case in both languages.
- Every page ends with the contact block: email, CV download, LinkedIn.
- English and Dutch stay in step. Run `pnpm run lint:prose` after any copy change.

## Home (`/`)

Question: who is this, and is he worth a call?

1. Headline: his role and the one thing that sets him apart. Currently "Software engineer at Tikkie, trained as a computer science teacher."
2. One line of facts a recruiter filters on: stack, city, languages.
3. Two actions: email him, download the CV.
4. The story in four short paragraphs: what he does now, how he got there, what teaching changed, one line about life outside work.
5. Selected work: Tikkie Business and Bitsized, two paragraphs each. No bullets here.
6. Stack: what he uses daily and what he used earlier.

## Work experience (`/work-experience`)

Question: what did he do, where, and when?

One reverse-chronological list. Each role has the employer, the title, the dates, two to four sentences, and the stack where it applies. Teaching is a role in this list, at its real dates.

## Education (`/education`)

Question: what did he study, and is the thesis real?

The four programmes with one or two lines each. Then the thesis: exact title, what he measured, what he found, and the link to the TU Delft repository record.

## CV (`/cv`)

Question: can I have this as a file?

Download and open buttons, a language switch for the PDF, and a web version with the same content. The PDFs are built from `cv/*.tex` with `pnpm run build:cv` and must stay on one page.
