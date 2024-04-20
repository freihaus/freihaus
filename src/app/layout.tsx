import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GridBackgroundDemo } from "@/components/ui/GridBackground";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freihaus",
  description: "Willkommen bei FREIHAUS - Ihrem Zuhause mit Zukunft! Unsere Mission ist es, eine neue Ära des Bauens und Wohnens einzuleiten, inspiriert von den historischen Freihäusern. Mit unserer integralen Architektur und unserem Baumanagement erweitern wir die traditionellen Grenzen und bieten innovative Lösungen für Einzelpersonen, Familien und Organisationen. Unser ganzheitlicher Ansatz fördert das Wohlergehen und schafft inspirierende Räume. Entdecken Sie unsere Vision der Innovation im Wohnen, indem wir Mut zur Veränderung zeigen und nachhaltige Lebensräume schaffen. Unsere Projekte, wie die Gerschwendi und die Villa Felsenhöhe, vereinen Vergangenheit und Zukunft. Treten Sie unserem kreativen Labor, dem Sandkasten, bei und gestalten Sie mit uns die Zukunft des Wohnens. Engagieren Sie sich und werden Sie Teil unserer Gemeinschaft von Visionären und Pionieren im Wohn- und Bauwesen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="z-99">      
        {/* <NavbarMenu /> */}
        <Navbar />
        </div>


      <div className="fixed w-full h-screen z-0">
        <GridBackgroundDemo />
      </div>
        
        {children}
      
      </body>
    </html>
  );
}
