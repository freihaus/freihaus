"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-screen items-start overflow-y-auto w-full z-30",
        className,
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-[500px] w-[500px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="500"
                width="500"
                alt="thumbnail"
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-[500px] w-[500px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="500"
                width="500"
                alt="thumbnail"
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-[500px] w-[500px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="500"
                width="500"
                alt="thumbnail"
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
