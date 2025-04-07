'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-14 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        {/* Bottom section with contact and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-gray-800 mb-2">Hubungi Kami</h4>
            <div className="flex items-center text-gray-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>nikmatalamsyariahagribisnis@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+62 857 9696 6254</span>
            </div>
          </div>
          
          <div className="text-center md:text-right text-gray-600">
           
            <p className="text-sm">© {new Date().getFullYear()} Gamat RHN. All Right Reserved.</p>
            <p className="text-sm mt-1">
              Dikembangkan oleh{" "}
              <a
                href="https://instagram.com/utsmnseff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 font-medium hover:underline"
              >
                Utsmnseff
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}