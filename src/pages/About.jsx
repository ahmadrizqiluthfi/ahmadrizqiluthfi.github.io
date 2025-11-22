import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 container mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg shadow-black/40">
          <p className="text-lg leading-relaxed text-gray-300">
            Lulusan S1 Sistem Informasi dari Universitas Nasional dengan
            pengalaman dalam bidang teknologi informasi dan layanan IT seperti
            IT Support, Helpdesk, dan pengembangan web. Terbiasa dengan
            perakitan perangkat, instalasi sistem, troubleshooting hardware &
            software, dokumentasi teknis, serta implementasi aplikasi.
            <br />
            <br />
            Selain itu, saya memiliki ketertarikan dan kemampuan pada bidang
            administratif dan analitis, termasuk Admin, Data Entry, Data
            Analyst, dan Analis Sistem. Mampu mengelola data, menyusun laporan,
            dan menggunakan berbagai tools seperti Google Sheets, Microsoft
            Office, Tableau, dan database MySQL.
            <br />
            <br />
            Saya adalah seseorang yang cepat beradaptasi, detail-oriented, dan
            terbiasa bekerja dalam tim maupun secara individual. Tujuan saya
            adalah memberikan solusi teknis yang efisien serta membantu
            meningkatkan produktivitas melalui dukungan IT dan pengelolaan data
            yang optimal.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
