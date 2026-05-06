import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-40 overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* huge background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2 className="text-[20vw] font-black uppercase tracking-tight">
          CONTACT
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] text-white">
            Commençons <br /> Votre Voyage
          </h2>
          <p className="text-white/30 mt-6 tracking-[0.3em] uppercase text-sm">
            Accès Conciergerie Premium
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* PHONE */}
          <motion.a
            href="tel:0557624187"
            whileHover={{ scale: 1.03 }}
            className="group relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition" />

            <Phone className="mb-10 text-white/70" size={28} />

            <h3 className="text-2xl font-black uppercase mb-2 text-white">
              Appel Direct
            </h3>

            <p className="text-white/40 text-sm mb-8">
              Réponse humaine instantanée, pas de robots.
            </p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">0557 62 41 87</span>
              <ArrowUpRight className="opacity-40 group-hover:opacity-100 transition text-white" />
            </div>
          </motion.a>

          {/* LOCATION */}
          <motion.a
            href="https://maps.app.goo.gl/77csuccYNKRUETdJA"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            className="group relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition" />

            <MapPin className="mb-10 text-white/70" size={28} />

            <h3 className="text-2xl font-black uppercase mb-2 text-white">
              Emplacement
            </h3>

            <p className="text-white/40 text-sm mb-8">
              Beni Mered, Blida, Algérie
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-white/60">
                Ouvrir Maps
              </span>
              <ArrowUpRight className="opacity-40 group-hover:opacity-100 transition text-white" />
            </div>
          </motion.a>

          {/* SOCIAL */}
          <div className="space-y-6">

            {/* INSTAGRAM */}
            <motion.a
              href="https://www.instagram.com/th.location/"
              target="_blank"
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl group"
            >
              <div className="flex items-center gap-4 text-white">
                <Instagram size={18} />
                <span className="text-sm uppercase tracking-widest">
                  Instagram
                </span>
              </div>
              <ArrowUpRight className="opacity-30 group-hover:opacity-100 text-white" />
            </motion.a>

            {/* FACEBOOK */}
            <motion.a
              href="https://www.facebook.com/profile.php?id=61577459765641"
              target="_blank"
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl group"
            >
              <div className="flex items-center gap-4 text-white">
                <Facebook size={18} />
                <span className="text-sm uppercase tracking-widest">
                  Facebook
                </span>
              </div>
              <ArrowUpRight className="opacity-30 group-hover:opacity-100 text-white" />
            </motion.a>

            {/* STATUS */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} />
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Disponibilité
                </span>
              </div>
              <p className="text-lg font-bold">Service Premium 24/7</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;