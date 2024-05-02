'use client'

import { motion } from 'framer-motion';
import CustomIcon from "@/components/icons/logo";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function SandkastenCard() {
  return (
    <motion.div
      className="flex flex-col z-30 mt-80 md:mt-24  p-3 px-6 text-center text-custom-brown items-center backdrop-blur-sm border border-custom-cyan rounded-3xl "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="text-7xl font-bold" 
        variants={itemVariants}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
      >
        Der Sandkasten
      </motion.div>
      <motion.div 
        className="text-2xl mt-8 space-y-4 font-bold" 
        variants={itemVariants}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        dragMomentum={false} 
      >
        <p>Ein Ort für kreative Ideen und Experimente.</p>
        <p>Ein Ort, an dem wir uns austoben und Neues ausprobieren.</p>
        <p>Ein Ort, an dem wir uns inspirieren lassen und inspirieren.</p>
      </motion.div>
      <motion.div 
        className="mt-8" 
        variants={itemVariants}
        drag 
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} 
        dragElastic={0.2} 
        dragMomentum={false} 
      >
        <CustomIcon size={200} />
      </motion.div>
      <motion.div 
        className="mt-8 text-2xl max-w-[400px] md:max-w-[600px]" 
        variants={itemVariants}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        dragMomentum={false} 
      >
        <p>Wir schätzen die Zusammenarbeit und den Austausch von Ideen. Der Sandkasten ist ein Ort der Kollaboration, an dem wir gemeinsam forschen und ausprobieren. Wie in einem echten Sandkasten, freuen wir uns immer über neue Spielgefährten und frische Ideen. Wenn Sie eine Idee haben, die Sie mit uns teilen möchten, laden wir Sie herzlich ein, Teil unseres kreativen Prozesses zu werden.</p>
      </motion.div>
    </motion.div>
  );
}
