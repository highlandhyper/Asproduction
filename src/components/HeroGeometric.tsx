import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function HeroGeometric({
  badge = "Digital Production House",
  title1 = "Crafting",
  title2 = "Exceptional Experiences",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative z-10 container mx-auto px-4 md:px-6 pointer-events-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-12"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-mono">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-7xl lg:text-9xl xl:text-[10rem] font-bold mb-8 uppercase font-display leading-[0.9] tracking-tight">
              <span className="block text-white tracking-normal drop-shadow-sm">
                {title1}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-rose-300 italic font-serif normal-case tracking-normal py-2">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm md:text-base text-white/50 mb-12 tracking-widest uppercase font-mono max-w-lg mx-auto leading-relaxed">
              Based in the intersection of design & technology. We build products that move people.
            </p>
          </motion.div>
          
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#contact"
              aria-label="Navigate to contact section to start a project"
              className="group relative px-10 py-4 bg-white text-black rounded-full font-display uppercase text-xs tracking-widest hover:bg-transparent hover:text-white transition-all duration-500 overflow-hidden border border-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a 
              href="#work"
              aria-label="Navigate to work archive section"
              className="px-10 py-4 border border-white/10 rounded-full font-display uppercase text-xs tracking-widest hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
