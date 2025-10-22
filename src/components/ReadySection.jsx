
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const ReadySection = () => {
  const textRef = useRef(null);
  const circleContainerRef = useRef(null); 
  const rotationTween = useRef(null); 

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: textRef.current,
      start: "top 80%", 
      end: "bottom 60%",

      toggleActions: "play none none reset",
    },
  });

  
  tl.fromTo(
    textRef.current.querySelector("h2"),
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1,delay: 0.6, ease: "power2.out" } 
  )
  .fromTo(
    textRef.current.querySelector("h3"),
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1,delay: 0.6, ease: "power2.out" },
    "-=0.5" 
  );

 
  rotationTween.current = gsap.to(circleContainerRef.current, { 
    rotation: "+=360",
    duration: 0.5,
    ease: "power1.inOut",
    paused: true,
    transformOrigin: "center",
  });

  return () => {
    rotationTween.current.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
    <div className="w-[70%] h-[60vh] mt-2 flex items-center justify-center mx-auto md:px-20 py-10">
    
      <div ref={textRef} className="flex-1 space-y-4">
        <h2 className="text-5xl font-bold text-gray-800">Ready to take a</h2>
        <h3 className="text-7xl font-serif font-extrabold text-red-900">Step Further?</h3>
      </div>

     
      <div 
        ref={circleContainerRef} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
       
        className="w-84 h-84 font-bold text-5xl cursor-pointer  text-center flex justify-center items-center"
        style={{
           background: "rgb(210, 255, 200)",
            borderRadius: '50% 50% 50% 50% / 40% 50% 40% 50%', 
            transition: 'border-radius 0.7s ease-out' 
        }}
      >
        Get in <br />touch
      </div>
    </div>
  );
};

export default ReadySection;