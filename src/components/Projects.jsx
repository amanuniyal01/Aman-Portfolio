import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


import SwaadExpressImg from "../assets/SwaadExpress.png";
import LooksMaxImg from "../assets/looksmax.png";
import CarouselImg from "../assets/carousel.png";
import Diceimg from "../assets/Dice-img.png"
import weather from "../assets/weather.png"
import StreamGPT from "../assets/StreamGPT.png"
import MyTubeImg from "../assets/mytube.png"
const Projects = () => {
  const projects = [
    {
      name: "FilmAI",
      description:
        "FilmAI is a responsive video streaming interface leveraging React and modern UI architecture.Includes intelligent content discovery, scalable component design, and seamless navigation.Focused on performance, reusability, and real-time interaction powered by AI-enhanced features.",
      github: "https://github.com/amanuniyal01/Stream-GPT",
      live: "https://filmai66.netlify.app/",
      image: StreamGPT,
    },
    {
      name: "SwaadExpress",
      description:
        "A food delivery web app built with React and TailwindCSS for seamless ordering and tracking.",
      github: "https://github.com/amanuniyal01/Swaad-Express",
      live: "https://swaadexpress22.netlify.app/",
      image: SwaadExpressImg,
    },
    {
      name: "MyTube",
      description:
        "myTube is a YouTube-inspired video streaming application User Interface built using React and Redux. It features dynamic video rendering via API integration, a responsive UI, and personalized sections like Liked Videos for an interactive user experience.",
      github: "https://github.com/amanuniyal01/MyTube",
      live: "https://my-tube25.vercel.app/",
      image: MyTubeImg,
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
      className="portfolio-section flex min-h-screen flex-col items-center justify-center px-6 py-28 sm:px-8"
    >
      <h2 className="section-heading text-center">Projects</h2>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-panel group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-cyan-950/50"
          >
            <img
              src={project.image}
              alt={project.name}
              className="mb-5 h-48 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <h3 className="mb-3 text-2xl font-bold text-white">{project.name}</h3>
            <p className="mb-6 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="flex items-center justify-between gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg bg-violet-700 px-4 py-2 text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-violet-600"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
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
