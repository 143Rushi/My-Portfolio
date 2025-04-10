import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home-container');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setMenuOpen(false); // close on mobile
    }
  };

  // Optional: Highlight nav item on scroll
  useEffect(() => {
    const sections = ['home-container', 'skills', 'projects', 'contact'];

    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="portfolio" onClick={() => handleScroll('home-container')}>
        Portfolio
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>



      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li
          className={activeSection === 'home-container' ? 'active' : ''}
          onClick={() => handleScroll('home-container')}
        >
          Home
        </li>
        <li
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => handleScroll('skills')}
        >
          Skills
        </li>
        <li
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => handleScroll('projects')}
        >
          Projects
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => handleScroll('contact')}
        >
          Contact Me
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
