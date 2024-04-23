"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./typewriter";
export function CallToAction() {
  const words = [
    {
      text: "Unsere",
    },
    {
      text: "Einladung",
    },
    {
      text: "zum",
    },
    {
      text: "Mitmachen",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-200 sm:text-base">
        Engagieren Sie sich bei uns, und bringen Sie Ihre Ideen und Ihr
        Wissen ein. Unsere Gemeinschaft von Visionären und Pionieren
        freut sich darauf, gemeinsam neue Wege im Wohn- und Bauwesen
        zu beschreiten.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
        <Link href="/kontakt">
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Kontakt
            </button>
        </Link>
      </div>
    </div>
  );
}
