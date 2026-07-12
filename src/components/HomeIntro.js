import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import './AboutMeStyles.css';
import './HomeIntroStyles.css';

const HomeIntro = () => (
  <div className="home-about-section">
    <img src="/profile_picture.jpeg" alt="Rudra Patel" className="profile-photo profile-photo-top" />
    <div className="home-intro-content">
      <h2 className="title">About Me</h2>
      <p className="bio-text">
        I'm an Aerospace Engineer at Honda Aircraft Company working on advanced flight
        control systems, with graduate work spanning computational fluid dynamics (CFD)
        and applied artificial intelligence.
      </p>
      <div className="about-buttons home-intro-buttons">
        <Link to="/about" className="button resume-button">
          <FaUser className="button-icon" /> More About Me
        </Link>
        <Link to="/contact" className="button_light contact-button">
          <FaEnvelope className="button-icon" /> Get in Touch
        </Link>
      </div>
    </div>
  </div>
);

export default HomeIntro;
