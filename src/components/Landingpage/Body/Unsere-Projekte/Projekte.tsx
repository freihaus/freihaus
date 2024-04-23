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
          "https://dr7f261fq4afc.cloudfront.net/1.jpg",
          "https://dr7f261fq4afc.cloudfront.net/2.jpg",
          "https://dr7f261fq4afc.cloudfront.net/3.jpg",
          "https://dr7f261fq4afc.cloudfront.net/4.jpg",
          "https://dr7f261fq4afc.cloudfront.net/5.jpg",
          "https://dr7f261fq4afc.cloudfront.net/6.jpg",
          "https://dr7f261fq4afc.cloudfront.net/7.jpg",
          "https://dr7f261fq4afc.cloudfront.net/8.jpg",
          "https://dr7f261fq4afc.cloudfront.net/9.jpg",
          "https://dr7f261fq4afc.cloudfront.net/10.jpg",
          "https://dr7f261fq4afc.cloudfront.net/11.jpg",
        ]}
      />
    </div>
  );
}
