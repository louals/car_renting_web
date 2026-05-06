import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

// ─── Optimized Grain Overlay ─────────────────────────────────────────
const GrainOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let frame;

    const draw = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w;
      canvas.height = h;

      const imageData = ctx.createImageData(w, h);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.random() * 255;
        imageData.data[i] = v;
        imageData.data[i + 1] = v;
        imageData.data[i + 2] = v;
        imageData.data[i + 3] = 10;
      }

      ctx.putImageData(imageData, 0, 0);
      frame = setTimeout(draw, 80); // slower = less GPU burn
    };

    draw();
    return () => clearTimeout(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] pointer-events-none mix-blend-overlay opacity-30"
    />
  );
};

// ─── Split Text ──────────────────────────────────────────────────────
const SplitReveal = ({ text, delay = 0, stagger = 0.05 }) => {
  return (
    <span className="inline-flex flex-wrap overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const GlitchWord = ({ text }) => { const [glitch, setGlitch] = useState(false); useEffect(() => { const id = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 3000 + Math.random() * 3000); return () => clearInterval(id); }, []); return (<span className="relative inline-block"> <span>{text}</span> {glitch && (<> <span className="absolute inset-0 text-[#ffffff]/70" style={{ clipPath: 'inset(30% 0 40% 0)', transform: 'translateX(-3px)' }}>{text}</span> <span className="absolute inset-0 text-[#ffffff]/70" style={{ clipPath: 'inset(50% 0 20% 0)', transform: 'translateX(3px)' }}>{text}</span> </>)} </span>); };



// ─── MAIN HERO ───────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // 🧠 Parallax instead of zoom
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0.2]);

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.8]);

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <GrainOverlay />

      <section
        ref={ref}
        className="relative min-h-[115vh] bg-[#080808] overflow-hidden"
      >
        {/* ─── Entrance shutter ───────────────────────── */}
        <AnimatePresence>
          {!entered && (
            <motion.div
              className="fixed inset-0 z-[500] bg-[#080808]"
              exit={{ scaleY: 0, originY: 0 }}
              transition={{ duration: 1.1 }}
            />
          )}
        </AnimatePresence>

        {/* ─── Background (PARALLAX NOT ZOOM) ─────────── */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 0.6, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/herobg.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
        </motion.div>

        {/* ─── Dark overlay on scroll ─────────────────── */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-10"
        />

        {/* ─── Content ───────────────────────────────── */}
        <div className="relative z-30 px-[8%] pt-32 grid grid-cols-12 min-h-[90vh] items-end">

          {/* LEFT */}
          <motion.div
            style={{ y: textY }}
            className="col-span-12 lg:col-span-7 pb-20"
          >
            <div className="mb-6 mt-6 text-white/40 text-xs tracking-[0.4em] uppercase">
              Expérience Automobile d'Élite
            </div>

            <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.85] text-white">
              <div><SplitReveal text="ROULEZ" delay={0.8} /></div>
              <div className="text-white/20">
                <SplitReveal text="VERS" delay={1.1} />
              </div>
              <div className="mt-2">
                <GlitchWord text="L'EXCELLENCE" />
              </div>
            </h1>

            
          </motion.div>



        </div>
      </section>
    </>
  );
};

export default Hero;