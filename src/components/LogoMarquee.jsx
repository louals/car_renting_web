import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/cars/citroen.png',
  '/cars/geely.png',
  '/cars/fiat.png',
  '/cars/hyundai.png',
  '/cars/kia.png',
  '/cars/mercedes-benz.png',
  '/cars/mg.png',
  '/cars/opel.png',
  '/cars/peugeot.png',
  '/cars/renault.png',
  '/cars/suzuki.png',
  '/cars/volkswagen.png'
];

export default function LogoMarquee() {


  const imageStyles = "h-16 md:h-24 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer";

  return (
    <section className="bg-black py-24 overflow-hidden border-y border-white/5 relative z-[40] w-full">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-black text-white/40">
            Précision & Performance
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/60 text-center md:text-right max-w-md">
            Les constructeurs les plus <span className="text-white font-medium">exclusifs au monde</span>, sélectionnés pour votre voyage.
          </p>
        </motion.div>
      </div>

      <div className="flex items-center w-full">
        
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Tripling the logos to ensure enough content for large screens */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center px-12 md:px-20 flex-shrink-0">
              <img 
                src={logo} 
                alt="Brand" 
                className={imageStyles}
              />
            </div>
          ))}

            
        </motion.div>


      </div>
    </section>
  );
}