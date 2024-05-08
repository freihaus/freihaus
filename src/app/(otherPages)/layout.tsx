import React from "react";
import { GridBackgroundDemo } from "@/components/ui/BackGrounds/GridBackground";
import Impressum from "@/components/Navbar/Footer";

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="fixed w-full h-screen z-0">
        <GridBackgroundDemo />
      </div>

      {children}
    </div>
  );
}
