import "./MainImageStyles.css";
import React from 'react';

// Two stacked art layers crossfade on theme change: the dark cockpit photo for
// dark mode, generated light flight-deck art for light mode. Both are
// decorative, so they are background images on aria-hidden layers rather than
// <img> elements needing alt text.
const MainImage = () => {
  return <div className="Main">
    <div className="mask">
        <div className="mask-layer mask-layer--dark" aria-hidden="true" />
        <div className="mask-layer mask-layer--light" aria-hidden="true" />
        <div className="mask-scrim" aria-hidden="true" />
    </div>
    <div className="content">
        <p>Welcome to my website</p>
        <h1>I'm an aerospace engineer</h1>
    </div>

  </div>
}

export default MainImage
