'use client'
import { motion } from "framer-motion";
import CustomIcon from "../../icons/logo";
import Mission from "./Unsere-Mission/mission";
import Leitbild from "./Unser-Leitbild/Leitbild";
import { useInView } from "react-intersection-observer";
import Vision from "./Unsere-Vision/Vision";
import Angebot from "./Unser-Angebot/Angebot";
import Projekte from "./Unsere-Projekte/Projekte";
import { HeroParallaxDemo } from "../../ui/ProjectParallax";
import ProjectSlider from "./projectSlider";

export default function Body() {

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
        <div className="w-full">
            {/* Upper Body */}
            <div className="flex flex-col md:flex-row  w-full justify-evenly items-center mt-6">

                    <motion.div 
                        className="mt-4"
                        initial={{ x: -900, y: -50 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 40, delay: 3}}
                    >
                        <CustomIcon  size={300}/>
                    </motion.div>

                    <motion.div
                        initial={{ x: 900, y: 50 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 40, delay: 3}}
                    >
                        <Mission />
                    </motion.div>
                    
            </div>

            {/* Leitbild*/}
            <motion.div
                initial={{ opacity: 0, x: 0, y: 200 }}
                animate={{ opacity: 1, x: 0, y: 0}}
                transition={{ delay: 3.3,  duration: 1}}
            >
                <Leitbild />
            </motion.div>

            {/* Vision */}
            <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: 0, y: 200 }}
                animate={{ opacity: inView1 ? 1 : 0, x: 0, y: inView1 ? 0 : 200}}
                transition={{ duration: 1}}
            >
                <Vision/>
            </motion.div>

            {/* Angebot */}
            <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: 0, y: 200 }}
                animate={{ opacity: inView2 ? 1 : 0, x: 0, y: inView2 ? 0 : 200}}
                transition={{ duration: 1}}
            >
                <Angebot />
            </motion.div>

            {/* Projekte */}
            <motion.div
                ref={ref3}
                initial={{ opacity: 0, x: 0, y: 200 }}
                animate={{ opacity: inView3 ? 1 : 0, x: 0, y: inView3 ? 0 : 200}}
                transition={{ duration: 1}}
            >
                <Projekte />
            </motion.div>

            

        </div>
    );
};