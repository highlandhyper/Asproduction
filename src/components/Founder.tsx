import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Founder() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-indigo-500/30">
      <div className="bg-noise"></div>
      
      {/* Navigation */}
      <nav aria-label="Founder Page Navigation" className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50">
        <Link 
          to="/"
          aria-label="Back to Studio Home"
          className="flex items-center gap-3 md:gap-4 group hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={new URL('/white_logo.png', import.meta.url).href} alt="AS PRODUCTION Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono hidden sm:block italic">Studio</span>
        </Link>
        <Link 
          to="/"
          aria-label="Back to home"
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] relative group">
              <img 
                src={new URL('/founder.jpeg', import.meta.url).href} 
                alt="Ashiq - Founder" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Float Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white text-black font-display uppercase tracking-widest text-sm shadow-2xl z-10"
            >
              Visionary / Director
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6 block">The Person Behind</span>
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-display uppercase tracking-tighter leading-[0.9] mb-8">
                Ashiq <br />
                <span className="text-white/30 italic font-serif normal-case tracking-normal">Founder</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-xl text-white/70 font-light leading-relaxed"
            >
              <p>
                With over a decade of experience in digital creation, Ashiq established AS PRODUCTION with a singular vision: to bridge the gap between technical complexity and artistic elegance.
              </p>
              <p>
                His philosophy centers on "Essentialism in Digital"—stripping away the noise to leave only what moves the audience. Under his direction, the studio has evolved from a boutique agency into a powerhouse of digital craftsmanship.
              </p>
            </motion.div>

            {/* Socials & Facts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-12 border-t border-white/5 grid grid-cols-2 gap-8"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 block">Based In</span>
                <div className="text-lg font-display uppercase text-white/80">Malappuram / Kerala</div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 block">Specialization</span>
                <div className="text-lg font-display uppercase text-white/80">Creative Direction</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 pointer-events-auto"
            >
              {[
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/mrashiq._/' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
              ].map((s) => (
                <a 
                  key={s.label}
                  href={s.href}
                  target={s.href !== '#' ? "_blank" : undefined}
                  rel={s.href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`Visit our ${s.label}`}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
        <div className="text-center md:text-left">© {new Date().getFullYear()} AS PRODUCTION / Ashiq's Portfolio</div>
        <div className="flex gap-12">
          <Link to="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm px-1">Digital Archive</Link>
          <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm px-1">Press Kit</a>
        </div>
      </footer>
    </div>
  );
}
