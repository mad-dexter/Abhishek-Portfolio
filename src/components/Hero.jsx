import LinkButton from "./LinkButton";

function Hero() {
  return (
    <section className="flex flex-col gap-20 py-20">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-col gap-5 md:w-1/2">
          <h1 className="text-center text-5xl font-extrabold tracking-wide text-slate-900 lg:text-7xl dark:text-white">
            I will help you <br />
            Bring your <br />
            brand to{" "}
            <span className="font-mono text-sky-500 dark:text-sky-400">
              LIFE
            </span>
            .
          </h1>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/mad-dexter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-[#181717] transition-all hover:scale-110 dark:fill-[#ffffff]"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-paul-909b1b63/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-[#0a66c2] transition-all hover:scale-110 dark:fill-[#ffffff]"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/AbhiDude91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-[#000000] transition-all hover:scale-110 dark:fill-[#ffffff]"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
          <LinkButton href="#contact" className="mt-7">
            Let&apos;s build together
          </LinkButton>
          <a
            href="/assets/Abhishek_Paul_CV_UIDev.pdf"
            download
            className="-mt-2 text-center font-mono text-lg font-semibold text-sky-500 hover:text-sky-400 hover:underline hover:underline-offset-4 dark:hover:text-sky-300"
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img
            src="../assets/Header.png"
            alt="Abhishek Paul"
            className="hidden h-[20rem] w-[20rem] max-w-md md:inline-block"
          />
        </div>
      </div>
      <div
        id="WhoAmI"
        className="flex flex-col items-center justify-center gap-2"
      >
        <h3 className="text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl dark:text-white">
          Who am I?
        </h3>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
          Passionate Frontend Web Developer with 10+ years of experience
          crafting responsive, dynamic, and user-friendly websites. Proficient
          in{" "}
          <span className="font-mono font-medium text-sky-500 dark:text-sky-400">
            HTML
          </span>
          ,{" "}
          <span className="font-mono font-medium text-sky-500 dark:text-sky-400">
            CSS
          </span>
          ,{" "}
          <span className="font-mono font-medium text-sky-500 dark:text-sky-400">
            JavaScript
          </span>{" "}
          & modern frameworks like{" "}
          <span className="font-mono font-medium text-sky-500 dark:text-sky-400">
            React
          </span>
          , delivering seamless digital experiences.
        </p>
      </div>
    </section>
  );
}

export default Hero;
