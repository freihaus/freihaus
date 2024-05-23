import Impressum from "@/components/Navbar/Footer";
import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata = {
  title:
    "Ein kleines Dorf in St. Gallien - FREIHAUS Projekt für nachhaltiges Zusammenleben",
  description:
    "Entdecken Sie 'Ein kleines Dorf in St. Gallien', ein innovatives Wohnprojekt von FREIHAUS, das generationsübergreifendes, klimabewusstes Zusammenleben in einer Gemeinschaft fördert. Inspiriert von traditionellen Werten und moderner Nachhaltigkeit, bietet dieses Projekt eine einzigartige Kombination aus Lebensqualität und ökologischer Verantwortung.",
  keywords: [
    "kleines Dorf St. Gallien",
    "nachhaltige Wohnprojekte",
    "FREIHAUS Dorfprojekt",
    "umweltfreundliches Wohnen",
    "Gemeinschaft und Nachhaltigkeit",
    "moderne und traditionelle Bautechniken",
    "klimabewusstes Wohnen",
    "generationenübergreifendes Zusammenleben",
  ],
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

export default function DorfProjectPage() {
  return (
    <div className="w-full flex flex-col">
      <SpotlightHeader
        images={["/stgall/stgall.jpeg", "/stgall/stgall3.jpeg"]}
        header="Ein kleines Dorf in St.Gallien"
        threeDModel={false}
        description={`Inspiriert von Umberto Ecos Darstellung eines kleinen,
                widerstandsfähigen Dörfchens in "Asterix", plant FREIHAUS die
                Schaffung eines Dorfes. "Ein kleines Dorf in St. Gallien“ ist dabei
                durchaus ein sinnstiftender Arbeitstitel - unabhängig davon, ob das
                Grundstück dafür im Raum St. Gallen sein wird (auch wenn wir das
                hoffen). Das Grundkonzept verkörpert durch die humorvolle
                Namensgebung unsere Vision eines Lebensraums, der unsere
                tiefsten Werte von Gemeinschaft, Kreativität und gegenseitiger
                Förderung widerspiegelt. Es soll ein Ort sein, an dem Menschen
                unabhängig von ihrem Alter oder ihrer finanziellen Lage
                zusammenkommen, um harmonisch und klimabewusst zu leben.`}
        PartOneH={`Gemeinschaft als Kern der Existenz`}
        PartOneD={`"Ein kleines Dorf in St. Gallien" soll ein Modell für klimabewusste Mikrowohnformen und generationsübergreifendes Zusammenleben sein. Jedes Haus und jeder öffentliche Raum wird so gestaltet, dass gemeinschaftliches Leben gefördert und gleichzeitig individuelle Entfaltung möglich ist. Verbindliche Regeln zur Teilnahme und Mitgestaltung schaffen ein starkes Fundament für ein gemeinwohlökonomisches Leben, das jeden dazu ermutigt, aktiv am Dorfleben teilzunehmen und zur gemeinsamen Werteentwicklung beizutragen.`}
        PartTwoH={`Eine Brücke zwischen Tradition und Moderne`}
        PartTwoD={`Angelehnt an die Lehren aus unseren bisherigen Projekten wie der Gerschwendi, dem Kollbrunner Haus und der Villa Felsenhöhe, wird dieses Dorf traditionelle Bauweisen mit modernen, umweltfreundlichen Technologien verbinden. Die Verwendung von nachhaltigen Materialien und die Integration von Innovationen wie der Kreislaufwirtschaft werden Standard sein, um eine Zukunft zu bauen, die sowohl ökologisch verantwortungsbewusst als auch ökonomisch tragfähig ist.`}
        PartThreeH={`Eine Stiftung fördert Sinnstiftung`}
        PartThreeD={`Unterstützt durch die Kollbrunner-Stiftung, wird das Dorf auch ein Zentrum für Quellenarbeit und historische Forschung sein. Diese Arbeit ist entscheidend, um die Bedeutung und die Geschichten des Ortes zu verstehen und sie in die Gestaltung des Dorflebens einzubringen. Das tiefe Verständnis der Vergangenheit hilft uns, Räume zu schaffen, die nicht nur bewohnbar, sondern lebens- und erhaltenswert sind.`}
      />
    </div>
  );
}
