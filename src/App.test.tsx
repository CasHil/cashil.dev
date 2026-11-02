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

test("renders Tikkie operations workflows preview", () => {
  render(<App />);
  expect(screen.getByText(/Key Operational Responsibilities/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Client Onboarding/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Payouts & Settlements/i)).toBeInTheDocument();
});

test("renders Bitsized classroom perspectives without fake terminal buttons", () => {
  render(<App />);
  expect(screen.getByText(/Designing for the Classroom/i)).toBeInTheDocument();
  expect(screen.getAllByText(/For Teachers/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/For Students/i)).toBeInTheDocument();
  expect(screen.queryByText(/▶/)).toBeNull();
});

test("links to Dutch CV PDF when site language is Dutch", () => {
  window.history.pushState({}, "", "/cv");
  render(<App />);

  // Switch to Dutch
  const nlButtons = screen.getAllByRole("button", { name: /nederlands/i });
  if (nlButtons.length > 0) {
    fireEvent.click(nlButtons[0]);
  }

  const downloadLink = screen.getByRole("link", { name: /download pdf \(nl\)/i });
  expect(downloadLink).toHaveAttribute("href", "/cv/Casper_Hildebrand_CV_NL.pdf");
  expect(downloadLink).toHaveAttribute("download", "Casper_Hildebrand_CV_NL.pdf");
});

test("allows switching CV PDF language via dedicated toggle", () => {
  window.history.pushState({}, "", "/cv");
  render(<App />);

  // Switch CV PDF to NL
  const nlToggle = screen.getByRole("button", { name: /dutch \(nl\)|nederlands \(nl\)/i });
  fireEvent.click(nlToggle);

  const downloadLinkNl = screen.getByRole("link", { name: /download pdf \(nl\)/i });
  expect(downloadLinkNl).toHaveAttribute("href", "/cv/Casper_Hildebrand_CV_NL.pdf");

  // Switch CV PDF back to EN
  const enToggle = screen.getByRole("button", { name: /english \(en\)|engels \(en\)/i });
  fireEvent.click(enToggle);

  const downloadLinkEn = screen.getByRole("link", { name: /download pdf \(en\)/i });
  expect(downloadLinkEn).toHaveAttribute("href", "/cv/Casper_Hildebrand_CV.pdf");
});

test("renders mobile bottom navigation bar with thumb-zone controls", () => {
  render(<App />);
  const mobileNav = screen.getByRole("navigation", { name: /mobile primary navigation/i });
  expect(mobileNav).toBeInTheDocument();

  const menuButton = screen.getByRole("button", { name: /menu/i });
  expect(menuButton).toBeInTheDocument();
});

test("opens and closes mobile action drawer with quick actions", () => {
  render(<App />);
  const menuButton = screen.getByRole("button", { name: /menu/i });
  expect(menuButton).toHaveAttribute("aria-expanded", "false");

  // Open drawer
  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute("aria-expanded", "true");

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent(/casperhildebrand@gmail.com/i);

  // Close drawer via Escape key
  fireEvent.keyDown(window, { key: "Escape" });
  expect(menuButton).toHaveAttribute("aria-expanded", "false");
});

test("mobile action drawer provides single CV download tailored to active language", () => {
  localStorage.setItem("lang", "en");
  render(<App />);
  const menuButton = screen.getByRole("button", { name: /menu/i });
  fireEvent.click(menuButton);

  const cvLink = screen.getByRole("link", { name: /download cv \(pdf\)/i });
  expect(cvLink).toHaveAttribute("href", "/cv/Casper_Hildebrand_CV.pdf");
  expect(cvLink).toHaveAttribute("download", "Casper_Hildebrand_CV.pdf");

  // Switch language to Dutch in drawer
  const nlButton = screen.getByRole("button", { name: /^nederlands$/i });
  fireEvent.click(nlButton);

  expect(cvLink).toHaveAttribute("href", "/cv/Casper_Hildebrand_CV_NL.pdf");
  expect(cvLink).toHaveAttribute("download", "Casper_Hildebrand_CV_NL.pdf");
});

test("renders interactive operational inspectors with accessible tabs", () => {
  window.history.pushState({}, "", "/");
  render(<App />);
  const tablists = screen.getAllByRole("tablist");
  expect(tablists.length).toBeGreaterThanOrEqual(2);
});

