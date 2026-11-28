import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const quiet =
  "text-text-muted hover:text-text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand touch-manipulation";

// The header is a name, four links and two preferences. Nothing opens or slides.
export default function Masthead() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const other =
    language === "en"
      ? ({ code: "nl", label: "Nederlands" } as const)
      : ({ code: "en", label: "English" } as const);

  const navItems = [
    { to: "/", label: t.nav.overview },
    { to: "/work-experience", label: t.nav.work },
    { to: "/education", label: t.nav.education },
    { to: "/cv", label: t.nav.cv },
  ];

  return (
    <header className="w-full border-b border-border-subtle">
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-2 pb-1 md:py-4 flex flex-wrap items-center justify-between gap-x-10">
        <Link
          to="/"
          className="inline-flex items-center min-h-[44px] font-serif text-xl tracking-tight text-text-primary rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {t.sidebar.name}
        </Link>

        <div className="flex items-center -mr-3 md:order-3">
          <button
            type="button"
            lang={other.code}
            onClick={() => setLanguage(other.code)}
            className={`inline-flex items-center min-h-[44px] px-3 text-[15px] ${quiet}`}
          >
            {other.label}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? t.nav.toLight : t.nav.toDark}
            className={`inline-flex items-center justify-center h-11 w-11 ${quiet}`}
          >
            <svg
              className="h-[18px] w-[18px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              {isDark ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364-6.364l-1.06 1.06M6.697 17.303l-1.06 1.06m12.727 0l-1.06-1.06M6.697 6.697l-1.06-1.06M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>
        </div>

        <nav aria-label="Main navigation" className="w-full md:w-auto md:order-2 md:ml-auto">
          <ul role="list" className="flex items-center -mx-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `inline-flex items-center min-h-[44px] px-3 text-[15px] rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand touch-manipulation ${
                      isActive
                        ? "text-text-primary underline decoration-1 underline-offset-[6px]"
                        : "text-text-muted hover:text-text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
