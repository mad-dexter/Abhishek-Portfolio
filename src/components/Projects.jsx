// import { ExternalLinkIcon } from "lucide-react";

import { ProjectData } from "../../data/Projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center gap-14 py-10">
      <h2 className="text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl dark:text-white">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ProjectData.map((project) => (
          <ProjectItem project={project} key={project.githubURL} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
