'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-2xl font-bold text-slate-700">
              Gamat<span className="text-amber-500">RHN</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#home" className="text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium">
                Beranda
              </Link>
              <Link href="#about" className="text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium">
                Tentang
              </Link>
              <Link href="#manfaat" className="text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium">
                Manfaat
              </Link>
              <Link href="#bahan" className="text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium">
                Bahan Aktif
              </Link>
              <Link href="#produk" className="text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium">
                Produk
              </Link>
              <Link href="#kontak" className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Hubungi Kami
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 shadow-lg rounded-b-lg">
          <Link href="#home" className="block text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Beranda
          </Link>
          <Link href="#about" className="block text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Tentang
          </Link>
          <Link href="#deskripsi" className="block text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Manfaat
          </Link>
          <Link href="#produk" className="block text-gray-800 hover:text-green-700 px-3 py-2 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Produk
          </Link>
          <Link href="#kontak" className="block bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-2 rounded-md hover:shadow-md transition-all duration-300 mt-2" onClick={() => setMobileMenuOpen(false)}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}