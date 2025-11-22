const Header = () => {
  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-500">Ahmad Rizqi Luthfi</h1>
        <nav className="flex gap-6 text-white">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
