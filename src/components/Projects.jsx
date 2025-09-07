import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Import your project images
import SwaadExpressImg from "../assets/swaadexpress.png";
import LooksMaxImg from "../assets/looksmax.png";
import CarouselImg from "../assets/carousel.png";

const Projects = () => {
  const projects = [
    {
      name: "SwaadExpress",
      description:
        "A food delivery web app built with React and TailwindCSS for seamless ordering and tracking.",
      github: "https://github.com/amanuniyal01/Swaad-Express",
      live: "https://quiet-figolla-9b53e0.netlify.app/",
      image: SwaadExpressImg,
    },
    {
      name: "LooksMax",
      description:
        "A social platform where users can share style tips and get fashion recommendations.",
      github: "https://github.com/amanuniyal01/LooksMax",
      live: "https://lnkd.in/g2rZCxu3",
      image: LooksMaxImg,
    },
    {
      name: "The Carousel",
      description:
        "A responsive image carousel project built with React and TailwindCSS for smooth animations.",
      github: "https://github.com/amanuniyal01/Carousel",
      live: "https://exquisite-choux-b2b94a.netlify.app/?",
      image: CarouselImg,
    },
  ];

  return (
    <section
      id="projects" 
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-5xl font-bold text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-violet-700 hover:bg-violet-600 text-white rounded-lg transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
              >
                Live Preview
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
