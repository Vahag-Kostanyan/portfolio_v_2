import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.scss';

const MainLayout = () => (
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
      <button className="theme-toggle">🌓</button>
    </header>
    <Outlet />
  </>
);

export default MainLayout; 