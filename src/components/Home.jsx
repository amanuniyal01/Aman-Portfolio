import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyPhoto from "../assets/aman2.jpeg";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id="home" className="portfolio-section flex min-h-screen w-full items-center justify-center px-6 py-28">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:justify-between">

        {/* Text Section */}
        <div
          className={`mt-10 text-center transition-all duration-1000 ease-out md:mt-0 md:w-6/12 md:text-left ${animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
        >
          <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
            Hello, I’m Aman Uniyal
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300 md:mx-0 md:text-lg">
            I’m a passionate frontend developer specializing in React and React Native, with hands-on experience building REST APIs and working across the full stack. I build responsive, user-friendly, and visually appealing web and mobile applications.
          </p>

          {/* Resume and Social Links */}
          <div className="mt-9 flex items-center justify-center gap-5 md:justify-start">
            {/* See My Resume */}
            <a
              href="/AmanUniyalAugustResume.pdf"
              download="AmanUniyalAugustResume.pdf"
              className="rounded-lg bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-1 hover:bg-cyan-200"
            >
              See My Resume
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/amanuniyal01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-3xl text-slate-400 transition-all hover:-translate-y-1 hover:text-white"
            >
              <FaGithub />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/aman-uniyal-1280b628b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-3xl text-slate-400 transition-all hover:-translate-y-1 hover:text-cyan-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>


        <div
          className={`flex justify-center transition-all duration-1000 ease-out md:w-5/12 md:justify-end ${animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
        >
          <img
            src={MyPhoto}
            alt="Aman Uniyal"
            className="h-64 w-64 rounded-full border-8 border-white/10 object-cover shadow-2xl shadow-cyan-950/50 ring-1 ring-cyan-300/30 md:h-80 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;