import React from 'react'
import Navbar from '../components/Navbar.js';
import MainImage from '../components/MainImage.js';
import Footer from '../components/Footer.js';
import HomeIntro from '../components/HomeIntro.js';

const home = () => {
  return (
    <div>
        <Navbar/>
        <MainImage/>
        <HomeIntro/>
        <Footer/>
    </div>
  )
}

export default home