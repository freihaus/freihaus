import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader"

export default function VillaProjectPage() {
    return (
        <div className="w-full flex flex-col">
        <SpotlightHeader 
            images={[
                "https://dr7f261fq4afc.cloudfront.net/1.jpg",
                "https://dr7f261fq4afc.cloudfront.net/1.jpg",
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
    )
}