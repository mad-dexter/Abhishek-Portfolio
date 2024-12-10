import { ArrowUpRight } from "lucide-react";

import Footer from "../components/Footer";
import Link from "../components/Link";
import { ExperienceData } from "../../data/Experience";
import ExperienceItem from "../components/ExperienceItem";
import { useEffect } from "react";

function MyExperience() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // For smooth scrolling
    });
  }, []);

  return (
    <div className="w-full">
      <header className="flex items-center justify-between border-b px-4 py-4 md:px-10 dark:text-white">
        <Link to={-1} className="flex items-center justify-center gap-2">
          <ion-icon name="arrow-back-circle-outline" class="h-6 w-6"></ion-icon>{" "}
          Back to Home
        </Link>
      </header>
      <main className="px-6 md:px-20">
        <section
          id="projects"
          className="flex flex-col items-center gap-14 py-10"
        >
          <h2 className="text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl dark:text-white">
            My Experience
          </h2>
          <div className="flex flex-col gap-16">
            {ExperienceData.map((experience) => (
              <ExperienceItem
                experience={experience}
                key={experience.companyName}
              />
            ))}

            <a
              href="/assets/Abhishek_Paul_CV_UIDev.pdf"
              download
              className="group inline-flex items-center gap-1 text-center text-lg font-semibold tracking-widest text-sky-500 hover:text-sky-400 hover:underline hover:underline-offset-8 dark:hover:text-sky-300"
            >
              View Full Résumé
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MyExperience;
