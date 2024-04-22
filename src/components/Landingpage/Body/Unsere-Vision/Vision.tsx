import TextCard from "@/components/ui/Cards/TextCard";
import SmallHeadText from "../../Header/SmallHeadText";
import PictureLeft from "../pictureLeft";

export default function Vision() {
    return (
                <div className="mx-6">
                    <PictureLeft
                        headText="Unsere Vision"
                        cardHeader="Innovation im Wohnen"
                        cardContent="Wir begegnen der Zukunft des Wohnens mit Mut zur Veränderung:
                        durch Umnutzung und Revitalisierung, das Erproben eines
                        alternativen Materialeinsatzes im Zusammenspiel mit neuen
                        Technologien und das Erkunden innovativer Wohnformen. Jedes
                        unserer Projekte spiegelt unsere Bereitschaft wieder, alten
                        Gebäuden neues Leben einzuhauchen und nachhaltige,
                        zeitgemäße Lebensräume zu schaffen."
                        imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/vision.webp"
                    />
                </div>
    )
}