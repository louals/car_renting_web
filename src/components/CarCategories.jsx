import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Plus } from 'lucide-react';
import brabus from '/brabus.png';
import golf from '/golf.png';
import opel from '/opel.png';
import merco from '/merco.png';

const categories = [
  { id: 1, title: 'Rapidité', sub: 'Supercars', image: golf },
  { id: 2, title: 'Dominance', sub: 'SUVs de Luxe', image: brabus },
  { id: 3, title: 'Confort', sub: 'Classiques', image: opel },
  { id: 4, title: 'Prestige', sub: 'Élite Executive', image: merco },
];


const CategoryPanel = ({ cat, progress, index }) => {
  const start = index * 0.25;
  const end = start + 0.25;

  // 1. Shrink effect (Current panel scales down as you scroll past it)
  const scale = useTransform(progress, [start, end], [1, 0.85]);
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

  // 2. Parallax movement for the image inside the frame
  const imgScale = useTransform(progress, [start, end], [1.2, 1]);

  // 3. Text "lifting" off the screen
  const yText = useTransform(progress, [start, end], [100, -100]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="fixed inset-0 w-full h-screen flex items-center justify-center p-6 md:p-20"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10">
        {/* Background Image with Parallax */}
        <motion.img
          src={cat.image}
          style={{ scale: imgScale }}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

        {/* Floating Content */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
          <motion.div style={{ y: yText }} className="flex flex-col">

            <h2 className="text-[14vw] md:text-[12vw] font-black uppercase leading-[0.8] text-white tracking-tighter">
              {cat.title}
            </h2>
          </motion.div>

          <div className="mt-8 flex items-center gap-6">
            <button className="h-16 w-16 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors group">
              <Plus className="group-rotate-90 transition-transform" />
            </button>
            <p className="max-w-xs text-white/60 text-xs leading-relaxed uppercase tracking-widest">
              Explorez les chefs-d'œuvre d'ingénierie qui définissent cette ère d'excellence automobile.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NewCarCategories = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#0a0a0a]">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="sticky top-0 h-screen">
        {categories.map((cat, i) => (
          <CategoryPanel
            key={cat.id}
            cat={cat}
            progress={smoothProgress}
            index={i}
          />
        ))}

        {/* Minimalist Grid Indicator */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
          {categories.map((_, i) => (
            <motion.div
              key={i}
              className="h-[2px] bg-white"
              style={{
                width: useTransform(smoothProgress, [i * 0.25, (i + 1) * 0.25], [20, 80]),
                opacity: useTransform(smoothProgress, [i * 0.25, (i + 1) * 0.25], [0.2, 1])
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCarCategories;