import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { translations } from "./i18n/translations";

test("renders navigation and portfolio content", () => {
  render(<App />);
  const overviewLinks = screen.getAllByText(/overview|overzicht/i);
  expect(overviewLinks.length).toBeGreaterThan(0);
});

test("toggles language between English and Dutch", () => {
  render(<App />);

  // Switch to Dutch
  const nlButtons = screen.getAllByRole("button", { name: /nederlands/i });
  if (nlButtons.length > 0) {
    fireEvent.click(nlButtons[0]);
    expect(screen.getAllByText(/Overzicht/i).length).toBeGreaterThan(0);
  }

  // Switch back to English
  const enButtons = screen.getAllByRole("button", { name: /english/i });
  if (enButtons.length > 0) {
    fireEvent.click(enButtons[0]);
    expect(screen.getAllByText(/Overview/i).length).toBeGreaterThan(0);
  }
});

test("toggles theme between light and dark", () => {
  render(<App />);
  const themeToggle = screen.getAllByLabelText(/switch to/i)[0];
  expect(themeToggle).toBeDefined();
  fireEvent.click(themeToggle);
  expect(document.documentElement.style.colorScheme).toMatch(/light|dark/);
});

test("renders skip link targeting main content", () => {
  render(<App />);
  const skipLink = screen.getByRole("link", { name: /skip to main content/i });
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute("href", "#main-content");
});

test("renders accessible main landmark with id", () => {
  render(<App />);
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
  expect(main).toHaveAttribute("id", "main-content");
});

test("renders theme toggle button", () => {
  render(<App />);
  const toggleButtons = screen.getAllByRole("button", {
    name: /switch to (light|dark) theme/i,
  });
  expect(toggleButtons.length).toBeGreaterThan(0);
});

test("renders CV navigation link", () => {
  render(<App />);
  const cvLinks = screen.getAllByRole("link", { name: /cv/i });
  expect(cvLinks.length).toBeGreaterThan(0);
});

test("maintains 100% bilingual parity across all domains in translations", () => {
  function compareKeys(obj1: Record<string, any>, obj2: Record<string, any>, path = "") {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    expect(keys1).toEqual(keys2);

    for (const key of keys1) {
      const currentPath = path ? `${path}.${key}` : key;
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (typeof val1 === "object" && val1 !== null && !Array.isArray(val1)) {
        expect(typeof val2).toBe("object");
        compareKeys(val1, val2, currentPath);
      } else if (Array.isArray(val1)) {
        expect(Array.isArray(val2)).toBe(true);
        expect(val1.length).toBe(val2.length);
      } else {
        expect(typeof val1).toBe("string");
        expect(typeof val2).toBe("string");
      }
    }
  }

  compareKeys(translations.en, translations.nl);
});

test("renders Tikkie architecture pipeline stages", () => {
  render(<App />);
  expect(screen.getByText(/Merchant Payment & Settlement Pipeline/i)).toBeInTheDocument();
  expect(screen.getByText(/Idempotency Guard/i)).toBeInTheDocument();
  expect(screen.getByText(/ACID Ledger/i)).toBeInTheDocument();
});

test("renders Bitsized sandbox architecture breakdown without fake terminal buttons", () => {
  render(<App />);
  expect(screen.getByText(/Sandboxed In-Browser Execution Architecture/i)).toBeInTheDocument();
  expect(screen.getByText(/Web Worker Isolation/i)).toBeInTheDocument();
  expect(screen.queryByText(/▶/)).toBeNull();
});
