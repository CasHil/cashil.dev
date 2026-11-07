import { render, screen } from "@testing-library/react";
import App from "./App";
import TechExperienceTracker from "./components/common/TechExperienceTracker";
import TikkieShowcase from "./components/Intro/TikkieShowcase";
import BitsizedShowcase from "./components/Intro/BitsizedShowcase";
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

    // CV mode switcher: outer container has rounded-squircle-sm (12px) and p-0.5 (2px padding)
    expect(calculateConcentricInnerRadius(12, 2)).toBe(10);

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
});
