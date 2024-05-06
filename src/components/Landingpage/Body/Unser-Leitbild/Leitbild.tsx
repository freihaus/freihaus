import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../../Header/SmallHeadText";
import PictureRight from "../pictureRight";

export default function Leitbild() {
  return (
    <div className="mx-6">
      <PictureRight
        headText="Unser Leitbild"
        cardHeader="Mehr als nur vier Wände"
        cardContent="Ein Zuhause bei FREIHAUS ist ein Ort, an dem Geschichte, Leben und Möglichkeiten aufeinandertreffen. Wir unterstützen Menschen dabei, ihren Wohn- und Wirkraum zu realisieren, der Persönlichkeit widerspiegelt und in Einklang mit ökologischen, ökonomischen und sozialen Entwicklungen steht."
        imgSrc="/home/home1.jpeg"
      />
    </div>
  );
}
