'use client';
import React from 'react';
import { projects } from './assets';

const Work = () => {
  return (
    <section id="work" style={{ padding: '6rem 8%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Work</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '2rem', 
              border: '1px solid rgba(255,255,255,0.15)', 
              borderRadius: '15px',
              background: 'rgba(255,255,255,0.03)',
              textAlign: 'left'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.5' }}>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;