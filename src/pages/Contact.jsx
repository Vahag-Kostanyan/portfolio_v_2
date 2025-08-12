import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Contact from '../components/Contact';

const ContactPage = () => {
  const { theme } = useOutletContext();
  
  return (
    <section className="contact">
      <Contact theme={theme} />
    </section>
  );
};

export default ContactPage; 