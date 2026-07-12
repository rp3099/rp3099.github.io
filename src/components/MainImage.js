import "./MainImageStyles.css";
import React from 'react';

const MainImage = () => {
  return <div className="Main">
    <div className="mask">
        <img className="titleImage" src="https://images.unsplash.com/photo-1581088657139-d5a5cce14c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="IntroImage"/>
    </div>
    <div className="content">
        <p>Welcome to my website</p>
        <h1>I'm an aerospace engineer</h1>
    </div>

  </div>
}

export default MainImage
