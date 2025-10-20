import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const sliderData = [
  { title: "01 - Empowering Diversity and Inclusion",subTitle: "Masla’s Impactful Work with e180/Braindate", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/give-virtual-event-participants-more-than-hallway-conversations-copy-1.jpg" },
  { title: "02-Building a Foundation for Positive Change",subTitle: "Masla’s Approach with The Unscented Company", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/Screen-Shot-2023-07-26-at-10.34.18-AM.png" },
  { title: "01 - Empowering Diversity and Inclusion",subTitle: "Masla’s Impactful Work with e180/Braindate", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/give-virtual-event-participants-more-than-hallway-conversations-copy-1.jpg" },
  { title: "02-Building a Foundation for Positive Change",subTitle: "Masla’s Approach with The Unscented Company" ,image: "https://maslaempathylab.com/wp-content/uploads/2023/02/Screen-Shot-2023-07-26-at-10.34.18-AM.png" },
  { title: "01 - Empowering Diversity and Inclusion",subTitle: "Masla’s Impactful Work with e180/Braindate", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/give-virtual-event-participants-more-than-hallway-conversations-copy-1.jpg" },
];

const PausedMarqueeSlider = () => {
  const sliderRef = useRef(null);
  const tl = useRef(); 

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = gsap.utils.toArray(slider.children);

    if (!slides.length) return;

   
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });

   
    const slideWidthWithGap = slides[0].offsetWidth + 40; 
    
    
    tl.current = gsap.timeline({
      repeat: -1, 
      defaults: { ease: "power2.inOut", duration: 1.6 }, 
    });

    
    const totalSlides = sliderData.length;
    
    
    for (let i = 0; i < totalSlides; i++) {
        tl.current.to(slider, {
            x: `-=${slideWidthWithGap}`, 
            delay: 0.6, 
        })

         .to(".slide-line", {
        borderColor: "#111", // darkens
        scaleX: 1.2, // slight stretch
        transformOrigin: "left center",
        duration: 0.3,
        ease: "power1.out",
      }, "<") // "<" = same time as slide movement
      .to(".slide-line", {
        borderColor: "#999", // returns to lighter
        scaleX: 1,
        duration: 0.4,
        ease: "power1.in",
      });
  
    }
    

   
    tl.current.to(slider, {
        x: 0,
        duration: 0, 
        ease: "none",
        delay: 0.2, 
    });


   


    return () => {
      if (tl.current) tl.current.kill(); 
    };
  }, []);

  return (

    <div className="w-full h-screen overflow-hidden bg-white flex items-center relative">
      <div 
        ref={sliderRef} 
 
        className="flex  justify-start transition-none"
      >
        {sliderData.map((slide, index) => (
          <div
            key={`original-${index}`}
            className="flex-shrink-0 w-[500px] h-[600px] bg-white  rounded-2xl flex flex-col items-center justify-center text-center p-8"
          >
              <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
              <h3 className="text-sm mb-4">{slide.subTitle}</h3>
            <hr className="my-4 border-t-1 border-gray-400 w-full" />
           

            <div className="flex gap-4"><img src={slide.image} alt={slide.title} className="h-60 mb-4 mt-4 object-contain" />
           <hr className="my-4 border-r-1 border-gray-400 h-full" /></div>
            {/* ক্লোন করা স্লাইডগুলি useEffect-এ যোগ করা হবে */}
        
          </div>
        ))}
       
      </div>
     

<hr className="my-4 w-full border-t-[3px] border-gray-800 " />

    </div>
  );
};

export default PausedMarqueeSlider;