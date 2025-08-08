import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import myImage from '../assets/images/me.jpeg'; // Adjust the path as necessary

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-content">
        <motion.div 
          className="about-image"
          variants={itemVariants}
        >
          <div style={{backgroundImage: `url(${myImage})`}} className="profile-placeholder">
            <div className="profile-glow"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text"
          variants={itemVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="greeting"
          >
            Hi, I'm <span className="highlight">Vahag Kostanyan</span>
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="title"
          >
            Full-Stack Web Developer
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="bio"
          >
            I'm a passionate developer with 3+ years of experience building modern web applications. 
            I specialize in React, Node.js, Laravel, and PHP, creating fast, responsive, and secure solutions.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="bio"
          >
            Based in Armenia, I love turning complex problems into simple, beautiful solutions. 
            When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="quote-container"
          >
            <blockquote className="quote">
              "The best code is no code at all, but when you must code, make it beautiful."
            </blockquote>
            <cite className="quote-author">— Vahag Kostanyan</cite>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 