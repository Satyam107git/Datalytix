import React, { createContext, useState, useEffect } from 'react';

// Create a new Context object. This will be used to share the theme state
// with any component in the application without passing props down manually.
export const ThemeContext = createContext();
// This is a provider component that will wrap our entire application.
export const ThemeProvider = ({ children }) => {
  // Create a state variable 'theme' to hold the current theme ('light' or 'dark').
  // It initializes its state from localStorage to remember the user's last choice.
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

   // This useEffect hook runs whenever the 'theme' state variable changes.
  useEffect(() => {
    const root = window.document.documentElement;
    // This is used by our CSS variables in index.css to apply the correct colors.
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};