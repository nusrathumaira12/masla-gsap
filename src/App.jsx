// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';

import './index.css'; // Ensure your CSS is imported
import Hero from './components/Hero';
import Masla from './components/Masla';
import JediScrollSection from './components/JediScrollSection';
import SliderImgSection from './components/SliderImgSection';
import Text from './components/Text';
import LogoMarquee from './components/LogoMarquee';
import ReadySection from './components/ReadySection';
import Footer from './components/Footer';


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
  <Masla></Masla>

   
 
      
      <JediScrollSection />
     
      <SliderImgSection></SliderImgSection>
      <Text></Text>
  <LogoMarquee></LogoMarquee>
  <ReadySection></ReadySection>
  <Footer></Footer>
    
     

    </div>
  );
}

export default App;