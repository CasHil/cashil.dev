import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
            : "flex items-center gap-1 p-1 rounded-xl bg-surface-subtle/50 border border-border-subtle"
        }
      >
        {navItems.map((item) => (
          <li key={item.to} className="shrink-0">
            <NavLink
              to={item.to}
              onClick={handleClick}
              className={({ isActive }) =>
                `relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-150 inline-flex items-center justify-center rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "text-text-primary font-semibold"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-subtle"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-surface rounded-lg shadow-xs border border-border-subtle"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
