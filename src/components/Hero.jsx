import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const moonRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
   
    const setMoonSize = () => {
      if (window.innerWidth < 768) {
        gsap.set(moonRef.current, {
          width: "300px",
          height: "30vh",
          clipPath: "ellipse(50% 80% at 50% 0%)",
        });

        gsap.set(textRef.current, {
          fontSize: "3.2rem",
          top: "-10px",
          rotate: "-25deg",
        });
      } else {
        gsap.set(moonRef.current, {
          width: "950px",
          height: "70vh",
          clipPath: "ellipse(50% 80% at 50% 0%)",
        });

        gsap.set(textRef.current, {
          fontSize: "8.5rem",
          top: "-100px",
          rotate: "-15deg",
        });
      }
    };

    setMoonSize();
    window.addEventListener("resize", setMoonSize);
    return () => window.removeEventListener("resize", setMoonSize);
  }, []);

  useEffect(() => {
   
    gsap.set(moonRef.current, {
      backgroundColor: "#b492ff",
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
      fontWeight: "700",
      color: "black",
      textAlign: "start",
      position: "absolute",
      left: "0",
      lineHeight: 1.2,
      opacity: 1,
    });
  }, []);

  const handleToggle = () => {
    const isMobile = window.innerWidth < 768;

    if (!expanded) {
      if (isMobile) {
      
        gsap.to(moonRef.current, {
          width: "80vw",
          height: "50vh",
          clipPath: "ellipse(90% 90% at 42% 30%)",
          borderRadius: "2% 4% 2% 5% / 70% 70% 30% 40%",
          top: "20%",
          left: "10%",
          xPercent: 0,
          yPercent: 0,
          duration: 0.8,
           alignItems: "center",
          ease: "power2.inOut",
        });

        gsap.to(textRef.current, {
          fontSize: "3rem",
          rotate: "0deg",
          top: "10%",
          left: "10%",
          color: "#1a1a1a",
          duration: 0.8,
          ease: "power2.inOut",
        });
      } else {
       
        gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
          .to(
            moonRef.current,
            {
              width: "1300px",
              height: "800px",
              justifyItems: "center",
              marginLeft: "60",
             
              paddingBottom: "70",
              clipPath: "ellipse(100% 100% at 50% 0%)",
             borderRadius: "2% 4% 2% 5% / 70% 70% 30% 40%",
              top: 50,
              left: 40,
              xPercent: 0,
              yPercent: 0,
              backgroundColor: "#b492ff",
              zIndex: 50,
            },
            0
          )
          .to(
            textRef.current,
            {
              color: "#1a1a1a",
              fontSize: "9.1rem",
              rotate: 0,
              top: 60,
              left: 60,
            },
            0.3
          );
      }
    } else {
      if (isMobile) {
   
        gsap.to(moonRef.current, {
          width: "300px",
          height: "40vh",
          clipPath: "ellipse(55% 75% at 50% 0%)",
          borderRadius: "12px",
           rotate: "1",
          top: "55%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          duration: 0.8,
          ease: "power2.inOut",
        });

        gsap.to(textRef.current, {
          fontSize: "2.2rem",
          rotate: "-10deg",
          top: "-40px",
          left: "5%",
          color: "black",
          duration: 0.8,
          ease: "power2.inOut",
        });
      } else {
       
        gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } })
          .to(
            textRef.current,
            {
              fontSize: "8.5rem",
              rotate: "-15deg",
              top: "-100px",
              left: "0",
              color: "black",
            },
            0
          )
          .to(
            moonRef.current,
            {
              width: "950px",
              height: "70vh",
              clipPath: "ellipse(50% 80% at 50% 0%)",
              borderRadius: "12px",
              rotate: "1",
              top: "50%",
              left: "50%",
              xPercent: -50,
              yPercent: -50,
            },
            0.2
          );
      }
    }

    setExpanded(!expanded);
  };

 
  useEffect(() => {
    gsap.set(imageRef.current, {
      width: "30%",
      height: "30vh",
      scale: 1,
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
      <section
        className="relative w-screen overflow-hidden bg-white md:mt-22 "
        style={{ height: "90vh" }}
      >
        <div ref={moonRef} className="shadow-2xl">
          <button
            onClick={handleToggle}
            className={`absolute z-10 text-sm md:text-lg font-bold text-white bg-blue-600 px-4 py-2 rounded transition ${
              expanded
                ? "top-10 right-8 -rotate-12"
                : "top-24 left-1/2 -translate-x-1/2 -rotate-12"
            }`}
          >
            {expanded ? "EXIT" : "EXPAND +"}
          </button>

          <h1
            ref={textRef}
            className="absolute top-3 text-center md:text-8xl"
          >
            From self-reflection to transformation
          </h1>
        </div>
      </section>

      <div className="md:w-full   mx-auto flex items-center justify-center overflow-hidden md:-mt-22  -mt-38 rounded-lg">
        <img
          ref={imageRef}
          src="https://maslaempathylab.com/wp-content/uploads/2023/07/Homepage3-scaled.jpg"
          alt="Some image"
          className="md:h-full h-[50%] object-cover rounded-lg"
        />
      </div>
    </>
  );
};

export default Hero;
