import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import Link from "next/link";
import Impressum from "@/components/Navbar/Footer";

export default function About() {
  return (
    <div className="w-full relative flex flex-col items-center justify-between z-20 h-screen">
      <div className="flex flex-col items-center mt-20">
        <BigHeadText text="FreiHaus"/>
        <SmallHeadText text="About" />
        <Link 
          href={`/galerie`}
          className="flex justify-center items-center w-40 h-10 bg-custom-cyan text-custom-brown rounded-full mt-10 transition duration-200 ease-in-out hover:scale-105"
        >
          <p>
            Galerie
          </p>
        </Link>
      </div>
      <div className="w-full rounded-3xl bg-white bg-opacity-40 m-4 p-4 flex justify-center items-center">
        <Impressum />
      </div>
    </div>
  );
}
