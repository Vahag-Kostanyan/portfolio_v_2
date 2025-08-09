import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ scrollToSection, activeSection, toggleMobileMenu, isMobileMenuOpen, toggleTheme, theme }) => {
    // We use the existing toggleMobileMenu function for closing the menu.
    // There is no need for a separate closeMobileMenu function here as the
    // toggle function handles both opening and closing.

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Desktop Logo - Hidden on Mobile */}
                <motion.div
                    className="nav-logo desktop-logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => scrollToSection('about')}
                >
                    VK
                </motion.div>
                
                {/* Mobile Logo - Hidden on Desktop */}
                <motion.div
                    className="nav-logo mobile-logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => scrollToSection('about')}
                >
                    VK
                </motion.div>
                
                {/* Desktop Navigation */}
                <motion.ul
                    className="nav-menu desktop-nav"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <li>
                        <button
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={() => scrollToSection('about')}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                            onClick={() => scrollToSection('experience')}
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={() => scrollToSection('skills')}
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </button>
                    </li>
                </motion.ul>

                {/* Mobile Menu Button */}
                <motion.button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </motion.button>

                {/* Theme Toggle Button */}
                <motion.button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </motion.button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-nav-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        // Use the existing toggleMobileMenu prop to close the menu
                        onClick={toggleMobileMenu}
                    >
                        <motion.div
                            className="mobile-nav-content"
                            initial={{ y: '100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '100%', opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mobile-nav-header">
                                <motion.button
                                    className="mobile-close-btn"
                                    // Use the existing toggleMobileMenu prop to close the menu
                                    onClick={toggleMobileMenu}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span></span>
                                    <span></span>
                                </motion.button>
                            </div>
                            
                            <motion.ul
                                className="mobile-nav-menu"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {[
                                    { id: 'about', label: 'About' },
                                    { id: 'experience', label: 'Experience' },
                                    { id: 'projects', label: 'Projects' },
                                    { id: 'skills', label: 'Skills' },
                                    { id: 'contact', label: 'Contact' }
                                ].map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    >
                                        <button
                                            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                            onClick={() => {
                                                scrollToSection(item.id);
                                                toggleMobileMenu();
                                            }}
                                        >
                                            <span className="mobile-nav-number">{(index + 1).toString().padStart(2, '0')}</span>
                                            <span className="mobile-nav-label">{item.label}</span>
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            
                            <motion.div
                                className="mobile-nav-footer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <p>Let's create something amazing together</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
