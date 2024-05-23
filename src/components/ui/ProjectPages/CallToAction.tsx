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
        Engagieren Sie sich bei uns, und bringen Sie Ihre Ideen und Ihr Wissen
        ein. Unsere Gemeinschaft von Visionären und Pionieren freut sich darauf,
        gemeinsam neue Wege im Wohn- und Bauwesen zu beschreiten.
      </p>
      <p className="text-3xl font-bold text-white mt-4">Unsere Partner</p>
      <div className="flex w-full justify-evenly mt-6">
        <Link
          href="https://www.tektur-ag.ch/"
          target="_blank"
          className="text-white p-4 border-white border-2 rounded-xl text-3xl hover:scale-105 transition ease-in-out duration-100"
        >
          tektur AG
        </Link>
        <Link
          href="https://www.minimal-konzepte.ch/"
          target="_blank"
          className="text-white p-4 border-white border-2 rounded-xl text-3xl hover:scale-105 transition ease-in-out duration-100"
        >
          minimal.living
        </Link>
        <Link
          href="https://www.claudiasieberbethke.com/"
          target="_blank"
          className="text-white p-4 border-white border-2 rounded-xl text-3xl hover:scale-105 transition ease-in-out duration-100"
        >
          Claudia Sieber Bethke
        </Link>
      </div>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="/kontakt">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-md">
            Kontakt
          </button>
        </Link>
      </div>
    </div>
  );
}
