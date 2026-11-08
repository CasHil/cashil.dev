import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

interface HeaderProps {
  handleClick?: () => void;
  orientation?: "vertical" | "horizontal";
}

export default function Header({
  handleClick,
  orientation = "horizontal",
}: HeaderProps) {
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

  const isVertical = orientation === "vertical";

  return (
    <nav aria-label="Main Navigation">
      <ul
        role="list"
        className={
          isVertical
            ? "flex flex-col space-y-1"
            : "flex items-center gap-1 p-1 rounded-squircle bg-surface-subtle/50 border border-border-subtle"
        }
      >
        {navItems.map((item) => (
          <li key={item.to} className="shrink-0">
            <NavLink
              to={item.to}
              onClick={handleClick}
              className={({ isActive }) =>
                `relative px-3 py-1.5 text-xs sm:text-sm transition-all duration-150 inline-flex items-center justify-center rounded-[14px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "text-text-primary font-semibold bg-surface shadow-xs border border-border-subtle"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-subtle/70 border border-transparent"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
