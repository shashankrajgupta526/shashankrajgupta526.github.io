
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'technologies', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Technologies />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
