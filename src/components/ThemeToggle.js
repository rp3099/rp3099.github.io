import React, { useCallback, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggleStyles.css';

// The initial value is resolved by the inline script in public/index.html so
// the first paint is already correct; this just reads back what it decided.
const currentTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(currentTheme);

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => {
      let saved = null;
      try {
        saved = localStorage.getItem('theme');
      } catch {
        // Storage unavailable (private mode); fall through to the OS setting.
      }
      if (saved === 'light' || saved === 'dark') return;
      const next = e.matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      setTheme(next);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // Keep the mobile browser chrome in step with the page.
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#faf8f5' : '#0b0c10');
  }, [theme]);

  const toggle = useCallback(() => {
    const next = currentTheme() === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Preference simply will not persist; the toggle still works this visit.
    }
    setTheme(next);
  }, []);

  const goingTo = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${goingTo} mode`}
      title={`Switch to ${goingTo} mode`}
    >
      {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  );
};

export default ThemeToggle;
