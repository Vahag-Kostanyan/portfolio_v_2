import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <span></span>
            <span></span>
          </button>

          <div className="modal-header" style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)` }}>
            <div className="modal-icon">{project.image}</div>
            <h2>{project.title}</h2>
          </div>

          <div className="modal-body">
            <div className="project-links">
              {project.isPrivate ? (
                <div className="private-notice">
                  <span className="lock-icon">🔒</span>
                  This project is not available to the public
                </div>
              ) : (
                <>
                  {project.preview && (
                    <a href={project.preview} target="_blank" rel="noopener noreferrer" className="modal-button">
                      <span>🚀</span> Live Preview
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-button">
                      <span>💻</span> View Code
                    </a>
                  )}
                </>
              )}
            </div>

            <div className="project-description">
              <h3>About</h3>
              <p>{project.fullDescription}</p>
            </div>

            {project.features && (
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
