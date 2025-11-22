import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Troubleshooting Hardware/Software",
    "HTML/CSS",
    "Basic React.js",
    "Basic Tailwind CSS",
    "JavaScript",
    "Basic Node.js",
    "HTML/CSS",
    "Basic PHP",
    "Basic Python",
    "Basic Linux",
    "Basic Networking",
    "Basic MySQL",
    "Microsoft Office",
    "Google Workspace",
    "Data Entry",
    "Reporting",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="py-20 container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-blue-600 p-3 md:p-4 text-sm md:text-base rounded-xl text-center font-medium shadow-md hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 1.5, ease: "easeOut" }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
