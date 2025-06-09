
import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const careerInfo = {
    name: "Shashank Raj Gupta Gunta",
    education: {
      masters: "MS in Data Science from UMBC (May 2025)",
      bachelors: "B.Tech from GITAM University (2023)"
    },
    internship: "Business Web Solutions (2022) — Full Stack Web Development",
    projects: [
      "Healthcare Recommendation System using MIMIC-III data with XGBoost",
      "Anti-Money Laundering Detection system using PySpark",
      "Forest Fire Detection using Sentinel-2 satellite imagery"
    ],
    skills: [
      "Python", "SQL", "R", "TensorFlow", "Scikit-learn", "PySpark", 
      "AWS", "Docker", "Streamlit", "Machine Learning", "Data Visualization",
      "Tableau", "Power BI", "Statistical Analysis"
    ],
    location: "Maryland, United States",
    contact: {
      email: "gshashankrajgupta@gmail.com",
      phone: "+1 667-369-8427"
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('name') || message.includes('who are you') || message.includes('introduce')) {
      return `I'm an AI assistant for ${careerInfo.name}. He's a Data Science graduate specializing in machine learning and data analysis.`;
    } else if (message.includes('education') || message.includes('degree') || message.includes('study') || message.includes('university')) {
      return `Shashank holds an ${careerInfo.education.masters} and a ${careerInfo.education.bachelors}. He has a strong foundation in statistics, programming, and data analysis methodologies.`;
    } else if (message.includes('internship') || message.includes('work experience') || message.includes('job')) {
      return `Shashank completed an internship at ${careerInfo.internship}. As a recent graduate, he's actively seeking opportunities to apply his skills in real-world data science challenges.`;
    } else if (message.includes('project') || message.includes('portfolio')) {
      return `Shashank has worked on several impressive projects: ${careerInfo.projects.join(', ')}. Each project demonstrates his expertise in different aspects of data science and machine learning.`;
    } else if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('tools')) {
      return `Shashank's technical skills include: ${careerInfo.skills.slice(0, 8).join(', ')}, and many more. He's experienced with both traditional machine learning and modern deep learning frameworks.`;
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return `You can reach Shashank at ${careerInfo.contact.email} or call him at ${careerInfo.contact.phone}. He's based in ${careerInfo.location}.`;
    } else if (message.includes('location') || message.includes('where') || message.includes('based')) {
      return `Shashank is based in ${careerInfo.location} and is open to opportunities both locally and remotely.`;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Nice to meet you. I'm here to help you learn more about Shashank's background and qualifications. What would you like to know?";
    } else if (message.includes('experience') || message.includes('background')) {
      return `Shashank is a recent ${careerInfo.education.masters} graduate with hands-on experience from his internship at Business Web Solutions. He has worked on various data science projects and is passionate about applying machine learning to solve real-world problems.`;
    } else if (message.includes('github') || message.includes('code') || message.includes('repository')) {
      return "You can view Shashank's code and projects on his GitHub profile. Check out his portfolio above for direct links to his project repositories!";
    }
    
    return "I'd be happy to help you learn more about Shashank! You can ask me about his skills, education, experience, projects, or how to contact him. Feel free to ask specific questions about his background!";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

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
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Bot className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                <p className="text-gray-400 text-xs">Ask about Shashank</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.isBot && (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="text-white" size={12} />
                  </div>
                )}
                <div
                  className={`max-w-52 px-3 py-2 rounded-lg text-xs ${
                    message.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-red-500 text-white ml-auto'
                  }`}
                >
                  <p>{message.text}</p>
                </div>
                {!message.isBot && (
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-white" size={12} />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={12} />
                </div>
                <div className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about skills, experience..."
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-xs focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
