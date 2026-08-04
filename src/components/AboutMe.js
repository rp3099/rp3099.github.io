import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaEnvelope, FaGraduationCap, FaBriefcase, FaBrain, FaCompass, FaLinkedin, FaGithub, FaGem } from 'react-icons/fa';
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
            I'm an Aerospace Engineer at Honda Aircraft Company, where I develop and verify
            automatic flight control systems, including autothrottle and Emergency
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
                <p>M.S. Aerospace Engineering, Virginia Tech (GPA 3.95)</p>
              </div>
            </div>
            <div className="highlight-item">
              <FaBrain className="highlight-icon" />
              <div>
                <h3>Currently Pursuing</h3>
                <p>M.S. Computer Information Systems (AI Specialization), Indiana Wesleyan University</p>
              </div>
            </div>
          </div>

          <div className="value-prop">
            <h3><FaGem className="value-prop-icon" /> Unique Value &amp; Career Direction</h3>
            <p>
              Most people entering AI/ML arrive from software or data science. I arrive from
              verification and validation. I work in automatic flight controls, where my job is to
              show that a control law actually behaves the way it is supposed to across the flight
              envelope: developing closed-loop nonlinear simulations, writing and executing
              integrated and laboratory test plans, running regression testing for safety-of-flight
              clearance, and analyzing flight test telemetry when the aircraft does something the
              model did not predict. The work runs under DO-178C, ARP4754, and ARP4761, and on
              Emergency Autoland it produced laboratory test plans I executed with the FAA
              witnessing.
            </p>
            <p>
              I bring the same question to machine learning: <em>how would I know if this were
              wrong?</em> That is why the artifacts in this portfolio are built around evidence,
              source hierarchies, failure modes, and stated trade-offs rather than around accuracy
              numbers alone. A model that cannot be tested is not finished, and neither is a
              control law.
            </p>
            <p>
              My goal is to work at the point where those two disciplines meet: applied AI,
              autonomy, and decision-support systems held to the standard of evidence that
              safety-critical aerospace already demands. As a future technical leader, the
              contribution I intend to make is exactly that translation, helping AI teams
              understand what safety-critical engineering requires, and helping aerospace teams
              understand what modern AI can genuinely deliver.
            </p>
          </div>

          <div className="about-buttons">
            <a
              href="/resume.pdf"
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

          <div className="about-profile-links">
            <a
              href="https://www.linkedin.com/in/rudra-patel-195879154/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-profile-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/rp3099"
              target="_blank"
              rel="noopener noreferrer"
              className="about-profile-link"
            >
              <FaGithub /> GitHub
            </a>
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
                <span><strong>Verification &amp; Validation</strong> (DO-178C, ARP4754, ARP4761, DOORS)</span>
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
