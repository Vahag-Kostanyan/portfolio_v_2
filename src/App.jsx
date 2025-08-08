import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navbar from './components/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      closeMobileMenu();
    }
  };

  return (
    <div className="App" data-theme={theme}>
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} activeSection={activeSection} scrollToSection={scrollToSection} />


      {/* Main Content */}
      <main className="main-content">
        <section id="about" className="section">
          <About theme={theme} />
        </section>

        <section id="experience" className="section">
          <Experience theme={theme} />
        </section>

        <section id="projects" className="section">
          <Works theme={theme} />
        </section>

        <section id="skills" className="section">
          <Skills theme={theme} />
        </section>

        <section id="contact" className="section">
          <Contact theme={theme} />
        </section>
      </main>
    </div>
  );
}

export default App;
