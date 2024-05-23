import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

export default function StrohhausProjectPage() {
    return (
      <div className="w-full flex flex-col">
        <SpotlightHeader
          images={["/stroh/stroh-project1.jpeg", "/stroh/stroh-project2.jpeg"]}
          header="Das Strohhaus"
          threeDModel={false}
          cert="https://www.minergie.ch/de/gebaeude/details/?gid=TG-001-A-ECO"
          description={`Prädikat mutvoll. Pioniergeist und nachhaltige Baukunst
          Das mehrstöckige erste „Strohhaus" in Thurgau, steht als Meilenstein in der
          Bauhistorie der Schweiz und ist ein Zeugnis der Pionierarbeit von
          Nael Oesterle, dem Gründer von FREIHAUS GmbH. Dieses Projekt
          markierte für Nael seinen entschlossenen Übergang vom
          konventionellen Bauwesen zu innovativen, umweltfreundlichen
          Baukonzepten. Es demonstriert, wie visionäres Denken praktisch
          umgesetzt werden kann. Sein Engagement wurde mit der Erteilung
          des Zertifikats Minergie Nr. TG-001-A-ECO für das erste
          mehrstöckige Strohhaus anerkannt. Eine verdiente Bestätigung für
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
  