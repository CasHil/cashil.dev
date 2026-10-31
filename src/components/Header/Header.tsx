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
    { to: "/", label: <span>{t.nav.overview}</span> },
    { to: "/cv", label: <span>{t.nav.cv}</span> },
    {
      to: "/work-experience",
      label: (
        <>
          <span className="hidden sm:inline">{t.nav.workExperience}</span>
          <span className="sm:hidden">{t.nav.workShort}</span>
        </>
      ),
    },
    { to: "/education", label: <span>{t.nav.education}</span> },
  ];

  const isVertical = orientation === "vertical";

  return (
    <header aria-label="Main Navigation">
      <nav aria-label="Site Links">
        <ul
          role="list"
          className={
            isVertical
              ? "flex flex-col space-y-1"
              : "flex flex-nowrap sm:flex-wrap items-center gap-1 sm:gap-1.5 overflow-x-auto sm:overflow-visible no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0"
          }
        >
          {navItems.map((item) => (
            <li key={item.to} className="shrink-0">
              <NavLink
                to={item.to}
                onClick={handleClick}
                className={({ isActive }) =>
                  `relative px-3 sm:px-3 py-2 sm:py-1.5 text-xs sm:text-sm font-medium transition-colors duration-150 inline-flex items-center min-h-[40px] sm:min-h-0 rounded-md shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? "text-zinc-950 dark:text-white font-semibold"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-zinc-950 dark:bg-white"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
