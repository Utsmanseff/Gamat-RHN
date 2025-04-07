'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((el: Element) => observer.observe(el));
      
      return () => {
        elementsToAnimate.forEach((el: Element) => observer.unobserve(el));
      };
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-700">
          <path fill="currentColor" d="M40,-51.2C50.7,-40.6,57.3,-26.1,62.6,-9.5C67.9,7.1,71.9,25.8,65.1,39.8C58.3,53.8,40.8,62.9,21.9,68C3,73.1,-17.3,74.1,-33.1,66.3C-48.8,58.5,-60.1,41.9,-67.3,23.4C-74.6,4.9,-77.8,-15.6,-70.9,-31.6C-64,-47.6,-47,-59.1,-30.3,-64.7C-13.5,-70.3,3,-70,17.1,-64.4C31.1,-58.9,42.8,-48.1,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="w-20 h-1 bg-amber-500 mb-6 animate-on-scroll opacity-0 transition-all duration-700 delay-300"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 animate-on-scroll opacity-0 transition-all duration-700">Tentang Gamat RHN</h2>
          <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl animate-on-scroll opacity-0 transition-all duration-700 delay-150">
            Warisan Kearifan Lokal dalam Produk Modern untuk Kesehatan Optimal
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              {/* Ganti dengan gambar produk Anda */}
              <div className="w-full h-full bg-white p-4 flex items-center justify-center rounded-2xl border border-amber-100">
                <Image 
                  src="/produk.jpg" 
                  alt="Produk Gamat NSA" 
                  width={370} 
                  height={370}
                  className="object-contain"
                /> 
                {/* <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🌿</div>
                  <div className="text-lg font-medium">Gambar Produk Gamat NSA</div>
                </div> */}
              </div>
              
              <div className="absolute -top-1 -right-4 bg-amber-500 text-white px-6 py-2 rounded-full transform rotate-12 shadow-lg">
                <span className="text-sm font-semibold tracking-wide">100% Alami</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll opacity-0 transition-all duration-700 delay-450">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-700">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">Warisan Tradisional Kalimantan</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                GAMAT RHN merupakan ramuan obat herbal yang terinspirasi dari tradisi turun-temurun Suku Dayak di pedalaman Kalimantan Tengah. Kami menghadirkan formulasi herbal alami untuk membantu meringankan dan mempercepat penyembuhan luka.
              </p>
              
              <h4 className="text-xl font-semibold text-green-700 mb-3">Dipercaya Secara Turun-Temurun</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dipercaya oleh Suku Dayak selama generasi, ramuan herbal ini aman dan efektif untuk membantu pemulihan luka Anda. Setiap produk kami dibuat dengan standar kualitas tertinggi untuk memastikan khasiat optimal.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Alami</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Herbal</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Kalimantan</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tradisional</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Berkhasiat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-on-scroll {
          transform: translateY(20px);
        }
      `}</style>
    </section>
  );
}