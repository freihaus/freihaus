import CustomIcon from "@/components/icons/logo";
import SandkastenCard from "@/components/ui/Cards/SandkastenCard";
import { Spotlight } from "@/components/ui/ProjectPages/Spotlight";
import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata = {
  title: "Der Sandkasten - Kreativität und Innovation bei FREIHAUS",
  description: "Entdecken Sie 'Der Sandkasten', einen interaktiven Raum für Kreativität und Zusammenarbeit bei FREIHAUS. Hier wird experimentiert, inspiriert und Neues geschaffen. Treten Sie in einen Raum, der dazu einlädt, Ideen frei zu entwickeln und gemeinsam Visionen zu verwirklichen.",
  keywords: [
    "Sandkasten FREIHAUS", 
    "kreativer Arbeitsraum", 
    "Innovation Lab", 
    "Kollaborationsraum", 
    "Ideenentwicklung",
    "experimentelles Arbeiten",
    "Kreativitätsförderung",
    "gemeinschaftliche Kreation",
    "innovative Projekte"
  ],
  authors: [
    { name: 'Claudia Sieber Bethke', role: 'Authorin, Creative und Forscherin' },
    { name: 'Nathael Oesterle', role: 'Gründer und Inhaber', url: 'https://freihaus.ch' },
    { name: 'Dennis Diepolder', role: 'Webentwickler' }
  ],
  creator: 'Nathael Oesterle',
  publisher: 'Freihaus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}


export default function SandkastenProjectPage() {


  return (
    <div className="w-full flex flex-col">
      <SpotlightHeader
        images={[
          '/huesli/huesli-3.jpeg',
          '/sand/sand1.jpeg',
          '/sand/sand2.jpeg',
        ]}
        header="Unser Sandkasten: Innovationslabor für die Zukunft des Bauens und Wohnens"
        description={`Im „Sandkasten“ von FREIHAUS vereinen wir Visionen für das Bauen, Wohnen und Beleben unserer zukünftigen Lebensräume. Dieser Bereich, der gerade aufgebaut wird, ist als dynamisches Forum konzipiert, in dem Interessierte zusammenkommen, um zu forschen, zu entwickeln und zu lernen. Hier wird die Zukunft des Wohnens nicht nur diskutiert, sondern aktiv gestaltet.`}
        PartOneH="Ein Kaleidoskop der Möglichkeiten"
        PartOneD={`In unserem Sandkasten setzen wir uns wir zukunftsweisenden Ansätze wie MicroHousing, New Healing Architecture und 3-D Druck im Bauwesen auseinander. Wir experimentieren mit neuen Materialien, die nachhaltig und regional bezogen sind, und entwickeln Konzepte für Gemeinschaftsbildung, generationenübergreifendes Zusammenleben, Tiny-Living und Minimalismus. Jeder Aspekt unseres Forums ist darauf ausgerichtet, nachhaltige, machbare, bezahlbare und innovative Lösungen für die Herausforderungen modernen Wohnens zu finden.`}
        PartTwoH="Bildung und Entwicklung"
        PartTwoD={`Zukünftig werden Experten in unserem Sandkasten ihr Fachwissen teilen und Einblicke in ihre Forschungspraxis geben. Teilnehmer sind eingeladen, sich an experimentellen Bauvorhaben zu beteiligen und durch praktische Erfahrung ihr Verständnis für die komplexen Prozesse des Bauens und Wohnens zu vertiefen. Von der Planung bis zur Umsetzung, von der Theorie bis zur Praxis, unser Sandkasten ist ein Ort des „Learning by Doing“.
        Zudem vermittelt Claudia Sieber Bethke die entscheidende Visions- und Quellenarbeit, welche die Basis für all unsere Projekte bildet. Diese grundlegende Vorarbeit ist entscheidend, um nachhaltige und innovative Wohnkonzepte von Grund auf zu verstehen und zu entwickeln.`}
        PartThreeH="Einladung zur Teilnahme"
        PartThreeD={`Mit unserem Leitbild - angelehnt an den kleinen Prinzen - laden wir all jene ein, die sich für nachhaltige Architektur und innovatives Wohnen interessieren, sich uns anzuschließen: 
        "Wenn du ein Haus bauen willst, dann trommle nicht Männer und Frauen zusammen, um Holz zu beschaffen, Aufgaben zu verteilen und Arbeit zu vergeben, sondern erinnere die Menschen an ihre Sehnsucht nach einem echten Zuhause.“ 
        
        Mit unserem Leitbild, das vom Kleinen Prinzen inspiriert und abgewandelt ist, laden wir alle ein, die sich für nachhaltige Architektur und innovatives Wohnen interessieren, sich uns anzuschließen:
        „Wenn du ein Haus bauen willst, trommle nicht einfach Männer und Frauen zusammen, um Holz zu beschaffen, Aufgaben zu verteilen und Arbeit zu vergeben. Stattdessen erinnere die Menschen an ihre Sehnsucht nach einem echten Zuhause.“
        `}
      />
    </div>
  );
}
