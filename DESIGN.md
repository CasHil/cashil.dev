---
version: 1.1.0
name: Casper, web
description: >-
  Design language for cashil.dev. The brand is thoughtful, calm and clear.
  Three rules: say it clearly, keep it simple, and mark the few words that matter. A sibling of the slide brand in the home
  repo (projects/slidev-brand/DESIGN.md), from which it takes the single
  sunflower marker and the word limits.
colors:
  canvas: "#fafaf7"
  canvas-dark: "#0c100e"
  ink: "#141715"
  ink-dark: "#f2f5f3"
  body: "#3b443e"
  muted: "#54635a"
  rule: "#e1e7e2"
  sage: "#4a6b56"
  sunflower: "#F2B705"
typography:
  heading: { fontFamily: Newsreader, fontWeight: 400 }
  body: { fontFamily: system-ui, fontSize: 16px to 18px, lineHeight: 1.6 }
  min-font-size: 12px
content:
  hero-headline-max-words: 15
  hero-facts-max-words: 14
  story-max-paragraphs: 4
  story-max-words: 120
  work-highlight-max-words: 45
  page-intro-max-words: 24
  role-max-bullets: 3
  bullet-max-words: 20
  thesis-max-words: 45
  markers-per-text: 1
  marker-max-words: 8
  buttons-per-action-row: 1
---

# Design language

How cashil.dev looks and reads, for people and for agents that change it. The limits under `content:` above are enforced by `src/design-language.test.tsx`. If this file and the test disagree, fix the test.

## The brand

Thoughtful, calm and clear. The site should feel like a well-set page of text, and a visitor should notice the care before they notice the design.

- **Thoughtful:** every element has a reason a recruiter would recognise. If the reason is "it looks designed", it goes.
- **Calm:** nothing moves, floats, glows or asks for attention. One filled button per page section. Everything else is text.
- **Clear:** the name, the role and the way to reach him are readable in five seconds, on a phone, without opening anything.

Quality shows in the details that are easy to skip: text that lines up on one left edge, the same spacing between the same things, touch targets that are large without looking large, and Dutch that was written as Dutch.

## The three rules

### 1. Clarity

A recruiter gives the site under a minute. Each page answers one question, and the answer is in the first screen.

- One idea per paragraph. A second idea gets its own paragraph or goes.
- Say what the thing is before saying what Casper did with it. "A platform where students wrote and ran code in the browser" comes before "I built the frontend".
- Facts that people filter on go where they look first: role, employer, stack, city, languages.
- Dates, titles and order agree on every page and in the PDF. The PDF is generated from the site copy for that reason.
- Text is left-aligned and no wider than about 62 characters.

### 2. Keep it simple

If removing something loses no information, remove it.

- Every text has a word limit, listed above. When copy does not fit, cut the copy. Do not raise the limit.
- A role has at most three bullets. A page has one primary action.
- Nothing opens. No menus, dropdowns, drawers or tabs. If it does not fit on the page, it does not belong on the page.
- No cards, except the one sheet that holds the web CV. No badges, chips, eyebrow labels, icons next to points, or logos next to roles.
- No decoration: no gradients, blur, glow, texture or ambient animation. Motion is press and hover feedback only.
- One list style, one rule style (a 1px hairline), one button shape.
- Group with whitespace first and a hairline second. Never a box.

### 3. Mark what matters

Someone who reads only the marked words should still get the story.

- The marker is a sunflower-yellow highlight behind a word or short phrase, in the same weight as the text around it. It is the only emphasis on the site. No bold, no italics, no coloured words.
- At most one marker per paragraph or bullet, and at most eight words long.
- Mark a fact: an employer, a product, a number, a technology, a finding. Never an adjective, and never a claim about quality.
- Most bullets have no marker. It works because it is rare.
- Headings and the facts line are never marked. A heading is already the loudest thing near it.
- Write a marker in the copy as `**words**`. The `Marked` component renders it. The PDF and the web CV sheet show the same text without the marker.

Read the marked words in the home page story in order. They should be: what he builds, why he taught, and what he teaches now.

## Colour

- **Canvas** `#fafaf7`, dark `#0c100e`: the page.
- **Ink** `#141715`, dark `#f2f5f3`: headings, marked words, the primary button, the current page in the navigation.
- **Body** `#3b443e` and **muted** `#54635a`: paragraphs and dates. Both pass WCAG AA on the canvas.
- **Rule** `#e1e7e2`: hairlines.
- **Sage** `#4a6b56`: links and focus rings only.
- **Sunflower** `#F2B705`: the marker only, as a tint behind ink text. Never a background for a section, never a button, never text.

The CSS variables live in `src/index.css` as RGB channels so Tailwind opacity modifiers work.

## Type

- Headings: Newsreader, regular weight, sentence case, no full stop except the hero.
- Everything else: the system sans.
- Nothing under 12px. Body copy is 16px on phones and 18px on larger screens.
- Monospace is for code only, and the site shows no code.
- Numbers in dates use tabular figures.

## Layout

- One column of content, at most 72rem wide, with 16px gutters on phones.
- Lists of roles and degrees use two columns from 640px: who and when on the left, what on the right.
- Sections are 64px to 96px apart.
- Touch targets are at least 44px.

## Components

- `Marked` renders `**words**` as the marker.
- The header holds his name, four text links, the other language by name and one theme icon. It is not sticky. The current page is ink with a 1px underline. The rest is muted.
- On a phone the four links sit in a row under the name. There is no menu button.
- The primary button has an ink fill, canvas text, an 8px radius and no shadow. One per action row, and it is always "Email me".
- Every other action is a text link: sage and underlined.
- The outlined button exists only on the CV page, for "Open PDF".
- The timeline lists roles or degrees separated by hairlines.
- The contact block is the same on every page. Email, CV, LinkedIn, GitHub.
- The CV sheet is the one card. It keeps its border and shadow.

## Things the site does not do

- Repeat a fact on the same page.
- State years of experience as a number.
- Put a label above a heading or a subtitle under it that restates it.
- Use a middle dot between facts, an arrow on a link, or a dash in copy.
- Use more than one filled button in a row.
- Share details of his work at Tikkie beyond the product he builds and that he trains colleagues in working with AI.
- Invent anything. Sources are Casper's CV, his thesis record and his own notes.

## Agent checklist

1. Read this file and `CONTENT_SPEC.md`.
2. Write the copy in `src/i18n/locales/en` and `nl` together.
3. Count words against the limits. Cut until it fits.
4. Place markers last, one per text at most, on facts.
5. Run `pnpm run check`, then `pnpm run build:cv` if copy changed.
6. Run `pnpm run screenshot` and look at the pages before calling it done.
7. Run the `recruiter-review` skill before merging.
