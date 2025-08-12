import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.scss';

const MainLayout = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className="header">
        <a className="site-title" href="#hero">Vahag Kostanyan</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#lab">Lab</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌓' : '☀️'}
        </button>
      </header>
      <main className={theme}>
        <Outlet context={{ theme }} />
      </main>
    </>
  );
};

export default MainLayout; 