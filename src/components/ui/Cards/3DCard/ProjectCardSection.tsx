import { ThreeDCard } from "./3d-card";

export default function ProjectCardSection() {
    return (
        <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 justify-evenly">
        <ThreeDCard headText="Villa Felsenhöhe" content="Ein historischer Juwel neu belebt" imgSrc="https://dr7f261fq4afc.cloudfront.net/1.jpg" cardHref="/villa-felsenhoehe"/>
        <ThreeDCard headText="Die Gerschwendi" content="Das Haus im Niemandsland" imgSrc="https://dr7f261fq4afc.cloudfront.net/2.jpg" cardHref="/gerschwendi"/>
        <ThreeDCard headText="Das Kollbrunner Haus" content="Ein Zuhause mit Geschichte" imgSrc="https://dr7f261fq4afc.cloudfront.net/3.jpg" cardHref="/kollbrunner-haus"/>
        <ThreeDCard headText="Das Hüsli von der Felsenhöhe" content="Pionierarbeit für nachhaltiges und verdichtetes Bauen" imgSrc="https://dr7f261fq4afc.cloudfront.net/4.jpg" cardHref="/huesli"/>
        <ThreeDCard headText="Ein kleines Dorf in St.Gallien" content="Das Dorf, das Gemeinschaft neu definiert" imgSrc="https://dr7f261fq4afc.cloudfront.net/5.jpg" cardHref="/dorf-stgallien"/>
        <div className="animate-pulse">
          <ThreeDCard headText="Unser Sandkasten" content="Sie haben Ideen und wollen bei Projekten mitwirken?" imgSrc="https://dr7f261fq4afc.cloudfront.net/6.jpg" cardHref="/sandkasten"/>
        </div>
      </div>
    );
};