import { SpotlightHeader } from "@/components/ui/ProjectPages/SpotlightHeader";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata = {
  title: "Das Hüsli von der Felsenhöhe - Pionierprojekt in Kreuzlingen",
  description:
    "Entdecken Sie das 'Hüsli von der Felsenhöhe', ein Vorzeigeprojekt von FREIHAUS für nachhaltiges und verdichtetes Bauen in Kreuzlingen. Erfahren Sie, wie innovative Technologien wie 3D-Druck mit Hanfstroh und Naturkalk ökologisch verantwortliches Bauen neu definieren.",
  keywords: [
    "Hüsli Felsenhöhe",
    "nachhaltiges Bauen",
    "3D-Druck Architektur",
    "verdichtetes Bauen",
    "ökologisches Bauen",
    "bezahlbarer Wohnraum",
    "Kreuzlingen Architektur",
    "moderne und traditionelle Bauweise",
    "FREIHAUS Innovationsprojekt",
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

export default function HuesliProjectPage() {
  return (
    <div className="w-full flex flex-col">
      <SpotlightHeader
        images={["/huesli/huesli.jpeg", "/huesli/huesli-4.jpeg"]}
        header="Das Hüsli von der Felsenhöhe"
        threeDModel={true}
        description={`Pionierarbeit für
            nachhaltiges und verdichtetes Bauen
            Innovatives Wohnkonzept in Kreuzlingen
            "Das Hüsli von der Felsenhöhe", geplant auf dem Gelände der Villa
            Felsenhöhe, steht für eine neue Ära des Bauens. FREIHAUS
            GmbH hat es sich zum Ziel gesetzt, durch dieses Vorhaben zu
            demonstrieren, dass effizientes Bauen nicht nur möglich, sondern
            auch ästhetisch ansprechend und ökologisch vorbildlich sein kann.
            Dieses Projekt adressiert die dringenden Bedürfnisse nach
            verdichtetem Bauen, das in der Schweiz zunehmend an Bedeutung
            gewinnt, sowie nach bezahlbarem Wohnraum.`}
        PartOneH={`Ökologisch, ökonomisch und sozial verantwortlich`}
        PartOneD={`Das „Hüsli“ ist darauf ausgelegt, den Einsatz von nachhaltigen und
            klimaschonenden Materialien zu maximieren. Durch den
            innovativen Einsatz eines 3D-Druck-Systems, das Hanfstroh und
            Naturkalk nutzt, demonstriert FREIHAUS, wie durch moderne
            Technologien Baukosten gesenkt und gleichzeitig die Umwelt
            geschont werden können. Diese Materialien bieten nicht nur
            ausgezeichnete thermische Eigenschaften und tragen zur
            Luftqualität bei, sondern sind auch in ihrer Herstellung und
            Verwendung besonders energieeffizient.`}
        PartTwoH={`Verdichtetes Bauen als soziale Chance`}
        PartTwoD={`Das Projekt zielt darauf ab, ein Modell zu schaffen, das zeigt, wie
            verdichtetes Bauen gesellschaftlichen Mehrwert schaffen kann.
            Durch die kluge Anordnung von Wohn- und Gemeinschaftsflächen
            innerhalb des Hüslis wird demonstriert, dass verdichteter
            Wohnraum sowohl privat als auch gemeinschaftlich nutzbar ist und
            soziale Interaktion fördert, ohne die Privatsphäre zu
            beeinträchtigen. Ganz im Sinne des Gedanken: „Platz ist in der
            kleinsten Hütte“.`}
        PartThreeH={`Integration in den historischen Kontext`}
        PartThreeD={`Die sorgfältige Planung und Gestaltung des Hüslis stellt sicher,
            dass es sich harmonisch in die bestehende Umgebung der
            historischen Villa Felsenhöhe einfügt. Das Projekt ist ein Beispiel
            dafür, wie moderne Architektur mit den Anforderungen des
            Denkmalschutzes in Einklang gebracht werden kann, indem
            Formen und Materialien so gewählt werden, dass sie sowohl
            modernen Ansprüchen gerecht werden als auch die historische
            Ästhetik ergänzen.`}
        optionalProp1={`Vorzeigeprojekt für Kreuzlingen und darüber hinaus`}
        optionalProp2={`Mit dem „Hüsli von der Felsenhöhe" strebt FREIHAUS an, ein
            Vorzeigeprojekt zu etablieren, das für die Gemeinde Kreuzlingen
            und andere Städte als Vorbild dienen kann. Es soll aufzeigen, wie
            durch innovative Baukonzepte und Materialien nicht nur
            ökologische und ökonomische, sondern auch soziale Vorteile
            realisiert werden können. Dieses Projekt ist ein mutiger Schritt in
            die Zukunft des Bauens, der inspirieren und zum Nachahmen
            ermutigen soll.`}
      />
    </div>
  );
}
