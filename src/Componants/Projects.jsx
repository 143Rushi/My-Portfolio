import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'Myntra Clone',
    img: 'https://trybuy.in/cdn/shop/articles/Myntra-Logo-PNG-ovjndf3_1200x630.png?v=1705320261',
    description: 'A fully responsive e-commerce clone with sleek UI.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'My Shop',
    img: 'https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png',
    description: 'A shopping site built using modern front-end tools.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Netflix Clone',
    img: 'https://static.vecteezy.com/system/resources/previews/023/626/601/original/netflix-transparent-netflix-free-free-png.png',
    description: 'A sleek media streaming clone built with React.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
  }
];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      ref={sectionRef}
      className={`projects-container ${visible ? 'visible' : ''}`}
    >
      <h2 className={`projects-title ${visible ? 'visible' : ''}`}>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div
            className={`project-card ${visible ? 'visible' : ''}`}
            key={index}
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <h3>{project.title}</h3>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <p>{project.description}</p>
            <div className="tech-stack-out">
              {project.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
