import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Lab from './Lab';
import Contact from './Contact';
import '../styles/scroll-snap.scss';

const Home = () => (
  <div className="scroll-container">
    <section id="hero" className="snap-section"><Hero /></section>
    <section id="about" className="snap-section"><About /></section>
    <section id="projects" className="snap-section"><Projects /></section>
    <section id="skills" className="snap-section"><Skills /></section>
    <section id="lab" className="snap-section"><Lab /></section>
    <section id="contact" className="snap-section"><Contact /></section>
  </div>
);

export default Home; 