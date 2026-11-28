import { render } from "@testing-library/react";
import fs from "fs";
import path from "path";
import Marked, { stripMarkers } from "./components/common/Marked";
import { translations } from "./i18n/translations";

// Enforces the limits in DESIGN.md. If copy does not fit, cut the copy.
const design = fs.readFileSync(path.resolve(__dirname, "../DESIGN.md"), "utf-8");

function limit(name: string): number {
  const match = design.match(new RegExp(`^\\s*${name}:\\s*(\\d+)`, "m"));
  if (!match) throw new Error(`DESIGN.md has no content limit named ${name}`);
  return Number(match[1]);
}

const words = (text: string) => stripMarkers(text).trim().split(/\s+/).filter(Boolean).length;
const markers = (text: string) => [...text.matchAll(/\*\*(.+?)\*\*/g)].map((m) => m[1]);

function allStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(allStrings);
  return [];
}

describe.each(Object.entries(translations))("design language limits (%s)", (_language, t) => {
  test("clarity: the hero fits its budget", () => {
    expect(words(t.intro.heroTitle)).toBeLessThanOrEqual(limit("hero-headline-max-words"));
    expect(words(t.intro.heroFacts)).toBeLessThanOrEqual(limit("hero-facts-max-words"));
  });

  test("keep it simple: the story is short", () => {
    expect(t.intro.story.length).toBeLessThanOrEqual(limit("story-max-paragraphs"));
    const total = t.intro.story.reduce((sum, paragraph) => sum + words(paragraph), 0);
    expect(total).toBeLessThanOrEqual(limit("story-max-words"));
  });

  test("keep it simple: work highlights and page intros are short", () => {
    for (const item of t.intro.work) {
      expect(words(item.paragraphs.join(" "))).toBeLessThanOrEqual(limit("work-highlight-max-words"));
    }
    for (const intro of [t.workExperience.intro, t.education.intro]) {
      expect(words(intro)).toBeLessThanOrEqual(limit("page-intro-max-words"));
    }
    expect(words(t.education.thesis.paragraphs.join(" "))).toBeLessThanOrEqual(
      limit("thesis-max-words")
    );
  });

  test("keep it simple: roles and degrees have few, short bullets", () => {
    for (const item of [...t.workExperience.items, ...t.education.items]) {
      const bullets = item.text.split("\n");
      expect(bullets.length).toBeLessThanOrEqual(limit("role-max-bullets"));
      for (const bullet of bullets) {
        expect(words(bullet)).toBeLessThanOrEqual(limit("bullet-max-words"));
      }
    }
  });

  test("mark what matters: at most one short marker per text", () => {
    const texts = allStrings(t).flatMap((text) => text.split("\n"));
    for (const text of texts) {
      const found = markers(text);
      expect(found.length).toBeLessThanOrEqual(limit("markers-per-text"));
      for (const marker of found) {
        expect(words(marker)).toBeLessThanOrEqual(limit("marker-max-words"));
      }
    }
  });

  test("mark what matters: the home page markers alone carry the story", () => {
    const home = t.intro.story.flatMap(markers);
    expect(home.length).toBeGreaterThanOrEqual(3);
    expect(home[0]).toMatch(/Tikkie/);
  });

  test("mark what matters: headings and the facts line carry no marker", () => {
    const unmarked = [
      t.intro.heroTitle,
      t.intro.heroFacts,
      t.intro.workHeading,
      t.workExperience.title,
      t.education.title,
      t.contact.heading,
    ];
    for (const text of unmarked) expect(markers(text).length).toBe(0);
  });
});

describe("the marker", () => {
  test("renders **words** as a mark element and nothing else as emphasis", () => {
    const { container } = render(<Marked text="I built the **frontend** in Vue.js." />);
    const marks = container.querySelectorAll("mark.marker");
    expect(marks.length).toBe(1);
    expect(marks[0].textContent).toBe("frontend");
    expect(container.textContent).toBe("I built the frontend in Vue.js.");
    expect(container.querySelector("strong, b, em, i")).toBeNull();
  });

  test("plain mode removes the syntax for the CV sheet and the PDF", () => {
    const { container } = render(<Marked text="At **Tikkie**." plain />);
    expect(container.querySelector("mark")).toBeNull();
    expect(container.textContent).toBe("At Tikkie.");
  });

  test("no marker syntax leaks into the rendered site", async () => {
    const { default: App } = await import("./App");
    for (const route of ["/", "/work-experience", "/education", "/cv"]) {
      window.history.pushState({}, "", route);
      const { container, unmount } = render(<App />);
      expect(container.textContent).not.toContain("**");
      unmount();
    }
  });
});
