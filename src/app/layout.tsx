import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freihaus: Zukunft kann man bauen - Innovative Wohnlösungen",
  description: "Freihaus steht für innovative Wohnkonzepte, die das historische Erbe mit modernen Bedürfnissen verbinden. Entdecken Sie unsere maßgeschneiderten Lösungen für nachhaltige und zukunftsorientierte Lebensräume.",
  keywords: ["Freihaus", "nachhaltige Wohnlösungen", "innovative Wohnkonzepte", "zukunftsorientiertes Wohnen", "maßgeschneiderte Lebensräume", "ökologisches Bauen", "Revitalisierung historischer Gebäude"],
  authors: [
    { name: 'Nathael Oesterle', url: 'https://freihaus.ch' },
    { name: 'Claudia Sieber Bethke'},
    { name: 'Dennis Diepolder'}
  ],
  creator: 'Nathael Oesterle',
  publisher: 'Freihaus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="fixed z-50 w-full">
          {/* <NavbarMenu /> */}
          <Navbar />
        </div>
        {children}     
      </body>
    </html>
  );
}
