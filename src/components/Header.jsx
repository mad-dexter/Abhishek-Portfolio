import { useState } from "react";
import LinkButton from "./LinkButton";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function Header() {
  const [navigationOpen, setNavigationOpen] = useState(false);

  function closeNavigation() {
    setNavigationOpen(false);
  }

  return (
    <header className="flex items-center justify-between border-b px-4 py-4 md:px-10 dark:text-white">
      <h1 className="text-xl font-bold">Abhishek Paul</h1>

      <div className="flex flex-row-reverse items-center justify-end gap-4 md:flex-row">
        <nav
          className={`${navigationOpen ? "fixed bottom-0 left-8 right-0 top-0 block backdrop-blur-lg" : "absolute translate-x-full"} transition-all duration-200 ease-linear md:relative md:left-0 md:block md:translate-x-0`}
        >
          <ul
            className={`flex items-center gap-6 transition-all duration-200 ease-linear ${navigationOpen ? "mt-28 flex-col justify-center gap-16 text-4xl font-extrabold text-black dark:text-white" : ""} md:mt-0 md:flex-row md:gap-6 md:text-base md:font-normal md:text-slate-500 md:dark:text-white`}
          >
            <li onClick={closeNavigation}>
              <a
                href="#WhoAmI"
                className="hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400"
              >
                About
              </a>
            </li>
            <li onClick={closeNavigation}>
              <a
                href="#projects"
                className="hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400"
              >
                Projects
              </a>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400"
              >
                Experience
              </NavLink>
            </li>
            <li onClick={closeNavigation}>
              <LinkButton
                href="#contact"
                className={`${navigationOpen ? "px-16 py-8" : ""} md:px-6 md:py-0`}
              >
                Let&apos;s build together
              </LinkButton>
            </li>
          </ul>
        </nav>

        {/* Navigation Buttons */}
        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          onClick={() => setNavigationOpen((oldVal) => !oldVal)}
        >
          {navigationOpen ? (
            <ion-icon
              name="close-outline"
              class="mt-1 h-8 w-8 fill-black dark:fill-white"
            ></ion-icon>
          ) : (
            <ion-icon
              name="menu-outline"
              class="mt-1 h-8 w-8 fill-black dark:fill-white"
            ></ion-icon>
          )}
        </button>
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
