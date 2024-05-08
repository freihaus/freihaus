"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  fadeDuration: number; // Dauer des Fade-Effekts in Millisekunden
  changeInterval: number; // Intervall zwischen Bildwechseln in Millisekunden
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  fadeDuration,
  changeInterval,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setNextIndex((currentIndex + 1) % images.length);
      setOpacity(0);

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setOpacity(1);
      }, fadeDuration); // Nutzt fadeDuration für die Dauer des Fade-In-Prozesses
    }, changeInterval); // Nutzt changeInterval für das Intervall der Bildwechsel

    return () => {
      clearInterval(transitionInterval);
    };
  }, [currentIndex, nextIndex, images.length, fadeDuration, changeInterval]);

  return (
    <div className="flex flex-col items-center border-2 border-cyan-500 rounded-3xl overflow-hidden m-4 relative w-[310px] md:w-[600px] h-[400px] md:h-[600px] shadow-2xl">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Bild ${index + 1}`}
          fill={true}
          loading="eager"
          style={{
            position: "absolute",
            objectFit: "cover",
            transition: `opacity ${fadeDuration / 1000}s ease`,
            opacity:
              index === currentIndex ? 1 : index === nextIndex ? opacity : 0,
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
