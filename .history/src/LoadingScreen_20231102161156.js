import React, { useEffect, useState } from 'react';
import './App.css';
import logo from "./image/header/logo.png"

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 1500); 
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
    <img src={logo} alt='' />
  </div>;
}

export default LoadingScreen;