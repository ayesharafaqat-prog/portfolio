'use client';
import React, { useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Portfolio</a>
      
      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-btn">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <a href="#contact" className="btn-primary desktop-only">Hire Me</a>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <li>
            <a href="#contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;