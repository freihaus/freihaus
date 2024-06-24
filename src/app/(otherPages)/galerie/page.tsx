import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
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

export const metadata = {
  title: "Freihaus - Galerie",
  description:
    "Erfahren Sie mehr über das Team hinter Freihaus, einschließlich der Gründer Nael Oesterle und Claudia Sieber Bethke, und unserer Vision für die Zukunft des Wohnens.",
  keywords:
    "Freihaus, Team, Nael Oesterle, Claudia Sieber Bethke, Wohnkonzepte, Nachhaltigkeit, Gemeinschaft, generationenübergreifendes Zusammenleben",
};

const images = [
  "/villa/vil3.jpeg",
  "/stroh/stroh2.jpeg",
  "/gersch/ger2.jpeg",
  "/villa/vil4.jpeg",
  "/gersch/ger10.jpeg",
  "/villa/vil18.jpeg",
  "/koll/huet4.jpeg",
  "/stroh/stroh1.jpeg",
  "/villa/vil8.jpeg",
  "/gersch/ger17.jpeg",
  "/villa/vil20.jpeg",
  "/huesli/huesli3.jpeg",
  "/about/about5.jpeg",
  "/koll/huet6.jpeg",
  "/stroh/stroh3.jpeg",
  "/gersch/gersch.jpeg",
  "/huesli/huesli-4.jpeg",
  "/koll/huet5.jpeg",
  "/gersch/ger1.jpeg",
  "/gersch/ger15.jpeg",
  "/huesli/huesli-5.jpeg",
  "/villa/vil11.jpeg",
  "/about/about2.jpeg",
  "/gersch/ger15-2.jpeg",
  "/villa/vil17.jpeg",
  "/gersch/gerschbib.jpeg",
  "/villa/vil19.jpeg",
  "/stroh/stroh4.jpeg",
  "/koll/rooswies.jpeg",
  "/villa/vil16.jpeg",
  "/about/about4.jpeg",
  "/strohhaus.jpeg",
  "/gersch-header.jpeg",
  "/about/about1.jpeg",
  "/koll/huet8.jpeg",
  "/huesli/huesli.jpeg",
  "/stgall/stgall.jpeg",
  "/koll/huet7.jpeg",
  "/about/about3.jpeg",
  "/stroh/stroh-project1.jpeg",
  "/koll/huet3.jpeg",
  "/huesli/huesli2.jpeg",
  "/stgall/stgall3.jpeg",
  "/gersch/ger9.jpeg",
  "/villa/vil6.jpeg",
  "/gersch/ger15-2.jpeg",
  "/sand/sand2.jpeg",
  "/stroh/stroh-project2.jpeg"
];
