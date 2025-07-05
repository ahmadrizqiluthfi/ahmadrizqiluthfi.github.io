// File: src/components/Projects.jsx

const projects = [
  {
    title: "Website Deteksi Penyakit TBC",
    description: (
      <>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Merancang dan mengembangkan portofolio pribadi untuk menampilkan
            proyek, bio, dan kontak
          </li>
          <li>
            Menggunakan <i>HTML</i>, <i>CSS</i>, <i>JavaScript</i>, dan{" "}
            <i>React</i>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Trekkingnesia Sentul",
    description: (
      <>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Merancang dan membangun <i>website</i> promosi wisata lokal
          </li>
          <li>
            Menggunakan <i>HTML</i>, <i>CSS</i>, <i>Bootstrap 4</i>, dan{" "}
            <i>PHP</i>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Website Portofolio Pribadi",
    description: (
      <>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Membangun sistem web untuk mendeteksi penyakit TBC sebagai bagian
            dari tugas akhir
          </li>
          <li>
            Menggunakan <i>PHP</i>, <i>MySQL</i>, dan <i>HTML/CSS</i> untuk
            pengolahan gejala dan diagonosis
          </li>
        </ul>
      </>
    ),
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold border-b-4 border-blue-500 inline-block pb-1 mb-6">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
