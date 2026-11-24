# Tropes (Vale style)

A [Vale](https://vale.sh/) style package implementing linting rules for the recurring tropes, tics, and structural patterns cataloged in [tropes.fyi](https://tropes.fyi/).

## Overview

AI-generated text frequently exhibits characteristic patterns — from negative parallelism ("It's not X — it's Y") and magic adverbs ("quietly") to signposted conclusions and grandiose stakes inflation. This package brings all 49 tropes from the directory into automated prose linting.

## Rules catalog (49 tropes)

<!-- vale off -->
### Word Choice
- **`Tropes.Delve`**: Flags overused AI words like *delve*, *utilize*, *streamline*, *harness*, and *robust*.
- **`Tropes.TapestryLandscape`**: Flags ornate/grandiose nouns (*tapestry*, *landscape*, *paradigm*, *synergy*, *ecosystem*).
- **`Tropes.Quietly`**: Flags magic adverbs used for artificial significance (*quietly*, *deeply*, *fundamentally*, *remarkably*, *arguably*).
- **`Tropes.ServesAs`**: Recommends simple copulas (*is*, *are*) instead of *serves as*, *stands as*, *marks a*.
- **`Tropes.ActuallyLives`**: Flags spatial metaphors for conceptual sources (*where ... actually lives*).
- **`Tropes.SynonymCycling`**: Flags cycling synonyms (*interface / portal / analytics hub*) instead of consistent terms.

### Formatting
- **`Tropes.EmDash`**: Flags excessive em dashes (`—` / ` -- `) used as dramatic pause crutches.
- **`Tropes.TitleCaseHeadings`**: Enforces sentence case headings over title case.
- **`Tropes.InterrogativeHeaders`**: Flags headings built on Wh-words (*Where*, *What*, *Why*, *How*).
- **`Tropes.BoldFirstBullets`**: Flags list items starting with bold keyword labels (`* **Security**: ...`).
- **`Tropes.UnicodeDecoration`**: Flags unicode decorative arrows (`→`) and smart quotes (`“”‘’`).

### Sentence Structure
- **`Tropes.NegativeParallelism`**: Flags "It's not X — it's Y", "The question isn't X. The question is Y.", and "not because X, but because Y".
- **`Tropes.TripleNegation`**: Flags dramatic countdown negations ("Not a bug. Not a feature. A fundamental design flaw.").
- **`Tropes.RhetoricalQA`**: Flags self-posed rhetorical Q&As ("The result? Devastating.").
- **`Tropes.RuleOfThree`**: Flags repetitive semicolon tricolons.
- **`Tropes.ItsWorthNoting`**: Flags empty filler transitions (*It's worth noting*, *It bears mentioning*, *Importantly*, *Interestingly*).
- **`Tropes.SuperficialAnalyses`**: Flags bolted-on present participle clauses (*highlighting its importance*, *reflecting broader trends*).
- **`Tropes.FalseRanges`**: Flags "from X to Y to Z" when items do not lie on a spectrum.
- **`Tropes.CommaClippedTrailingPhrase`**: Flags clipped trailing phrases hung off a comma (*, and save.*).
- **`Tropes.AnaphoraAbuse`**: Flags repetitive sentence openings in quick succession (*They assume that ... They assume that ...*).

### Paragraph Structure
- **`Tropes.ShortPunchyFragments`**: Flags standalone short fragments used for artificial gravity.
- **`Tropes.EnumeratedProse`**: Flags listicles disguised as prose (*The first wall is ... The second wall is ...*).

### Tone
- **`Tropes.HeresTheKicker`**: Flags false suspense transitions (*Here's the kicker*, *Here's the thing*, *Here's where it gets interesting*).
- **`Tropes.ThinkOfItAs`**: Flags patronizing teacher-voice analogies (*Think of it as...*, *Think of it like...*).
- **`Tropes.ImagineAWorld`**: Flags AI invitations to futurism (*Imagine a world where...*).
- **`Tropes.LetsBreakThisDown`**: Flags pedagogical hand-holding (*Let's break this down*, *Let's unpack this*, *Let's dive in*).
- **`Tropes.GrandioseStakes`**: Flags world-historical stakes inflation (*fundamentally reshape*, *fate of civilization*).
- **`Tropes.CompulsiveCounting`**: Flags announcing counts before listing (*Five things to consider*, *Four reasons why*).
- **`Tropes.InventedConcepts`**: Flags pseudo-analytical compound terms (*supervision paradox*, *acceleration trap*, *workload creep*).
- **`Tropes.AppealToFamiliarity`**: Flags unproven consensus assertions (*as we all know*, *a classic,*, *famously,*).
- **`Tropes.PromotionalLanguage`**: Flags marketing hyperbole in prose (*all-in-one solution*, *unlocks unprecedented*).
- **`Tropes.FalseVulnerability`**: Flags simulated self-awareness (*And yes, since we're being honest: ...*).
- **`Tropes.VagueAttributions`**: Flags unnamed authorities (*experts argue*, *industry reports suggest*, *observers note*).
- **`Tropes.CollaborativeCommunication`**: Flags unearned shifting from personal voice to "we" (*We're now equipped to*).
- **`Tropes.QuotableOneLiners`**: Flags slide-bait aphorisms with no concrete substance.
- **`Tropes.ForcedFigurativeLanguage`**: Flags strained analogies (*is like tracking your weight with a broken scale*).

### Composition
- **`Tropes.SignpostedConclusion`**: Flags explicit conclusion announcements (*In conclusion*, *To sum up*, *In summary*).
- **`Tropes.DespiteChallenges`**: Flags formulaic dismissal of difficulties (*Despite these challenges, ... continues to thrive*).
- **`Tropes.Preamble`**: Flags announce-then-answer openers (*Two constraints shape the design*).
- **`Tropes.TieBack`**: Flags looping answers back to the prompt (*So, to answer your question: yes, ...*).
- **`Tropes.ReasoningLeak`**: Flags chain-of-thought residue narrating the author's internal moves.
- **`Tropes.BelaboringUnnecessary`**: Flags defending uncontroversial points against unasked objections.
- **`Tropes.HistoricalAnalogyStacking`**: Flags rapid-fire listing of tech revolutions for false authority.
- **`Tropes.FractalSummaries`**: Flags recapping at every hierarchical level (*In this section, we'll explore*).
- **`Tropes.NeverEndingConclusion`**: Flags stacking clauses at the conclusion instead of stopping.
- **`Tropes.SelfEcho`**: Flags narrow vocabulary echoes across paragraphs.
- **`Tropes.PremiseStacking`**: Flags paragraphs of evidence preceding simple questions.
- **`Tropes.OnePointDilution`**: Flags circular repetition of a single thesis.
- **`Tropes.ContentDuplication`**: Flags verbatim duplicate sections.

<!-- vale on -->

## Installation & configuration

Add to your `.vale.ini`:

```ini
StylesPath = styles
MinAlertLevel = suggestion

[*.md]
BasedOnStyles = Tropes
```

## Running tests

All rules include embedded unit test cases:

```bash
vale test --coverage styles/Tropes
```

## License & credits

- Tropes catalog and definitions based on [tropes.fyi](https://tropes.fyi/) by [ossama.is](https://ossama.is/) (Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).
- Vale rules implementation under MIT.
