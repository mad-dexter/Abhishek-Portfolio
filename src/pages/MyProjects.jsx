import Footer from "../components/Footer";
import { useEffect } from "react";
import { ProjectData } from "../../data/Projects";
import ProjectItem from "../components/ProjectItem";
import PageHeader from "../components/PageHeader";

function MyProjects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // For smooth scrolling
    });
  }, []);

  return (
    <div className="w-full">
      <PageHeader />
      <main className="px-6 md:px-20">
        <section className="flex flex-col items-center gap-14 py-10">
          <h2 className="text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl dark:text-white">
            My Projects
          </h2>
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-3xl font-extrabold tracking-wide text-slate-800 sm:text-4xl dark:text-white">
              Landing Pages
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ProjectData.map((project) => {
                if (project.type === "Landing") {
                  return <ProjectItem project={project} key={project.id} />;
                }
              })}
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-center text-3xl font-extrabold tracking-wide text-slate-800 sm:text-4xl dark:text-white">
              Websites
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ProjectData.map((project) => {
                if (project.type === "Website") {
                  return <ProjectItem project={project} key={project.id} />;
                }
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MyProjects;
