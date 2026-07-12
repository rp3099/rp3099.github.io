import "./MainImage2Styles.css";
import React from 'react';

const MainImage2 = ({ heading, text }) => (
  <div className="MainImage">
    <div className="heading">
      <h1>{heading}
        <p> {text}</p>
      </h1>
    </div>
  </div>
);

export default MainImage2;
