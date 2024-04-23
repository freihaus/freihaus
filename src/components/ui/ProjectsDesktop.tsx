"use client";
import { motion, useAnimation } from "framer-motion";
import { BackgroundBoxes } from "./BackGrounds/backgroundBoxes";
import ProjectCardSection from "@/components/ui/Cards/3DCard/ProjectCardSection";
import { useEffect } from "react";

export default function ProjectsDesktop() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;

      controls.start({
        y: -newY / 6,
        transition: { type: "spring", stiffness: 200, damping: 10 },
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className="w-full relative flex flex-col items-center z-20 h-screen"
      animate={controls}
    >
      <motion.div
        className="w-full mt-32"
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", swiftness: 120, duration: 1 }}
      >
        <BackgroundBoxes />
      </motion.div>
      <motion.div
        className="w-full"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", swiftness: 60, duration: 1 }}
      >
        <ProjectCardSection />
      </motion.div>
    </motion.div>
  );
}
