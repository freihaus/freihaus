import TextCard from "@/components/TextCard";
import SmallHeadText from "../../Header/SmallHeadText";
import PictureLeft from "../pictureLeft";
import ProjectSlider from "../projectSlider";

export default function Projekte() {
    return (
                <div className="mx-6">
                    <ProjectSlider 
                       headText="Unsere Projekte" 
                       cardHeader="Wir bauen mit Geschichte"
                       cardContent="In jedem unserer Projekte, von der Gerschwendi über das
                       Kollbrunner Haus bis zur Villa Felsenhöhe, verweben sich
                       vergangene Geschichten mit modernen Visionen. Mit unserem
                       visionären Projekt „Ein kleines Dorf in St. Gallien“ wollen wir ein
                       ganzheitliches Lebenskonzept realisieren, das Diversität,
                       Gemeinwohlökonomie und werteorientierte Zukunftsgestaltung in
                       einer lebendigen Gemeinschaft vereint."
                       imgSrcs={[
                        "https://freihaus.s3.eu-central-1.amazonaws.com/1.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/2.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/3.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/4.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/5.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/6.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/7.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/8.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/9.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/10.jpg",
                        "https://freihaus.s3.eu-central-1.amazonaws.com/11.jpg",
                       ]}
                    />
                </div>
    )
}