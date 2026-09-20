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
      className="portfolio-section flex min-h-screen flex-col items-center justify-center px-6 py-28 sm:px-8"
    >
      {/* Title with animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-heading font-primary text-center"
      >
        Contact Me
      </motion.h2>

      <div className="flex w-full max-w-6xl flex-col items-start gap-10 lg:flex-row lg:gap-16">
        {/* Contact Form with transparency + animation */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel flex w-full flex-1 flex-col gap-6 rounded-2xl p-6 sm:p-8"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg border border-[#d8c8b8] bg-[#f7f1eb] p-4 text-[#1e1a18] placeholder-[#766a64] transition focus:border-[#758aa1] focus:outline-none focus:ring-2 focus:ring-[#dfe7ee]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg border border-[#d8c8b8] bg-[#f7f1eb] p-4 text-[#1e1a18] placeholder-[#766a64] transition focus:border-[#758aa1] focus:outline-none focus:ring-2 focus:ring-[#dfe7ee]"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="rounded-lg border border-[#d8c8b8] bg-[#f7f1eb] p-4 text-[#1e1a18] placeholder-[#766a64] transition focus:border-[#758aa1] focus:outline-none focus:ring-2 focus:ring-[#dfe7ee]"
          ></textarea>
          <button
            type="submit"
            className="rounded-lg bg-[#5d483a] px-6 py-3 font-bold text-[#fffaf5] transition-all hover:-translate-y-1 hover:bg-[#4b392f]"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info with hover + animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex w-full flex-1 flex-col gap-6 text-[#2e2824] lg:pt-4"
        >
          <h3 className="font-primary mb-4 text-3xl font-semibold">Get in touch</h3>

          <div className="flex items-center gap-4 group">
            <FaLinkedin
              size={30}
              className="transition-colors duration-300 group-hover:text-[#4f5f73]"
            />
            <a
              href="https://www.linkedin.com/in/amanuniyal1012/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 group-hover:text-[#4f5f73]"
            >
              linkedin.com/in/amanuniyal1012
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <FaGithub
              size={30}
              className="transition-colors duration-300 group-hover:text-[#2d2d2d]"
            />
            <a
              href="https://github.com/amanuniyal01"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 group-hover:text-[#2d2d2d]"
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
