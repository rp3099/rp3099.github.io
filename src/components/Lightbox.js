import React, { useState, useEffect, useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Lightbox.css';

// Wrap any content; clicking an <img> inside opens it full-screen.
// Add data-no-zoom to an <img> to opt it out.
const Lightbox = ({ children }) => {
  const [zoomed, setZoomed] = useState(null);

  const handleClick = useCallback((e) => {
    const img = e.target.closest('img');
    if (img && !img.dataset.noZoom) {
      setZoomed({ src: img.src, alt: img.alt || '' });
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setZoomed(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="lightbox-scope" onClick={handleClick}>
      {children}
      {zoomed && (
        <div className="lightbox-overlay" onClick={() => setZoomed(null)}>
          <button className="lightbox-close" aria-label="Close">
            <FaTimes />
          </button>
          <img
            src={zoomed.src}
            alt={zoomed.alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Lightbox;
