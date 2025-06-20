import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-[280px] md:pt-10 md:ml-[260px] px-4">
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
