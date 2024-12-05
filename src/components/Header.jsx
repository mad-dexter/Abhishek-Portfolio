import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import { getValueFromStore, setValueToStore } from "../utils/LocalStorageOps";

const DARK_MODE_KEY = "DARK_MODE_KEY";

function Header() {
  const [darkMode, setDarkMode] = useState(
    getValueFromStore(DARK_MODE_KEY) || false,
  );

  function handleDarkModeClick() {
    // Set the value preference in local Storage
    setValueToStore(DARK_MODE_KEY, !darkMode);
    setDarkMode((val) => !val);
  }

  useEffect(
    function () {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [darkMode],
  );

  return (
    <header className="flex items-center justify-between border-b px-4 py-4 md:px-10 dark:text-white">
      <h1 className="text-xl font-bold">Abhishek Paul</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#WhoAmI"
              className="hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400"
            >
              Projects
            </a>
          </li>
          <li>
            <LinkButton href="#contact" className="hidden md:flex">
              Let&apos;s build together
            </LinkButton>
            <LinkButton href="#contact" className="md:hidden">
              Hire Me
            </LinkButton>
          </li>
          <li>
            <button
              type="button"
              className="mt-1"
              onClick={handleDarkModeClick}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 h-6 w-6 transition-all duration-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    className="fill-sky-500 stroke-sky-600"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 h-7 w-7 transition-all duration-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    className="fill-sky-400 stroke-sky-500"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
