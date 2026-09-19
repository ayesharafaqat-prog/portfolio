'use client';
import React from 'react';
import { skills } from './assets';

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 8%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
      
      {/* Bio Paragraph */}
      <p style={{ maxWidth: '750px', margin: '0 auto 2rem auto', lineHeight: '1.7', opacity: 0.9, fontSize: '1.05rem' }}>
        I'm a passionate <strong>Frontend Developer</strong> who turns ideas into elegant, high-performing digital experiences. I specialize in building responsive, fast, and visually engaging web applications using modern technologies like React and Next.js.
      </p>

      {/* Quick Highlights / Facts */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <div style={{ padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', textAlign: 'center', minWidth: '160px' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#38bdf8' }}>3+</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Featured Projects</p>
        </div>
        <div style={{ padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', textAlign: 'center', minWidth: '160px' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#a855f7' }}>100%</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Responsive Design</p>
        </div>
        <div style={{ padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', textAlign: 'center', minWidth: '160px' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#34d399' }}>Clean</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Modern Code</p>
        </div>
      </div>

      {/* Skills Section */}
      <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>My Technical Skills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {skills.map((skill, index) => (
          <span 
            key={index} 
            style={{ 
              padding: '0.6rem 1.2rem', 
              border: '1px solid rgba(255,255,255,0.2)', 
              borderRadius: '25px',
              background: 'rgba(255,255,255,0.05)',
              fontWeight: '500'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;