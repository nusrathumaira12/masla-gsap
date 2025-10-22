import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const moonRef = useRef(null);
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
    const imageRef = useRef(null);

  useEffect(() => {
   
    gsap.set(moonRef.current, {
      width: "950px",
      height: "70vh",
      backgroundColor: "#b492ff",
      clipPath: "ellipse(50% 80% at 50% 0%)", 
      borderRadius: "12px",
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      transformOrigin: "center",
    });

  
    gsap.set(textRef.current, {
      fontSize: "8.5rem",
      fontWeight: "700",
      color: "black",
      textAlign: "start",
       position: "absolute",
      top: "-100",
      left: "0",
      rotate: "-15deg", 
      lineHeight: 1.2,
      opacity: 1,
     
    });
  }, []);

  const handleToggle = () => {
    if (!expanded) {
     
      gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
        .to(moonRef.current, {
           
          width: "1200px",
          height: "100vh",
          justifyItems: "center",
          marginLeft: "60",
      marginTop: "30",
          clipPath: "ellipse(100% 100% at 50% 0%)",
      
          borderRadius: "20px",
          top: 80,
         
          left: 40,
    
          xPercent: 0,
          yPercent: 0,
          backgroundColor: "#b492ff",
          zIndex: 20, 
        }, 0)
        .to(textRef.current, {
          color: "#1a1a1a",
          fontSize: "10.1rem",
          rotate: 0,
          maxWidth: "100%",
        
          top:60,
          left: 60,

        }, 0.3);
    } else {
     
      gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
        .to(textRef.current, {
           fontSize: "8.5rem",
      fontWeight: "700",
      color: "black",
      textAlign: "start",
       position: "absolute",
      top: "-100",
      left: "0",
      rotate: "-15deg", 
      lineHeight: 1.2,
      opacity: 1,
        }, 0)
        .to(moonRef.current, {
         width: "950px",
      height: "550px",
      backgroundColor: "#b492ff",
      clipPath: "ellipse(50% 80% at 50% 0%)", 
      borderRadius: "12px",
      position: "absolute",
      
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      transformOrigin: "center",}, 0.2);
    }

    setExpanded(!expanded);
  };

 useEffect(() => {
 
  gsap.set(imageRef.current, {
    width: "30%",  
    height: "30vh",  
    scale: 1.2,  
    borderRadius: "20px",
    transformOrigin: "center center",
  });

  gsap.to(imageRef.current, {
    width: "100%",  
    height: "80vh", 
    scale: 1,
    borderRadius: "20px",
    ease: "power2.out",
    scrollTrigger: {
      trigger: imageRef.current,
      start: "top 80%",   
      end: "top 20%",    
      scrub: 1.5,         
      
    },
  });
}, []);

  return (
    <>
    <section className="relative  w-screen  overflow-hidden bg-white mt-22"
      style={{ height: "90vh" }}
    >
      <div ref={moonRef} className="shadow-2xl">
      
<button
  onClick={handleToggle}
  className={`absolute z-10 text-lg font-bold text-white bg-blue-600 px-5 py-2 rounded -rotate-20 transition ${
    expanded ? "top-10 right-5 -translate-x-0  -rotate-10" : "top-30 left-1/2 -translate-x-1/2"
  }`}
>
  {expanded ? "EXIT" : "EXPAND +"}
</button>


      
        <h1
          ref={textRef}
          className="absolute top-3 -rotate-12 text-center text-8xl"
        >
          From self-reflection to transformation
        </h1>
      </div>
    
    
    </section>
  <div className="w-full flex items-center justify-center overflow-hidden -mt-22 rounded-lg"

  >
      <img
        ref={imageRef}
        src="https://maslaempathylab.com/wp-content/uploads/2023/07/Homepage3-scaled.jpg"
        alt="Some image"
        className="h-full object-cover rounded-xl"
     
      />
    </div>

</>
  );
};

export default Hero;
