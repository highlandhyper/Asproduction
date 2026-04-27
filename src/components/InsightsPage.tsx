import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { BlogCard } from './BlogCard';

export function InsightsPage() {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 bg-gradient-to-b from-black to-transparent pointer-events-none">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group pointer-events-auto bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] uppercase tracking-[0.2em]">Back to Home</span>
        </motion.button>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-24 px-6 md:px-12 text-center max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Knowledge Base & Case Studies</span>
          <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter leading-[0.85]">
            Our <span className="text-white/40 italic font-serif normal-case tracking-normal">Insights</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Exploring the intersection of cinematic production, performance-driven web apps, and human-centric design.
          </p>
        </motion.div>
      </header>

      {/* Grid */}
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {articles.map((article, index) => (
            <BlogCard 
              key={article.id} 
              article={article} 
              delay={index * 0.1} 
              onClick={() => setSelectedArticle(article)}
            />
          ))}
        </div>
      </main>

      {/* Article Detail Modal (Case Study) */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-auto"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
            />
            
            <motion.div
              layoutId={`article-${selectedArticle.title}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl bg-[#080808] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Close case study"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/5] lg:aspect-auto h-full overflow-hidden relative border-b lg:border-b-0 lg:border-r border-white/5">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent " />
                </div>
                
                <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold">{selectedArticle.category}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{selectedArticle.date}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase leading-[0.9] tracking-tighter">
                      {selectedArticle.title}
                    </h2>
                  </div>

                  <div className="space-y-10">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">The Challenge</span>
                      <p className="text-lg text-white/80 font-light leading-relaxed">
                        {selectedArticle.caseStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">The Solution</span>
                      <p className="text-lg text-white/80 font-light leading-relaxed">
                        {selectedArticle.caseStudy.solution}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">The Results</span>
                      <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5">
                        <p className="text-xl text-indigo-300 font-medium italic leading-relaxed">
                          "{selectedArticle.caseStudy.results}"
                        </p>
                      </div>
                    </div>

                    {/* Related Articles */}
                    <div className="pt-12 border-t border-white/5 space-y-8">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Related Insights</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {articles
                          .filter(a => a.category === selectedArticle.category && a.id !== selectedArticle.id)
                          .slice(0, 2)
                          .map((article) => (
                            <div 
                              key={article.id}
                              tabIndex={0}
                              role="button"
                              aria-label={`Read related: ${article.title}`}
                              onClick={() => {
                                setSelectedArticle(article);
                                document.querySelector('.custom-scrollbar')?.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  setSelectedArticle(article);
                                  document.querySelector('.custom-scrollbar')?.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                              }}
                              className="group cursor-pointer space-y-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            >
                              <div className="aspect-video overflow-hidden rounded-xl">
                                <img 
                                  src={article.image} 
                                  alt={article.title}
                                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <h4 className="text-sm font-display uppercase tracking-tight leading-snug group-hover:text-indigo-400 transition-colors">
                                {article.title}
                              </h4>
                            </div>
                          ))
                        }
                        {articles.filter(a => a.category === selectedArticle.category && a.id !== selectedArticle.id).length === 0 && (
                          <p className="text-white/20 text-xs italic">No related articles in this category yet.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-white/5 px-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <img src={new URL('/white_logo.png', import.meta.url).href} alt="Logo" className="w-10 h-10 object-contain" />
             <span className="font-display uppercase tracking-widest text-sm">AS PRODUCTION</span>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© 2024 AS PRODUCTION. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
