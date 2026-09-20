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
          <h1 className="text-5xl font-bold text-[#201b1a] sm:text-6xl md:text-7xl">
            Hello, I’m Aman Uniyal
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#4f4742] md:mx-0 md:text-lg">
            I’m a passionate frontend developer specializing in React and React Native, with hands-on experience building REST APIs and working across the full stack. I build responsive, user-friendly, and visually appealing web and mobile applications.
          </p>

          {/* Resume and Social Links */}
          <div className="mt-9 flex items-center justify-center gap-5 md:justify-start">
            {/* See My Resume */}
            <a
              href="/AmanUniyalAugustResume.pdf"
              download="AmanUniyalAugustResume.pdf"
              className="rounded-lg bg-[#5d483a] px-6 py-3 font-semibold text-[#fffaf5] shadow-lg shadow-[#bba088]/25 transition-all hover:-translate-y-1 hover:bg-[#4b392f]"
            >
              See My Resume
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/amanuniyal01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-3xl text-[#6d5c52] transition-all hover:-translate-y-1 hover:text-[#3b4d61]"
            >
              <FaGithub />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/aman-uniyal-1280b628b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-3xl text-[#6d5c52] transition-all hover:-translate-y-1 hover:text-[#4f5f73]"
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
            className="h-64 w-64 rounded-full border-8 border-[#d8c8b8] object-cover shadow-2xl shadow-[#d4c0ac]/35 ring-1 ring-[#a3b3be] md:h-80 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;