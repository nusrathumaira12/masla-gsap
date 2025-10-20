// src/components/ReadySection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReadySection = () => {
  const textRef = useRef(null);
  const circleContainerRef = useRef(null); 
  const rotationTween = useRef(null); 

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

   
    rotationTween.current = gsap.to(circleContainerRef.current, { 
        rotation: "+=360",
        duration: .4,     
        ease: "none",
        paused: true,      
              
        transformOrigin: "center",
    });

    return () => {
      rotationTween.current.kill();
    };
  }, []); 

  

  const handleMouseEnter = () => {
    if (!rotationTween.current) return;
    rotationTween.current.play();
  };

  
  const handleMouseLeave = () => {
    if (!rotationTween.current) return;
    rotationTween.current.reverse(); 
  };

  return (
    <div className="w-[70%] mt-2 flex items-center justify-center mx-auto md:px-20 py-10">
      {/* Left Text */}
      <div ref={textRef} className="flex-1 space-y-4">
        <h2 className="text-5xl font-bold text-gray-800">Ready to take a</h2>
        <h3 className="text-6xl font-serif text-gray-900">Step Further?</h3>
      </div>

     
      <div 
        ref={circleContainerRef} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
       
        className="w-74 h-74 font-bold text-2xl cursor-pointer  text-center flex justify-center items-center"
        style={{
           background: "rgb(210, 255, 200)",
            borderRadius: '50% 50% 50% 50% / 50% 50% 40% 50%', 
            transition: 'border-radius 0.7s ease-out' 
        }}
      >
        Get in <br />touch
      </div>
    </div>
  );
};

export default ReadySection;