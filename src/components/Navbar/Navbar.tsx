'use client'
import { NavbarItems, ProjektItems } from "./items";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showProjects, setShowProjects] = useState(false);

  const handleMouseEnter = () => {
    setShowProjects(true);
  };

  const handleMouseLeave = () => {
    setShowProjects(false);
  };

  return (
    <nav className="flex justify-around p-4 bg-gray-200 mx-8 border-transparent rounded-b-full items-center">
      {NavbarItems.map((item) => (
        <div key={item.name} className="flex items-center space-x-2">
          <div
            onMouseEnter={item.name === "Projekte" ? handleMouseEnter : undefined}
            onMouseLeave={item.name === "Projekte" ? handleMouseLeave : undefined}
            className="relative"
          >
            <Link
              href={item.link}
              className="flex border-transparent border-2 hover:border-custom-cyan transition-colors duration-200 px-4 py-2 rounded-full justify-center items-center space-x-2"
            >
              <item.icon className="h-8 w-8 text-custom-brown" />
              <span className="hidden md:flex text-custom-brown">
                {item.name}
              </span>
            </Link>
            {item.name === "Projekte" && showProjects && (
              <div className="flex flex-col absolute top-full w-[200px] left-0 bg-gray-200 p-2 rounded-md space-y-4">
                {ProjektItems.map((project) => (
                  <Link href={project.link} key={project.name}>
                    <p className="block hover:text-custom-cyan transition duration-100 ease-in-out">
                      {project.name}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
