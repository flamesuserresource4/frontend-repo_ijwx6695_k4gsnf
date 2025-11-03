import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Crew from './components/Crew';
import Connect from './components/Connect';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_system-ui,_sans-serif] selection:bg-fuchsia-500/40 selection:text-white">
      {/* Smooth transitions container */}
      <Hero />
      <Portfolio />
      <Crew />
      <Connect />
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Noir Films Studio — Dreams, Delirium & the Dark Mind.
      </footer>
    </div>
  );
}

export default App;
