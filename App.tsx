import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      
      // Update URL hash without jumping
      if (id !== 'home') {
        window.history.pushState(null, '', `#${id}`);
      } else {
         window.history.pushState(null, '', window.location.pathname);
      }
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage={activeSection} onNavigate={navigate} />
        
        <main className="flex-grow">
          <div id="home">
            <Home onNavigate={navigate} />
          </div>
          
          <div id="services">
            <Services onNavigate={navigate} />
          </div>
          
          <div id="about">
            <About onNavigate={navigate} />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer onNavigate={navigate} />
      </div>
    </div>
  );
};

export default App;