import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";

export default function Datenschutz() {
  return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen bg-white">
    <div className="flex flex-col items-center mt-24 w-full bg-white">
      <div className="">
        <SmallHeadText text="Datenschutz" />
        <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4">
          <h1 className="font-bold text-2xl">Datenschutz</h1>

          <h1 className="font-bold text-xl mt-4">1. Bitte verfassen lassen</h1>

      </div>

      </div>
      
    </div>
  </div>
  );
}
