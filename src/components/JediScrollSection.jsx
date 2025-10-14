// src/components/JediScrollSection.jsx

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slideData = [
  {
    title: "JEDI",
    subtitle: "/Je.di/ noun",
    description:
      "An acronym we use to stand for Justice, Equity, Diversity and Inclusion. It is the belief system which guides our work and how we wish to navigate this life. We believe in a world where our humanity and differences can be celebrated and nurtured, allowing us to thrive.",
    color: "rgb(254, 250, 224)",
    image: "https://maslaempathylab.com/wp-content/uploads/2023/03/vector-1.png",
    ending: "1/5",
  },
  {
    title: "Justice",
    subtitle: "",
    description: "We seek Justice to identify and remove systemic barriers and disadvantages, opening access to resources and opportunities.",
    color: "rgb(233, 216, 253)",
    image: "https://maslaempathylab.com/wp-content/uploads/2023/04/logo-justice-purple.png",
      ending: "2/5",
  },
  {
    title: "Equity",
    subtitle: "3/5",
    description:
      "We are committed to Equity so that each individual can grow and thrive. An individual’s race, personal background, or individual characteristics from a statistical sense, should no longer predict their life outcomes.",
    color: "rgb(255, 229, 180)",
    image: "https://maslaempathylab.com/wp-content/uploads/2023/04/logo-equity-copper.png",
      ending: "3/5",
  },
  {
    title: "Diversity",
    subtitle: "4/5",
    description:
      "Through Diversity we seek to reflect our community, encompassing the broad tapestry of people, life experiences and perspectives.",
    color: "rgb(210, 255, 200)",
    image: "https://maslaempathylab.com/wp-content/uploads/2023/04/logo-diversity-khakigreen.png",
      ending: "4/5",
  },
  {
    title: "Inclusion",
    subtitle: "5/5",
    description:
      "Through Inclusion we are determined to amplify each person’s voice and eliminate biases regardless of their abilities, background or experience.",
    color: "rgb(255, 210, 210)",
    image: "https://maslaempathylab.com/wp-content/uploads/2023/04/logo-inclusion-burgundy.png",
      ending: "5/5",
  },
];

const JediScrollSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const slides = gsap.utils.toArray(sectionRef.current.children);
    if (!slides.length) return;

    const ctx = gsap.context(() => {
      slides.forEach((slide, i) => {
        // 🎯 Sticky pinning logic — each slide stays until next one overlaps
        ScrollTrigger.create({
          trigger: slide,
          start: "top top",
          endTrigger: i < slides.length - 1 ? slides[i + 1] : "bottom",
          end: i < slides.length - 1 ? "top top" : "bottom top",
          pin: true,
          pinSpacing: false,
          
        });

        // 🎯 Text animation only
        const text = slide.querySelector(".js-text-content");
        if (text) {
          gsap.from(text, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className="h-screen w-full relative flex items-center justify-center px-20 overflow-hidden"
          style={{ backgroundColor: slide.color, zIndex: index + 1 }}
        >
          {/* 🧠 Left: Text content */}
          <div className="js-text-content w-1/3 flex flex-col justify-center z-10 relative space-y-6">
            <h1 className="text-7xl font-serif font-bold">{slide.title}</h1>
            <p className="text-2xl font-mono">{slide.subtitle}</p>
            <p className="text-lg leading-relaxed max-w-lg">{slide.description}</p>
            <p className="text-6xl  mt-2 mb-0 pt-30 pb-0">{slide.ending}</p> 
          </div>

        
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-contain max-h-[80%] max-w-[80%] rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default JediScrollSection;
