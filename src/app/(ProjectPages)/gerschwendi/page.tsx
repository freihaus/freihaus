import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader"

export default function GerschwendiProjectPage() {
    return (
        <div className="w-full flex flex-col">
            <SpotlightHeader 
                images={[
                    "https://dr7f261fq4afc.cloudfront.net/3.jpg",
                    "https://dr7f261fq4afc.cloudfront.net/3.jpg",
                ]}
                header="Die Gerschwendi" 
                description={`Ein Haus im Niemandsland. Eine Oase der Besinnung im Herzen von Appenzell
                Die Waldhütte "Gerschwendi", liebevoll getauft von der FREIHAUS
                GmbH, hat ihre wahre Bestimmung gefunden: Sie ist zu einem
                Haus für Viele geworden, ein Seminarhaus, das Menschen dazu
                einlädt, eine Verbindung zu sich selbst und ihrer Geschichte zu
                finden. Geleitet von einer Dokumentarfilmerin und
                Persönlichkeitstrainerin, verkörpert die Gerschwendi die Vision von
                FREIHAUS – Orte mit Seele zu schaffen, die Verbindung fördern,
                zum Nachdenken anregen und Entwicklung ermöglichen.`} 
                PartOneH={`Ein historisches Kleinod mit tiefen Wurzeln`} 
                PartOneD={`Von Nael Oesterle, dem Gründer der FREIHAUS GmbH, lange Zeit
                behütet, trägt die Gerschwendi eine reiche Geschichte in sich.
                Ursprünglich als Rückzugsort der Vorfahren einer lokalen Lehrerin
                erbaut, steht die über 150 Jahre alte Hütte abgeschieden im Wald
                und ist nur zu Fuß erreichbar. Mit bedacht und Respekt vor der
                Ursprünglichkeit des Ortes wurde die Gerschwendi von Nael
                Oesterle zeitgemäß und im Geiste vergangener Einfachheit
                restauriert. Heute bietet sie den Komfort von modernen
                Annehmlichkeiten, ohne dabei ihren rustikalen Charme zu verlieren.`}
                PartTwoH={`Die Quellenarbeit enthüllt eine vergessene Geschichte`}
                PartTwoD={`Claudia Sieber Bethke, stets ein integraler Teil des FREIHAUSTeams,
                hat im Rahmen der Quellenarbeit die Vergangenheit der
                Hütte sorgfältig aufgearbeitet und dabei eine faszinierende
                Verbindung zur lokalen Geschichte entdeckt. Die
                "Hexengeschichte", die die Gerschwendi umgibt, ist nun zentraler
                Bestandteil der dort stattfindenden Seminare, die sich mit
                Besinnung, Friedensarbeit und der Auseinandersetzung mit der
                eigenen Vergangenheit befassen.`}
                PartThreeH={`Zukunft geprägt durch Film und Forschung`}
                PartThreeD={`Die enge Zusammenarbeit zwischen FREIHAUS und der neuen
                Eigentümerin, einer renommierten Dokumentarfilmerin, trägt
                weiterhin Früchte. Der in Vorbereitung befindliche Film über die
                Hexenzeit im Appenzell wird die Geschichten, die die Gerschwendi
                beherbergt, einer breiteren Öffentlichkeit zugänglich machen und
                das Engagement von FREIHAUS für das Wiedererwecken und
                Entdecken von zeitgenössischen Erzählungen beleuchten.`}
                />                
        </div>
    )
}