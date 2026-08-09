import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFilePdf, FaLinkedin, FaGithub, FaFolderOpen,
  FaPlaneDeparture, FaCode, FaBullseye, FaUsers
} from 'react-icons/fa';
import './PortfolioSummaryStyles.css';

// Sits directly under the hero: the 15-second read for a first-time visitor.
// Covers the two portfolio-review checklist items that were previously only
// implied by the rest of the site (personal value proposition and target
// audience) and puts the resume, LinkedIn, GitHub, and projects one click away.
const PortfolioSummary = () => (
  <section className="summary-section" aria-labelledby="summary-heading">
    <div className="summary-container">

      <span className="summary-eyebrow">Personal Value Proposition</span>
      <h2 className="summary-heading" id="summary-heading">
        I build flight-critical systems, and I am training the AI that will fly alongside them.
      </h2>
      <p className="summary-lede">
        I am an automatic flight controls engineer at Honda Aircraft Company, working
        verification and validation on autothrottle and Emergency Autoland, and a graduate
        student specializing in artificial intelligence. That combination is the point: I
        evaluate machine learning the way I evaluate a flight control law, by asking what the
        evidence is, where it fails, and what it costs to verify. This portfolio is where I show
        that work.
      </p>

      <div className="summary-grid">
        <div className="summary-card">
          <FaPlaneDeparture className="summary-icon" />
          <h3>What I do</h3>
          <p>
            Develop and verify automatic flight control systems: nonlinear closed-loop
            simulation, gains development, laboratory and integrated test plans, and flight test
            data analysis under DO-178C and ARP4754. I apply the same discipline to applied AI.
          </p>
        </div>
        <div className="summary-card">
          <FaCode className="summary-icon" />
          <h3>Core technical skills</h3>
          <p>
            MATLAB, Simulink, and Stateflow; Python, C/C++, and Java; applied machine learning
            and prompt engineering; CFD (StarCCM+, ANSYS); CAD; and requirements and test tooling
            (DOORS/DXL, JIRA).
          </p>
        </div>
        <div className="summary-card">
          <FaBullseye className="summary-icon" />
          <h3>What I am looking for</h3>
          <p>
            Roles and collaborations at the intersection of aerospace and AI: applied ML,
            autonomy, decision-support tooling, and the assurance work that lets those systems
            reach a real aircraft.
          </p>
        </div>
      </div>

      <div className="summary-audience">
        <h3><FaUsers className="summary-audience-icon" /> Who this portfolio is for</h3>
        <p>
          It is written first for <strong>recruiters and hiring managers</strong> in aerospace
          and AI/ML, who need to see verified engineering judgment quickly, and for the{' '}
          <strong>engineering leads and faculty</strong> evaluating whether I can carry a
          technical problem end to end. Each artifact below is documented the same way, with its
          objective, process, tools, measurable outcomes, and references stated openly, so those
          readers can judge the work on evidence rather than on a job title. Fellow{' '}
          <strong>students and collaborators</strong> are welcome to reuse the methods; that is
          why the process sections are as detailed as the results.
        </p>
      </div>

      <div className="summary-links">
        <Link to="/project" className="summary-link summary-link--primary">
          <FaFolderOpen /> View Projects
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="summary-link">
          <FaFilePdf /> Resume
        </a>
        <a
          href="https://www.linkedin.com/in/rudra-patel-195879154/"
          target="_blank"
          rel="noopener noreferrer"
          className="summary-link"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/rp3099"
          target="_blank"
          rel="noopener noreferrer"
          className="summary-link"
        >
          <FaGithub /> GitHub
        </a>
      </div>

    </div>
  </section>
);

export default PortfolioSummary;
