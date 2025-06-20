// File: src/components/Navbar.jsx

import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
  ];

  return (
    <>
      {/* ==== DESKTOP SIDEBAR ==== */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-[260px] flex-col justify-between bg-[#0a192f] text-white px-6 py-10 z-50">
        <div>
          {/* Logo & Animated Role */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Ahmad Rizqi Luthfi</h1>
            <div className="text-sm text-gray-400 mt-1">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "IT Support",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-white font-semibold border-l-4 border-blue-500 pl-2"
                className="block text-gray-400 hover:text-white cursor-pointer"
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>

        {/* Ikon Sosial dan Footer */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-4 text-xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/arizqiluthfi-353238219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/6285219668580"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:ahmadrizqiluthfi007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; 2025 Ahmad Rizqi Luthfi
          </p>
        </div>
      </aside>

      {/* ==== MOBILE HEADER ==== */}
      <header className="md:hidden px-6 py-6 bg-[#0a192f] text-white text-center">
        <h1 className="text-3xl font-bold">Ahmad Rizqi Luthfi</h1>
        <div className="text-lg text-gray-400 mt-1">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "IT Support",
              2000,
              "Freelancer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Ikon Sosial di Mobile */}
        <div className="flex justify-center mt-4 space-x-4 text-xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/arizqiluthfi-353238219"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/6285219668580"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:ahmadrizqiluthfi007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </header>
    </>
  );
}
