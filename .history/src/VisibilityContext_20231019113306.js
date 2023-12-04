import React, { createContext, useContext, useState, useEffect } from 'react';

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedIsVisible = localStorage.getItem('isVisible');
    if (storedIsVisible !== null) {
      setIsVisible(JSON.parse(storedIsVisible));
    }
  }, []);

  const toggleVisibility = () => {
    const updatedVisibility = !isVisible;
    setIsVisible(updatedVisibility);
    localStorage.setItem('isVisible', JSON.stringify(updatedVisibility));
  };

  return (
    <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
