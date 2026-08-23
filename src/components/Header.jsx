import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gray-950/75 text-white shadow-2xl backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-['Space_Grotesk'] text-2xl font-bold tracking-wide text-cyan-300 transition-colors hover:text-cyan-200">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 text-sm font-semibold tracking-wide text-slate-300 md:flex">
          <li>
            <a href="#about" className="transition-colors hover:text-cyan-300">About</a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-cyan-300">Projects</a>
          </li>
          <li>
            <a href="#experience" className="transition-colors hover:text-cyan-300">Experience</a>
          </li>
          <li>
            <a href="#skills" className="transition-colors hover:text-cyan-300">Skills</a>
          </li>
          <li>
            <a href="#contact" className="rounded-full border border-cyan-300/40 px-4 py-2 text-cyan-200 transition-colors hover:border-cyan-200 hover:bg-cyan-300/10">Contact</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="rounded-lg p-1 text-slate-200 transition-colors hover:bg-white/10 focus:outline-none">
            <svg
              className="h-8 w-8 text-white"
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
        <ul className="absolute left-0 top-full w-full space-y-4 border-t border-white/10 bg-gray-950/95 px-6 py-5 text-lg backdrop-blur-xl md:hidden">
          <li>
            <a href="#about" className="transition-colors hover:text-cyan-300" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-cyan-300" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#experience" className="transition-colors hover:text-cyan-300" onClick={() => setIsOpen(false)}>Experience</a>
          </li>
          <li>
            <a href="#skills" className="transition-colors hover:text-cyan-300" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-cyan-300" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
