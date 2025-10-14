import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Masla = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".masla-section", // whole section triggers animation
        start: "top 80%",          // start when section top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });

    // Animate lines with stagger
    tl.to(linesRef.current, {
      y: -60,
delay: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.5,  // each line comes one after another
    });
  }, []);

  return (
    <section className="masla-section bg-white py-20 mt-10 text-black text-4xl md:text-7xl text-center w-[80%] mx-auto">
      <h1>
        <div ref={(el) => (linesRef.current[0] = el)}>
          <span className="font-bold">Masla</span> — to tolerate and be tolerated,
        </div>
        <div ref={(el) => (linesRef.current[1] = el)}>
          communicating in a sensitive and
        </div>
        <div ref={(el) => (linesRef.current[2] = el)}>
          intentional manner. <span className="font-bold">Empathy Lab</span> — to
        </div>
        <div ref={(el) => (linesRef.current[3] = el)}>
          expand and experience
        </div>
        <div ref={(el) => (linesRef.current[4] = el)}>
    spectrum of humanity. 
        </div>
        <div ref={(el) => (linesRef.current[5] = el)}>
          The global Consulting firm.
        </div>
      </h1>
    </section>
  );
};

export default Masla;
