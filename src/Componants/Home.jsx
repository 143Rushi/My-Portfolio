import React from 'react';
import './Home.css';
import RushiImg from './Image/Rushi.png';

const Home = () => {
  const handleScroll = () => {
    const contactscroll = document.getElementById('contact');
    if (contactscroll) {
      contactscroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="home-container">
      {/* Left Section */}
      <div className="left">
        <p className="left-text">Hey...! I Am </p>
        <p className="left-text-name">Mr. Rushi Dhoble</p>
        <div>
          <pre className="left-text-info">
            FrontEnd Developer🚀|React.JS Developer⚛️
          </pre>
        </div>

        {/* Buttons */}
        <div className="btn-container">
          <a href="/Resume.docx" download="Resume.docx" className="btn download-btn">
            Download Resume
          </a>
          <button onClick={handleScroll} className="btn contact-btn">
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="right">
        <img src={RushiImg} alt="Rushi Dhoble" />
      </div>
    </div>
  );
};

export default Home;
