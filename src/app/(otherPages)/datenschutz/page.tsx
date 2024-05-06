import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";

export const metadata = {
  title: "Freihaus - Datenschutz",
  description: "Datenschutz Informationen",
  keywords: "Datenschutz",
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


export default function Datenschutz() {
  return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen bg-white">
    <div className="flex flex-col items-center mt-24 w-full bg-white">
      <div className="">
        <SmallHeadText text="Datenschutz" />
        <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4">
          <h1 className="font-bold text-2xl">Datenschutz</h1>

          <h1 className="font-bold text-xl mt-4">Allgemein</h1>
          <p>Ihre Privatsphäre ist uns wichtig. Nachfolgend informieren wir Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, die Sie über dieses Kontaktformular bereitstellen:</p>
          <p>Wir verwenden die von Ihnen angegebenen Informationen (Name und E-Mail-Adresse) ausschließlich, um auf Ihre Anfrage zu antworten. Wir geben Ihre Daten nicht an Dritte weiter und speichern sie nur solange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist.</p>
          <p>Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass wir Ihre Daten gemäß unserer Datenschutzerklärung verwenden dürfen.</p>
          <p>Für weitere Informationen zu unseren Datenschutzpraktiken und Ihren Rechten kontaktieren Sie uns bitte.</p>


      </div>

      </div>
      
    </div>
  </div>
  );
}
