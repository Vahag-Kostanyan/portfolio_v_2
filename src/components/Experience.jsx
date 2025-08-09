import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    title: "Middle Fullstack Developer",
    company: "BetProduction · Armenia, Erevan",
    period: "2023 – Present",
    description: `• Integrated payment systems for secure transactions.
• Developed and managed email and SMS notification systems.
• Created and integrated RESTful APIs for platform communication.
• Managed MySQL databases, optimizing performance and data integrity.
• Built and maintained front-end features using Ember.js, enhancing user interfaces and application functionality.`,
    tech: ["PHP", "Yii2", "MySQL", "Ember.js", "SCSS"]
  },
  {
    title: "Junior Fullstack Developer",
    company: "EKENG · Armenia, Erevan",
    period: "2022 – 2023",
    description: `Worked closely with the governor's staff on state projects, including:
• Doctors Testing Platform: Developed a platform for assessing the knowledge of healthcare professionals.
• CRM: Enhanced user experience and optimized workflows for government applications.
• GIP: Played a key role in developing a comprehensive portal for state departments.
• CSO: Developed and maintained a secure registry for managing information about civil servants.`,
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery"]
  }
];

const Experience = () => {
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
      className="experience-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="section-title"
        variants={itemVariants}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="card-header">
                <h3 className="job-title">{exp.title}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <p className="description" style={{ whiteSpace: 'pre-line' }}>{exp.description}</p>
              <div className="tech-stack">
                {exp.tech.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
