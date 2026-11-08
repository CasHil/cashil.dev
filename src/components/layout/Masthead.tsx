import { Link, NavLink } from "react-router-dom";
import SettingsMenu from "../navigation/SettingsMenu";
import { useLanguage } from "../../context/LanguageContext";

export default function Masthead() {
  const { t } = useLanguage();

  const navItems = [
    { to: "/", label: t.nav.overview },
    { to: "/cv", label: t.nav.cv },
    {
      to: "/work-experience",
      label: (
        <>
          <span className="hidden sm:inline">{t.nav.workExperience}</span>
          <span className="sm:hidden">{t.nav.workShort}</span>
        </>
      ),
    },
    { to: "/education", label: t.nav.education },
  ];

  return (
    <header className="sticky top-3 sm:top-4 z-40 w-full px-4 pointer-events-none transition-all">
      <div className="max-w-fit mx-auto pointer-events-auto">
        {/* Floating Glass Nav Island (Inspired by Rauno, Paco Coursey, Linear) */}
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-surface/85 dark:bg-surface/85 backdrop-blur-md border border-border-subtle shadow-xs dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          {/* Candidate Identity */}
          <Link
            to="/"
            className="px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold tracking-tight text-text-primary hover:text-brand transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand whitespace-nowrap"
            aria-label={t.sidebar.name}
          >
            {t.sidebar.name}
          </Link>

          {/* Desktop Navigation Tabs */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5 pl-1 pr-1 border-l border-border-subtle"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1 sm:py-1.5 text-xs sm:text-sm transition-all duration-150 rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    isActive
                      ? "text-text-primary font-semibold bg-surface-subtle shadow-2xs border border-border-subtle/60"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-subtle/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Subtle separator on tablet/desktop */}
          <div className="h-4 w-px bg-border-subtle hidden sm:block mx-0.5" />

          {/* Right Utilities: Recruiter 1-Click CV + Preferences */}
          <div className="flex items-center gap-1">
            <Link
              to="/cv"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={t.nav.cv}
            >
              <svg
                className="w-3.5 h-3.5 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>CV</span>
            </Link>

            <SettingsMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
