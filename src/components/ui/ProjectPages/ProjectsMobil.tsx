
import { BackgroundBoxes } from "../BackGrounds/backgroundBoxes";
import TwoDCard from "../Cards/3DCard/2d-card";

export default function ProjectsMobile() {
    return (
        <div className="w-full flex flex-col justify-center items-center z-20">
            <div className="mt-24 m-4">
                <BackgroundBoxes />
            </div>
            <div className="flex">

                <TwoDCard headText="Ein kleines Dorf in St.Gallien" content="Sie haben Ideen und wollen bei Projekten mitwirken?" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/6.jpg" cardHref="/sandkasten" />
            </div>
        </div>
    );
}