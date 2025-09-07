import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8"
    >
      {/* Title with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-start gap-16 w-full max-w-6xl">
        {/* Contact Form with transparency + animation */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col gap-6 bg-gray-800/80 backdrop-blur-md p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-700/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-700/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-lg bg-gray-700/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info with hover + animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex flex-col gap-6 text-white"
        >
          <h3 className="text-3xl font-semibold mb-4">Get in touch</h3>

          <div className="flex items-center gap-4 group">
            <FaLinkedin
              size={30}
              className="transition-colors duration-300 group-hover:text-blue-500"
            />
            <a
              href="https://www.linkedin.com/in/amanuniyal1012/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 group-hover:text-blue-500"
            >
              linkedin.com/in/amanuniyal1012
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <FaGithub
              size={30}
              className="transition-colors duration-300 group-hover:text-black"
            />
            <a
              href="https://github.com/amanuniyal01"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 group-hover:text-black"
            >
              github.com/amanuniyal01
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone size={30} />
            <span>+91-7827443915</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope size={30} />
            <span>amanuniyal315@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt size={30} />
            <span>New Delhi, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
