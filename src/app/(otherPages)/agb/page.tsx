import BigHeadText from "@/components/Landingpage/Header/BigHeadText";
import SmallHeadText from "@/components/Landingpage/Header/SmallHeadText";

export const metadata = {
  title: "Freihaus - AGB",
  description: "AGB Informationen",
  keywords: "AGB",
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

export default function AGB() {
  return (
    <div className="w-full relative flex flex-col items-center z-20 h-screen bg-white">
      <div className="flex flex-col items-center mt-24 w-full bg-white">
        <div className="">
          <SmallHeadText text="AGB" />
          <div className="w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] p-4">
            <h1 className="font-bold text-2xl">Allgemeine Geschäftsbedingungen (AGB)</h1>

            <h1 className="font-bold text-xl mt-4">1. Geltungsbereich</h1>
            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Nutzer der Website {`"freihaus.ch"`}. Durch die Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.</p>

            <h1 className="font-bold text-xl mt-4">2. Urheberrecht</h1>
            <p>Alle Inhalte auf dieser Website, einschließlich Texte, Grafiken(ausschließlich Icons), Logos und Bilder sind Eigentum von Freihaus GmbH und durch das deutsche Urheberrechtsgesetz geschützt. Die Verwendung der Inhalte, einschließlich der Vervielfältigung, Modifikation, Verbreitung oder Reproduktion ohne vorherige schriftliche Zustimmung von [Ihr Name oder Ihr Unternehmen] ist streng verboten.</p>

            <h1 className="font-bold text-xl mt-4">3. Cookies</h1>
            <p>Diese Website verwendet Cookies, die für den Betrieb und die Sicherheit der Website notwendig sind. Diese Cookies sammeln keine persönlichen Daten und dienen ausschließlich dazu, die Funktionalität der Website zu gewährleisten.</p>

            <h1 className="font-bold text-xl mt-4">4. Haftungsausschluss</h1>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>

            <h1 className="font-bold text-xl mt-4">5. Änderungen der AGB</h1>
            <p>Wir behalten uns das Recht vor, diese AGB jederzeit ohne vorherige Ankündigung zu ändern. Die aktuelle Version der AGB ist auf unserer Website einsehbar.</p>

            <h1 className="font-bold text-xl mt-4">6. Einwilligung zur Datenverarbeitung durch Kontakt Formular</h1>
              <p>Mit dem Absenden des Kontakt-Formulars erklären Sie sich damit einverstanden, dass Ihre eingegebenen Daten (Name, E-Mail-Adresse und sonstige im Formular angegebene Informationen) von Freihaus GmbH gespeichert und verarbeitet werden, um Ihre Anfrage zu bearbeiten. Ihre Daten werden vertraulich behandelt und nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben.</p>
              <p>Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Der Widerruf Ihrer Einwilligung berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung Ihrer Daten. Weitere Informationen zur Verarbeitung Ihrer Daten finden Sie in unserer Datenschutzerklärung.</p>

            <h1 className="font-bold text-xl mt-4">7. Schlussbestimmungen</h1>
            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder nach Vertragsschluss unwirksam oder undurchführbar werden, bleibt davon die Wirksamkeit der AGB im Übrigen unberührt. Anstelle der unwirksamen oder undurchführbaren Bestimmung soll diejenige wirksame und durchführbare Regelung treten, deren Wirkungen der wirtschaftlichen Zielsetzung am nächsten kommen, die die Vertragsparteien mit der unwirksamen bzw. undurchführbaren Bestimmung verfolgt haben. Die vorstehenden Bestimmungen gelten entsprechend für den Fall, dass sich die AGB als lückenhaft erweisen.</p>
        
        </div>

        </div>
        
      </div>
    </div>
  );
}
