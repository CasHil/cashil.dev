import { render, screen } from "@testing-library/react";
import App from "./App";
import Intro from "./components/Intro/Intro";
import Cv from "./components/Cv/Cv";
import Masthead from "./components/layout/Masthead";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { translations } from "./i18n/translations";
import fs from "fs";
import path from "path";

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

function componentSources(): { file: string; content: string }[] {
  const srcDir = path.resolve(__dirname, "../src");
  const files: string[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".tsx") && !entry.name.endsWith(".test.tsx")) {
        files.push(fullPath);
      }
    }
  }

  walk(srcDir);
  return files.map((file) => ({ file, content: fs.readFileSync(file, "utf-8") }));
}

function allStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(allStrings);
  return [];
}

describe("Anti-slop design guardrails", () => {
  test("Rule 1 & 2: no filler badges or redundant field labels on the home page", () => {
    const { container } = renderWithProviders(<Intro />);
    expect(screen.queryByText(/^Stack:/i)).toBeNull();
    expect(container.querySelector(".animate-ping, .animate-pulse")).toBeNull();
    expect(container.textContent).not.toMatch(/\bCURRENT\b|\bHUIDIG\b/);
  });

  test("Rule 4: monospace is not used for editorial text or navigation", () => {
    for (const { content } of componentSources()) {
      expect(/\bfont-mono\b/.test(content)).toBe(false);
    }
  });

  test("Rule 3: no arbitrary italic classes in UI components", () => {
    for (const { content } of componentSources()) {
      expect(/className="[^"]*\bitalic\b[^"]*"/.test(content)).toBe(false);
    }
  });

  test("Navigation never opens: no dropdown, drawer or animation library", () => {
    const masthead = fs.readFileSync(
      path.resolve(__dirname, "../src/components/layout/Masthead.tsx"),
      "utf-8"
    );
    expect(masthead).not.toContain("framer-motion");
    expect(masthead).not.toContain("rounded-squircle");
    expect(masthead).not.toContain("aria-expanded");
    expect(masthead).not.toContain("useState");
  });

  test("Rule 15: minimum 12px font size", () => {
    for (const { content } of componentSources()) {
      const matches = content.match(/text-\[(\d+)px\]/g) || [];
      for (const m of matches) {
        expect(parseInt(m.replace(/\D/g, ""), 10)).toBeGreaterThanOrEqual(12);
      }
    }
  });

  test("Rule 18: tabular numbers on timeline dates", () => {
    window.history.pushState({}, "", "/work-experience");
    const { container } = render(<App />);
    expect(container.querySelectorAll(".tabular-nums").length).toBeGreaterThan(0);
  });

  test("Rule 10 & 20: the primary CTA is a contact action with press feedback", () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    const emailLinks = screen.getAllByRole("link", { name: /email me|mail me/i });
    expect(emailLinks.length).toBeGreaterThan(0);

    const primaryBtn = emailLinks[0];
    expect(primaryBtn.className).toContain("active:opacity-");
    expect(primaryBtn.className).toMatch(/min-h-\[(4[4-9]|5\d)px\]/);
  });

  test("Rule 21: no live counters, tickers or computed years of experience", () => {
    for (const { content } of componentSources()) {
      expect(content).not.toContain("setInterval");
      expect(content).not.toContain("new Date(");
    }
    const { container } = renderWithProviders(<Intro />);
    expect(container.textContent).not.toMatch(/\d+\+\s*(yrs|jr)/);
  });

  test("Rule 22: no cards on the home page and no boxed timeline entries", () => {
    const timelineContent = fs.readFileSync(
      path.resolve(__dirname, "../src/components/Timeline/TimelineItem.tsx"),
      "utf-8"
    );
    expect(timelineContent).not.toContain("bg-surface");
    expect(timelineContent).not.toContain("shadow-sm");

    const { container } = renderWithProviders(<Intro />);
    expect(container.querySelectorAll("[data-ui], .bg-surface").length).toBe(0);
    expect(container.querySelectorAll("span.border").length).toBe(0);
  });

  test("Card elevation: the one card on the site keeps its border and shadow", () => {
    const { container } = renderWithProviders(<Cv />);
    const card = container.querySelector("article[data-ui]");
    expect(card).not.toBeNull();
    expect(card?.className).toContain("border");
    expect(card?.className).toContain("shadow-sm");
    expect(card?.className).not.toMatch(/sm:border-none|sm:shadow-none/);
  });

  test("Rule 23: no eyebrow or kicker above the hero heading", () => {
    const heroContent = fs.readFileSync(
      path.resolve(__dirname, "../src/components/Intro/HeroSection.tsx"),
      "utf-8"
    );
    const beforeH1 = heroContent.split("<h1")[0].split("return (")[1];
    expect(beforeH1).not.toContain("<img");
    expect(beforeH1).not.toContain("<p");
    expect(beforeH1).not.toContain("<span");
  });

  test("Rule 25: no thick accent borders on rounded containers", () => {
    const banned = ["border", "b", "2"].join("-");
    for (const { content } of componentSources()) {
      expect(content).not.toContain(banned);
    }
  });

  test("Rule 26: no dashes in site copy, as bullets or as punctuation", () => {
    for (const text of [...allStrings(translations.en), ...allStrings(translations.nl)]) {
      expect(text).not.toMatch(/[—–]/);
    }
  });

  test("Rule 27 & 28: navigation is not duplicated or numbered", () => {
    const { container } = renderWithProviders(<Masthead />);
    expect(container.querySelectorAll("header a[href='/cv']").length).toBeLessThanOrEqual(1);
    expect(container.textContent).not.toMatch(/\b0\d\s+(Overview|CV|Work|Education)\b/i);
  });

  test("Rule 30: no trailing colons on CV skill categories", () => {
    renderWithProviders(<Cv />);
    for (const group of [...translations.en.cv.skills, ...translations.nl.cv.skills]) {
      expect(group.category).not.toMatch(/:$/);
    }
    expect(screen.getByText(/^(Programming languages|Programmeertalen)$/)).toBeDefined();
    expect(screen.getByText(/^Frontend$/)).toBeDefined();
  });

  test("Colour tokens accept opacity modifiers", () => {
    const content = fs.readFileSync(path.resolve(__dirname, "../tailwind.config.js"), "utf-8");
    expect(content).toContain("<alpha-value>");
    expect(content).not.toMatch(/"var\(--/);
  });

  test("Rule 31: genuine monospace configuration in tailwind.config.js", () => {
    const content = fs.readFileSync(path.resolve(__dirname, "../tailwind.config.js"), "utf-8");
    expect(content).not.toMatch(/mono:\s*\[\s*["']system-ui["']/);
    expect(content).toContain("ui-monospace");
    expect(content).toContain("monospace");
  });

  test("Headings in site copy use sentence case", () => {
    const headings = [translations.en, translations.nl].flatMap((t) => [
      t.intro.workHeading,
      t.workExperience.title,
      t.education.title,
      t.contact.heading,
      t.cv.profileHeading,
      t.cv.experienceHeading,
      t.cv.educationHeading,
      t.cv.skillsHeading,
    ]);
    for (const heading of headings) {
      const laterWords = heading.split(" ").slice(1);
      for (const word of laterWords) {
        expect(word[0]).toBe(word[0].toLowerCase());
      }
    }
  });
});
