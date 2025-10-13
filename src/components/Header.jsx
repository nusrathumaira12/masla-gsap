
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const optionsRefs = useRef([]);
  const buttonRef = useRef(null);
  const menuTextRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
  
    tl.current = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });

   
    tl.current.to(menuRef.current, {
      width: () => menuRef.current.scrollWidth,
      duration: 0.7,
   
      
    });

  
    tl.current.fromTo(
      optionsRefs.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
      "<"
    );
  }, []);

  const handleOpen = () => {
    setOpen(true);
    tl.current.play();
    
    gsap.to(menuTextRef.current, { opacity: 0, duration: 0.2 });
  };

  const handleClose = () => {
 
    gsap.to(optionsRefs.current, { x: -20, opacity: 0, duration: 0.5, stagger: 0.05 });

   
    tl.current.reverse(0);

 
    gsap.to(menuTextRef.current, { opacity: 1, duration: 0.5, delay: 0.5 });

 
    setTimeout(() => setOpen(false), 700);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white  md:px-40 px-6 py-8">
      <div className="flex justify-between items-center">
        {/* Logo + Language */}
        <div className="flex items-center gap-50">
          <a href="#">
            <img
              className="h-[32px] md:h-[40px]"
              src="https://maslaempathylab.com/wp-content/uploads/2023/02/logo-desktop.png"
              alt="Masla Empathy Lab Logo"
            />
          </a>
          <div className="font-bold text-lg text-[#A83749] flex items-center gap-2">
            <button className="underline underline-offset-7 decoration-3">EN</button>
            <span className="font-normal">/</span>
            <button>FR</button>
          </div>
        </div>

        {/* Menu Button + Animated Horizontal Options */}
       <div
  ref={menuRef}
  className="flex items-center overflow-hidden bg-[rgb(113,90,255)] text-white font-bold"
  style={{
    width: buttonRef.current ? buttonRef.current.offsetWidth : "90px",
    maxWidth: "700px",
     clipPath: open
              ? "polygon(0 0, 100% 0, 100% 100%, 4% 100%)" 
              : "" 
  }}
>

         
          <button
            ref={buttonRef}
            className="px-3 py-2 relative"
            onClick={handleOpen}
          >
            <span ref={menuTextRef}>MENU</span>
          </button>

    
          {open && (
            <div className="flex gap-1 ml-2 whitespace-nowrap text-sm">
              {["Case Studies", "Services", "Who We Are", "News & Resources", "Get in touch"].map(
                (item, index) => (
                  <button
                    key={index}
                    ref={(el) => (optionsRefs.current[index] = el)}
                    className="px-2 py-1 hover:text-orange-200"
                  >
                    {item}
                  </button>
                )
              )}
       
              <button
                ref={(el) => (optionsRefs.current[5] = el)}
                className="px-2 py-1 hover:text-red-200"
                onClick={handleClose}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
