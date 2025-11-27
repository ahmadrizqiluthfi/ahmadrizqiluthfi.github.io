import { motion } from "framer-motion";
import CV from "../assets/CV_AHMAD_RIZQI_LUTHFI.pdf";
import Profile from "../assets/Profile.png";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="py-32 container mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="mx-auto w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden mb-6 border-4 border-blue-500 shadow-xl">
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
        Ahmad Rizqi Luthfi
      </h1>
      <p className="text-lg md:text-xl text-blue-300 mb-4">
        IT Support • IT Helpdesk • Administration
      </p>
      <p className="max-w-2xl mx-auto text-gray-300 mb-10 text-sm md:text-base px-2">
        Seorang IT Support, IT Helpdesk, dan Administrator dengan pengalaman
        menangani troubleshooting, jaringan dasar, dan sistem administrasi.
        Senang memecahkan masalah teknis serta mendukung kelancaran operasional
        user.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
        <a
          href={CV}
          download="CV_Ahmad_Rizqi_Luthfi.pdf"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
