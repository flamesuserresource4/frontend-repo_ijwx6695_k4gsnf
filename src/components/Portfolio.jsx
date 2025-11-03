import React, { useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Psychological', 'Surreal', 'Philosophical', 'Horror'];

const PROJECTS = [
  {
    title: 'Glass Labyrinth',
    category: 'Psychological',
    slug: 'glass-labyrinth',
    color: 'from-fuchsia-500/30 to-indigo-500/30',
    trailer: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    synopsis:
      'A fragmented mind wanders an endless museum where every mirror reflects a different truth.',
    notes:
      'Shot with distorted lenses to emulate dissociation. Non-linear memories intercut with present-time clues.',
    stills: [
      'https://images.unsplash.com/photo-1520975922284-9e0ce4d5b31a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    title: 'Astral Noise',
    category: 'Surreal',
    slug: 'astral-noise',
    color: 'from-cyan-400/30 to-violet-500/30',
    trailer: 'https://www.youtube.com/embed/o-YBDTqX_ZU',
    synopsis:
      'A radio tower receives signals from a parallel ocean. Fish swim through the night sky, answering questions unasked.',
    notes:
      'Composed with sound design as narrative backbone. Dream logic drives the sequence of images.',
    stills: [
      'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    title: 'Metaphysic',
    category: 'Philosophical',
    slug: 'metaphysic',
    color: 'from-emerald-400/30 to-cyan-500/30',
    trailer: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    synopsis:
      'A debate between two stones outlives a city. The audience is the wind.',
    notes:
      'Long takes and negative space. The cut happens in the mind of the viewer.',
    stills: [
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543966888-cbd77935a4a8?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    title: 'Lucid Rot',
    category: 'Horror',
    slug: 'lucid-rot',
    color: 'from-rose-500/30 to-amber-400/30',
    trailer: 'https://www.youtube.com/embed/wz4QF0iFv2E',
    synopsis:
      'A sleep study discovers a fungus that blooms only in nightmares. Every bloom is a door.',
    notes:
      'Practical effects with fungal textures. Soundscape designed to grow like mycelium across scenes.',
    stills: [
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    ],
  },
];

const Card = ({ project, onClick }) => {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6; // tilt range
    const rotateX = -((y - midY) / midY) * 6;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(project)}
      className="group cursor-pointer"
    >
      <div
        ref={ref}
        className={`relative h-64 rounded-2xl border border-white/15 bg-gradient-to-br ${project.color} overflow-hidden transition-transform duration-300 shadow-[0_10px_60px_rgba(120,120,255,0.15)]`}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(800px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
          <h3 className="text-xl font-extrabold tracking-tight">{project.title}</h3>
          <p className="text-sm text-white/70">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 backdrop-blur-xl bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="absolute left-1/2 top-1/2 w-[94vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-white/5 p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={project.trailer}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <p className="text-white/80 leading-relaxed">{project.synopsis}</p>
                  <p className="text-white/60 text-sm">Director Notes — {project.notes}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {project.stills.map((s, i) => (
                    <img key={i} src={s} alt="still" className="h-24 md:h-32 w-full object-cover rounded-lg border border-white/10" />
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={onClose} className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/20 transition">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-black via-[#0b0b12] to-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Portfolio</h2>
            <p className="text-white/70 mt-2">Psychological, Surreal, Philosophical, and Horror experiments.</p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  active === c
                    ? 'bg-white text-black border-white'
                    : 'bg-white/5 text-white/90 border-white/10 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Card key={p.slug} project={p} onClick={setSelected} />
          ))}
        </div>
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Portfolio;
