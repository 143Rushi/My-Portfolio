import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [visible, setVisible] = useState(false);

  // Intersection Observer logic for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // Reset visibility if section goes out of view
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.projects-container');
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div id='projects' className={`projects-container ${visible ? 'visible' : ''}`}>
      <h2 className={`projects-title ${visible ? 'visible' : ''}`}>My Projects</h2>
      <div className="projects-grid">
        {/* Myntra Clone */}
        <div className={`project-card ${visible ? 'visible' : ''}`}>
          <h3>Myntra Clone</h3>
          <div className="project-image">
            <img
              src="https://trybuy.in/cdn/shop/articles/Myntra-Logo-PNG-ovjndf3_1200x630.png?v=1705320261"
              alt="Myntra Clone"
            />
          </div>
          <p>A fully responsive e-commerce clone with sleek UI.</p>
          <a href="#" className="btn">View Website</a>
          <a href="#" className="code-btn">View Code</a>
          <div className="tech-stack-out">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* My Shop */}
        <div className={`project-card ${visible ? 'visible' : ''}`}>
          <h3>My Shop</h3>
          <div className="project-image">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png"
              alt="My Shop"
            />
          </div>
          <p>A shopping site built using modern front-end tools.</p>
          <a href="#" className="btn">View Website</a>
          <a href="#" className="code-btn">View Code</a>
          <div className="tech-stack-out">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Netflix Clone */}
        <div className={`project-card ${visible ? 'visible' : ''}`}>
          <h3>Netflix Clone</h3>
          <div className="project-image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/626/601/original/netflix-transparent-netflix-free-free-png.png"
              alt="Netflix Clone"
            />
          </div>
          <p>A sleek media streaming clone built with React.</p>
          <a href="#" className="btn">View Website</a>
          <a href="#" className="code-btn">View Code</a>
          <div className="tech-stack-out">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
