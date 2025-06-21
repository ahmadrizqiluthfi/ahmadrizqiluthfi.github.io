// File: src/components/Projects.jsx

const projects = [
  {
    title: "Website Deteksi Penyakit TBC",
    description: <>Membangun sistem deteksi penyakit TBC berbasis web.</>,
  },
  {
    title: "Trekkingnesia Sentul",
    description: (
      <>
        Merancang dan membangun website pariwisata menggunakan HTML, CSS, PHP,
        dan <span className="italic">Bootstrap</span>.
      </>
    ),
  },
  {
    title: "IT Support",
    description: (
      <>
        Melakukan perakitan serta instalasi komputer, serta melakukan
        pemeliharaan (<span className="italic">maintenance</span>) perangkat
        lunak dan perangkat keras pada PC maupun laptop.
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
