import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const menuRef = useRef(null);
  const optionsRefs = useRef([]);
  const buttonRef = useRef(null);
  const menuTextRef = useRef(null);
  const tl = useRef(null);
  const drawerRef = useRef(null);
  const drawerTl = useRef(null);

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
    if (window.innerWidth < 768) {
      setOpen(true); 
      setTimeout(() => {
     
        drawerTl.current = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        drawerTl.current.from(drawerRef.current, { x: "-100%", opacity: 0, duration: 0.5 });
      
        drawerTl.current.play();
      }, 50);
    } else {
      setOpen(true);
      tl.current.play();
      gsap.to(menuTextRef.current, { opacity: 0, duration: 0.2 });
    }
  };

  const handleClose = () => {
    if (window.innerWidth < 768) {
      if (drawerTl.current) {
        drawerTl.current.reverse();
      }
      setTimeout(() => setOpen(false), 700);
    } else {
      gsap.to(optionsRefs.current, { x: -20, opacity: 0, duration: 0.5, stagger: 0.05 });
      tl.current.reverse(0);
      gsap.to(menuTextRef.current, { opacity: 1, duration: 0.5, delay: 0.5 });
      setTimeout(() => setOpen(false), 700);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white md:px-40 px-6 md:py-8 py-12">
      <div className="flex justify-between items-center">
      
        <div className="flex items-center md:gap-50 gap-20">
          <a href="#">
            <img
              className="h-[30px] md:h-[40px]"
              src="https://maslaempathylab.com/wp-content/uploads/2023/02/logo-desktop.png"
              alt="Masla Empathy Lab Logo"
            />
          </a>
          <div className="font-bold md:text-lg text-[#A83749] flex items-center gap-2 cursor-pointer">
            <button className="underline underline-offset-7 decoration-3">EN</button>
            <span className="font-normal">/</span>
            <button className="relative font-bold group pt-0.5 pb-1">
              FR
              <span className="absolute left-0 bottom-0 w-0 h-[3.1px] bg-[#A83749] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>

   
        <div
          ref={menuRef}
          className="flex items-center overflow-hidden bg-[rgb(113,90,255)] text-white font-bold"
          style={{
            width: buttonRef.current ? buttonRef.current.offsetWidth : "90px",
            maxWidth: "700px",
            clipPath: open ? "polygon(0 0, 100% 0, 100% 100%, 4% 100%)" : "",
          }}
        >
          <button ref={buttonRef} className="px-3 py-2 relative" onClick={handleOpen}>
            <span ref={menuTextRef}>MENU</span>
          </button>

          {open && window.innerWidth >= 768 && (
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

    
      {open && window.innerWidth < 768 && (
        <div
          ref={drawerRef}
          className="fixed top-0 left-0 w-full h-[100vh] bg-[rgb(113,90,255)] text-white flex flex-col justify-center items-center gap-8 pt-40 pb-10 text-2xl font-bold z-50"
        >
          <button className="absolute top-5 right-5 text-3xl" onClick={handleClose}>
            X
          </button>

          {[
            { number: "01", title: "Case Studies" },
            { number: "02", title: "Services" },
            { number: "03", title: "Who We Are" },
            { number: "04", title: "News & Resources" },
            { number: "05", title: "Get in touch" },
          ].map((item, i) => {
            return (
              <button
                key={i}
                className="drawer-item flex items-end gap-12 hover:text-orange-200 pb-3 w-full text-start justify-start mx-20 pl-5"
                onClick={handleClose}
              >
                <span className="text-lg mt-10">{item.number}</span>
                <span className="font-bold text-4xl underline underline-offset-15 decoration-0">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
