import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyPhoto from "../assets/aman.jpg"; // replace with your photo path

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center md:justify-between gap-8">

        {/* Text Section */}
        <div
          className={`text-center md:text-left md:w-6/12 transition-all duration-1000 ease-out mt-20 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Hello, I’m Aman Uniyal
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
            I’m a passionate web developer specializing in modern frontend and backend technologies. I build responsive, user-friendly, and visually appealing websites and applications.
          </p>

          {/* Resume and Social Links */}
          <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
            {/* See My Resume */}
            <a
              href="./AmanResume.pdf" 
              download
              className="px-6 py-3 bg-violet-900 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors"
            >
              See My Resume
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/amanuniyal01" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-3xl transition-colors"
            >
              <FaGithub />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/aman-uniyal-1280b628b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 text-3xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Photo Section */}
        <div
          className={`md:w-5/12 flex justify-center md:justify-end transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src={MyPhoto}
            alt="Aman Uniyal"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
