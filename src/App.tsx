import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Masthead from "./components/layout/Masthead";
import Body from "./components/Body/Body";
import Footer from "./components/layout/Footer";
import MobileBottomNav from "./components/navigation/MobileBottomNav";
import MobileDrawer from "./components/navigation/MobileDrawer";
import SwipeNavigationWrapper from "./components/common/SwipeNavigationWrapper";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function AppContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-canvas text-zinc-900 dark:text-gray-100 antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-950 dark:selection:text-white transition-colors pb-24 sm:pb-0">
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded-md font-mono text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Skip to main content
        </a>

        {/* Centered Single-Column Editorial Canvas */}
        <div className="relative z-10 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-8">
          <Masthead />
          <SwipeNavigationWrapper>
            <Body />
          </SwipeNavigationWrapper>
          <Footer />
        </div>

        {/* Mobile-Native Thumb Zone Navigation */}
        <MobileBottomNav
          isDrawerOpen={isDrawerOpen}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />
        <MobileDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
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
