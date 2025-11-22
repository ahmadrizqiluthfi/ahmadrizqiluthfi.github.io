import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website (React.js)",
      desc: "Website portofolio pribadi menggunakan React.js dan Tailwind CSS, menampilkan profil, skills, pengalaman kerja, dan proyek.",
      tech: ["React", "Tailwind", "JavaScript"],
    },
    {
      title: "Sistem Diagnosa Penyakit TBC",
      desc: "Sistem pakar berbasis web untuk diagnosa penyakit TBC menggunakan PHP dan MySQL. Dibuat sebagai tugas akhir.",
      tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "Trekkingnesia Sentul",
      desc: "Website promosi wisata trekking Sentul menggunakan HTML, CSS, dan Bootstrap. (Website asli telah ditakedown.)",
      tech: ["HTML", "CSS", "Bootstrap", "PHP"],
    },
    {
      title: "UAT Form Testing & Documentation",
      desc: "Penyusunan dokumen UAT, pengujian aplikasi internal, dokumentasi bug, dan koordinasi dengan tim developer.",
      tech: ["UAT", "Documentation", "QA Testing"],
    },
    {
      title: "Corporate Data Migration & Backup",
      desc: "Migrasi data perangkat laptop/PC karyawan serta backup data sebagai bagian dari layanan IT Support.",
      tech: ["Windows", "Backup", "IT Support", "IT Helpdesk"],
    },
    {
      title: "Administrasi Program Bantuan Nasional – PT Pos Indonesia",
      desc: "Mengelola administrasi dan dukungan operasional untuk program bantuan sosial nasional (Stunting, CBP, AML). Memvalidasi data penerima bantuan dari seluruh cabang, menyusun laporan, dan memastikan akurasi pelaporan menggunakan Google Sheets.",
      tech: ["Administration", "Google Sheets", "Data Entry", "Reporting"],
    },
  ];

  return (
    <section id="projects" className="py-20 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-fr">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 border p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition transform h-full flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 1.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-lg tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
