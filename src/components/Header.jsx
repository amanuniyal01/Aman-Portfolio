import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="text-2xl font-bold text-blue-400 tracking-wide hover:text-blue-300 transition-colors cursor-pointer">
          Portfolio
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-lg absolute w-full top-full left-0">
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
