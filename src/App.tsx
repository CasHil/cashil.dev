import { BrowserRouter } from "react-router-dom";
import Masthead from "./components/layout/Masthead";
import Body from "./components/Body/Body";
import Footer from "./components/layout/Footer";
import SwipeNavigationWrapper from "./components/common/SwipeNavigationWrapper";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function AppContent() {
  return (
    <div className="relative min-h-[100dvh] bg-canvas text-text-primary antialiased selection:bg-accent selection:text-ink-fixed transition-colors pb-28 md:pb-0">
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded-md font-medium text-xs focus:outline-none focus:ring-2 focus:ring-brand"
        >
          Skip to main content
        </a>

        <Masthead />

        <div className="relative z-10 max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8">
          <SwipeNavigationWrapper>
            <Body />
          </SwipeNavigationWrapper>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
