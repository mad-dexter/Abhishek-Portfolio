import { useEffect, useRef } from "react";

function Skills() {
  const skillDiv = useRef(null);

  useEffect(function () {
    if (skillDiv) {
      // Initialize the Intersection observer for animation
      const skillAnimationObserver = new IntersectionObserver(
        function (entries, skillAnimationObserver) {
          const entry = entries[0];
          if (entry.isIntersecting) {
            // add the class to make the animation
            skillDiv.current.classList.remove("translate-x-[20%]");
            skillDiv.current.classList.add("translate-x-[0%]");
            skillDiv.current.classList.add("opacity-100");
            // Un Observe the onbserver as we dont need it for second time
            skillAnimationObserver.unobserve(skillDiv.current);
          }
        },
        {
          root: null,
          threshold: 0.5,
          rootMargin: "-20px",
        },
      );

      skillAnimationObserver.observe(skillDiv.current);
    }
  }, []);

  return (
    <section className="py-6">
      <div className="flex w-full flex-col items-center gap-14 text-center">
        <h3 className="text-3xl font-extrabold tracking-wide text-slate-900 sm:text-4xl dark:text-white">
          My Skills
        </h3>
        {/* Setting opacity and transform to 0 for animation */}
        <div
          ref={skillDiv}
          className="grid translate-x-[20%] grid-cols-2 gap-x-32 gap-y-10 opacity-0 transition-all duration-700 lg:grid-cols-3"
        >
          <div className="flex flex-col items-center justify-items-start gap-4">
            <ion-icon
              name="logo-react"
              class={`h-16 w-16 fill-[#61DAFB]`}
            ></ion-icon>
            <p className="max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
              React.JS
            </p>
          </div>
          <div className="flex flex-col items-center justify-items-start gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 fill-[#764abc77]"
            >
              <title>Redux</title>
              <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
            </svg>
            <p className="max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
              Redux
            </p>
          </div>
          <div className="flex flex-col items-center justify-items-start gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 fill-[#F7DF1E]"
            >
              <title>JavaScript</title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
            <p className="max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col items-center justify-items-start gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 fill-[#06B6D4]"
            >
              <title>Tailwind CSS</title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
            <p className="max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center justify-items-start gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 fill-[#E34F26]"
            >
              <title>HTML5</title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
            <p className="max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
              HTML
            </p>
          </div>
          <div className="flex flex-col items-center justify-items-start gap-4">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 fill-[#1572B6]"
            >
              <title>CSS3</title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
            </svg>
            <p className="max-w-3xl text-center text-lg tracking-wide text-slate-600 dark:text-slate-400">
              CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
