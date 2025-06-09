
import { Mail } from 'lucide-react';

const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:gshashankrajgupta@gmail.com';
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect with <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm a recent Data Science graduate actively seeking opportunities to apply my skills in real-world challenges. Let's discuss how I can add value to your organization.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContactClick}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-3 shadow-lg"
          >
            <Mail size={24} />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Shashank Raj Gupta Gunta. Built with passion and dedication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
