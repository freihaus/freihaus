"use client";
import { motion, useTransform, useScroll, useAnimation } from "framer-motion";
import CustomIcon from "../../icons/logo";
import Mission from "./Unsere-Mission/mission";
import Leitbild from "./Unser-Leitbild/Leitbild";
import { useInView } from "react-intersection-observer";
import Vision from "./Unsere-Vision/Vision";
import Angebot from "./Unser-Angebot/Angebot";
import Projekte from "./Unsere-Projekte/Projekte";
import { useEffect } from "react";

export default function Body() {
  const controls = useAnimation();
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 767 : false;

  useEffect(() => {
    if (isMobile || typeof window === "undefined") return;

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
  }, [controls, isMobile]);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div className="w-full" animate={!isMobile ? controls : {}}>
      {/* Upper Body */}
      <motion.div>
        <div className="flex flex-col md:flex-row  w-full justify-evenly items-center mt-6">
          {/*Hintergrund Div der gefolgt werden soll*/}
          <motion.div
            className="mt-4"
            initial={{ x: -1200, y: -50 }}
            animate={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 40, delay: 3 }}
          >
            {/* Card div die folgen soll */}

            <CustomIcon size={300} />
          </motion.div>

          <motion.div
            className="mt-4"
            initial={{ x: 1200, y: 50 }}
            animate={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 40, delay: 3 }}
          >
            <Mission />
          </motion.div>
        </div>

        {/* Leitbild*/}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3.3, duration: 1 }}
        >
          <Leitbild />
        </motion.div>

        {/* Vision */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: inView1 ? 1 : 0, x: 0, y: inView1 ? 0 : 200 }}
          transition={{ duration: 1 }}
        >
          <Vision />
        </motion.div>

        {/* Angebot */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: inView2 ? 1 : 0, x: 0, y: inView2 ? 0 : 200 }}
          transition={{ duration: 1 }}
        >
          <Angebot />
        </motion.div>

        {/* Projekte */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: inView3 ? 1 : 0, x: 0, y: inView3 ? 0 : 200 }}
          transition={{ duration: 1 }}
        >
          <Projekte />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
