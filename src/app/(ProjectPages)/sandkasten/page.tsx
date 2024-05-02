import CustomIcon from "@/components/icons/logo";
import SandkastenCard from "@/components/ui/Cards/SandkastenCard";

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
    <div className="w-full h-screen flex flex-col justify-center items-center z-30">
      <SandkastenCard />
    </div>
  );
}
