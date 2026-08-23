import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="portfolio-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28 text-white sm:px-8"
    >

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>


      <motion.div
        className="glass-panel relative max-w-4xl rounded-2xl p-8 text-center md:p-14 md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          About Me
        </h2>

        <p className="text-base leading-8 text-slate-300 md:text-lg">
          Hi, I'm <span className="text-blue-400 font-semibold">Aman Uniyal</span>, a passionate
          software developer specializing in <span className="text-purple-400 font-semibold">frontend</span> and
          cross-platform mobile development. I build responsive, user-friendly web and mobile
          applications using <span className="text-blue-300 font-semibold">React</span>,{" "}
          <span className="text-cyan-400 font-semibold">React Native</span>, and{" "}
          <span className="text-blue-500 font-semibold">TypeScript</span>, styled with{" "}
          <span className="text-teal-400 font-semibold">Tailwind CSS</span>. I also work across the
          full stack, building <span className="text-green-400 font-semibold">REST APIs</span> with{" "}
          <span className="text-indigo-400 font-semibold">ASP.NET</span> and managing data with{" "}
          <span className="text-sky-400 font-semibold">PostgreSQL</span>.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 hover:bg-blue-400"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-cyan-300/60 px-6 py-3 font-semibold text-cyan-300 transition-all hover:-translate-y-1 hover:bg-cyan-300 hover:text-slate-950"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;