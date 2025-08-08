import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import './Works.css';

const projects = [
  {
    id: 1,
    title: "Doctor Testing Platform",
    description: "Built a comprehensive platform for doctor testing and certification at EKENG CJSC. Improved government CRM systems and maintained secure registries.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    preview: null, // Private project
    github: null,
    image: "🏥",
    color: "#667eea",
    isPrivate: true,
    fullDescription: `A comprehensive testing platform for medical professionals in Armenia.
    
    Features:
    • Secure authentication and role-based access control
    • Real-time test taking with auto-save functionality
    • Advanced analytics and performance tracking
    • Digital certificate generation
    • Administrative dashboard for test management`,
    features: [
      "Multi-language support (Armenian, English)",
      "Adaptive testing algorithms",
      "Real-time result processing",
      "PDF certificate generation",
      "Comprehensive admin panel"
    ]
  },
  {
    id: 2,
    title: "Casino Platform",
    description: "Developed casino platforms at BetProduction with payment system integration, jackpot logic, and real-time APIs using Ember.js.",
    tech: ["Ember.js", "Node.js", "Firebase", "Payment APIs"],
    link: "#",
    image: "🎰",
    color: "#764ba2"
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Created a React + Firebase photography portfolio with lazy loading, filtering capabilities, and modern UI design.",
    tech: ["React", "Firebase", "SCSS", "Lazy Loading"],
    link: "#",
    image: "📸",
    color: "#f093fb"
  },
  {
    id: 4,
    title: "Student Testing Platform",
    description: "Built an educational platform for student testing with real-time results and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#",
    image: "📚",
    color: "#4facfe"
  },
  {
    id: 5,
    title: "Telegram Crypto Bot",
    description: "Developed Telegram bots connected to crypto wallets for automated trading and portfolio management.",
    tech: ["Python", "Telegram API", "Crypto APIs", "Web3"],
    link: "#",
    image: "🤖",
    color: "#43e97b"
  },
  {
    id: 6,
    title: "Todo App",
    description: "A modern todo application with drag-and-drop functionality, categories, and real-time synchronization.",
    tech: ["React", "Firebase", "Drag & Drop", "PWA"],
    link: "#",
    image: "✅",
    color: "#fa709a"
  }
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="works-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div className="project-header">
              <div 
                className="project-image"
                style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)` }}
              >
                <span>{project.image}</span>
              </div>
              <div className="project-overlay">
                <div className="project-actions">
                  {!project.isPrivate && (
                    <>
                      {project.preview && (
                        <motion.a
                          href={project.preview}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>🚀</span> Preview
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>💻</span> GitHub
                        </motion.a>
                      )}
                    </>
                  )}
                  <motion.button
                    className="project-link details-link"
                    onClick={() => openModal(project)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>ℹ️</span> Details
                  </motion.button>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex} 
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Works; 