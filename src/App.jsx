// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';

import './index.css'; // Ensure your CSS is imported
import Hero from './components/Hero';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // In a real app, the menu would be a full-screen overlay or sidebar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header onMenuClick={toggleMenu} />
      <Hero></Hero>
  

    </div>
  );
}

export default App;