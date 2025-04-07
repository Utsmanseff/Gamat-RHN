'use client';
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const currentPosition = window.pageYOffset;
    
    const scrollStep = -currentPosition / 35; // Makin kecil angka, makin cepat
    
    const scrollAnimation = () => {
      if (window.pageYOffset <= 0) return;
      
      window.scrollBy(0, scrollStep);
      setTimeout(scrollAnimation, 15);  
    };
    
    scrollAnimation();
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label="Scroll to top"
    >
      <FaAngleUp className="text-xl" />
    </button>
  );
}