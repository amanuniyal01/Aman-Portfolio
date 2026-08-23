import React from "react";
import {
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaServer,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiReactrouter,
  SiSass,
  SiDotnet,
  SiSharp,
  SiPostgresql,
  SiNetlify,
  SiPostman,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    // Frontend
    { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
    { name: "React Native", icon: <TbBrandReactNative size={50} color="#61DBFB" /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={50} color="#3178C6" /> },
    { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },
    { name: "React Router", icon: <SiReactrouter size={50} color="#CA4245" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38B2AC" /> },
    { name: "SCSS", icon: <SiSass size={50} color="#CC6699" /> },
    { name: "HTML5", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} color="#2965f1" /> },

    // Backend & Database
    { name: "ASP.NET", icon: <SiDotnet size={50} color="#512BD4" /> },
    { name: "C#", icon: <SiSharp size={50} color="#239120" /> },
    { name: "REST APIs", icon: <FaServer size={50} color="#4ADE80" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#4169E1" /> },

    // Tools & Platforms
    { name: "Git", icon: <FaGitAlt size={50} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={50} color="#FFFFFF" /> },
    { name: "Firebase", icon: <SiFirebase size={50} color="#FFCA28" /> },
    { name: "Figma", icon: <FaFigma size={50} color="#F24E1E" /> },
    { name: "Netlify", icon: <SiNetlify size={50} color="#00C7B7" /> },
    { name: "Postman", icon: <SiPostman size={50} color="#FF6C37" /> },
  ];

  return (
    <section
      id="skills"
      className="portfolio-section flex min-h-screen flex-col items-center justify-center px-6 py-28 sm:px-8"
    >
      <h2 className="section-heading text-center">Skills</h2>
      <div className="grid w-full max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: (index % 10) * 0.08 }}
            className="glass-panel flex min-h-32 flex-col items-center justify-center rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-800/80"
          >
            {skill.icon}
            <p className="mt-2 text-white font-semibold text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;