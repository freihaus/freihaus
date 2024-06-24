import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";
import Impressum from "@/components/Navbar/Footer";
import Image from "next/image";

export const metadata = {
  title: "Freihaus - Über uns",
  description:
    "Erfahren Sie mehr über das Team hinter Freihaus, einschließlich der Gründer Nael Oesterle und Claudia Sieber Bethke, und unserer Vision für die Zukunft des Wohnens.",
  keywords:
    "Freihaus, Team, Nael Oesterle, Claudia Sieber Bethke, Wohnkonzepte, Nachhaltigkeit, Gemeinschaft, generationenübergreifendes Zusammenleben",
  authors: [
    {
      name: "Claudia Sieber Bethke",
      role: "Authorin, Creative und Forscherin",
    },
    {
      name: "Nathael Oesterle",
      role: "Gründer und Inhaber",
      url: "https://freihaus.ch",
    },
    { name: "Dennis Diepolder", role: "Webentwickler" },
  ],
  creator: "Nathael Oesterle",
  publisher: "Freihaus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function About() {
  return (
    <div className="w-full relative flex flex-col items-center justify-between z-20 h-screen">
      <div className="flex w-full flex-col items-center mt-32">
        <div className="w-full flex flex-col">
          {/* Nael und Claudia */}
          <div className="mb-20">
            <div className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white items-center">
                <div className="flex flex-col justify-between mt-12">
                  <div>
                    <SmallHeadText text="Nael Oesterle & Claudia Sieber Bethke: Ein Duo, das Zukunft gestaltet" />
                    <p className="text-2xl p-12 md:w-[400px] lg:w-[550px] xl:w-[650px] text-center md:text-start">
                      Bei FREIHAUS GmbH verbindet sich Tradition mit Vision.
                      Nael Oesterle, Gründer von FREIHAUS, und Claudia Sieber
                      Bethke, seine Partnerin, bilden das kreative und
                      ausführende Herz des Unternehmens. Gemeinsam verfolgen sie
                      das Ziel, Wohnen und Bauen neu zu denken und
                      zukunftsweisende Wohnkonzepte zu entwickeln, die
                      Nachhaltigkeit, Gemeinschaft und
                      generationenübergreifendes Zusammenleben in den
                      Mittelpunkt stellen.
                    </p>
                  </div>
                  <div className="w-full flex justify-end">
                    <p className="p-4 text-xl font-thin w-[400px] italic text-end">
                      {`„Wir glauben, dass die Zukunft des Wohnens in der Integration von flexiblen, nachhaltigen und gemeinschaftsfördernden Elementen liegt.“ Nael & Claudia`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full justify-end">
                  <div className="flex justify-end">
                    <Image
                      src={"/about/about3.jpeg"}
                      width={800}
                      height={800}
                      alt="Nael und Claudia Kohlbrunner Haus"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation durch Integration */}
          <div className="mb-20">
            <div className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white items-center">
                <div className="md:flex flex-col w-full justify-end hidden">
                  <div className="">
                    <Image
                      src={"/about/about2.jpeg"}
                      width={800}
                      height={800}
                      alt="about1"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between mt-12 mx-6">
                  <div className="flex flex-col items-center">
                    <SmallHeadText text="Innovation durch Integration" />
                    <p className="text-2xl py-12 text-center">
                      Nael bringt die Visionen zum Leben, indem er innovative
                      Baukonzepte und Techniken anwendet, die nicht nur
                      ökologisch nachhaltig sind, sondern auch ästhetisch und
                      funktional überzeugen. Seine Expertise im Bereich der
                      Baukunst ermöglicht es, alte Strukturen zu erhalten und
                      durch Neues sinnvoll zu erweitern.
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <p className="p-4 text-2xl text-center md:w-[400px] lg:w-[550px] xl:w-[650px]">
                      {`Claudia, mit ihrer tiefen Leidenschaft für Design und Raumgestaltung, führt die essenzielle Quellen- und Visionsarbeit durch. Ihre Fähigkeit, die Wünsche und Bedürfnisse der Menschen zu erkennen und in greifbare Raumkonzepte zu übersetzen, macht jedes der FREIHAUS-Projekte zu einem Unikat. Ihre Arbeit beginnt lange vor dem ersten Spatenstich und setzt sich in jedem Detail der bearbeiteten Gebäude fort.`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full justify-end md:hidden">
                  <div className="flex justify-end">
                    <Image
                      src={"/about/about2.jpeg"}
                      width={800}
                      height={800}
                      alt="Nael und Claudia Kohlbrunner Haus"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gemeinsam fuer die Zukunft */}
          <div className="mb-20">
            <div className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white items-center">
                <div className="flex flex-col justify-evenly mt-12">
                  <div>
                    <SmallHeadText text="Gemeinsam für die Zukunft des Wohnens" />
                    <p className="text-2xl p-12 md:w-[400px] lg:w-[550px] xl:w-[650px] text-center md:text-start">
                      Der Ansatz bei FREIHAUS ist es, Lebensräume zu schaffen,
                      die inspirieren und Generationen verbinden. Durch die enge
                      Zusammenarbeit von Nael und Claudia entstehen
                      Wohnprojekte, die mehr sind als die Summe ihrer Teile -
                      sie sind ein aktiver Beitrag zu einer lebenswerten
                      Zukunft.
                    </p>
                  </div>
                  <div className="w-full flex justify-end">
                    <p className="p-4 text-xl font-thin w-[400px] italic">
                      {`„Zukunft kann man bauen", Nael Oesterle`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full justify-end">
                  <div className="flex justify-end">
                    <Image
                      src={"/about/about1.jpeg"}
                      width={800}
                      height={800}
                      alt="Nael und Claudia Kohlbrunner Haus"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-3xl bg-white bg-opacity-40 m-4 p-4 flex justify-center items-center">
        <Impressum />
      </div>
    </div>
  );
}
