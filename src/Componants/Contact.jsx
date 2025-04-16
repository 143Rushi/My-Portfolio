import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // reset for re-entry
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div id="contact" className={`contact-section ${isVisible ? 'animate' : ''}`} ref={contactRef}>

      <h2 className="contact-text">Contact Me</h2>
      <ul className="contact-icons">
        <li className="linkedin">
          <a href="https://www.linkedin.com/in/Rushi358" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="insta">
          <a href="https://www.instagram.com/rushiii_358?igsh=cHU3Y2kxYjJoNGZl" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="mail">
          <a href="mailto:rushipubg143s@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
