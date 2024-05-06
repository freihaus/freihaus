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
          "/gersch/ger2.jpeg",
          "/gersch/ger9.jpeg",
          "/gersch/ger10.jpeg",
          "/gersch/ger15-2.jpeg",
          "/koll/huet1.jpeg",
          "/villa/vil16.jpeg",
          "/villa/vil19.jpeg",
          "/villa/vil12.jpeg",
          "/about/about4.jpeg",
          "/koll/huet8.jpeg",
        ]}
      />
    </div>
  );
}
