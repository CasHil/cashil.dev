import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function MobileBottomNav() {
  const { t } = useLanguage();

  const navItems = [
    {
      to: "/",
      label: t.nav.overview,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      to: "/cv",
      label: t.nav.cv,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      to: "/work-experience",
      label: t.nav.workShort,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      to: "/education",
      label: t.nav.education,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      aria-label="Mobile Primary Navigation"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-surface dark:bg-[#121714] border-t border-border-subtle shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-6px_24px_rgba(0,0,0,0.5)] pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] pt-2 px-3"
    >
      <div className="grid grid-cols-4 items-center justify-around max-w-sm mx-auto gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center py-1.5 px-1 rounded-squircle-sm min-h-[48px] text-xs transition-colors duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                isActive
                  ? "text-brand font-semibold"
                  : "text-text-muted hover:text-text-primary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.icon}
                <span className="mt-1 tracking-tight truncate max-w-[72px] text-center font-sans text-xs">
                  {item.label}
                </span>
                {isActive && (
                  <span
                    className="w-1 h-1 rounded-full bg-brand mt-0.5"
                    aria-hidden="true"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
