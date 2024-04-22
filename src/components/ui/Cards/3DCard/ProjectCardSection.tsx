import { ThreeDCard } from "./3d-card";

export default function ProjectCardSection() {
    return (
        <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 justify-evenly">
        <ThreeDCard headText="Villa Felsenhöhe" content="Ein historischer Juwel neu belebt" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/1.jpg" cardHref="/villa-felsenhoehe"/>
        <ThreeDCard headText="Die Gerschwendi" content="Das Haus im Niemandsland" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/2.jpg" cardHref="/gerschwendi"/>
        <ThreeDCard headText="Das Kollbrunner Haus" content="Ein Zuhause mit Geschichte" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/3.jpg" cardHref="/kollbrunner-haus"/>
        <ThreeDCard headText="Das Hüsli von der Felsenhöhe" content="Pionierarbeit für nachhaltiges und verdichtetes Bauen" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/4.jpg" cardHref="/huesli"/>
        <ThreeDCard headText="Ein kleines Dorf in St.Gallien" content="Das Dorf, das Gemeinschaft neu definiert" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/5.jpg" cardHref="/dorf-stgallien"/>
        <div className="animate-pulse">
          <ThreeDCard headText="Unser Sandkasten" content="Sie haben Ideen und wollen bei Projekten mitwirken?" imgSrc="https://freihaus.s3.eu-central-1.amazonaws.com/6.jpg" cardHref="/sandkasten"/>
        </div>
      </div>
    );
};