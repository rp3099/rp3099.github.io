import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaEnvelope, FaGraduationCap, FaBriefcase, FaBrain, FaCompass } from 'react-icons/fa';
import './AboutMeStyles.css';

const AboutMe = () => {
  return (
    <div className="home-about-section">
      <img src="/profile_picture.jpeg" alt="Rudra Patel" className="profile-photo profile-photo-top" />
      <div className="home-about-container">
        <div className="home-about-content">
          <span className="subtitle">Biography</span>
          <h2 className="title">About Me</h2>
          <p className="bio-text">
            I'm an Aerospace Engineer at Honda Aircraft Company, where I develop and
            certify advanced flight control systems — including autothrottle and Emergency
            Autoland. I hold an M.S. in Aerospace Engineering from Virginia Tech, and I'm
            currently pursuing an M.S. in Computer Information Systems with an AI
            Specialization at Indiana Wesleyan University. My work spans flight controls,
            computational fluid dynamics (CFD), and applied artificial intelligence.
          </p>

          <div className="highlights-grid">
            <div className="highlight-item">
              <FaBriefcase className="highlight-icon" />
              <div>
                <h3>Current Role</h3>
                <p>AFCS &amp; Advanced Research Engineer at Honda Aircraft Company</p>
              </div>
            </div>
            <div className="highlight-item">
              <FaGraduationCap className="highlight-icon" />
              <div>
                <h3>Education</h3>
                <p>M.S. Aerospace Engineering — Virginia Tech (GPA 3.95)</p>
              </div>
            </div>
            <div className="highlight-item">
              <FaBrain className="highlight-icon" />
              <div>
                <h3>Currently Pursuing</h3>
                <p>M.S. Computer Information Systems, AI Specialization — Indiana Wesleyan University</p>
              </div>
            </div>
          </div>

          <div className="about-buttons">
            {/* Resume Placeholder */}
            <a
              href="/resume-placeholder.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button resume-button"
            >
              <FaFilePdf className="button-icon" /> View Resume
            </a>

            <Link to="/contact" className="button_light contact-button">
              <FaEnvelope className="button-icon" /> Get in Touch
            </Link>
          </div>
        </div>

        <div className="home-about-graphics">
          <div className="tech-card">
            <div className="tech-card-header">
              <FaCompass className="tech-card-pulse" />
              <span>Core Specialities</span>
            </div>
            <ul className="tech-list">
              <li>
                <span className="tech-dot"></span>
                <span><strong>Flight Control Systems</strong> (AFCS, Autothrottle, Emergency Autoland)</span>
              </li>
              <li>
                <span className="tech-dot"></span>
                <span><strong>Modeling &amp; Simulation</strong> (MATLAB, Simulink, Stateflow)</span>
              </li>
              <li>
                <span className="tech-dot"></span>
                <span><strong>CFD Simulation</strong> (StarCCM+, ANSYS)</span>
              </li>
              <li>
                <span className="tech-dot"></span>
                <span><strong>Programming</strong> (Python, C/C++, Java, JavaScript)</span>
              </li>
              <li>
                <span className="tech-dot"></span>
                <span><strong>CAD / 3-D Modeling</strong> (SolidWorks, CATIA, Siemens NX)</span>
              </li>
              <li>
                <span className="tech-dot"></span>
                <span><strong>AI &amp; Machine Learning</strong> (Applied ML)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
