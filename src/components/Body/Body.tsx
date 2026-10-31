import { ReactNode, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import Cv from "../Cv/Cv";
import { AnimatePresence, motion } from "framer-motion";

export default function Body() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const wrapMotionDiv = (element: ReactNode) => (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {element}
    </motion.div>
  );

  return (
    <main id="main-content" className="w-full max-w-3xl pb-16">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={wrapMotionDiv(<Intro />)} />
          <Route path="/cv" element={wrapMotionDiv(<Cv />)} />
          <Route path="/work-experience" element={wrapMotionDiv(<WorkExperience />)} />
          <Route path="/education" element={wrapMotionDiv(<Education />)} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
