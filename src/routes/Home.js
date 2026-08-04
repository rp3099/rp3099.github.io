import React from 'react'
import Navbar from '../components/Navbar.js';
import MainImage from '../components/MainImage.js';
import Footer from '../components/Footer.js';
import HomeIntro from '../components/HomeIntro.js';
import PortfolioSummary from '../components/PortfolioSummary.js';

const home = () => {
  return (
    <div>
        <Navbar/>
        <MainImage/>
        <PortfolioSummary/>
        <HomeIntro/>
        <Footer/>
    </div>
  )
}

export default home