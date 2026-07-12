import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import MainImage2 from './MainImage2.js';

// Shared page shell: Navbar + banner + page content + Footer.
const PageLayout = ({ heading, text, children }) => (
  <div>
    <Navbar />
    <MainImage2 heading={heading} text={text} />
    {children}
    <Footer />
  </div>
);

export default PageLayout;
