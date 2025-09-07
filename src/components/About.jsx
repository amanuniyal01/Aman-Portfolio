import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>

      {/* Content */}
      <motion.div
        className="relative max-w-4xl text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-blue-400 font-semibold">Aman Uniyal</span>, a passionate web developer
          specializing in <span className="text-purple-400 font-semibold">frontend</span> and <span className="text-blue-400 font-semibold">backend</span> development. 
          I build responsive, user-friendly, and visually appealing websites and applications using 
          <span className="text-blue-300 font-semibold"> React</span>, <span className="text-green-400 font-semibold">Node.js</span>, 
          and <span className="text-teal-400 font-semibold"> TailwindCSS</span>.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
