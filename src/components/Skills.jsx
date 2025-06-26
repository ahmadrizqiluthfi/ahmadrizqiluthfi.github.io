// File: src/components/Skills.jsx

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 60 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 60 },
    { name: "PHP", level: 70 },
    { name: "IT Support", level: 85 },
    { name: "Adobe Photoshop, Premiere", level: 70 },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold border-b-4 border-blue-500 inline-block pb-1 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
