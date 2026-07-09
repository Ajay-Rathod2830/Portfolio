import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronUp, FiMoon, FiSun } from 'react-icons/fi';
import type { PortfolioData } from './types/portfolio';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import VoiceAssistant from './components/VoiceAssistant';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import './App.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

function AppContent() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { theme, toggleTheme } = ThemeContext();

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_BASE_URL}/portfolio`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load portfolio data');
        }
        return response.json();
      })
      .then(setPortfolioData)
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setFetchError(error.message);
        }
      })
      .finally(() => setLoading(false));

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 560);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      controller.abort();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-[#060712] text-slate-100 transition-colors duration-500 dark:bg-[#020214]">
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#020214]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="text-lg font-semibold tracking-[0.2em] text-slate-100/80">Ajay Rathod</div>
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </header>

        <main className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_35%)] opacity-70 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute left-0 top-80 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

          <HeroSection
            name={portfolioData?.name}
            title={portfolioData?.title}
            bio={portfolioData?.bio}
            interests={portfolioData?.about?.interests}
          />
          <AboutSection about={portfolioData?.about} />
          <SkillsSection skills={portfolioData?.skills} />
          <ProjectsSection projects={portfolioData?.projects} />
          <ResumeSection />
          <CertificatesSection certificates={portfolioData?.certificates} />
          <ContactSection contact={portfolioData?.contact} social={portfolioData?.social} />
          <Footer />
        </main>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-slate-100 shadow-glow backdrop-blur-lg transition hover:bg-slate-800"
              aria-label="Back to top"
            >
              <FiChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <VoiceAssistant />
        <ChatAssistant />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
