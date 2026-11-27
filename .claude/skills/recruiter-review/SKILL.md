---
name: recruiter-review
description: Review cashil.dev the way its readers do. Runs four reviewer subagents (agency recruiter, hiring engineering manager, Dutch-native recruiter, design and slop critic) against fresh screenshots, the copy and the PDF CVs, and loops until all four are content. Use after any change to site copy, layout or the CV, and before merging one.
---

# Recruiter review

The site has one job: a recruiter or hiring manager lands on it, understands who Casper is in half a minute, wants to know more, and can act. This skill checks that with readers who were not in the room when the change was made.

## Before the review

1. Run `pnpm run check`. It covers the copy guardrail, Vale on the site copy, the typecheck and the tests.
2. If copy changed, run `pnpm run build:cv` and confirm both PDFs are one page.
3. Run `pnpm run build`, then `pnpm run screenshot`. Look at the screenshots yourself first. Do not send reviewers a page you have not seen.
4. Commit. Reviewers read the working tree, so it must be the state you intend to ship.

## The four reviewers

Start all four at once as subagents on the Opus model, and ask each to state its model ID in its report. Each gets the repo path, the files to read, the owner's requirements and the facts constraint below. Each returns a verdict of CONTENT or NOT CONTENT, blockers with the exact text or element and the fix, nice-to-haves, and questions only Casper can answer.

| Reviewer | Reads | Looks for |
| --- | --- | --- |
| Agency tech recruiter, not an engineer | Home and work screenshots on desktop and phone, English copy, English PDF, `index.html` | What a 30-second scan yields. Role, stack, city, seniority. Whether the PDF they would forward matches the site. A contact action on every page. |
| Hiring engineering manager | English copy, work, education and CV screenshots, the PDF | Inflated or uncheckable claims. Whether it is clear what he built. Dates that contradict each other. Sentences that read as generated. |
| Dutch-native corporate recruiter | Dutch copy next to the English, the 360px Dutch screenshots, the Dutch PDF | Translated English, Title Case, spelling of compounds, differences in meaning from the English. Reports in English and quotes Dutch literally. |
| Designer and slop critic | Every screenshot, the components, `src/index.css`, `tailwind.config.js`, `AGENTS.md` | Clutter, cards, badges, duplicated links, broken hierarchy, dark mode, 360px, touch targets, the guardrails in `AGENTS.md`. |

## Owner's requirements, to quote to each reviewer

No visual clutter. Reads like an actual story that makes the reader curious. One or more clear calls to action on every page. Serves what a recruiter needs.

## The facts constraint, to quote to each reviewer

The copy may only contain facts from Casper's CV, his thesis record and his own notes. Reviewers must not ask for invented metrics, awards or availability. A missing fact is "needs owner input" and never a blocker.

## Loop

1. Collect the four reports. Fix every blocker. Take the nice-to-haves that two reviewers share, and any that is a real defect.
2. Rebuild, re-screenshot, commit.
3. Send each reviewer a short list of what changed and ask for a fresh verdict. Continue the same subagents so they can check their own findings.
4. Repeat until all four say CONTENT about the commit you will merge. A verdict on an earlier commit does not count.
5. Put the owner-input questions in the pull request for Casper.

## What earlier rounds caught

- The PDF CV had drifted from the site. It is now generated from the site copy, so this should not recur. Check anyway.
- "The day after I finished my studies" contradicted the degree dates. Every time word in the story has to agree with the dated lists.
- The Dutch screenshots were showing English. A reviewer noticed, the author had not.
- A colour-token bug made list bullets invisible. Three text-focused reviewers missed it and the designer found it from the screenshots, which is why there are four reviewers.
