import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMic, FiPause, FiPlay, FiRepeat, FiVolume2, FiVolumeX } from 'react-icons/fi';

const speechText = "Hello! I am Ajay Rathod. Welcome to my portfolio. I am passionate about Artificial Intelligence, Machine Learning, Python Development, and building real-world applications. Feel free to explore my projects or ask me anything.";

function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    setSpeechSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = 'en-US';
      utterance.rate = 1;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      setIsOpen(true);
    }
  }, []);

  const toggleSpeech = () => {
    if (!speechSupported) return;
    if (isSpeaking) {
      window.speechSynthesis.pause();
      setIsSpeaking(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        const utterance = new SpeechSynthesisUtterance(speechText);
        utterance.lang = 'en-US';
        utterance.rate = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
      setIsSpeaking(true);
    }
  };

  const replay = () => {
    if (!speechSupported) return;
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const toggleMute = () => {
    if (!speechSupported) return;
    setIsMuted((current) => !current);
    if (isMuted) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isOpen ? (
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="w-[320px] rounded-[28px] border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Voice Assistant</p>
              <h3 className="text-lg font-semibold text-slate-100">Ajay AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full bg-white/5 p-2 text-slate-200 transition hover:bg-white/10">×</button>
          </div>
          <p className="mb-4 rounded-2xl bg-slate-900/70 p-3 text-sm leading-7 text-slate-300">{speechText}</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={toggleSpeech} className="rounded-full bg-cyan-500/15 p-3 text-cyan-200 transition hover:bg-cyan-500/25">{isSpeaking ? <FiPause size={16} /> : <FiPlay size={16} />}</button>
            <button onClick={replay} className="rounded-full bg-white/5 p-3 text-slate-200 transition hover:bg-white/10"><FiRepeat size={16} /></button>
            <button onClick={toggleMute} className="rounded-full bg-white/5 p-3 text-slate-200 transition hover:bg-white/10">{isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}</button>
          </div>
        </motion.div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="rounded-full border border-cyan-400/20 bg-slate-900/90 p-4 text-cyan-300 shadow-glow backdrop-blur-lg transition hover:bg-slate-800">
          <FiMic size={24} />
        </button>
      )}
    </div>
  );
}

export default VoiceAssistant;
