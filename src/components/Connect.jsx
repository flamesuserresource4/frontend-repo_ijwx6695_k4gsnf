import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Connect = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#0c0b11] to-black text-white">
      {/* About */}
      <div id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">About</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              We craft non-linear cinema that wanders through subconscious corridors. Our frames are frosted
              glass—revealing and obscuring in the same breath. The cut is a thought. The sound is a memory.
            </p>
            <p className="mt-3 text-white/70">
              The studio lives between brutal forms and delicate vapor. We favor bold type, raw edges, and soft neon
              light that breathes with the scene.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#22d3ee_25%,#ef4444_50%,#22d3ee_75%,#6d28d9_100%)] opacity-30 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(800px_circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
            <div className="absolute inset-0 backdrop-blur-2xl bg-black/40" />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-center text-lg md:text-2xl font-semibold tracking-wide text-white/90">
                Non-linear narratives, lucid textures,<br />
                and the soft hum of the uncanny.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Career + Contact */}
      <div id="connect" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Collaborate</h3>
              <span className="text-xs rounded-full border border-white/15 bg-white/5 px-2 py-1 text-white/80">Career</span>
            </div>
            <p className="text-white/75 mt-2">Editors, cinematographers, VFX artists — send a signal.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/60"
                  placeholder="Your name"
                  name="name"
                />
                <select
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/60"
                  name="role"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option>Editor</option>
                  <option>Cinematographer</option>
                  <option>VFX Artist</option>
                  <option>Sound Designer</option>
                  <option>Composer</option>
                </select>
              </div>
              <input
                required
                type="url"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/60"
                placeholder="Portfolio URL"
                name="portfolio"
              />
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/60"
                placeholder="Message"
                name="message"
              />
              <div className="flex items-center gap-3">
                <button
                  disabled={status === 'submitting'}
                  className="relative overflow-hidden rounded-xl bg-white text-black px-6 py-3 font-semibold tracking-wide disabled:opacity-60"
                >
                  <span className="relative z-10">Send</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-cyan-300 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
                {status === 'success' && (
                  <span className="text-emerald-300/90">Received. We will reach out soon.</span>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Contact</h3>
              <span className="text-xs rounded-full border border-white/15 bg-white/5 px-2 py-1 text-white/80">Direct</span>
            </div>
            <p className="text-white/75 mt-2">Cinematic inquiries and strange ideas welcome.</p>
            <div className="mt-6 grid gap-3">
              <a href="mailto:studio@noirfilms.example" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 hover:bg-black/50 transition">studio@noirfilms.example</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 hover:bg-black/50 transition">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 hover:bg-black/50 transition">YouTube</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
