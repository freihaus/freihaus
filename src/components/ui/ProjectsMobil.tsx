'use client'

import TwoDCard from "./Cards/3DCard/2d-card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


export default function ProjectsMobile() {


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

    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ref6, inView: inView6 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="w-full flex flex-col justify-center items-center z-20">
            <div className="mt-24 m-4">
                <motion.div 
                    initial={{ opacity: 0, x: 0, y: -300 }}
                    animate={{ opacity: 1, x: 0, y: 0}}
                    transition={{ type: "spring", stiffness: 40, duration: 0.3}}
                    className=" flex justify-items-center items-center flex-col bg-gradient-to-br from-black via-gray-800 to-gray-700 p-4 py-8 text-center border rounded-lg w-[320px]">
                    <h1 className="text-6xl font-bold text-custom-cyan">
                        Projekte
                    </h1>
                    <p className="text-custom-cyan mt-4">
                        Hier findest du alle Projekte an dene wir gearbeitet haben oder es in Zukunft tun werden.
                    </p>
                </motion.div>
            </div>
            <div className="flex flex-col space-y-4">

            <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -300 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.3}}
            >
                <TwoDCard headText="Villa Felsenhöhe" content="Ein historischer Juwel neu belebt" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/1.jpg" cardHref="/villa-felsenhoehe" />
            </motion.div>

            <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 300 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.3}}
            >
                <TwoDCard headText="Die Gerschwendi" content="Das Haus im Niemandsland" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/2.jpg" cardHref="/gerschwendi" />
            </motion.div>

            <motion.div
                ref={ref3}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -300 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.3}}
            >
                <TwoDCard headText="Das Kollbrunner Haus" content="Ein Zuhause mit Geschichte" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/3.jpg" cardHref="/kollbrunner-haus" />
            </motion.div>

            <motion.div
                ref={ref4}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : 300 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.3}}
            >
                <TwoDCard headText="Das Hüsli von der Felsenhöhe" content="Pionierarbeit für nachhaltiges und verdichtetes Bauen" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/4.jpg" cardHref="/huesli" />
            </motion.div>

            <motion.div
                ref={ref5}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : -300 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.3}}
            >
                <TwoDCard headText="Ein kleines Dorf in St.Gallien" content="Das Dorf, das Gemeinschaft neu definiert" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/5.jpg" cardHref="/dorf-stgallien" />
            </motion.div>

            <motion.div
                ref={ref6}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : 300 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.3}}
            >
                <TwoDCard headText="Unser Sandkasten" content="Sie haben Ideen und wollen bei Projekten mitwirken?" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/6.jpg" cardHref="/sandkasten" />
            </motion.div>
            </div>
        </div>
    );
}