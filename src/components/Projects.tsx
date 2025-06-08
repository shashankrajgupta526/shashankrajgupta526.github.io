
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Personalized Healthcare Recommendation System",
      description: "Built using MIMIC-III data with Logistic Regression and XGBoost models. Implemented NLP techniques with TF-IDF for text processing and achieved ROC-AUC score of 0.71. Developed interactive Streamlit frontend for healthcare professionals.",
      technologies: ["Python", "XGBoost", "TF-IDF", "Streamlit", "MIMIC-III"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Anti-Money Laundering Detection",
      description: "Developed a distributed machine learning system using PySpark for processing large financial datasets. Implemented Logistic Regression for anomaly detection with comprehensive data visualization using Matplotlib and Seaborn.",
      technologies: ["PySpark", "Logistic Regression", "Matplotlib", "Seaborn", "Big Data"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Forest Fire Detection System",
      description: "Created an early detection system using Sentinel-2 satellite imagery and deep learning models. Integrated PostgreSQL with PostGIS for geospatial data management and optimized detection algorithms for real-time monitoring.",
      technologies: ["Deep Learning", "Sentinel-2", "PostgreSQL", "PostGIS", "Computer Vision"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in data science, 
            machine learning, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-red-500/50 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
                <ArrowUp className="text-white transform rotate-45" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors duration-200">
                <Github size={16} />
                <span className="font-medium">View Project</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
