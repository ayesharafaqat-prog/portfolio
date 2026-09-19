'use client';
import React from 'react';
import { userInfo } from './assets';

const Header = () => {
  return (
    <header id="home" style={{ textAlign: 'center', padding: '8rem 2rem 4rem 2rem' }}>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Hi! I'm {userInfo.name} 👋
      </p>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {userInfo.title}
      </h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.8, lineHeight: '1.6' }}>
        {userInfo.bio}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
          Contact Me
        </a>
        
        {/* Working Resume HTML Page Link */}
        <a 
          href="/resume.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-outline" 
          style={{ textDecoration: 'none' }}
        >
          My Resume
        </a>
      </div>
    </header>
  );
};

export default Header;