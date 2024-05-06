import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";

export default function AGB() {
  return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen">
      <div className="flex flex-col items-center mt-20">
        <BigHeadText text="FreiHaus"/>
        <SmallHeadText text="AGB" />
      </div>
    </div>
  );
}
