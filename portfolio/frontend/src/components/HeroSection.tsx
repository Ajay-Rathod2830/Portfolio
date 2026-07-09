import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import './HeroSection.css';

interface HeroSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  interests?: string[];
}

function HeroSection({ name = 'Ajay Rathod', title = 'AI Engineer | Python Developer | Machine Learning Enthusiast', bio = 'I create sleek AI-driven applications, practical machine learning models, and premium web experiences with performance and polish.', interests = ['AI Engineer', 'Python Developer', 'ML Enthusiast', 'Problem Solver'] }: HeroSectionProps) {
  const roles = interests.length ? interests : ['AI Engineer', 'Python Developer', 'ML Enthusiast', 'Problem Solver'];

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 text-slate-100">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-200/80"
            >
              AI Portfolio
            </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">{name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl font-medium text-cyan-300/80"
          >
            {title}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 text-lg text-slate-300"
          >
            <span className="font-medium">I build</span>
            <TypingRoles roles={roles} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="max-w-3xl text-slate-300/90 leading-8"
          >
            {bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
              View Projects <FiArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              <FiDownload size={16} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/25">
              Contact Me
            </a>
          </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.45 }}
            className="mx-auto flex-shrink-0"
          >
            <img
              src="/profilepic.jpeg"
              alt="Ajay Rathod"
              className="h-48 w-48 rounded-[32px] border border-white/10 object-cover shadow-glow sm:h-60 sm:w-60"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.45 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),transparent_35%)]" />
          <div className="relative grid gap-5 sm:grid-cols-2">
            {['AI Research', 'Python & APIs', 'Computer Vision', 'Intelligent Web UI'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200 shadow-[0_40px_120px_rgba(15,23,42,0.18)]">
                <h3 className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">{item}</h3>
                <p className="leading-7 text-slate-300/90">Elegant, high-performance AI systems and user-first product design for modern portfolios.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypingRoles({ roles }: { roles: string[] }) {
  return (
    <span className="relative inline-flex h-8 items-center overflow-hidden border-r border-slate-400/40 pr-4 text-cyan-300">
      <span className="animate-typewriter whitespace-nowrap text-lg font-semibold">{roles[0]}</span>
    </span>
  );
}

export default HeroSection;
