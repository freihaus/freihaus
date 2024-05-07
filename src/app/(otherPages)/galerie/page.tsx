import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import { ParallaxScroll } from "@/components/ui/ParalaxScroll";

export default function GaleriePage() {
  return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen">
      <div className="flex flex-col items-center mt-20 w-full h-screen">
        <div className="hidden md:block">
          <BigHeadText text="Galerie" />
        </div>
        
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
}

const images = [
    "/about/about1.jpeg",
    "/about/about2.jpeg",
    "/about/about4.jpeg",
    "/about/about5.jpeg",
    "/gersch/ger1.jpeg",
    "/gersch/ger2.jpeg",
    "/gersch/ger3.jpeg",
    "/gersch/ger6.jpeg",
    "/gersch/ger7.jpeg",
    "/gersch/ger8.jpeg",
    "/gersch/ger9.jpeg",
    "/gersch/ger10.jpeg",
    "/gersch/ger11.jpeg",
    "/gersch/ger12.jpeg",
    "/gersch/ger14.jpeg",
    "/gersch/ger15.jpeg",
    "/gersch/ger16.jpeg",
    "/gersch/ger17.jpeg",
    "/gersch/ger18.jpeg",
    "/gersch/ger19.jpeg",
    "/gersch/ger20.jpeg",
    "/gersch/ger21.jpeg",
    "/huesli/huesli-2.jpeg",
    "/huesli/huesli-5.jpeg",
    "/huesli/huesli-4.jpeg",
    "/koll/huet1.jpeg",
    "/koll/huet2.jpeg",
    "/koll/huet3.jpeg",
    "/koll/huet4.jpeg",
    "/koll/huet5.jpeg",
    "/koll/huet6.jpeg",
    "/koll/huet7.jpeg",
    "/koll/huet8.jpeg",
    "/sand/sand1.jpeg",
    "/sand/sand2.jpeg",
    "/stgall/stgall.jpeg",
    "/stgall/stgall3.jpeg",
    "/villa/vil1.jpeg",
    "/villa/vil2.jpeg",
    "/villa/vil3.jpeg",
    "/villa/vil4.jpeg",
    "/villa/vil6.jpeg",
    "/villa/vil7.jpeg",
    "/villa/vil8.jpeg",
    "/villa/vil9.jpeg",
    "/villa/vil10.jpeg",
    "/villa/vil11.jpeg",
    "/villa/vil12.jpeg",
    "/villa/vil13.jpeg",
    "/villa/vil14.jpeg",
    "/villa/vil16.jpeg",
    "/villa/vil17.jpeg",
    "/villa/vil18.jpeg",
    "/villa/vil19.jpeg",
    "/villa/vil20.jpeg",
]