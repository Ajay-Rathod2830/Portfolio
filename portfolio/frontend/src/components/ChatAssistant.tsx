import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';

function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hello! I am Ajay Rathod. Ask me about my projects, skills, or contact details.' }]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!value.trim()) return;
    const question = value.trim();
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setValue('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'The assistant is currently unavailable.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-24 z-40">
      {!open ? (
        <button onClick={() => setOpen(true)} className="rounded-full border border-cyan-400/20 bg-slate-900/90 p-4 text-cyan-300 shadow-glow backdrop-blur-lg transition hover:bg-slate-800">
          <FiMessageCircle size={24} />
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="w-[360px] rounded-[28px] border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">AI Chat</p>
              <h3 className="text-lg font-semibold text-slate-100">Ask Ajay</h3>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full bg-white/5 p-2 text-slate-200 transition hover:bg-white/10">
              <FiX size={16} />
            </button>
          </div>
          <div className="mb-3 max-h-72 space-y-3 overflow-y-auto rounded-2xl bg-slate-900/70 p-3">
            {messages.map((message, index) => (
              <div key={index} className={`rounded-2xl px-3 py-2 text-sm leading-7 ${message.role === 'assistant' ? 'bg-slate-800/80 text-slate-200' : 'ml-auto bg-cyan-500/20 text-cyan-100'}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="rounded-2xl bg-slate-800/80 px-3 py-2 text-sm text-slate-300">Thinking...</div>}
          </div>
          <div className="flex gap-2">
            <input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(event) => event.key === 'Enter' && handleSend()} className="flex-1 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100" placeholder="Ask me anything" />
            <button onClick={handleSend} className="rounded-full bg-cyan-500 p-3 text-slate-950 transition hover:bg-cyan-400">
              <FiSend size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ChatAssistant;
