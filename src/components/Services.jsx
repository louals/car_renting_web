import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Clock, Settings, ShieldCheck, UserCheck, Key } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Livraison Aéroport Gratuite',
    desc: 'Livraison et récupération gratuites à l\'Aéroport International d\'Alger (ALG).',
    accent: 'from-blue-500/20'
  },
  {
    icon: Clock,
    title: 'Disponibilité 24/7',
    desc: 'Service de conciergerie premium et assistance routière 24h/24, 7j/7.',
    accent: 'from-emerald-500/20'
  },
  {
    icon: Settings,
    title: 'Choix de Transmission',
    desc: 'Large gamme de véhicules en boîte Manuelle et Automatique selon votre style.',
    accent: 'from-amber-500/20'
  },
  {
    icon: UserCheck,
    title: 'Chauffeurs Professionnels',
    desc: 'Chauffeurs expérimentés disponibles pour vos déplacements professionnels ou privés.',
    accent: 'from-purple-500/20'
  },
  {
    icon: ShieldCheck,
    title: 'Flotte Récente',
    desc: 'Uniquement les derniers modèles (2021-2025), entretenus avec soin.',
    accent: 'from-red-500/20'
  },
  {
    icon: Key,
    title: 'Locations Flexibles',
    desc: 'Solutions sur mesure pour particuliers et entreprises à travers l\'Algérie.',
    accent: 'from-cyan-500/20'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-black py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-white/40" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">Nos Standards</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8 text-white">
                L'Avantage <br /> <span className="text-white/20">TH</span> <br /> Location
              </h2>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-lg max-w-sm mb-2 font-light italic"
          >
            "Redéfinir l'art de la mobilité à travers un service d'élite et une attention méticuleuse aux détails."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black p-12 hover:bg-white/[0.02] transition-colors duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
