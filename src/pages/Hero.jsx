import React from 'react';
import '../styles/hero.scss';

const Hero = () => (
  <section className="hero">
    {/* Animated canvas background will go here */}
    <div className="hero__content">
      <h1>I’m Vahag Kostanyan</h1>
      <h2>Full-stack web engineer exploring simplicity with depth.</h2>
      <div className="scroll-indicator">Scroll Down ↓</div>
    </div>
  </section>
);

export default Hero; 