import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

ExperienceItem.protoTypes = {
  experience: PropTypes.object,
};

function ExperienceItem({ experience }) {
  return (
    <div className="flex">
      <div className="w-48 shrink-0">
        <p className="text-gray-400">{experience.duration}</p>
      </div>
      <a
        href={experience.companyURL}
        target="_blank"
        className="group text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
      >
        <div className="flex-1">
          <span className="flex items-center gap-1 text-xl font-medium tracking-wide">
            {`${experience.designation} · ${experience.companyName}`}
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>

          <ul className="mt-3 flex list-disc flex-col gap-2 tracking-wide text-slate-600 dark:text-slate-400">
            {experience.role.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-4">
            {experience.technologies.map((tag) => (
              <span
                key={tag}
                className="mt-4 inline-flex h-9 items-center gap-4 whitespace-nowrap rounded-full bg-blue-100 px-3 text-sm font-semibold text-blue-600 hover:bg-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ExperienceItem;
