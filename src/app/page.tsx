import { BackgroundBeams } from "@/components/ui/background-beams";
import CustomIcon from "@/components/icons/logo";
import Button from "@/components/button";

export default function Home() {


  return (
    <div className="w-full h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex absolute z-10 w-full justify-center top-10 md:hidden">
          <CustomIcon size={50} />
        </div>

        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center font-sans font-bold">
          Freihaus
        </h1>
        <h1 className="relative z-10 mt-6 text-3xl  md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Zuhause mit Zukunft
        </h1>
        <div>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-10">
            Unsere Mission: Ein neues Kapitel für unsere Lebensräume FREIHAUS
            steht an der Schwelle zu einer neuen Ära des Bauens und Wohnens.
            Inspiriert von den historischen Freihäusern, erweitern wir die
            traditionellen Grenzen von Wohn- und Wirkungsräumen. Wir bieten
            innovative, maßgeschneiderte Lösungen für Einzelpersonen, Familien,
            Gemeinschaften und Organisationen. Unser ganzheitlicher Ansatz
            fördert nicht nur das Wohlergehen jedes Einzelnen, sondern schafft
            Räume, die Inspiration und Zusammenhalt bieten.
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto text-center relative z-20 text-lg text-neutral-100">
          <p>Kontaktieren sie uns für weitere Informationen oder Zusammenarbeit:</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10 border rounded-lg border-neutral-400 ">

            <ul className="justify-center text-center m-8">
              <li>Nael Oesterle</li>
              <li>Rankstrasse 3</li>
              <li>8280 Kreuzlingen</li>
              <li>info@freihaus.ch</li>
              <li>079 761 22 37</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="hidden absolute w-full z-10 justify-between md:flex opacity-20 px-12">
        <CustomIcon size={200} color="#00bfbf" />
        <CustomIcon size={200} color="#00bfbf" />
      </div>

      <div className="hidden absolute w-full z-10 justify-between md:flex opacity-20 px-12">
        <CustomIcon size={200} color="#00bfbf" />
        <CustomIcon size={200} color="#00bfbf" />
      </div>

      <BackgroundBeams />
    </div>
  );
}
