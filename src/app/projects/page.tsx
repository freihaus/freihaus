import ProjectsDesktop from "@/components/ui/ProjectsDesktop";
import ProjectsMobile from "@/components/ui/ProjectsMobil";


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