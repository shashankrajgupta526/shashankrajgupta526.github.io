
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-red-500">Hello,</span> I'm{' '}
              <span className="text-white">Shashank</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mt-4">
              Data Science Graduate
            </h2>
            
            <p className="text-lg text-gray-300 mt-6 max-w-2xl">
              Motivated data science graduate with expertise in ML, data engineering, and analytics. 
              Passionate about building intelligent systems that turn raw data into actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://www.dropbox.com/scl/fi/wfk1bzjgttl99lsefyn1l/shashankgunta-resume.pdf?rlkey=mzqvdv8n27rkb6xreqjt9qtki&st=oygi55lp&dl=0', '_blank')}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-red-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Let's Talk
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <a 
                href="https://github.com/shashank080?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shashank-raj-gupta-gunta-523128221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/pTqpZFXr/IMG-9267-2.jpg"
                    alt="Shashank Raj Gupta Gunta"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-500 rounded-full p-3">
                <span className="text-white font-bold">DS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
