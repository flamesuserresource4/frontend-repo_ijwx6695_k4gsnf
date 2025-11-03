import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(110,0,140,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,180,255,0.25),transparent_40%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-4xl w-full"
        >
          <div className="mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_80px_rgba(120,80,255,0.25)]">
            <motion.h1
              initial={{ letterSpacing: '-0.02em' }}
              animate={{ letterSpacing: '-0.04em' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
            >
              Noir Films Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="mt-4 text-lg md:text-2xl text-white/80"
            >
              Dreams, Delirium & the Dark Mind
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden rounded-xl bg-white text-black px-6 py-3 font-semibold tracking-wide"
              >
                <span className="relative z-10">Enter the Portfolio</span>
                <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <a
                href="#about"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition"
              >
                About the Ethos
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-white/70 text-sm"
        >
          Scroll
          <span className="mx-2 inline-block h-2 w-2 rounded-full bg-white/60 animate-pulse" />
          to descend
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
