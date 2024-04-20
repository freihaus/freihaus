'use client';
import { motion } from "framer-motion";
import BigHeadText from "./BigHeadText";
import SmallHeadText from "./SmallHeadText";

export default function Header() {
    return (
        <motion.div 
            className="flex flex-col items-center mt-16"
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 3}}
        >
                  <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <BigHeadText text="FreiHaus" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 0}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                    >
                        <SmallHeadText text="Zukunft kann man bauen" />
                    </motion.div>
        </motion.div>
    );
}

