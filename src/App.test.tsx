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

  // Open settings menu
  const settingsButton = screen.getByRole("button", { name: /settings|instellingen/i });
  fireEvent.click(settingsButton);

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
  const settingsButton = screen.getByRole("button", { name: /settings|instellingen/i });
  fireEvent.click(settingsButton);

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

test("renders theme toggle button in settings menu", () => {
  render(<App />);
  const settingsButton = screen.getByRole("button", { name: /settings|instellingen/i });
  fireEvent.click(settingsButton);

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

test("home page tells the story and offers email and CV actions", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Tikkie/);
  expect(screen.getByRole("heading", { name: /selected work|uitgelicht werk/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Bitsized/i).length).toBeGreaterThan(0);

  const emailLinks = screen.getAllByRole("link", { name: /email me|mail mij/i });
  expect(emailLinks.length).toBeGreaterThan(0);
  expect(emailLinks[0]).toHaveAttribute("href", "mailto:casperhildebrand@gmail.com");

  const cvLinks = screen.getAllByRole("link", { name: /download cv/i });
  expect(cvLinks[0]).toHaveAttribute("href", "/cv/Casper_Hildebrand_CV.pdf");
});

test("every page ends with a contact call to action", () => {
  for (const route of ["/", "/work-experience", "/education", "/cv"]) {
    window.history.pushState({}, "", route);
    const { unmount } = render(<App />);
    expect(screen.getByRole("heading", { name: /get in touch|neem contact op/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /email me|mail mij/i }).length).toBeGreaterThan(0);
    unmount();
  }
});

test("education page links to the published thesis record", () => {
  window.history.pushState({}, "", "/education");
  render(<App />);
  const link = screen.getByRole("link", { name: /thesis|scriptie/i });
  expect(link).toHaveAttribute(
    "href",
    "https://repository.tudelft.nl/record/uuid:f4aceeec-5947-4578-834c-4bb43288c91a"
  );
});

test("links to Dutch CV PDF when site language is Dutch", () => {
  window.history.pushState({}, "", "/cv");
  render(<App />);

  // Open settings and switch to Dutch
  const settingsButton = screen.getByRole("button", { name: /settings|instellingen/i });
  fireEvent.click(settingsButton);

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

test("renders primary navigation header with candidate branding and accessible routes", () => {
  render(<App />);
  const mainNav = screen.getByRole("navigation", { name: /main navigation/i });
  expect(mainNav).toBeInTheDocument();

  // All 4 primary destinations are accessible
  const overviewLinks = screen.getAllByRole("link", { name: /overview|overzicht/i });
  expect(overviewLinks.length).toBeGreaterThan(0);

  const cvLinks = screen.getAllByRole("link", { name: /cv/i });
  expect(cvLinks.length).toBeGreaterThan(0);

  const workLinks = screen.getAllByRole("link", { name: /work|werk/i });
  expect(workLinks.length).toBeGreaterThan(0);

  const eduLinks = screen.getAllByRole("link", { name: /education|opleiding/i });
  expect(eduLinks.length).toBeGreaterThan(0);

  // Verifies candidate typographic identity in the header
  const nameLink = screen.getByRole("link", { name: /casper hildebrand/i });
  expect(nameLink).toBeInTheDocument();
});

test("allows toggling mobile menu in header to access routes and preferences", () => {
  render(<App />);
  const menuButton = screen.getByRole("button", { name: /menu|sluiten|close/i });
  expect(menuButton).toBeInTheDocument();

  // Open mobile menu
  fireEvent.click(menuButton);

  const dropdownNav = screen.getByRole("navigation", { name: /mobile dropdown navigation/i });
  expect(dropdownNav).toBeInTheDocument();

  // Language buttons inside mobile drawer
  const enBtn = screen.getByRole("button", { name: /^english$/i });
  const nlBtn = screen.getByRole("button", { name: /^nederlands$/i });
  expect(enBtn).toBeInTheDocument();
  expect(nlBtn).toBeInTheDocument();

  // Theme toggle button
  const themeBtn = screen.getByRole("button", { name: /switch to (light|dark) theme/i });
  expect(themeBtn).toBeInTheDocument();
});

test("home page lists the stack and keeps hobbies plain", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(screen.getByRole("heading", { name: /^stack$/i })).toBeInTheDocument();
  expect(screen.getByText(/bass guitar and chess|basgitaar en schaak/i)).toBeInTheDocument();
});
