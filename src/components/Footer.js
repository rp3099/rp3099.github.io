import React from 'react';
import "./FooterStyles.css";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <a href="https://www.google.com/maps/place/Greensboro,+NC" target="_blank" rel="noopener noreferrer">
                            <p>Greensboro, NC</p>
                        </a>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <a href="tel:+1-540-998-0746">+1-540-998-0746</a>
                        </h4>
                    </div>
                    <div className='phone'>
                        <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
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
                        <a href="https://www.linkedin.com/in/rudra-patel-195879154/"><FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer