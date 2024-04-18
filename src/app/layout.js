import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "FreiHaus",
  description: "Integrale Architektur und Baumanagement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
