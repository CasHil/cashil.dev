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
            : "flex items-center gap-1"
        }
      >
        {navItems.map((item) => (
          <li key={item.to} className="relative shrink-0">
            <NavLink
              to={item.to}
              end={item.to === "/"}
              onClick={handleClick}
              className={({ isActive }) =>
                `relative px-3 py-1.5 text-xs sm:text-[13px] font-medium tracking-tight transition-colors duration-150 inline-flex items-center justify-center rounded-squircle-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "text-text-primary font-semibold"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-subtle/50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="magneticNavPill"
                      className="absolute inset-0 rounded-squircle-sm bg-surface-subtle border border-border-subtle/70 shadow-2xs -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
