
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Contact = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Shashank's AI assistant. I can help answer questions about his background, skills, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = {
    skills: "Shashank has expertise in Python, R, SQL, Machine Learning, Data Visualization (Tableau, Power BI), and statistical analysis. He's also experienced with cloud platforms and big data technologies.",
    experience: "As a recent Data Science graduate, Shashank has worked on various projects including predictive modeling, data analysis, and machine learning implementations during his studies.",
    education: "Shashank holds a Master's in Data Science and has a strong foundation in statistics, programming, and data analysis methodologies.",
    contact: "You can reach Shashank at gshashankrajgupta@gmail.com or call him at +1 667-369-8427. You can also connect with him on LinkedIn.",
    projects: "Shashank has worked on various data science projects including machine learning models, data visualization dashboards, and statistical analysis. Check out his portfolio above for more details!",
    location: "Shashank is based in Maryland, United States and is open to opportunities both locally and remotely.",
    default: "I'd be happy to help you learn more about Shashank! You can ask me about his skills, education, experience, projects, or how to contact him."
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return botResponses.skills;
    } else if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return botResponses.experience;
    } else if (message.includes('education') || message.includes('degree') || message.includes('study')) {
      return botResponses.education;
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return botResponses.contact;
    } else if (message.includes('project') || message.includes('portfolio')) {
      return botResponses.projects;
    } else if (message.includes('location') || message.includes('where')) {
      return botResponses.location;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Nice to meet you. I'm here to help you learn more about Shashank's background and qualifications. What would you like to know?";
    }
    
    return botResponses.default;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">gshashankrajgupta@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+1 667-369-8427</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Maryland, United States</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-8">
              <h4 className="text-white font-semibold mb-4">Professional Links</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/shashank-raj-gupta-gunta-523128221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  <Linkedin size={20} className="mr-3" />
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/shashank080?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  <span className="w-5 h-5 mr-3">🔗</span>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Chatbot */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 flex flex-col h-[600px]">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Chat with AI Assistant</h3>
                  <p className="text-gray-400 text-sm">Ask me anything about Shashank</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.isBot ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-white" size={16} />
                    </div>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-700 text-white'
                        : 'bg-red-500 text-white ml-auto'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={16} />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={16} />
                  </div>
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input */}
            <div className="p-6 border-t border-gray-700">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me about Shashank's skills, experience, or projects..."
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
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
