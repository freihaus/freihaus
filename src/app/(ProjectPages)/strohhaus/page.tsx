import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  authors: { name: string; role: string; url?: string }[];
  creator: string;
  publisher: string;
  formatDetection: {
    email: boolean;
    address: boolean;
    telephone: boolean;
  };
}

export const metadata: Metadata = {
  title: "Das Strohhaus - Ein Meilenstein in nachhaltiger Baukunst",
  description:
    "Das mehrstöckige Strohhaus in Thurgau, initiiert von Nael Oesterle und der FREIHAUS GmbH, steht als Symbol für Pioniergeist und nachhaltige Bauweise in der Schweiz. Erfahren Sie mehr über die Herausforderungen und Erfolge dieses innovativen Bauprojekts.",
  keywords: [
    "Strohhaus",
    "FREIHAUS",
    "Nachhaltigkeit",
    "Nael Oesterle",
    "Baukunst",
    "Thurgau",
    "ökologisches Bauen",
    "Minergie Zertifikat",
    "innovatives Bauen",
    "Bauhistorie Schweiz",
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


export default function StrohhausProjectPage() {
    return (
      <div className="w-full flex flex-col">
        <SpotlightHeader
          images={["/stroh/stroh-project1.jpeg", "/stroh/stroh-project2.jpeg"]}
          header="Das Strohhaus"
          claim="Pioniergeist und nachhaltige Baukunst"
          threeDModel={false}
          cert="https://www.minergie.ch/de/gebaeude/details/?gid=TG-001-A-ECO"
          description={`Das „Strohhaus", steht als Meilenstein in der
          Bauhistorie der Schweiz und ist ein Zeugnis der Pionierarbeit von
          Nael Oesterle, dem Gründer von FREIHAUS GmbH. Dieses Projekt
          markierte für Nael seinen entschlossenen Übergang vom
          konventionellen Bauwesen zu innovativen, umweltfreundlichen
          Baukonzepten. Es demonstriert, wie visionäres Denken praktisch
          umgesetzt werden kann. Sein Engagement wurde mit der Erteilung
          des Zertifikats Minergie Nr. TG-001-A-ECO für das erste
          mehrstöckige Strohhaus in Thurgau anerkannt. Eine verdiente Bestätigung für
          gesundes, kreislauffähiges Bauen mit hohen ökologischen und
          bautechnischen Standards.`}
          PartOneH={`Die Herausforderung des Neuen`}
          PartOneD={`Der Weg zur Realisierung des mehrstöckigen Strohhauses war
          voller Herausforderungen. Nael begegnete erheblichen
          Widerständen, die oft in der Bauindustrie auftreten, wenn
          herkömmliche Methoden hinterfragt werden. Trotz dieser Hürden
          blieb er seiner Vision treu und bewies, dass nachhaltiges und
          innovatives Bauen auch unter skeptischen Blicken möglich ist.
          Seine internationalen Erfahrungen halfen ihm dabei, nicht nur
          technische, sondern auch kulturelle Barrieren zu überwinden.`}
          PartTwoH={`Ein Symbol für ökologische Verantwortung`}
          PartTwoD={`Das Projekt zeigt eindrucksvoll, wie innovatives Denken
          herkömmliche Bauweisen durch „traditionelle“ Innovation
          herausfordern und verbessern kann. Nael und sein Team setzen
          diese Innovationsreise fort. Derzeit bereiten sie den 3D-Druck eines
          Hauses aus Lehm-Hanf-Kalk vor und bauen die Zusammenarbeit
          mit der ETH auf.
          `}
          PartThreeH={`Teil des FREIHAUS-Sandkastens`}
          PartThreeD={`Diese und andere experimentelle Projekte sind Teil des FREIHAUSSandkastens
          – dem Bildungs-, Forschungs- und
          Entwicklungsbereich der FREIHAUS GmbH. Hier lädt das
          FREIHAUS-Team interessierte und engagierte Pioniere ein, sich zu
          vernetzen und gemeinsam Wege zu erkunden, die Bauindustrie
          durch den Einsatz ungewöhnlicher Baustoffe und neuer
          technischer Lösungen nachhaltig zu verändern. Dabei inspiriert,
          motiviert und unterstützt Nael Oesterle als erfahrener Bauleiter,
          Bausouffleur und Pionier, das Bauen neu zu denken – und vor
          allem umzusetzen.`}
        />
      </div>
    );
  }
  