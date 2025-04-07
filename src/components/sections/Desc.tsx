'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSprayCan, FaLightbulb } from 'react-icons/fa';

export default function Desc() {
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
   <section 
     id="deskripsi" 
     ref={sectionRef} 
     className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
   >
     {/* Ornamen dekoratif */}
     <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-700">
         <path fill="currentColor" d="M40,-51.2C50.7,-40.6,57.3,-26.1,62.6,-9.5C67.9,7.1,71.9,25.8,65.1,39.8C58.3,53.8,40.8,62.9,21.9,68C3,73.1,-17.3,74.1,-33.1,66.3C-48.8,58.5,-60.1,41.9,-67.3,23.4C-74.6,4.9,-77.8,-15.6,-70.9,-31.6C-64,-47.6,-47,-59.1,-30.3,-64.7C-13.5,-70.3,3,-70,17.1,-64.4C31.1,-58.9,42.8,-48.1,40,-51.2Z" transform="translate(100 100)" />
       </svg>
     </div>
     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="flex flex-col items-center mb-16">
         <div className="w-20 h-1 bg-amber-500 mb-6 animate-on-scroll opacity-0 transition-all duration-700 delay-300"></div>
         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 animate-on-scroll opacity-0 transition-all duration-700">
           Manfaat & Penggunaan
         </h2>
         <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl animate-on-scroll opacity-0 transition-all duration-700 delay-150">
           Dipercaya secara turun-temurun untuk menyembuhkan berbagai jenis luka
         </p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Khasiat */}
         <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300">
           <motion.div 
             className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-700 h-full"
             whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <div className="p-6">
               <div className="flex items-center justify-center mb-6">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                   <FaLeaf className="w-8 h-8" />
                 </div>
               </div>
               <h3 className="text-xl font-bold mb-4 text-center text-amber-500">Khasiat</h3>
               <ul className="space-y-3">
                 {[
                   "Mempercepat proses penyembuhan luka",
                   "Membantu melawan infeksi",
                   "Mengurangi rasa sakit dan peradangan",
                   "Kaya akan kolagen untuk regenerasi kulit",
                   "Bersifat antiseptik dan antimikroba",
                   "Mengobati luka diabetes, cacar, luka bakar"
                 ].map((item, index) => (
                   <li key={index} className="flex items-start">
                     <span className="inline-block w-4 h-4 bg-amber-500 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                     <span className="text-gray-700">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </motion.div>
         </div>
         
         {/* Penggunaan */}
         <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-450">
           <motion.div 
             className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-amber-500 h-full"
             whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <div className="p-6">
               <div className="flex items-center justify-center mb-6">
                 <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                   <FaSprayCan className="w-8 h-8" />
                 </div>
               </div>
               <h3 className="text-xl font-bold mb-4 text-center text-green-700">Penggunaan</h3>
               <ul className="space-y-3">
                 {[
                   "Bersihkan luka dengan air bersih",
                   "Semprot pada luka yang terbuka",
                   "Ulangi 2–5 kali sehari",
                   "Hindari terkena air setelah disemprot (15 menit)"
                 ].map((item, index) => (
                   <li key={index} className="flex items-start">
                     <div className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                       {index + 1}
                     </div>
                     <span className="text-gray-700">{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="mt-6 pt-6 border-t border-gray-100">
                 <div className="bg-amber-50 p-4 rounded-lg">
                   <p className="text-sm text-amber-800 italic">
                   &quot;Untuk hasil optimal, gunakan secara rutin dan pastikan area luka tetap bersih&quot;
                   </p>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
         
         {/* Tips */}
         <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-600">
           <motion.div 
             className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-700 h-full"
             whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <div className="p-6">
               <div className="flex items-center justify-center mb-6">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                   <FaLightbulb className="w-8 h-8" />
                 </div>
               </div>
               <h3 className="text-xl font-bold mb-4 text-center text-amber-500">Tips Penggunaan</h3>
               
               <div className="space-y-4">
                 <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-amber-500">
                   <h4 className="font-semibold text-gray-800 mb-2">Luka Kotor:</h4>
                   <p className="text-gray-700">Bersihkan terlebih dahulu dengan air sabun dan kapas steril sebelum aplikasi</p>
                 </div>
                 
                 <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-amber-500">
                   <h4 className="font-semibold text-gray-800 mb-2">Luka Berdarah:</h4>
                   <p className="text-gray-700">Semprotkan obat pada kapas steril. Tempelkan kapas pada luka, lalu semprotkan kembali</p>
                 </div>
                 
                 <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-amber-500">
                   <h4 className="font-semibold text-gray-800 mb-2">Penyimpanan:</h4>
                   <p className="text-gray-700">Simpan di tempat yang sejuk dan kering, jauhkan dari sinar matahari langsung</p>
                 </div>
               </div>
               
               <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-center">
                 <span className="text-2xl mr-3">💡</span>
                 <p className="text-sm text-green-800">
                   Gunakan dengan rutin untuk hasil yang maksimal. Konsultasikan dengan dokter untuk luka serius.
                 </p>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </div>
     
     {/* Style untuk animasi fade-in */}
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