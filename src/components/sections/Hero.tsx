'use client';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToDesc = (e: React.MouseEvent) => {
    e.preventDefault();
    const deskripsiSection = document.getElementById('deskripsi');
    if (deskripsiSection) {
      const targetPosition = deskripsiSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // ms
      let start: number | null = null;
      
      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easeInOutQuad = percentage < 0.5
          ? 2 * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad);
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
      
      window.requestAnimationFrame(step);
    }
  };

  const scrollToProduk = (e: React.MouseEvent) => {
    e.preventDefault();
    const produkSection = document.getElementById('produk');
    if (produkSection) {
      const targetPosition = produkSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // ms
      let start: number | null = null;
      
      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easeInOutQuad = percentage < 0.5
          ? 2 * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad);
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
      
      window.requestAnimationFrame(step);
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center overflow-hidden pt-20 md:pt-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50 to-white"></div>

      <div className="absolute -top-16 -right-16 w-64 h-64 md:w-96 md:h-96 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-700">
          <path fill="currentColor" d="M40,-51.2C50.7,-40.6,57.3,-26.1,62.6,-9.5C67.9,7.1,71.9,25.8,65.1,39.8C58.3,53.8,40.8,62.9,21.9,68C3,73.1,-17.3,74.1,-33.1,66.3C-48.8,58.5,-60.1,41.9,-67.3,23.4C-74.6,4.9,-77.8,-15.6,-70.9,-31.6C-64,-47.6,-47,-59.1,-30.3,-64.7C-13.5,-70.3,3,-70,17.1,-64.4C31.1,-58.9,42.8,-48.1,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 transform rotate-180">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-700">
          <path fill="currentColor" d="M40,-51.2C50.7,-40.6,57.3,-26.1,62.6,-9.5C67.9,7.1,71.9,25.8,65.1,39.8C58.3,53.8,40.8,62.9,21.9,68C3,73.1,-17.3,74.1,-33.1,66.3C-48.8,58.5,-60.1,41.9,-67.3,23.4C-74.6,4.9,-77.8,-15.6,-70.9,-31.6C-64,-47.6,-47,-59.1,-30.3,-64.7C-13.5,-70.3,3,-70,17.1,-64.4C31.1,-58.9,42.8,-48.1,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content section */}
          <div className={`w-full md:w-1/2 mb-8 md:mb-0 transition-all duration-700 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="text-xl md:text-2xl mb-2 text-green-700 font-medium">Solusi Alami untuk Kesehatan Anda</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              GAMAT<span className="text-amber-500">RHN</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-700">
              Khasiat{' '}
              <TypeAnimation
                sequence={[
                  'Herbal Asli',
                  2000,
                  'Alami Berkualitas',
                  2000,
                  'Tradisional Terpercaya',
                  2000,
                  'Penyembuh Optimal',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-green-700 font-semibold"
              />
            </h2>
            <p className="text-gray-600 mb-6 text-lg max-w-lg">
              Produk perawatan herbal alami dari Kalimantan yang dikembangkan dengan formula tradisional untuk membantu perawatan kesehatan Anda secara menyeluruh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
              onClick={scrollToProduk}
              className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium text-lg">
                Jelajahi Produk
              </button>
              <button 
                onClick={scrollToDesc}
                className="px-8 py-3 border-2 border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 font-medium text-lg"
              >
                Pelajari Manfaat
              </button>
            </div>
          </div>

          <div className={`w-full md:w-1/2 transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative h-72 sm:h-80 md:h-[500px] flex items-center justify-center">
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-amber-100 via-amber-50 to-white"></div>
              
              <div className="relative w-60 h-60 md:w-80 md:h-80 animate-float">
                <div className="w-full h-full bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
                <Image 
                  src="/produk.jpg" 
                  alt="Produk Gamat NSA" 
                  width={320} 
                  height={320}
                  className="object-contain"
                /> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#deskripsi" 
            onClick={scrollToDesc}
            className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-amber-300 shadow-lg rounded-full flex items-center justify-center hover:bg-amber-50 transition-colors"
            aria-label="Scroll to Desc section"
          >
            <svg className="w-6 h-6 text-amber-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}