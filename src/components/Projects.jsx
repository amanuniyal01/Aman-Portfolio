import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


import SwaadExpressImg from "../assets/swaadexpress.png";
import LooksMaxImg from "../assets/looksmax.png";
import CarouselImg from "../assets/carousel.png";
import Diceimg from "../assets/Dice-img.png"
import weather from "../assets/weather.png"
import StreamGPT from "../assets/StreamGPT.png"
const Projects = () => {
  const projects = [
    {
      name: "Stream-GPT",
      description:
        "StreamGPT is a responsive video streaming interface leveraging React and modern UI architecture.Includes intelligent content discovery, scalable component design, and seamless navigation.Focused on performance, reusability, and real-time interaction powered by AI-enhanced features.",
      github: "https://github.com/amanuniyal01/Stream-GPT",
      live: "https://stream-gpt23.vercel.app/",
      image: StreamGPT,
    },
    {
      name: "SwaadExpress",
      description:
        "A food delivery web app built with React and TailwindCSS for seamless ordering and tracking.",
      github: "https://github.com/amanuniyal01/Swaad-Express",
      live: "https://lambent-vacherin-c484ba.netlify.app/",
      image: SwaadExpressImg,
    },
    {
      name: "MyTube",
      description:
        "",
      github: "",
      live: "https://lambent-vacherin-c484ba.netlify.app/",
      image: SwaadExpressImg,
    },
    {
      name: "LooksMax",
      description:
        "A E-Commerce Website where users can share style tips and get fashion recommendations.",
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
    {
      name: "Dice-Game",
      description:
        "🎲 Dice Game — A fun and interactive web game built using React. The player rolls a virtual dice and tracks their score based on random outcomes. It features smooth UI transitions, dynamic state updates, and responsive design for an engaging experience.",
      github: "https://github.com/amanuniyal01/dice-game",
      live: "https://stirring-gumption-61d22c.netlify.app/",
      image: Diceimg,
    }, {
      name: "Weather App",
      description:
        " A simple and beautiful React Weather Application that displays the current temperature, weather condition, and city information using the OpenWeather API",

      github: "https://github.com/amanuniyal01/Weather-App",
      live: "https://coruscating-meerkat-c9090c.netlify.app/",
      image: weather,
    }
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
