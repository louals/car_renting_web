import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="experience" ref={containerRef} className="relative h-[150vh] overflow-hidden bg-luxury-black">
      {/* Background Parallax Layer - Algiers Coastal Road Placeholder */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Algiers Scenic Road" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div style={{ scale }}>
          <span className="text-luxury-silver uppercase tracking-[0.5em] text-xs mb-8 block">L'Expérience</span>
          <h2 className="text-5xl md:text-8xl font-black mb-12 max-w-5xl leading-none text-white">
            OÙ L'HORIZON <br /> RENCONTRE <span className="text-luxury-silver italic">L'EXTRAORDINAIRE</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-20 mt-20">
            {[
              { title: 'Littoral', desc: 'Vues imprenables sur la Méditerranée' },
              { title: 'Liberté', desc: 'Voyage de luxe sans limites' },
              { title: 'Service', desc: 'Conciergerie d\'élite personnalisée' }
            ].map((item) => (
              <div key={item.title} className="text-center max-w-[200px]">
                <h3 className="text-2xl font-bold mb-4 font-display text-white">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements for Parallax Depth */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 right-10 md:right-40 w-64 h-80 rounded-3xl overflow-hidden border border-white/10 glass hidden lg:block"
      >
        <img 
          src="https://images.unsplash.com/photo-1542362567-b05503f3f5f4?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60"
          alt="Luxury Car Detail"
        />
      </motion.div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-1/4 left-10 md:left-40 w-48 h-64 rounded-3xl overflow-hidden border border-white/10 glass hidden lg:block"
      >
        <img 
          src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1974&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60"
          alt="Luxury Interior"
        />
      </motion.div>
    </section>
  );
};

export default ParallaxExperience;
