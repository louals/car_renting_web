import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
      {/* subtle cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-14">

          {/* Brand */}
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-sm overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              <img 
                src="image.png" 
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-lg md:text-xl font-light tracking-[0.35em] uppercase text-white/80">
              Location
            </span>
          </div>

          {/* Navigation */}
          <div className="flex gap-10 md:gap-14 text-[10px] uppercase tracking-[0.35em] text-white/30">
            {['Flotte', 'Expérience', 'Avis', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link === 'Avis' ? 'reviews' : link.toLowerCase()}`} 
                className="hover:text-white transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Scroll top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-white/40 hover:text-white transition-all"
          >
            <span>Haut</span>

            <div className="relative w-px h-10 bg-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-white/60 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
            </div>

            <ArrowUp 
              size={14} 
              className="opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" 
            />
          </button>

        </div>

        {/* BOTTOM */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase">
            © 2026 TH LOCATION — TOUS DROITS RÉSERVÉS
          </p>

          <div className="flex gap-10 text-[9px] tracking-[0.4em] text-white/20 uppercase">
            <a className="hover:text-white transition">Confidentialité</a>
            <a className="hover:text-white transition">Conditions</a>
            <a className="hover:text-white transition">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;