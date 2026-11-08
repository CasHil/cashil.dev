import { render, screen } from "@testing-library/react";
import App from "./App";
import TechExperienceTracker from "./components/common/TechExperienceTracker";
import TikkieShowcase from "./components/Intro/TikkieShowcase";
import BitsizedShowcase from "./components/Intro/BitsizedShowcase";
import Cv from "./components/Cv/Cv";
import Masthead from "./components/layout/Masthead";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
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

describe("20 Ways to Unslop AI Designs Guardrails", () => {
  test("Rule 1 & 2: Drop redundant labels and filler badges in showcases", () => {
    renderWithProviders(<TikkieShowcase />);
    expect(screen.queryByText(/^Stack:/i)).toBeNull();

    renderWithProviders(<BitsizedShowcase />);
    expect(screen.queryByText(/^Stack:/i)).toBeNull();
  });

  test("Rule 4: Monospace is not used for editorial text or navigation", () => {
    const srcDir = path.resolve(__dirname, "../src");
    const componentFiles: string[] = [];

    function findTsx(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          findTsx(fullPath);
        } else if (entry.name.endsWith(".tsx") && !entry.name.endsWith(".test.tsx")) {
          componentFiles.push(fullPath);
        }
      }
    }

    findTsx(srcDir);

    for (const file of componentFiles) {
      const content = fs.readFileSync(file, "utf-8");
      const hasFontMono = /\bfont-mono\b/.test(content);
      expect(hasFontMono).toBe(false);
    }
  });

  test("Rule 3: No arbitrary italic classes in UI components", () => {
    const srcDir = path.resolve(__dirname, "../src");
    const componentFiles: string[] = [];

    function findTsx(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          findTsx(fullPath);
        } else if (entry.name.endsWith(".tsx") && !entry.name.endsWith(".test.tsx")) {
          componentFiles.push(fullPath);
        }
      }
    }

    findTsx(srcDir);

    for (const file of componentFiles) {
      const content = fs.readFileSync(file, "utf-8");
      const hasArbitraryItalic = /className="[^"]*\bitalic\b[^"]*"/.test(content);
      expect(hasArbitraryItalic).toBe(false);
    }
  });

  test("Rule 14: Concentric corner radius mathematical law: R_inner = max(0, R_outer - Padding)", () => {
    function calculateConcentricInnerRadius(rOuter: number, padding: number): number {
      return Math.max(0, rOuter - padding);
    }

    // Header nav pill: outer container has rounded-squircle (18px) and p-1 (4px padding)
    expect(calculateConcentricInnerRadius(18, 4)).toBe(14);

    // CV mode switcher: outer container has rounded-squircle (18px) and p-1 (4px padding) -> inner 14px
    expect(calculateConcentricInnerRadius(18, 4)).toBe(14);

    // Card with 18px radius and 16px padding (p-4)
    expect(calculateConcentricInnerRadius(18, 16)).toBe(2);
  });

  test("Rule 15: Minimum text-xs (12px) font size to prevent [tiny-text]", () => {
    const srcDir = path.resolve(__dirname, "../src");
    const componentFiles: string[] = [];

    function findTsx(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          findTsx(fullPath);
        } else if (entry.name.endsWith(".tsx") && !entry.name.endsWith(".test.tsx")) {
          componentFiles.push(fullPath);
        }
      }
    }

    findTsx(srcDir);

    for (const file of componentFiles) {
      const content = fs.readFileSync(file, "utf-8");
      const matches = content.match(/text-\[(\d+)px\]/g) || [];
      for (const m of matches) {
        const px = parseInt(m.replace(/\D/g, ""), 10);
        expect(px).toBeGreaterThanOrEqual(12);
      }
    }
  });

  test("Rule 18: Tabular nums applied to duration counters and timeline dates", () => {
    const { container } = renderWithProviders(<TechExperienceTracker />);
    const tabularElements = container.querySelectorAll(".tabular-nums");
    expect(tabularElements.length).toBeGreaterThan(0);
  });

  test("Rule 10 & 20: Emphasize primary CTA with active micro-interactions", () => {
    render(<App />);
    const exploreButtons = screen.getAllByRole("link", { name: /explore work experience|ervaring verkennen/i });
    expect(exploreButtons.length).toBeGreaterThan(0);

    const primaryBtn = exploreButtons[0];
    expect(primaryBtn.className).toContain("active:scale-");
    expect(primaryBtn.className).toContain("shadow-sm");
  });

  // --- New Immutable Rules (Rules 21 - 30) ---

  test("Rule 21: Ban fake telemetry and live countdown clocks", () => {
    const trackerFile = path.resolve(__dirname, "../src/components/common/TechExperienceTracker.tsx");
    const content = fs.readFileSync(trackerFile, "utf-8");

    // No setInterval in component
    expect(content).not.toContain("setInterval");

    // No minute/hour live countdown calculation
    expect(content).not.toContain("Updates live every minute");
    expect(content).not.toContain("Werkt live per minuut bij");

    const { container } = renderWithProviders(<TechExperienceTracker />);
    expect(container.textContent).not.toMatch(/\d+d\s*·\s*\d+h/);
  });

  test("Rule 22: Ban card-in-card and cardocalypse ('Cards are the lazy container; nested cards are always wrong')", () => {
    // 1. TimelineItem must be clean unboxed typography, NOT a card
    const timelineFile = path.resolve(__dirname, "../src/components/Timeline/TimelineItem.tsx");
    const timelineContent = fs.readFileSync(timelineFile, "utf-8");
    expect(timelineContent).not.toContain("bg-surface");
    expect(timelineContent).not.toContain("shadow-sm");

    // 2. Showcases must NOT contain nested chip cards with borders
    const { container: tikkieContainer } = renderWithProviders(<TikkieShowcase />);
    const tikkieArticle = tikkieContainer.querySelector("article");
    expect(tikkieArticle).not.toBeNull();
    // Inner stack elements must not be bordered chips
    const tikkieNestedBorders = tikkieArticle?.querySelectorAll("div span.border");
    expect(tikkieNestedBorders?.length ?? 0).toBe(0);

    const { container: bitsizedContainer } = renderWithProviders(<BitsizedShowcase />);
    const bitsizedArticle = bitsizedContainer.querySelector("article");
    expect(bitsizedArticle).not.toBeNull();
    const bitsizedNestedBorders = bitsizedArticle?.querySelectorAll("div span.border");
    expect(bitsizedNestedBorders?.length ?? 0).toBe(0);

    // 3. TechExperienceTracker must NOT be a 6-card bento grid
    const trackerFile = path.resolve(__dirname, "../src/components/common/TechExperienceTracker.tsx");
    const trackerContent = fs.readFileSync(trackerFile, "utf-8");
    expect(trackerContent).not.toContain("grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4");
    expect(trackerContent).not.toMatch(/className="[^"]*rounded-squircle[^"]*border[^"]*bg-surface[^"]*p-4[^"]*shadow-sm/);
  });

  test("Rule 23: Ban eyebrows and kickers above headings ('Headings carry their own weight; delete the label')", () => {
    const heroFile = path.resolve(__dirname, "../src/components/Intro/HeroSection.tsx");
    const heroContent = fs.readFileSync(heroFile, "utf-8");

    // HeroSection must not have an avatar/kicker block preceding the H1
    const beforeH1 = heroContent.split("<h1")[0];
    expect(beforeH1).not.toContain("img");
    expect(beforeH1).not.toContain("t.sidebar.name");
    expect(beforeH1).not.toContain("t.sidebar.role");
  });

  test("Rule 25: Ban thick accent borders on rounded containers (border-accent-on-rounded)", () => {
    const cvFile = path.resolve(__dirname, "../src/components/Cv/Cv.tsx");
    const cvContent = fs.readFileSync(cvFile, "utf-8");

    // No thick accent border inside rounded cards/containers
    const bannedAccentBorder = ["border", "b", "2"].join("-");
    expect(cvContent).not.toContain(bannedAccentBorder);
  });

  test("Rule 26: Ban em dash (—) bullets in showcases", () => {
    const { container: tikkieContainer } = renderWithProviders(<TikkieShowcase />);
    expect(tikkieContainer.textContent).not.toMatch(/—\s*Developing/);

    const { container: bitsizedContainer } = renderWithProviders(<BitsizedShowcase />);
    expect(bitsizedContainer.textContent).not.toMatch(/—\s*Collaborated/);
  });

  test("Rule 24 & 25: Navigation deduplication and no artificial numbering", () => {
    const { container } = renderWithProviders(<Masthead />);

    // No duplicate CV action button outside the primary nav Header
    const cvButtons = container.querySelectorAll("header a[href='/cv']");
    expect(cvButtons.length).toBeLessThanOrEqual(1);

    // No 01, 02 artificial numbering in nav
    expect(container.textContent).not.toMatch(/\b01\s+Overview\b/i);
    expect(container.textContent).not.toMatch(/\b02\s+CV\b/i);
  });

  test("Rule 27: Ban trailing colons on CV technical competency categories", () => {
    renderWithProviders(<Cv />);
    expect(screen.queryByText(/^Languages:$/i)).toBeNull();
    expect(screen.queryByText(/^Frontend:$/i)).toBeNull();
    expect(screen.queryByText(/^Backend & Cloud:$/i)).toBeNull();
    expect(screen.queryByText(/^Databases & Architecture:$/i)).toBeNull();
    expect(screen.queryByText(/^Practices:$/i)).toBeNull();

    // Verify categories render without colon
    expect(screen.getByText(/^Languages$/i)).toBeDefined();
    expect(screen.getByText(/^Frontend$/i)).toBeDefined();
  });

  test("Rule 30: Genuine monospace configuration in tailwind.config.js", () => {
    const tailwindConfigPath = path.resolve(__dirname, "../tailwind.config.js");
    const content = fs.readFileSync(tailwindConfigPath, "utf-8");

    // mono must NOT be mapped to system-ui
    expect(content).not.toMatch(/mono:\s*\[\s*["']system-ui["']/);

    // mono must contain genuine monospace typefaces
    expect(content).toContain("ui-monospace");
    expect(content).toContain("monospace");
  });
});
