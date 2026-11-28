---
version: 2.0.0
name: Casper, web
description: >-
  Design language for cashil.dev. Clear, warm and a little playful. It borrows
  the confidence of the Tikkie brand (heavy friendly type, deep indigo, big
  round shapes, short sentences) and keeps Casper's own sunflower.
colors:
  cream: "#FBF7EC"
  indigo: "#1F1D52"
  sunflower: "#F2B705"
  body: "#383664"
  muted: "#5F5D84"
  rule: "#E6DEC9"
  canvas-dark: "#12112B"
typography:
  display: { fontFamily: Bricolage Grotesque, fontWeight: 800 }
  body: { fontFamily: Figtree, fontSize: 18px to 20px, lineHeight: 1.6 }
  min-font-size: 12px
content:
  hero-headline-max-words: 15
  hero-facts-max-words: 14
  story-max-paragraphs: 4
  story-max-words: 120
  timeline-max-rows: 5
  timeline-row-max-words: 12
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

Clear, warm and a little playful. A recruiter should know who Casper is in five seconds and remember the site an hour later.

The site nods to Tikkie, where he works, without wearing its uniform.

| Tikkie does | This site does |
| --- | --- |
| Museo Sans Rounded, weight 900 | Bricolage Grotesque, weight 800. Friendly and heavy, with its own quirks |
| Deep indigo with teal buttons | A deeper indigo with sunflower, which was already Casper's colour |
| Sections with big, soft, tilted corners | Two indigo panels with 40px corners, and a photo tilted three degrees |
| Pill buttons | Pill buttons and a pill navigation |
| "Ping! Geld binnen." | Short sentences that say one thing, in his voice |

Never use Tikkie's logo, teal, illustrations or typeface. The nod is in the attitude.

## The three rules

### 1. Clarity

Each page answers one question, and the answer is in the first screen.

- Say what the thing is before saying what Casper did with it.
- Facts that people filter on go where they look first: role, city, stack, languages.
- Dates, titles and order agree on every page and in the PDF. The PDF is generated from the site copy for that reason.
- Text is left-aligned and no wider than about 60 characters.
- The navigation is always within reach: a bar at the bottom of a phone screen, a sticky header from 768px.

### 2. Keep it simple

If removing something loses no information, remove it.

- Every text has a word limit, listed above. When copy does not fit, cut the copy. Do not raise the limit.
- A role has at most three bullets. An action row has one filled button.
- Nothing opens. No menus, dropdowns, drawers or tabs.
- No gradients, blur, glow, texture or animation. Hover and press change colour or opacity only.
- Three colours carry the site: cream, indigo and sunflower. Nothing else is added for decoration.

### 3. Mark what matters

Someone who reads only the marked words should still get the story.

- On cream, the marker is a sunflower highlight behind the words. On an indigo panel, the marked words turn sunflower.
- At most one marker per paragraph or bullet, and at most eight words long.
- Mark a fact: an employer, a product, a number, a finding. Never an adjective.
- The hero headline may carry one marker. Section headings and the facts line never do.
- Write a marker in the copy as `**words**`. The `Marked` component renders it. The PDF and the web CV sheet show the same text without it.

## Voice

The copy is Casper talking, not a résumé and not a brand.

- First person, short sentences, one thing per sentence.
- Tell the story in the order that makes someone curious: the school that emailed him, the classroom before that, Tikkie now.
- One dry observation per page is welcome ("Teenagers tell you at once when an explanation is bad"). Two is a routine. Never add the tidy lesson after it.
- Plain words. If a sentence could appear on anyone's site, cut it.
- Dutch is written as Dutch, not translated. "200 pubers", not "200 tieners".
- About Tikkie, say only that he builds Tikkie Business and trains colleagues in working with AI.

## Colour

- **Cream** `#FBF7EC`: the page.
- **Indigo** `#1F1D52`: text, the two panels, the phone navigation bar.
- **Sunflower** `#F2B705`: the button, the current page in the navigation, markers, link underlines, bullets, the ring around the photo.
- **Body** `#383664` and **muted** `#5F5D84`: paragraphs and dates. Both pass WCAG AA on cream.
- **Rule** `#E6DEC9`: hairlines.
- In dark mode the page is a darker indigo `#12112B`, the panels are a step lighter, and text is cream.

The CSS variables live in `src/index.css` as RGB channels so Tailwind opacity modifiers work.

## Type

- Headings: Bricolage Grotesque at weight 800, sentence case. The hero is 36px on phones and 60px on desktop. Section headings stay at 36px so they do not compete with it.
- Everything else: Figtree. Body copy is 18px on phones and 20px on larger screens.
- Nothing under 12px. Monospace is for code only, and the site shows no code.
- Numbers in dates use tabular figures.

## Shape

- Panels: 32px corners on phones, 40px from 640px.
- Buttons and navigation items: full pills.
- The CV sheet: 24px corners, a border and a shadow. It is the one card.
- The photo: a rounded square, tilted three degrees, with a sunflower ring. It is the only tilted thing.
- Lists are divided by 1px hairlines.

## Components

- **Header:** his name, the navigation, the other language by name and one theme icon.
- **Navigation:** four links. The current page is a sunflower pill. On phones it is a fixed indigo bar on a cream strip at the bottom of the screen. From 768px it sits in the sticky header.
- **Hero panel:** indigo, with the headline, the facts line, the button, the CV link and the photo.
- **Contact panel:** the same indigo panel at the end of every page. Email, CV, LinkedIn, GitHub.
- **Button:** sunflower with indigo text. It only appears on an indigo panel, and it is always "Email me".
- **Links:** bold, with a 2px sunflower underline.
- **The short version:** five rows on the home page, a period and a line each.
- **Timeline:** roles or degrees separated by hairlines.

## Things the site does not do

- Repeat a fact on the same page.
- State years of experience as a number.
- Put a label above a heading or a subtitle under it that restates it.
- Use a middle dot between facts, an arrow on a link, or a dash in copy.
- Use more than one filled button in a row.
- Invent anything. Sources are Casper's CV, his thesis record and his own notes.

## Agent checklist

1. Read this file and `CONTENT_SPEC.md`.
2. Write the copy in `src/i18n/locales/en` and `nl` together.
3. Count words against the limits. Cut until it fits.
4. Place markers last, one per text at most, on facts.
5. Run `pnpm run check`, then `pnpm run build:cv` if copy changed.
6. Run `pnpm run screenshot` and look at the pages before calling it done.
7. Run the `recruiter-review` skill before merging.
