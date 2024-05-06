import { ThreeDCard } from "./3d-card";

export default function ProjectCardSection() {
  return (
    <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 justify-evenly">
      <ThreeDCard
        headText="Villa Felsenhöhe"
        content="Ein historischer Juwel neu belebt"
        imgSrc="/villa-header.jpeg"
        cardHref="/villa-felsenhoehe"
      />
      <ThreeDCard
        headText="Die Gerschwendi"
        content="Das Haus im Niemandsland"
        imgSrc="/gersch-header.jpeg"
        cardHref="/gerschwendi"
      />
      <ThreeDCard
        headText="Das Kollbrunner Haus"
        content="Ein Zuhause mit Geschichte"
        imgSrc="/huet-header.jpeg"
        cardHref="/kollbrunner-haus"
      />
      <ThreeDCard
        headText="Das Hüsli von der Felsenhöhe"
        content="Pionierarbeit für nachhaltiges und verdichtetes Bauen"
        imgSrc="/huesli/huesli-1.jpeg"
        cardHref="/huesli"
      />
      <ThreeDCard
        headText="Ein kleines Dorf in St.Gallien"
        content="Das Dorf, das Gemeinschaft neu definiert"
        imgSrc="/stgall/stgall.jpeg"
        cardHref="/dorf-stgallien"
      />
      <div className="animate-pulse">
        <ThreeDCard
          headText="Unser Sandkasten"
          content="Sie haben Ideen und wollen bei Projekten mitwirken?"
          imgSrc="/sand/sand1.jpeg"
          cardHref="/sandkasten"
        />
      </div>
    </div>
  );
}
