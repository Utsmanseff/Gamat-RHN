'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaShoppingCart, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Product() {
 const sectionRef = useRef<HTMLElement | null>(null);
 const [activeProduct, setActiveProduct] = useState<string | null>(null);
 
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

 const handleWhatsAppClick = (size: string) => {
   const message = `Halo, saya tertarik dengan produk Gamat RHN. Bisa tolong informasi lebih lanjut?`;
   const url = `https://wa.me/6285796966254?text=${encodeURIComponent(message)}`;
   window.open(url, '_blank');
 };

 const products = [
   {
     id: '60ml',
     size: '60ml',
     
     imageSrc: '/60ml.jpg',
     bestFor: 'Ideal untuk penggunaan pribadi',
     features: ['Praktis', 'Mudah dibawa', 'Penyembuhan cepat'],
     description: 'Ukuran yang praktis untuk penggunaan pribadi atau perjalanan. Cocok untuk luka-luka kecil atau penggunaan ringan.'
   },
   {
     id: '100ml',
     size: '100ml',
     
     imageSrc: '/100ml.jpg',
     bestFor: 'Pilihan hemat untuk keluarga',
     features: ['Hemat', 'Tahan lama', 'Untuk seluruh keluarga'],
     description: 'Ukuran lebih besar untuk kebutuhan keluarga atau penggunaan jangka panjang. Lebih hemat dan tahan lama.'
   }
 ];

 return (
   <section id="produk" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
     {/* Ornamen dekoratif */}
     <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-700">
         <path fill="currentColor" d="M40,-51.2C50.7,-40.6,57.3,-26.1,62.6,-9.5C67.9,7.1,71.9,25.8,65.1,39.8C58.3,53.8,40.8,62.9,21.9,68C3,73.1,-17.3,74.1,-33.1,66.3C-48.8,58.5,-60.1,41.9,-67.3,23.4C-74.6,4.9,-77.8,-15.6,-70.9,-31.6C-64,-47.6,-47,-59.1,-30.3,-64.7C-13.5,-70.3,3,-70,17.1,-64.4C31.1,-58.9,42.8,-48.1,40,-51.2Z" transform="translate(100 100)" />
       </svg>
     </div>
     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="flex flex-col items-center mb-16">
         <div className="w-20 h-1 bg-amber-500 mb-6 animate-on-scroll opacity-0 transition-all duration-700 delay-300"></div>
         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 animate-on-scroll opacity-0 transition-all duration-700">
           Pilihan Produk
         </h2>
         <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl animate-on-scroll opacity-0 transition-all duration-700 delay-150">
           Kualitas premium dari warisan tradisional Kalimantan dalam beberapa pilihan ukuran
         </p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
         {products.map((product, index) => (
           <div key={product.id} className="animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: `${300 + (index * 150)}ms` }}>
             <motion.div 
               className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
               whileHover={{ 
                 y: -10,
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
               }}
               onHoverStart={() => setActiveProduct(product.id)}
               onHoverEnd={() => setActiveProduct(null)}
             >
               {/* Badge */}
               <div className="absolute top-4 left-4 z-10">
                 <div className="bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                   {product.size}
                 </div>
               </div>
               
               {/* Natural badge */}
               <div className="absolute top-4 right-4 z-10">
                 <div className="bg-green-700 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm flex items-center">
                   <FaLeaf className="mr-1" size={12} /> 100% Alami
                 </div>
               </div>
               
               {/* Image container */}
               <div className="relative h-72 w-full bg-gradient-to-br from-amber-50 to-green-50 flex items-center justify-center p-6 border-b border-amber-100">
                 <div className={`transition-all duration-300 transform ${activeProduct === product.id ? 'scale-110' : 'scale-100'}`}>
                   <div className="relative h-56 w-56">
                     <Image 
                       src={product.imageSrc} 
                       alt={`Gamat NSA ${product.size}`} 
                       fill
                       className="object-contain drop-shadow-md"
                     />
                   </div>
                 </div>
               </div>
               
               {/* Content */}
               <div className="p-6">
                 <div className="flex justify-between items-start mb-3">
                   <div>
                     <h3 className="text-2xl font-bold text-gray-800">Gamat RHN</h3>
                     <p className="text-amber-500 font-medium">{product.size}</p>
                   </div>
                  
                 </div>
                 
                 <div className="border-t border-amber-100 pt-4 mb-4">
                   <p className="text-gray-700 mb-2 font-medium">{product.bestFor}</p>
                   <p className="text-gray-600 text-sm">{product.description}</p>
                 </div>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                   {product.features.map((feature, i) => (
                     <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                       {feature}
                     </span>
                   ))}
                 </div>
                 
                 <motion.button
                   onClick={() => handleWhatsAppClick(product.size.replace('ml', ''))}
                   className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-xl transition-colors font-medium"
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                 >
                   <FaWhatsapp size={18} /> Pesan Sekarang
                 </motion.button>
               </div>
             </motion.div>
           </div>
         ))}
       </div>
       
       {/* Call to action */}
       <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-900">
         <div className="bg-green-50 border border-green-100 p-6 rounded-2xl inline-block max-w-2xl mx-auto shadow-sm">
           <p className="text-green-800 font-medium mb-4">
             Ingin mendapatkan informasi lebih detail tentang produk Gamat RHN? 
             Konsultasikan kebutuhan Anda dengan tim kami.
           </p>
           <motion.button
             onClick={() => handleWhatsAppClick('info')}
             className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg transition-colors font-medium"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <FaWhatsapp /> Hubungi Kami
           </motion.button>
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