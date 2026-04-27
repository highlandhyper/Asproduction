import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  MonitorPlay, Code2, PenTool, Camera, ArrowRight, MousePointerClick, 
  ChevronLeft, ChevronRight, Loader2, ArrowLeft, Menu, X, Send, 
  CheckCircle2, Copy, Check 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroGeometric } from './HeroGeometric';
import { cn } from '../lib/utils';
import { articles } from '../data/articles';
import { BlogCard } from './BlogCard';

const services = [
  {
    title: 'Web Applications',
    icon: <Code2 className="w-6 h-6" />,
    desc: 'Scalable, interactive, and high-performance web applications built with modern stacks.',
  },
  {
    title: 'Video Editing',
    icon: <MonitorPlay className="w-6 h-6" />,
    desc: 'Cinematic cuts, motion graphics, and color grading for commercials and content.',
  },
  {
    title: 'Graphic Design',
    icon: <PenTool className="w-6 h-6" />,
    desc: 'Brand identity, UI/UX design, and striking visual assets that communicate your vision.',
  },
  {
    title: 'Photography & Videography',
    icon: <Camera className="w-6 h-6" />,
    desc: 'Professional shoots, product photography, and event coverage with a creative eye.',
  },
];

const works = [
  { 
    title: 'Elysian Vision', 
    category: 'Architecture Photography', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    desc: 'A comprehensive study of minimalist structural design and natural light interplay in modern urban spaces.',
    client: 'Elysian Group',
    year: '2024'
  },
  { 
    title: 'Sovereign Pay', 
    category: 'Fintech Web App', 
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    desc: 'A secure, high-performance financial dashboard designed for institutional investors with real-time data visualization.',
    client: 'Sovereign Capital',
    year: '2023'
  },
  { 
    title: 'Vanguard Spirit', 
    category: 'Cinematic Video', 
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
    desc: 'High-octane motion graphics and cinematic storytelling for a global sports footwear launch campaign.',
    client: 'Vanguard Athletics',
    year: '2024'
  },
  { 
    title: 'Obsidian Studio', 
    category: 'Brand Identity', 
    image: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80&w=2069&auto=format&fit=crop',
    desc: 'Complete visual ecosystem and luxury brand guidelines for a boutique creative agency specializing in 3D production.',
    client: 'Obsidian Co.',
    year: '2023'
  },
];

const testimonials = [
  {
    quote: "AS PRODUCTION completely transformed our brand identity. Their attention to detail and cinematic approach is unmatched.",
    name: "Sarah Jenkins",
    company: "Lumina Tech"
  },
  {
    quote: "The web application they built for us is not only visually stunning but incredibly fast and scalable.",
    name: "David Chen",
    company: "Nexus Dynamics"
  },
  {
    quote: "Their video editing team took our raw footage and turned it into a masterpiece. Highly recommended!",
    name: "Elena Rodriguez",
    company: "Aura Lifestyle"
  }
];

const articlesPlaceholder = []; // Articles now imported from shared data file

const clients = [
  "Lumina Tech", "Nexus Dynamics", "Aura Lifestyle", "Sovereign Capital", "Vanguard", "Elysian Group", "Obsidian Co.", "Quantum Digital"
];

function BentoItem({ work, colSpan, delay, onClick }: { work: any, colSpan: string, delay: number, onClick: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${work.title}`}
      className={cn(colSpan, "relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50")}
    >
      {/* Skeleton / Loading state */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-[#111] overflow-hidden"
          >
            <motion.div
              animate={{
                background: [
                  "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
                  "linear-gradient(90deg, #1a1a1a 100%, #1a1a1a 100%, #1a1a1a 100%)",
                ],
                left: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-full opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center"
              >
                <div className="w-6 h-6 rounded-full border-2 border-white/5 border-t-white/20 animate-spin" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <img 
        src={work.image} 
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700",
          isLoaded ? "opacity-50 group-hover:scale-105" : "opacity-0"
        )} 
        alt="" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
        <span className="text-[10px] uppercase tracking-widest text-indigo-300 mb-2 block">{work.category}</span>
        <h3 className="text-xl sm:text-2xl md:text-4xl font-display uppercase leading-tight">{work.title}</h3>
      </div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 bg-white/10 backdrop-blur-md z-20">
        <ArrowRight className="w-5 h-5" />
      </div>
    </motion.div>
  );
}

export function Overlay() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ashiqparapurath@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const servicesRef = useRef(null);
  const { scrollYProgress: servicesScrollY } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const parallaxY1 = useTransform(servicesScrollY, [0, 1], [0, -50]);
  const parallaxY2 = useTransform(servicesScrollY, [0, 1], [0, 50]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const navItems = ['Work', 'Services', 'Insights', 'Contact'];

  return (
    <div className="relative z-10 w-full pointer-events-none font-sans">
      {/* Navigation */}
      <nav aria-label="Main Navigation" className="fixed top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-50 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-4 group cursor-pointer"
          role="link"
          tabIndex={0}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          aria-label="Back to top"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={new URL('/white_logo.png', import.meta.url).href} alt="AS PRODUCTION Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display text-lg md:text-xl tracking-tighter uppercase hidden sm:block">AS PRODUCTION</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {item}
            </a>
          ))}
          <Link 
            to="/founder"
            className="px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Founder
          </Link>
        </motion.div>

        {/* Mobile Hamburger Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-black flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display uppercase tracking-widest hover:text-indigo-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  to="/founder"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display uppercase tracking-widest hover:text-indigo-400 transition-colors"
                >
                  Founder
                </Link>
              </motion.div>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] opacity-40"
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-[100] bg-black pointer-events-auto overflow-y-auto"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="min-h-screen p-6 md:p-12 lg:p-24 bg-[#030303]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="fixed top-8 right-8 z-[110] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
                <div className="space-y-8 md:space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs uppercase tracking-[0.4em] text-indigo-400 mb-6 block">{selectedProject.category}</span>
                    <h2 id="modal-title" className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-tight mb-8">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg">
                      {selectedProject.desc}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-2 block">Client</span>
                      <div className="text-lg font-display uppercase tracking-wider">{selectedProject.client}</div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-2 block">Year</span>
                      <div className="text-lg font-display uppercase tracking-wider">{selectedProject.year}</div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]"
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Related/Footer spacer */}
              <div className="h-48" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-rose-500/10 blur-[100px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 text-center"
        >
          <HeroGeometric badge="Digital Production House" title1="Crafting" title2="Exceptional Experiences" />
        </motion.div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-24 bg-[#030303] border-y border-white/5 overflow-hidden pointer-events-auto">
        <div className="max-w-screen-2xl mx-auto px-6 mb-12 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Collaborating with Leaders</span>
          <div className="h-[1px] flex-grow mx-8 bg-white/5" />
        </div>
        <div className="relative">
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div 
              animate={{ x: [0, "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-24 items-center px-12"
            >
              {[...clients, ...clients].map((client, i) => (
                <div 
                  key={`${client}-${i}`}
                  className="text-2xl md:text-3xl font-display uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 shadow-[20px_0_40px_#030303]" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 shadow-[-20px_0_40px_#030303]" />
        </div>
      </section>

      {/* Selected Work - Bento Grid */}
      <section id="work" className="py-24 px-4 sm:px-6 md:px-12 border-t border-white/5 bg-[#030303]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl px-2 sm:px-0">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-4 block">Selected Projects</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-display uppercase tracking-tighter leading-[0.9] text-white">
                Work <span className="text-white/40 italic font-serif normal-case tracking-normal">Archive</span>
              </h2>
            </div>
            <p className="text-white/60 max-w-sm text-sm font-light leading-relaxed px-2 sm:px-0">
              Explore our latest ventures in digital craftsmanship, where technology meets creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-4 pointer-events-auto">
            <BentoItem 
              work={works[0]} 
              colSpan="md:col-span-8" 
              delay={0} 
              onClick={() => setSelectedProject(works[0])} 
            />
            <BentoItem 
              work={works[1]} 
              colSpan="md:col-span-4" 
              delay={0.1} 
              onClick={() => setSelectedProject(works[1])} 
            />
            <BentoItem 
              work={works[2]} 
              colSpan="md:col-span-4" 
              delay={0.2} 
              onClick={() => setSelectedProject(works[2])} 
            />
            <BentoItem 
              work={works[3]} 
              colSpan="md:col-span-8" 
              delay={0.3} 
              onClick={() => setSelectedProject(works[3])} 
            />
          </div>
        </div>
      </section>

      {/* Expertise - Technical Grid */}
      <section id="services" ref={servicesRef} className="bg-[#030303] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pointer-events-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              tabIndex={0}
              role="article"
              className="group p-12 border-b md:border-b-0 md:border-r border-white/5 transition-colors duration-500 hover:bg-white/[0.03] min-h-[400px] flex flex-col justify-between focus:outline-none focus:bg-white/[0.05]"
            >
              <div className="opacity-60 group-hover:opacity-100 group-hover:text-indigo-400 transition-all duration-500 transform group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-60 mb-4 block">0{index + 1}</span>
                <h3 className="text-3xl font-display uppercase mb-4 leading-tight">{service.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials - Immersive */}
      <section className="py-32 bg-[#030303] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">Client Voices</span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-12"
                role="region"
                aria-live="polite"
              >
                <blockquote className="text-3xl md:text-6xl font-serif italic text-white/95 leading-tight">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="text-xl font-display uppercase tracking-wider">{testimonials[currentTestimonial].name}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">{testimonials[currentTestimonial].company}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 pointer-events-auto">
              <motion.button 
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights - Magazine Style */}
      <section id="insights" className="py-32 px-4 sm:px-6 md:px-12 bg-[#030303] border-t border-white/5 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl px-2 sm:px-0">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-4 block">Knowledge Base</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-display uppercase tracking-tighter leading-[0.9] text-white">
                Our <span className="text-white/40 italic font-serif normal-case tracking-normal">Insights</span>
              </h2>
            </div>
            <Link 
              to="/insights"
              className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-4 group pointer-events-auto focus:outline-none focus:ring-1 focus:ring-white/20 rounded-lg p-2"
            >
              View all articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {articles.slice(0, 3).map((article, index) => (
              <BlogCard 
                key={article.id} 
                article={article} 
                delay={index * 0.1} 
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>
        </div>
      </section>

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
              {/* Close Button */}
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
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

      {/* Marquee */}
      <section className="py-8 bg-white text-black overflow-hidden pointer-events-auto">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -500] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
            className="flex gap-12 font-display text-2xl uppercase italic tracking-tighter"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i}>Collaborate / Innovate / Create /</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact - Refined & Sophisticated */}
      <section id="contact" className="py-24 md:py-48 px-4 sm:px-6 bg-[#030303] pointer-events-auto relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              className="space-y-12 px-2 sm:px-0"
            >
              <div className="space-y-8">
                <span className="text-[10px] uppercase tracking-[0.5em] text-indigo-400 font-mono block mb-2">Contact</span>
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-display uppercase tracking-tighter leading-[0.9]">
                  Let's Make <br />
                  <span className="text-white/20 italic font-serif normal-case tracking-normal">Magic</span>
                </h2>
                <p className="text-white/40 max-w-md text-xl font-light leading-relaxed">
                  Have a vision you want to bring to life? We're ready to collaborate on your next groundbreaking project.
                </p>
              </div>
              
              <div className="space-y-8 pt-8 border-t border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-3">Location</span>
                    <span className="text-lg font-light">Malappuram, Kerala, India</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-3">Availability</span>
                    <span className="text-lg font-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Taking on projects
                    </span>
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-3">General Enquiries</span>
                  <div className="flex items-center gap-4">
                    <a href="mailto:ashiqparapurath@gmail.com" className="text-lg sm:text-2xl font-display uppercase tracking-tight hover:text-indigo-400 transition-all duration-300 break-words">
                      ashiqparapurath@gmail.com
                    </a>
                    <button 
                      onClick={handleCopyEmail}
                      className={`p-3 rounded-full border transition-all duration-300 pointer-events-auto shrink-0 flex items-center justify-center ${
                        isCopied 
                        ? 'bg-green-500/10 border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]' 
                        : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/20'
                      }`}
                      aria-label={isCopied ? "Email copied!" : "Copy email to clipboard"}
                      title={isCopied ? "Copied!" : "Copy Email"}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isCopied ? 'check' : 'copy'}
                          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </motion.div>
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="relative p-1 md:p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent shadow-2xl"
            >
              <div className="bg-[#080808] rounded-[2.4rem] p-8 md:p-12 h-full">
                {submitStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-24 text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto border border-indigo-500/20">
                      <CheckCircle2 className="w-10 h-10 text-indigo-400" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-display uppercase tracking-tight">Message Received</h3>
                      <p className="text-white/40 max-w-xs mx-auto text-lg font-light">Thank you for reaching out. Our team will review your enquiry and get back to you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="group flex items-center gap-3 mx-auto text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all duration-300 pt-8"
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-all peer placeholder:text-transparent"
                          placeholder="Name"
                          id="name"
                        />
                        <label 
                          htmlFor="name"
                          className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-white/30 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-white/40"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="relative group">
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-all peer placeholder:text-transparent"
                          placeholder="Email"
                          id="email"
                        />
                        <label 
                          htmlFor="email"
                          className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-white/30 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-white/40"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>
                    <div className="relative group">
                      <input 
                        required
                        type="text" 
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-all peer placeholder:text-transparent"
                        placeholder="Subject"
                        id="subject"
                      />
                      <label 
                        htmlFor="subject"
                        className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-white/30 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-white/40"
                      >
                        Subject
                      </label>
                    </div>
                    <div className="relative group">
                      <textarea 
                        required
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-all peer placeholder:text-transparent resize-none"
                        placeholder="Message"
                        id="message"
                      />
                      <label 
                        htmlFor="message"
                        className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-white/30 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-white/40"
                      >
                        Message
                      </label>
                    </div>
                    
                    {submitStatus === 'error' && (
                      <p className="text-red-400 text-xs font-mono tracking-wider">! Error: Something went wrong. Please try again.</p>
                    )}

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="group relative w-full h-16 rounded-full bg-white text-black font-display uppercase tracking-[0.3em] text-xs transition-all overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-x-0 bottom-0 h-0 bg-indigo-600 transition-all duration-500 group-hover:h-full" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Client Logos Marquee */}
          <div className="mt-32 pt-12 border-t border-white/5 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block text-center">Trusted By Industry Leaders</span>
            <div className="relative overflow-hidden py-4">
              <div className="flex whitespace-nowrap">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                  className="flex gap-20 items-center pr-20"
                >
                  {[...clients, ...clients].map((client, i) => (
                    <span 
                      key={i} 
                      className="text-2xl md:text-3xl font-display uppercase tracking-widest text-white/5 hover:text-indigo-400/20 transition-colors cursor-default"
                    >
                      {client}
                    </span>
                  ))}
                </motion.div>
              </div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Minimalist & Technical */}
      <section className="py-24 bg-[#030303] border-t border-white/5 pointer-events-auto transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Knowledge Base</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What services does AS PRODUCTION specialize in?",
                  a: "We are a full-spectrum digital production house specializing in high-performance web applications, cinematic video editing, brand identity design, and professional photography/videography."
                },
                {
                  q: "What is your typical project timeline?",
                  a: "Timeline varies by scope. A complex web application usually take 4-8 weeks, while video post-production or brand identity projects typically range from 1-3 weeks."
                },
                {
                  q: "Do you work with international clients?",
                  a: "Yes, we collaborate with clients globally. Our workflows are optimized for remote collaboration across all time zones."
                },
                {
                  q: "What is the process for starting a new project?",
                  a: "It begins with an initial consultation to define your goals, followed by a detailed proposal, tactical roadmap, and iterative execution with regular check-ins."
                },
                {
                  q: "Can you handle both design and development?",
                  a: "Absolutely. We pride ourselves on 'Essentialism in Digital'—bridging the gap between technical complexity and artistic elegance."
                }
              ].map((faq, i) => (
                <details key={i} className="group border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none">
                    <h3 className="text-lg md:text-xl font-display uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
                      {faq.q}
                    </h3>
                    <motion.div 
                      className="text-white/20 group-hover:text-indigo-400"
                      initial={false}
                      animate={{ rotate: 0 }}
                      variants={{
                        open: { rotate: 45 }
                      }}
                    >
                      <X className="w-5 h-5 transition-transform duration-300 group-open:rotate-45" />
                    </motion.div>
                  </summary>
                  <div className="px-6 pb-6 text-white/60 font-light leading-relaxed max-w-2xl">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mb-6">Still have questions?</p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 text-indigo-400 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em]"
              >
                Reach out directly <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 sm:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/50 pointer-events-auto">
        <div className="text-center md:text-left">© {new Date().getFullYear()} AS PRODUCTION / Malappuram, Kerala, India</div>
        <div className="flex gap-12">
          <a href="https://www.instagram.com/mrashiq._/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white">Instagram</a>
          <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
