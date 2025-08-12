import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTelegram, FaCloudDownloadAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from 'emailjs-com';

const Contact = ({ theme }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop default form submit
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_blb0m2k', // Your EmailJS service ID
        'template_kwjnvhh', // Your EmailJS template ID
        form.current,       // Use the actual form reference
        '2uUQg2XUBnx8-OmLy' // Your EmailJS public key
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        alert('Thank you for your message! I\'ll get back to you soon.');
        form.current.reset(); // clear form
      })
      .catch((error) => {
        console.error("Email send error:", error.text);
        alert('Failed to send email, please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vahagn-kostanyan', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/Vahag-Kostanyan', icon: <FaGithub /> },
    { name: 'Email', url: 'mailto:vahag.kostanyan974@gmail.com', icon: <SiGmail /> },
    { name: 'Phone', url: 'tel:+37498195868', icon: <FiPhoneCall /> },
    { name: 'Telegram', url: 'https://t.me/vahagkostanyan974', icon: <FaTelegram /> },
    { name: 'Download CV', url: 'cv.pdf', icon: <FaCloudDownloadAlt /> },
  ];

  return (
    <div className="contact-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Let's work together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="social-links">
            <h4>Connect with me</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1 }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          autoComplete="off"
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="from_name"
              autoComplete="off"
              name="from_name"
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              name="from_email"
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            style={{
              background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
              color: theme === 'light' ? '#000' : '#fff',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
export default Contact; 