'use client';
import { motion } from 'framer-motion';
import { BackgroundBoxes } from '../BackGrounds/backgroundBoxes';
import  ProjectCardSection  from '@/components/ui/Cards/3DCard/ProjectCardSection';

export default function ProjectsDesktop() {
    return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen">
    <motion.div 
      className="w-full mt-32"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundBoxes />
    </motion.div>
    <motion.div
      className='w-full'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ProjectCardSection />
    </motion.div>
  </div>)
}