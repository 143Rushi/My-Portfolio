import React, { useEffect, useRef, useState } from "react";
import "./Skill.css";

const skills = [
  { name: "HTML", image: "https://www.w3docs.com/uploads/media/book_gallery/0001/02/ea50fd5ac033ccb1ab19a9aa4f1135464bbc1399.png" },
  { name: "CSS", image: "https://quiksite.com/wp-content/uploads/2016/09/css3.png" },
  { name: "Tailwind CSS", image: "https://images.seeklogo.com/logo-png/43/2/tailwind-css-logo-png_seeklogo-434090.png?v=1957118677698651368" },
  { name: "JavaScript", image: "https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png" },
  { name: "React", image: "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=512" },
  { name: "Next.js", image: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" },
];

const Skill = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div id="skills" className="skill-section" ref={containerRef}>
      <h2 className={`animated-heading ${isVisible ? "visible" : ""}`}>My Skills</h2>
      <ul className="skill-icons">
        {skills.map((skill, index) => (
          <li key={index} className={`skill-icon ${isVisible ? "visible" : ""}`}>
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
