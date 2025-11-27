import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Ahmad Rizqi Luthfi</h1>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {/* 3 garis */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-gray-900 md:bg-transparent
            md:flex items-center
            transition-all duration-300
            ${open ? "block" : "hidden md:block"}
          `}
        >
          <ul className="md:flex md:gap-6 text-white text-center md:text-left p-4 md:p-0">
            <li>
              <a href="#home" className="block py-2 hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
