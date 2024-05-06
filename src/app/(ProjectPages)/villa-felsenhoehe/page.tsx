import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata = {
  title: "Villa Felsenhöhe - Ein historisches Juwel am See neu belebt",
  description: "Entdecken Sie die Villa Felsenhöhe, ein historisches Anwesen revitalisiert von FREIHAUS GmbH, das heute als dynamische Heimstätte für eine familiäre Gemeinschaft dient. Erfahren Sie, wie die Villa sowohl für modernes Arbeiten als auch für gemeinschaftliches Wohnen umgestaltet wurde, unterstützt von nachhaltigen Praktiken und technologischer Innovation.",
  keywords: [
    "Villa Felsenhöhe", 
    "historisches Anwesen", 
    "FREIHAUS Projekt", 
    "nachhaltiges Wohnen", 
    "Coworking Villa", 
    "moderne Arbeitsräume",
    "Gemeinschaftsleben",
    "Lebensformen der Zukunft",
    "ökologisches Handeln"
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

export default function VillaProjectPage() {
  return (
    <div className="w-full flex flex-col">
      <SpotlightHeader
        images={[
          "/villa/vil20.jpeg",
          "/villa/vil2.jpeg",
        ]}
        header="Villa Felsenhöhe"
        description={`Ein historisches Juwel neu
            belebt
            Das Erbe der Pioniere und Visionäre
            Die Villa Felsenhöhe, erbaut von Pionieren des Unternehmertums
            und Bildungswesens - Albert Leutenegger und Hermann Schuler -
            verkörpert weit mehr als ein beeindruckendes Anwesen am See.
            Diese historische Residenz, entworfen vor über 100 Jahren von den
            Architekten Weideli & Kressibuech, spiegelt eine reiche
            Vergangenheit und eine inspirierende Zukunft wider. Erworben und
            revitalisiert durch Nael Oesterle im Jahr 2017, wurde das Haus
            seiner ursprünglichen Bestimmung zurückgeführt: Es dient nun als
            Heimstätte für eine familiäre Gemeinschaft und engagierten
            Machern und beherbergt den Firmensitz der FREIHAUS GmbH.`}
        PartOneH={`Lebendige Gemeinschaft und transformative Wirkung`}
        PartOneD={`Getreu dem Motto „Sei du die Veränderung, die du da draußen
            sehen willst“, leben und arbeiten die Bewohner der Villa Felsenhöhe
            individuell und gemeinschaftlich. Dieses Umfeld fördert die
            persönliche Entfaltung und unterstützt das gemeinschaftliche
            Streben nach ökologisch und ökonomisch sinnvollem Handeln.`}
        PartTwoH={`Funktionale Räumlichkeiten für modernes Arbeiten und
            Wohnen`}
        PartTwoD={`Die Villa bietet eine inspirierende Atmosphäre, perfekt geeignet für
            selbstständige und verantwortungsbewusste Personen.
            Ausgestattet mit gemütlichen Wohnräumen, großzügigen Küchen
            und modernen Bädern, vereint das Haus Komfort, Heimeligkeit und
            Funktionalität. Der Coworking-Bereich im Herzen der Villa ist
            technisch hochwertig ausgestattet und dient als kreativer
            Knotenpunkt für Seminare, Meetings und kollaborative Projekte.`}
        PartThreeH={`Integration von Natur und Nachhaltigkeit`}
        PartThreeD={`Der romantische Villa-Garten bietet Platz für Arbeit und
            Entspannung inmitten des Urbanen Treibens und dient zudem als
            geselliger Treffpunkt für die Gemeinschaft. So ist er Schauplatz für
            Familienfeste, Projektbesprechungen und Infoveranstaltungen und
            unterstreicht - durch die Umsetzung des Prototypen „Hüsli“ auf dem
            Gelände - die Forschungsarbeit von FREIHAUS im Bereich
            nachhaltiger Lebensformen und die zukunftsorientierte Umsetzung
            kleiner Wohnformen mit neuer Technologie.`}
      />
    </div>
  );
}
