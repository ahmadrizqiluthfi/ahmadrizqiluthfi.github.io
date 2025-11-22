import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 container mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email - Kiri */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:ahmadrizqiluthfi007@gmail.com"
              className="text-blue-400 hover:underline break-all"
            >
              ahmadrizqiluthfi007@gmail.com
            </a>
          </div>

          {/* LinkedIn - Kanan */}
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/arizqiluthfi-353238219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              linkedin.com/in/arizqiluthfi-353238219
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
