

import TwoDCard from "../Cards/3DCard/2d-card";

export default function ProjectsMobile() {
    return (
        <div className="w-full flex flex-col justify-center items-center z-20">
            <div className="mt-24 m-4">
                <div className="w-full flex justify-items-center items-center flex-col bg-custom-brown p-4 py-8 text-center border rounded-lg">
                    <h1 className="text-6xl font-bold text-custom-cyan">
                        Projekte
                    </h1>
                    <p className="text-custom-cyan mt-4">
                        Hier findest du alle Projekte an dene wir gearbeitet haben oder es in Zukunft tun werden.
                    </p>
                </div>
            </div>
            <div className="flex">

                <TwoDCard headText="Ein kleines Dorf in St.Gallien" content="Das Dorf, das Gemeinschaft neu definiert" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/5.jpg" cardHref="/dorf-stgallien" />
            </div>
        </div>
    );
}