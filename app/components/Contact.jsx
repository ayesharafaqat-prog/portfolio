'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending Message...');

    const formData = new FormData(e.target);

    // Web3Forms Access Key
    formData.append("access_key", "262e6c63-73dc-430c-93fd-77962a86747d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent to my email.");
        e.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" style={{ padding: '6rem 8%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Get In Touch</h2>
      <p style={{ opacity: 0.8, marginBottom: '3rem' }}>
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Side: Contact Info Cards */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="border border-gray-300 dark:border-white/20 bg-gray-50/50 dark:bg-white/5" style={{ padding: '1.5rem', borderRadius: '15px' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#38bdf8', marginBottom: '0.3rem' }}>Email Me</h4>
            <a href="mailto:ayesharafaqat735@gmail.com" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>
              ayesharafaqat735@gmail.com
            </a>
          </div>

          <div className="border border-gray-300 dark:border-white/20 bg-gray-50/50 dark:bg-white/5" style={{ padding: '1.5rem', borderRadius: '15px' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#34d399', marginBottom: '0.3rem' }}>Call / WhatsApp</h4>
            <a href="https://wa.me/923354184150" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>
              +92 335 4184150
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a 
              href="https://wa.me/923354184150" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ background: '#25D366', color: '#fff', textDecoration: 'none', flex: 1, textAlign: 'center' }}
            >
              WhatsApp Me
            </a>
            <a 
              href="mailto:ayesharafaqat735@gmail.com" 
              className="btn-outline border border-gray-400 dark:border-white/30"
              style={{ flex: 1, textAlign: 'center' }}
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Right Side: Inputs with Proper Light/Dark Borders */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', opacity: 0.9 }}>Your Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required 
              className="border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white"
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', outline: 'none' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', opacity: 0.9 }}>Your Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              className="border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white"
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', outline: 'none' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', opacity: 0.9 }}>Your Message</label>
            <textarea 
              name="message" 
              placeholder="Write your message here..." 
              rows="4" 
              required 
              className="border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white"
              style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', outline: 'none', resize: 'vertical' }}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ cursor: 'pointer', border: 'none', padding: '0.8rem 1.5rem' }}>
            Send Message
          </button>

          {result && <p style={{ marginTop: '0.5rem', color: '#34d399', fontSize: '0.9rem', fontWeight: '500' }}>{result}</p>}
        </form>

      </div>
    </section>
  );
};

export default Contact;