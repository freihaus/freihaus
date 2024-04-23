"use client";
import React from "react";
import { Boxes } from "./background-boxes-config";
import { cn } from "@/lib/utils/cn";

export function BackgroundBoxes() {
  return (
    <div className="h-60 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-custom-brown z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-6xl text-5xl text-custom-cyan relative z-20")}>
        Projekte
      </h1>
      <p className="text-center mt-8 text-custom-cyan relative z-20 text-lg">
        Hier finden sie unsere Projekte, die wir in der Vergangenheit umgesetzt
        haben. Und jene die wir in Zukunft umsetzen werden.
      </p>
    </div>
  );
}
