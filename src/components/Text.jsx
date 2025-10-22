import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const linesRef = useRef([]);
useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section", 
        start: "top 80%", 
        end: "bottom 90%" ,
   
        toggleActions: "play none none none",
      },
    });

   
   tl.to(linesRef.current, {
  y: -60,
 delay: 0.7,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3
});

  }, []);

  return (
    <section className="text-section bg-white py-20 mt-10 text-black text-4xl md:text-7xl text-center w-[80%] mx-auto">
      <h1>
        <div ref={(el) => (linesRef.current[0] = el)}>
          Masla Empathy Lab is a space where
        </div>
        <div ref={(el) => (linesRef.current[1] = el)}>
         learning about  <span className="text-purple-300 fpnt-bold">human experiences</span>
        </div>
        <div ref={(el) => (linesRef.current[2] = el)}>
         realities, and intricacies happens while
        </div>
        <div ref={(el) => (linesRef.current[3] = el)}>
       being seen, heard, and understood
        </div>
        
      </h1>
    </section>
  );
};

export default Text;
