import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata = {
  title:
    "Das Kollbrunner Haus - Ein kulturelles Erbe in Hüttlingen revitalisiert",
  description:
    "Das Kollbrunner Haus, einst Heimstätte des Schweizer Schriftstellers Oskar Kollbrunner, vereint kulturelle Geschichte und modernes Wohnkonzept. Entdecken Sie, wie das FREIHAUS Team dieses historische Fachwerkhaus zu einem dynamischen Ort für kulturellen Austausch und kreative Entwicklung umgestaltet hat.",
  keywords: [
    "Kollbrunner Haus",
    "kulturelles Erbe",
    "Fachwerkhaus Hüttlingen",
    "Oskar Kollbrunner",
    "kultureller Austausch",
    "kreative Entwicklung",
    "Co-Working kulturell",
    "historische Revitalisierung",
    "FREIHAUS Projekt",
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

export default function KollbrunnerProjectPage() {
  return (
    <div className="w-full flex flex-col">
      <SpotlightHeader
        images={["/koll/huet2.jpeg", "/about/about5.jpeg", "/koll/huet7.jpeg"]}
        header="Das Kollbrunner Haus"
        description={`Erbe und Inspiration
                Das Kollbrunner Haus in Hüttlingen, einst die Heimat des
                Schweizer Schriftstellers Oskar Kollbrunner, ist ein Gebäude voller
                Geschichten. Dieses charaktervolle Fachwerkhaus, das über
                Generationen gewachsen ist, symbolisiert die kulturelle und
                persönliche Geschichte seiner Bewohner. Mit der sorgfältigen
                Bewahrung und Aufarbeitung historischer Dokumente und Artefakte
                – von Oskars poetischen Werken bis zu persönlichen
                Aufzeichnungen und Erinnerungstücken – hat das FREIHAUSTeam
                eine Vision herausgearbeitet, die das Haus in seinem
                ursprünglichen Geist revitalisiert.`}
        PartOneH={`Ein dynamischer Ort des kulturellen Austauschs`}
        PartOneD={`Das Kollbrunner Haus soll ein heimeliges Zuhause für eine familiäre
                Gemeinschaft sein, das auch die Werke und das Erbe Oskars ehrt
                und weiterträgt. Geplante Wohnräume erinnern an den starken
                Familiensinn seiner Erbauer und bieten Raum für kreative und
                inspirierende Entwicklung. Ein speziell eingerichteter Bereich - der
                von der Kollbrunner Stiftung geführt wird - dient auch als Ort für
                Seminare, Workshops und kulturelle Veranstaltungen. So dient das
                Haus im Sinne Oskars auch als Zentrum der Bildung und des
                künstlerischen Austauschs.`}
        PartTwoH={`Gemeinschaft und kreative Synergien`}
        PartTwoD={`Mit drei Wohneinheiten und einem Co-Workingspace wird das Haus
                zur Basis für eine Gemeinschaft von Künstlern, Denkern und
                Unternehmern. Es ist so konzipiert, dass sowohl Privatsphäre und
                zugleich Raum für kreative Arbeit möglich ist. Der Co-Workingspace
                mit integrierter Bibliothek fördert professionelles Schaffen und
                produktiven Austausch.`}
        PartThreeH={`Architektonisches Design, das Vergangenheit und Zukunft
                verbindet`}
        PartThreeD={`Die Gestaltung des Hauses integriert Elemente aus Oskars Zeit als
                Schriftsteller und Journalist. Natürliche Materialien wie Holz und
                Stein reflektieren die ländliche Idylle Hüttlingens, während warme
                Farben und weiche Texturen eine einladende Atmosphäre schaffen.
                Kunstvolle Zitate und Darstellungen von Oskars Werken bereichern
                das Haus und inspirieren seine Besucher.`}
        optionalProp1={`Garten und Permakultur als Begegnungsorte`}
        optionalProp2={`Der Garten und das nahegelegene Permakulturfeld bieten nicht nur
                Raum für Entspannung und Reflexion, sondern auch die
                Möglichkeit, durch eigens angebautes Gemüse und Obst
                Selbstversorgung zu praktizieren. Diese grünen Bereiche stärken
                die Gemeinschaft und fördern ein nachhaltiges Zusammenleben.`}
        optionalProp3={`Digitale Vernetzung und gemeinschaftliche Expansion`}
        optionalProp4={`Die Geschichte und Projekte des Kollbrunner Hauses werden auf
                einer eigens entwickelten Webseite dokumentiert. Diese Plattform,
                ein Teil der FREIHAUS-Community, informiert und inspiriert, und
                lädt Interessierte ein, Teil einer Bewegung für Kultur, Natur und
                innovative Lebenskonzepte zu werden.`}
        optionalProp5={`Partnerschaft und Anerkennung`}
        optionalProp6={`In enger Zusammenarbeit mit Marianne Kollbrunner - der Nichte
                des Schriftstellers - und unterstützt durch das Fachwissen von
                Architekten und Historikern, verwandelt das FREIHAUS-Team das
                Kollbrunner Haus in einen Ort, der moderne Lebensansprüche
                erfüllt und zugleich seine reiche Vergangenheit ehrt. Besonderer
                Dank gilt allen, die diese Vision unterstützen, insbesondere
                Marianne Kollbrunner, die als Schirmherrin und Inspiration für die
                Weiterentwicklung ihres Geburtshauses dient.`}
      />
    </div>
  );
}
