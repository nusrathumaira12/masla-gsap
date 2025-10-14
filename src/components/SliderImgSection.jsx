import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const sliderData = [
  { title: "01 - Empowering Diversity and Inclusion", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/give-virtual-event-participants-more-than-hallway-conversations-copy-1.jpg" },
  { title: "02-Building a Foundation for Positive Change", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/Screen-Shot-2023-07-26-at-10.34.18-AM.png" },
  { title: "01 - Empowering Diversity and Inclusion", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/give-virtual-event-participants-more-than-hallway-conversations-copy-1.jpg" },
  { title: "02-Building a Foundation for Positive Change", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/Screen-Shot-2023-07-26-at-10.34.18-AM.png" },
  { title: "01 - Empowering Diversity and Inclusion", image: "https://maslaempathylab.com/wp-content/uploads/2023/02/give-virtual-event-participants-more-than-hallway-conversations-copy-1.jpg" },
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
    
    // 3. 🎯 অ্যানিমেশন টাইমলাইন সেট করা
    tl.current = gsap.timeline({
      repeat: -1, // নন-স্টপ লুপ
      defaults: { ease: "power2.inOut", duration: 1.6 }, // প্রতিটি স্লাইডের অ্যানিমেশন স্পিড
    });

    // 4. 🎯 প্রতিটি ক্লোন স্লাইড জুড়ে টাইমলাইনে অ্যানিমেশন যোগ করা
    const totalSlides = sliderData.length;
    
    // টাইমলাইনটি শুরু হবে এবং প্রতিটি স্লাইডকে (আসল + ক্লোন) সরাবে। 
    // আমরা শুধু আসল স্লাইডগুলির সংখ্যা অনুযায়ী লুপ চালাবো, কারণ ক্লোনগুলি এর সাথেই সরবে।
    for (let i = 0; i < totalSlides; i++) {
        tl.current.to(slider, {
            x: `-=${slideWidthWithGap}`, // এক স্লাইডের দূরত্ব বাম দিকে সরাও
            delay: 0.6, // ⚠️ FIX: স্লাইড হবার পরে 0.2 সেকেন্ড থামার জন্য delay
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
 
        className="flex gap-10 justify-start transition-none"
      >
        {sliderData.map((slide, index) => (
          <div
            key={`original-${index}`}
            className="flex-shrink-0 w-[500px] h-[400px] bg-white  rounded-2xl flex flex-col items-center justify-center text-center p-8"
          >
              <h2 className="text-2xl font-bold">{slide.title}</h2>
            <img src={slide.image} alt={slide.title} className="h-40 mb-4 object-contain" />
          
          </div>
        ))}
        {/* ক্লোন করা স্লাইডগুলি useEffect-এ যোগ করা হবে */}
      </div>
    </div>
  );
};

export default PausedMarqueeSlider;