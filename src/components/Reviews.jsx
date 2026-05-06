import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Emilie Guillaumond',
    role: '',
    text: 'Une expérience excellente ! La voiture était exactement comme décrite, propre et en parfait état. La prise en charge et le retour ont été rapides et sans tracas.',
    date: ''
  },
  {
    name: 'Malek NOUAR',
    role: '',
    text: 'Le personnel était très arrangeant et professionnel. La voiture était propre, bien entretenue et exactement comme annoncée, sans mauvaises surprises.',
    date: ''
  },
  {
    name: 'Ali Benmechta',
    role: '',
    text: "Excellente location de 5 jours. Très bon service au départ d'Alger, voiture neuve qui fonctionne parfaitement. Franchement, allez-y sans hésiter.",
    date: ''
  }
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // AUTO ROTATION
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500); // smooth pacing

    return () => clearInterval(interval);
  }, [paused]);

  const current = reviews[index];

  return (
    <section
      id="reviews"
      className="relative bg-black py-40 overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ambient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* floating background reviews */}
      <div className="absolute inset-0 flex items-center justify-center">
        {reviews.map((r, i) => {
          const offset = i - index;

          return (
            <motion.div
              key={i}
              className="absolute w-[60%] text-center text-white/10 blur-sm"
              animate={{
                scale: offset === 0 ? 1 : 0.9,
                y: offset * 40,
                opacity: offset === 0 ? 0 : 0.2,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <p className="text-2xl italic">"{r.text}"</p>
            </motion.div>
          );
        })}
      </div>

      {/* MAIN FOCUS REVIEW */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
          >
            {/* stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-white text-white"
                />
              ))}
            </div>

            {/* quote */}
            <Quote className="mx-auto text-white/10 mb-6" size={50} />

            <p className="text-2xl md:text-3xl text-white/90 italic leading-relaxed">
              "{current.text}"
            </p>

            {/* name */}
            <div className="mt-10">
              <h4 className="text-xl font-bold uppercase tracking-wide">
                {current.name}
              </h4>
              <p className="text-white/40 text-sm uppercase tracking-[0.3em]">
                {current.role}
              </p>
              <p className="text-white/20 text-xs mt-2">
                {current.date}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* progress dots */}
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === index ? "white" : "rgba(255,255,255,0.2)",
                transform: i === index ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;