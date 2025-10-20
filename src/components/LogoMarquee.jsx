import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
  "https://maslaempathylab.com/wp-content/uploads/2023/07/ecoles.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/conseil.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/blab.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/unscented.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/conseil.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/bmw.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/karma.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/braindate.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/ssense.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/via-rail-canada.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/poc.png",
  "https://maslaempathylab.com/wp-content/uploads/2023/07/loreal.png",
];

const LogoMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2; // width of one full set

    gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: 65,
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white mb-10 border-y-1 py-7">
      <div
        ref={marqueeRef}
        className="flex gap-23 items-center "
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo-${i}`}
            className="h-19 w-auto  hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
