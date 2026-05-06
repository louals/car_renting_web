import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasLoaded(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY.current;
    if (direction > 15 && latest > 100 && !isOpen) {
      setIsHidden(true);
      setIsHovered(false);
    } else if (direction < -15) {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  const menuLinks = [
    { name: 'Flotte', href: '#fleet' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[200] pointer-events-none">
        <div className="flex justify-between items-start p-6 md:p-12">
          
          {/* 🔥 LOGO */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ 
              y: isHidden && !isOpen ? -100 : 0, 
              opacity: isHidden && !isOpen ? 0 : 1 
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto"
          >
            <a href="/" className="block">
              <img 
                src="/image-black.png" 
                alt="Logo" 
                className="rounded-[30%] w-14 h-14 md:w-24 md:h-24 object-contain bg-white shadow-2xl border border-black/5" 
              />
            </a>
          </motion.div>

          {/* 💎 RIGHT SIDE */}
          <motion.div 
            initial={{ y: -60, opacity: 0 }}
            animate={{ 
              y: isHidden && !isOpen ? -100 : 0, 
              opacity: isHidden && !isOpen ? 0 : 1 
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex gap-3 md:gap-4 pointer-events-auto items-center"
          >
            
            {/* DESKTOP MENU */}
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(!isOpen)}
              animate={{ width: isHovered ? 'auto' : '56px' }}
              className="hidden md:flex items-center bg-white rounded-[2.5rem] overflow-hidden shadow-2xl h-14 md:h-20 cursor-pointer border border-black/5"
            >
              <div className="flex flex-col gap-1.5 min-w-[56px] md:min-w-[80px] h-full items-center justify-center order-last">
                <motion.div animate={{ width: isHovered ? 20 : 26, x: isHovered ? 2 : 0 }} className="h-[1.5px] bg-black" />
                <motion.div animate={{ width: isHovered ? 26 : 14, x: isHovered ? -2 : 0 }} className="h-[1.5px] bg-black" />
              </div>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-6 md:gap-9 pl-8 pr-4 whitespace-nowrap"
                  >
                    {menuLinks.map((link, i) => (
                      <a key={link.name} href={link.href} className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:opacity-40 transition-opacity">
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-black/5"
            >
              {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>

            {/* RESERVE BUTTON */}
            <a
              href="https://wa.me/213557624187"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-12 h-14 md:h-20 bg-black text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-white/10"
            >
              <span className="hidden sm:inline">Réserver</span>
              <MessageSquare size={18} className="sm:hidden" />
            </a>
          </motion.div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-10"
          >
            <div className="flex flex-col gap-8 text-center">
              {menuLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-black uppercase tracking-tighter text-white hover:text-white/40 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-20 flex flex-col items-center gap-4"
            >
              <p className="text-white/40 text-[10px] uppercase tracking-[0.4em]">Contactez-nous</p>
              <a href="tel:0557624187" className="text-2xl font-bold text-white">0557 62 41 87</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;