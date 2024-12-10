import { MailIcon, Phone, MapPin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const baseStyleBtn =
  "pointer-events-auto mx-auto mb-8 flex w-fit items-center justify-center gap-2 rounded-lg border bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-700 dark:hover:bg-slate-600";

function ContactMe() {
  const contactImage = useRef(null);

  useEffect(function () {
    if (contactImage) {
      // Initialize the Intersection observer for animation
      const contactAnimationObserver = new IntersectionObserver(
        function (entries, contactAnimationObserver) {
          const entry = entries[0];
          if (entry.isIntersecting) {
            // add the class to make the animation
            contactImage.current.classList.remove("translate-y-[80%]");
            contactImage.current.classList.add("translate-y-[0%]");
            contactImage.current.classList.add("opacity-100");
            // Un Observe the onbserver as we dont need it for second time
            contactAnimationObserver.unobserve(contactImage.current);
          }
        },
        {
          root: null,
          threshold: 0.5,
          rootMargin: "200px",
        },
      );

      contactAnimationObserver.observe(contactImage.current);
    }
  }, []);

  return (
    <section id="contact" className="pb-2 pt-16">
      <div className="text-center">
        <h3 className="mb-6 text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl dark:text-white">
          Get In Touch
        </h3>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          Got an idea or a project? Let&apos;s bring it to life—drop me a
          message, and let&apos;s create something{" "}
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-200">
            amazing together!
          </span>
        </p>
        <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-2 sm:justify-evenly md:grid-cols-3 lg:px-24">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[8fr_90fr] items-center justify-items-start gap-2">
              <Mail className="h-8 w-8" />
              <p className="text-slate-600 dark:text-white">
                <a href="mailto:paulsidabhishek009@gmail.com">
                  paulsidabhishek009@gmail.com
                </a>
              </p>
            </div>
            <div className="grid grid-cols-[8fr_90fr] items-center justify-items-start gap-2">
              <Phone className="h-8 w-8" />
              <p className="text-slate-600 dark:text-white">
                <a href="tel:+919176173120">+91 9176173120</a>
              </p>
            </div>
            <div className="grid grid-cols-[8fr_90fr] items-center justify-items-start gap-2">
              <MapPin className="h-8 w-8" />
              <p className="text-slate-600 dark:text-white">
                Pune Maharashtra, India
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="mailto:paulsidabhishek009@gmail.com"
              className={`${baseStyleBtn} hidden lg:flex`}
            >
              <MailIcon className="h-5 w-5" />
              Say Hello
            </a>
            <a href="tel:+919176173120" className={`${baseStyleBtn} lg:hidden`}>
              <Phone className="h-5 w-5" />
              Say Hello
            </a>
          </div>
          <div className="hidden md:inline-block">
            <img
              src="../assets/Contact_Me.png"
              alt="Abhishek Paul Contact Avatar"
              className="relative z-0 h-[15rem] w-[15rem] max-w-md translate-y-[80%] opacity-0 transition-all duration-700"
              ref={contactImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
