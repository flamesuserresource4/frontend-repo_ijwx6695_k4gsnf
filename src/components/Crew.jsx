import React from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    name: 'Noa V.',
    role: 'Creative Director',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Iris K.',
    role: 'Cinematographer',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'M. Darya',
    role: 'Editor',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Ari Z.',
    role: 'Sound Designer',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop',
  },
];

const Crew = () => {
  return (
    <section id="crew" className="relative w-full py-24 md:py-32 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Crew</h2>
          <p className="text-white/70 mt-2">Minimalist profiles with a surreal glitch.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                />
                {/* Glitch layers */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-screen transition">
                  <img
                    src={m.img}
                    alt="glitch red"
                    className="absolute inset-0 h-full w-full object-cover translate-x-1 translate-y-0.5 opacity-40 saturate-150 hue-rotate-15"
                    style={{ filter: 'contrast(120%) brightness(110%)' }}
                  />
                  <img
                    src={m.img}
                    alt="glitch blue"
                    className="absolute inset-0 h-full w-full object-cover -translate-x-1 -translate-y-0.5 opacity-40 saturate-150 hue-rotate-300"
                    style={{ filter: 'contrast(120%) brightness(110%)' }}
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{m.name}</h3>
                  <span className="text-xs rounded-full border border-white/15 bg-white/5 px-2 py-1 text-white/80">{m.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;
