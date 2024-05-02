import ProjectsDesktop from "@/components/ui/ProjectsDesktop";
import ProjectsMobile from '@/components/ui/ProjectsMobil';

interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata = {
  title: "Freihaus Projekte - Innovative und nachhaltige Bauprojekte",
  description: "Entdecken Sie die Vielfalt unserer Bauprojekte bei Freihaus, von der Revitalisierung historischer Gebäude bis hin zu zukunftsweisenden Wohnkonzepten. Erfahren Sie, wie wir Nachhaltigkeit und Design vereinen.",
  keywords: "Freihaus Projekte, nachhaltiges Bauen, innovative Bauprojekte, Revitalisierung, moderne Architektur, umweltfreundliche Bauweise, Projektentwicklung",
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

export default function Projects() {
  return (
    <div>
      {/* Desktop Version */}
      <div className="hidden md:flex">
        <ProjectsDesktop />
      </div>
      {/* Mobile Version */}
      <div className="mt-18 flex md:hidden">
        <ProjectsMobile />
      </div>
    </div>
  );
}
