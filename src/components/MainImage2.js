import "./MainImage2Styles.css";
import React from 'react';

// Same crossfading art pair as the home hero: the dark nebula photo for dark
// mode, generated light cloudscape art for light mode.
const MainImage2 = ({ heading, text }) => (
  <div className="MainImage">
    <div className="MainImage-layer MainImage-layer--dark" aria-hidden="true" />
    <div className="MainImage-layer MainImage-layer--light" aria-hidden="true" />
    <div className="MainImage-scrim" aria-hidden="true" />
    <div className="heading">
      <h1>{heading}
        <p> {text}</p>
      </h1>
    </div>
  </div>
);

export default MainImage2;
