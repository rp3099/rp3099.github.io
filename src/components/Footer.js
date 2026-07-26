import React from 'react';
import "./FooterStyles.css";
import { FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} className='footer-icon' />
                        <a href="https://www.google.com/maps/place/Greensboro,+NC" target="_blank" rel="noopener noreferrer">
                            <p>Greensboro, NC</p>
                        </a>
                    </div>
                    <div className='contact-line'>
                        <h4><FaMailBulk size={20} className='footer-icon' />
                            <a href="mailto:rudrapatel3099@gmail.com">rudrapatel3099@gmail.com</a>
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Associations</h4>
                    <p>
                        <a href="https://www.hondajet.com/">Honda Aircraft Company</a>
                    </p>
                    <p>
                        <a href="https://ocoutier.wixsite.com/cavitationlab">Cavitation, Propulsion & Multiphase Flow Laboratory</a>
                    </p>
                    <p>
                        <a href="https://create.centers.vt.edu">Center for Research and Engineering in Aero/Hydrodynamic Technologies</a>
                    </p>
                    <div className='social'>
                        <a href="https://www.linkedin.com/in/rudra-patel-195879154/" aria-label="LinkedIn"><FaLinkedin size={30} className='footer-icon social-icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
