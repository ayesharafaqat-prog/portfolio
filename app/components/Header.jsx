'use client';
import React from 'react';
import { userInfo } from './assets';

const Header = () => {
  return (
    <header id="home" style={{ textAlign: 'center', padding: '8rem 2rem 4rem 2rem' }}>
      
      {/* Small Badge highlighting your roles */}
      <div style={{ 
        display: 'inline-block', 
        padding: '0.4rem 1rem', 
        borderRadius: '20px', 
        background: 'rgba(56, 189, 248, 0.1)', 
        border: '1px solid rgba(56, 189, 248, 0.3)', 
        color: '#38bdf8', 
        fontSize: '0.85rem', 
        fontWeight: '500', 
        marginBottom: '1.2rem' 
      }}>
        🚀 Available for Web Internships & Technical Mentorship
      </div>

      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '500' }}>
        Hi! I'm {userInfo.name} 👋
      </p>

      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
        Frontend Developer & <span style={{ color: '#38bdf8' }}>Technical Instructor</span>
      </h1>

      <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', opacity: 0.9, lineHeight: '1.6', fontSize: '1.05rem' }}>
        I build responsive, high-performing web applications using React and Next.js, and love simplifying code to help learners master programming fundamentals.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
          Explore My Work
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