
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "ML/AI Frameworks",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "PyTorch", level: 85 },
        { name: "VertexAI", level: 80 },
        { name: "GANs", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "React", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "Power BI", level: 90 },
        { name: "Streamlit", level: 95 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 }
      ]
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Technologies Mastered" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here's an overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-md mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-red-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section - moved after Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Work Experience</h3>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">BWS</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">Full Stack Developer Intern</h4>
                <p className="text-red-500 font-medium">Business Web Solutions</p>
                <p className="text-gray-400 mb-4">May 2022 – July 2022</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Developed a college library website using HTML, CSS, JavaScript, Django, and React</li>
                  <li>• Gained real-world experience in full-stack development and agile environments</li>
                  <li>• Collaborated with cross-functional teams to deliver high-quality web solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
