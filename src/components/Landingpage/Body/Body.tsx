'use client'
import { motion } from "framer-motion";
import CustomIcon from "../../icons/logo";
import Bodyright from "./bodyright";

export default function Body() {
    return (
        <div className="flex flex-col md:flex-row  w-full justify-evenly items-center mt-6">

                {/* fly in from the left*/}
                <motion.div 
                    className="mt-4"
                    initial={{ x: -900, y: -50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, delay: 3}}
                >
                    <CustomIcon  size={300}/>
                </motion.div>

                {/* fly in from the right*/}
                <motion.div
                    initial={{ x: 900, y: 50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, delay: 3}}
                >
                    <Bodyright />
                </motion.div>
        </div>
    );
};