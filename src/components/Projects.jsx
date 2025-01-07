import { NavLink } from "react-router-dom";
import { ProjectData } from "../../data/Projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  let landingCount = 0;
  let websiteCount = 0;
  return (
    <section id="projects" className="flex flex-col items-center gap-8 py-10">
      <h2 className="text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl dark:text-white">
        Featured Projects
      </h2>
      <div className="flex flex-col items-center gap-8">
        <h3 className="text-3xl font-extrabold tracking-wide text-slate-800 sm:text-4xl dark:text-white">
          Landing Pages
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ProjectData.map((project) => {
            if (project.type === "Landing" && landingCount < 3) {
              landingCount += 1;
              return <ProjectItem project={project} key={project.githubURL} />;
            }
          })}
        </div>
        <NavLink
          to="/projects"
          className="mb-2 flex items-center gap-2 font-mono text-xl font-semibold text-sky-500 transition-all duration-300 hover:gap-3 hover:text-sky-500 hover:underline hover:underline-offset-8 dark:hover:text-sky-400"
        >
          View all projects{" "}
          <ion-icon name="arrow-forward-outline" class="h-6 w-6"></ion-icon>
        </NavLink>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h3 className="text-center text-3xl font-extrabold tracking-wide text-slate-800 sm:text-4xl dark:text-white">
          Websites
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ProjectData.map((project) => {
            if (project.type === "Website" && websiteCount < 3) {
              websiteCount += 1;
              return <ProjectItem project={project} key={project.githubURL} />;
            }
          })}
        </div>
        {/* Projects link */}
        <NavLink
          to="/projects"
          className="flex items-center gap-2 font-mono text-xl font-semibold text-sky-500 transition-all duration-300 hover:gap-3 hover:text-sky-500 hover:underline hover:underline-offset-8 dark:hover:text-sky-400"
        >
          View all projects{" "}
          <ion-icon name="arrow-forward-outline" class="h-6 w-6"></ion-icon>
        </NavLink>
      </div>
    </section>
  );
}

export default Projects;
