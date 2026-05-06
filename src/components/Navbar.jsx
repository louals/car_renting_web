import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // 🎬 First load trigger (cinematic delay)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasLoaded(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // 📜 Scroll behavior
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY.current;

    if (direction > 15 && latest > 100) {
      setIsHidden(true);
      setIsHovered(false);
    } else if (direction < -15) {
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  // 🔥 Logo animation
  const logoVariants = {
    initial: {
      y: -60,
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)"
    },
    entrance: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }
    },
    exit: {
      y: -80,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  // 💎 Right side animation
  const rightGroupVariants = {
    initial: {
      y: -60,
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)"
    },
    entrance: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      }
    },
    exit: {
      y: -80,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const menuLinks = [
    { name: 'Flotte', href: '#fleet' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[200] pointer-events-none">
      <div className="flex justify-between items-start p-6 md:p-12">

        {/* 🔥 LOGO */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate={
            !hasLoaded
              ? "initial"
              : isHidden
                ? "exit"
                : "entrance"
          }
          className="pointer-events-auto"
        >
          <a href="/" className="block">
            <img
              src="/image-black.png"
              alt="Logo"
              className="rounded-[30%] w-16 h-16 md:w-24 md:h-24 object-contain bg-white shadow-2xl border border-black/5"
            />
          </a>
        </motion.div>

        {/* 💎 RIGHT SIDE */}
        <motion.div
          variants={rightGroupVariants}
          initial="initial"
          animate={
            !hasLoaded
              ? "initial"
              : isHidden
                ? "exit"
                : "entrance"
          }
          className="flex gap-3 md:gap-4 pointer-events-auto items-center"
        >

          {/* MENU */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ width: isHovered ? 'auto' : '64px' }}
            transition={{ type: 'spring', damping: 28, stiffness: 200 }}
            className="flex items-center bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-14 md:h-20 cursor-pointer border border-black/5"
          >

            {/* Hamburger */}
            <div className="flex flex-col gap-1.5 min-w-[64px] md:min-w-[80px] h-full items-center justify-center order-last">
              <motion.div
                animate={{ width: isHovered ? 20 : 26, x: isHovered ? 2 : 0 }}
                className="h-[1.5px] bg-black"
              />
              <motion.div
                animate={{ width: isHovered ? 26 : 14, x: isHovered ? -2 : 0 }}
                className="h-[1.5px] bg-black"
              />
            </div>

            {/* Links */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  // Increased duration for the container reveal
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10, transition: { duration: 0.3 } }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out
                  }}
                  className="hidden sm:flex items-center gap-6 md:gap-9 pl-8 pr-4 whitespace-nowrap"
                >
                  {menuLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        // The magic happens here:
                        delay: 0.2 + (i * 0.12), // Initial wait + slower stagger
                        duration: 0.8,           // Longer fade time
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:opacity-40 transition-opacity"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* BUTTON */}
          <motion.a
            href="https://wa.me/213557624187"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 md:px-12 h-14 md:h-20 bg-black text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-white/10"
          >
            Réserver
          </motion.a>


        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;