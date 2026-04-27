import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function BlogCard({ article, delay, onClick }: { article: any, delay: number, onClick: () => void }) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.article 
      ref={cardRef}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ delay }}
      tabIndex={0}
      role="link"
      aria-label={`Read article: ${article.title}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-3xl"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 relative border border-white/5 group-focus:ring-2 group-focus:ring-indigo-500/50">
        <motion.img 
          src={article.image} 
          alt={article.title}
          style={{ y }}
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.18 }}
          transition={{ scale: { duration: 0.8, ease: "easeOut" } }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">{article.category}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">{article.date}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-display uppercase leading-tight group-hover:text-indigo-300 transition-colors">
          {article.title}
        </h3>
      </div>
    </motion.article>
  );
}
