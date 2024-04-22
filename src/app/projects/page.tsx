import ProjectsDesktop from "@/components/ui/ProjectPages/ProjectsDesktop";
import ProjectsMobile from "@/components/ui/ProjectPages/ProjectsMobil";


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