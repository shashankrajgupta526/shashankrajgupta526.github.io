
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              I'm Shashank, A Data Science Graduate
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a graduate student who recently completed a Master's in Data Science. 
              I'm passionate about building intelligent systems that turn raw data into actionable insights. 
              My expertise spans across data pipelines, machine learning, and analytics, and I aim to use 
              my skills to drive impact in real-world scenarios.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in both theoretical knowledge and practical application, 
              I've worked on diverse projects ranging from healthcare recommendation systems to 
              environmental monitoring using deep learning and satellite imagery.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-500"></div>
              
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Master's in Data Science</h4>
                  <p className="text-red-500 font-medium">University of Maryland Baltimore County</p>
                  <p className="text-gray-400">May 2025</p>
                </div>
              </div>
              
              <div className="relative flex items-start space-x-6 mt-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">BT</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Bachelor of Technology</h4>
                  <p className="text-teal-500 font-medium">GITAM University, Hyderabad</p>
                  <p className="text-gray-400">April 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
