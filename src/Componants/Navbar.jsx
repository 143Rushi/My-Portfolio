import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home-container');

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sectionIds = ['home-container', 'skills', 'projects', 'contact'];

    const onScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
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
      <ul className="nav-links">
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
