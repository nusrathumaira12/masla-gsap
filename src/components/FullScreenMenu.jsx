// src/components/FullScreenMenu.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MenuItems = [
  { name: 'Case studies', href: '#case-studies' },
  { name: 'Services', href: '#services' },
  { name: 'Who we are', href: '#who-we-are' },
  { name: 'News & resources', href: '#news' },
  { name: 'Get in touch', href: '#contact' },
];

const FullScreenMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // নিশ্চিত করুন যে রেফারেন্সগুলি বিদ্যমান
    if (!menuRef.current) return;

    if (isOpen) {
      // 1. Show the menu container and set initial off-screen state (if not already set)
      gsap.set(menuRef.current, { display: 'flex' });
      
      // 2. Animate the menu container to slide in
      gsap.fromTo(menuRef.current, {
        x: '100%', // Start off-screen to the right
        opacity: 0,
      }, {
        x: '0%', // Slide to full view
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      });

      // 3. Animate list items (staggered entry)
      gsap.fromTo(itemsRef.current, {
        x: 50, // Start slightly to the right
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08, 
        delay: 0.3,
        ease: 'power2.out',
      });

      document.body.style.overflow = 'hidden';

    } else {
      // Hide the menu (slide out to the right)
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => {
          // অ্যানিমেশন শেষ হলে display: 'none' করে দিন
          gsap.set(menuRef.current, { display: 'none' }); 
          document.body.style.overflow = '';
        },
      });
      // itemsRef.current রিসেট করার প্রয়োজন নেই, কারণ এটি মেনুর সাথেই লুকিয়ে যাবে।
    }
  }, [isOpen]);


  return (
    <div
      ref={menuRef}
      // Fixed, full-screen overlay, z-index high. 
      // Tailwind classes for initial hidden state (will be overridden by GSAP)
      className="fixed inset-0 z-[100] bg-[#1a1a1a] p-8 md:p-12 overflow-y-auto hidden"
      style={{ opacity: 0 }} // GSAP এটি নিয়ন্ত্রণ করবে
    >
      
      {/* Close Button: Positioned absolutely top-right */}
      <button
        className="absolute top-4 right-4 md:top-8 md:right-8 btn btn-circle btn-lg text-white border-none bg-transparent hover:bg-gray-800 transition-colors duration-300"
        onClick={onClose}
        aria-label="Close Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Menu Links Container: Full height to center content */}
      <nav className="flex items-center w-full h-full pt-16 md:pt-24">
        
        <ul className="space-y-6 md:space-y-8 w-full">
          {MenuItems.map((item, index) => (
            <li
              key={item.name}
              // রেফারেন্স সঠিকভাবে সেট করা হচ্ছে
              ref={el => itemsRef.current[index] = el}
              className="border-b border-gray-700 pb-4" 
              onClick={() => { onClose(); }}
            >
              <a 
                href={item.href}
                className="flex items-start text-white text-4xl md:text-6xl font-bold cursor-pointer transition-colors hover:text-[#A83749]"
              >
                <span className="text-xl md:text-2xl font-light text-gray-500 mr-8 pt-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FullScreenMenu;