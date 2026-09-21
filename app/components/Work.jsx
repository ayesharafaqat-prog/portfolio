'use client';
import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "Space Website",
      description: "Modern space website built with html & css",
      link: "https://ayesharafaqat-prog.github.io/space/"
    },
    {
      title: "Movie App",
      description: "A movie app built with React and CSS, fetching data from an API.",
      link: "https://front-end-seven-jet.vercel.app/"
    },
    {
      title: "E-Commerce App",
      description: "A full-stack e-commerce application built with React and Node.js.",
      link: "https://digital-psi-ashy.vercel.app/"
    }
  ];

  return (
    <section id="work" style={{ padding: '6rem 8%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold' }}>My Work</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-gray-400 dark:border-white/20 bg-white dark:bg-white/5"
            style={{ 
              padding: '2rem', 
              borderRadius: '16px', 
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              border: '1px solid #cbd5e1', /* Solid visible border in light mode */
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.8rem' }}>
                {project.title}
              </h3>
              <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {project.description}
              </p>
            </div>

            <a 
              href={project.link} 
              style={{ 
                display: 'inline-block', 
                width: 'fit-content',
                textDecoration: 'none',
                padding: '0.5rem 1.2rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                border: '1px solid #64748b', /* Solid border for button */
                color: 'inherit'
              }}
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