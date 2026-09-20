import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="portfolio-section relative flex items-center justify-center overflow-hidden px-6 py-28 text-white sm:px-8"
    >

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#d7c3b1] opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#b9c7d4] opacity-20 blur-3xl animate-pulse"></div>


      <motion.div
        className="glass-panel relative max-w-4xl rounded-2xl p-8 text-center md:p-14 md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-heading font-primary mb-6 text-[#251f1c]">
          About Me
        </h2>

        <p className="font-subsecondary text-base leading-8 text-[#4f4742] md:text-lg">
          Hi, I'm <span className="font-semibold text-[#5d483a]">Aman Uniyal</span>, a passionate
          software developer specializing in <span className="font-semibold text-[#6f8197]">frontend</span> and
          cross-platform mobile development. I build responsive, user-friendly web and mobile
          applications using <span className="font-semibold text-[#3d5c76]">React</span>,{" "}
          <span className="font-semibold text-[#6b7d8f]">React Native</span>, and{" "}
          <span className="font-semibold text-[#4a5f73]">TypeScript</span>, styled with{" "}
          <span className="font-semibold text-[#826a51]">Tailwind CSS</span>. I also work across the
          full stack, building <span className="font-semibold text-[#6e7a4a]">REST APIs</span> with{" "}
          <span className="font-semibold text-[#5f4337]">ASP.NET</span> and managing data with{" "}
          <span className="font-semibold text-[#49657f]">PostgreSQL</span>.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="rounded-lg bg-[#5d483a] px-6 py-3 font-semibold text-[#fffaf5] shadow-lg shadow-[#bca38e]/25 transition-all hover:-translate-y-1 hover:bg-[#4b392f]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[#a68a72] px-6 py-3 font-semibold text-[#4a3a30] transition-all hover:-translate-y-1 hover:bg-[#e8dacc]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;