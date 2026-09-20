import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8c8b8] bg-[#f8f3ee]/80 text-[#2a241f] shadow-lg shadow-[#d9c9b6]/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-primary text-2xl font-bold tracking-wide text-[#4f5f73] transition-colors hover:text-[#5d483a]">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 text-sm font-semibold tracking-wide text-[#4e433d] md:flex">
          <li>
            <a href="#about" className="font-secondary transition-colors hover:text-[#6f8197]">About</a>
          </li>
          <li>
            <a href="#projects" className="font-secondary transition-colors hover:text-[#6f8197]">Projects</a>
          </li>
          <li>
            <a href="#experience" className="font-secondary transition-colors hover:text-[#6f8197]">Experience</a>
          </li>
          <li>
            <a href="#skills" className="font-secondary transition-colors hover:text-[#6f8197]">Skills</a>
          </li>
          <li>
            <a href="#contact" className="font-secondary rounded-full border border-[#b99d82] px-4 py-2 text-[#4b3d33] transition-colors hover:border-[#8a7663] hover:bg-[#e7e1d8]">Contact</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="rounded-lg p-1 text-[#3a2d27] transition-colors hover:bg-[#efe5dc] focus:outline-none">
            <svg
              className="h-8 w-8 text-[#3a2d27]"
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
        <ul className="absolute left-0 top-full w-full space-y-4 border-t border-[#d8c8b8] bg-[#f8f3ee]/95 px-6 py-5 text-lg text-[#3b3029] backdrop-blur-xl md:hidden">
          <li>
            <a href="#about" className="font-secondary transition-colors hover:text-[#6f8197]" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li>
            <a href="#projects" className="font-secondary transition-colors hover:text-[#6f8197]" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#experience" className="font-secondary transition-colors hover:text-[#6f8197]" onClick={() => setIsOpen(false)}>Experience</a>
          </li>
          <li>
            <a href="#skills" className="font-secondary transition-colors hover:text-[#6f8197]" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#contact" className="font-secondary transition-colors hover:text-[#6f8197]" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
