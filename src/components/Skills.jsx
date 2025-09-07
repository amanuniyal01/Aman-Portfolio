import React from "react";
import { FaReact, FaGithub, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
    { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#2965f1" /> },
    { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "GitHub", icon: <FaGithub size={50} color="#FFFFFF" /> },
  ];

  return (
    <section
      id="skills" // <-- For header routing
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-5xl font-bold text-white mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            {skill.icon}
            <p className="mt-2 text-white font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
