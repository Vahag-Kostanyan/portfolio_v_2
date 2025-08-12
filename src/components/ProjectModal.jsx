import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose, theme }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
      // Add padding right to prevent layout shift when scrollbar disappears
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

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
                      <SiGithub style={{ fontSize: '1.2rem' }} /> View Code
                    </a>
                  )}
                </>
              )}
            </div>

            <div className="project-description">
              <h3>About</h3>
              <p>{project.fullDescription}</p>
            </div>

            <div className='project-features'>
              {project.demoLinks &&
                project.demoLinks.map((item, index) => {
                  return (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        margin: '16px 0',
                        padding: '6px 14px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: theme === 'light' ? 'var(--text-primary)' : 'var(--text-primary)',
                        background: theme === 'light'
                          ? 'var(--accent-gradient)'
                          : 'linear-gradient(135deg, #00ffe7cc 0%, #00b3aacc 100%)',
                        boxShadow: theme === 'light'
                          ? '0 6px 15px rgba(102, 126, 234, 0.4)'
                          : '0 6px 15px rgba(0, 255, 231, 0.5)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        userSelect: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = theme === 'light'
                          ? '0 10px 25px rgba(102, 126, 234, 0.6)'
                          : '0 10px 25px rgba(0, 255, 231, 0.8)';
                        e.currentTarget.style.filter = 'brightness(1.1)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = theme === 'light'
                          ? '0 6px 15px rgba(102, 126, 234, 0.4)'
                          : '0 6px 15px rgba(0, 255, 231, 0.5)';
                        e.currentTarget.style.filter = 'brightness(1)';
                      }}

                    >
                      <span
                        role="img"
                        aria-label="demo"
                        style={{
                          fontSize: '1.2em',
                          filter: 'saturate(1.2) brightness(1.1)'
                        }}
                      >
                        🚀
                      </span>
                      View Demo {item.label}
                    </a>
                  )
                })
              }
              {project.githubLinks &&
                project.githubLinks.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        margin: '16px 0',
                        padding: '6px 14px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: theme === 'light' ? 'var(--text-primary)' : 'var(--text-primary)',
                        background: theme === 'light'
                          ? 'var(--accent-gradient)'
                          : 'linear-gradient(135deg, #00ffe7cc 0%, #00b3aacc 100%)',
                        boxShadow: theme === 'light'
                          ? '0 6px 15px rgba(102, 126, 234, 0.4)'
                          : '0 6px 15px rgba(0, 255, 231, 0.5)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        userSelect: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = theme === 'light'
                          ? '0 10px 25px rgba(102, 126, 234, 0.6)'
                          : '0 10px 25px rgba(0, 255, 231, 0.8)';
                        e.currentTarget.style.filter = 'brightness(1.1)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = theme === 'light'
                          ? '0 6px 15px rgba(102, 126, 234, 0.4)'
                          : '0 6px 15px rgba(0, 255, 231, 0.5)';
                        e.currentTarget.style.filter = 'brightness(1)';
                      }}
                    >
                      <span
                        role="img"
                        aria-label="github"
                        style={{
                          fontSize: '1.3em',
                          filter: theme === 'light' ? 'none' : 'drop-shadow(0 0 2px #00fff7)',
                          transition: 'filter 0.3s ease',
                        }}
                      >
                        <FaGithub />
                      </span>
                      View {item.label} on GitHub
                    </a>

                  );
                })
              }

            </div>

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
