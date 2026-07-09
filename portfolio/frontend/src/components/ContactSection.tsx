import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import type { ContactInfo, SocialLinks } from '../types/portfolio';

interface ContactSectionProps {
  contact?: ContactInfo;
  social?: SocialLinks;
}

function ContactSection({ contact, social }: ContactSectionProps) {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const apiUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus('Message sent successfully.');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Unable to send message right now.');
    }
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">Contact</p>
          <h2 className="text-4xl font-semibold text-slate-100">Let's build something AI-powered</h2>
          <p className="mx-auto max-w-2xl text-slate-300/80 leading-8">Reach out for collaborations, internships, or opportunities in AI and software engineering.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="space-y-4 text-slate-300/90">
              <div className="flex items-center gap-3"><FiMail size={18} /> <span>{contact?.email ?? 'ajay@example.com'}</span></div>
              <div className="flex items-center gap-3"><FiPhone size={18} /> <span>{contact?.phone ?? '+91 98765 43210'}</span></div>
              <div className="flex items-center gap-3"><FiMapPin size={18} /> <span>{contact?.location ?? 'Pune, India'}</span></div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href={social?.github ?? 'https://github.com/ajayr'} className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"><FiGithub size={18} /></a>
              <a href={social?.linkedin ?? 'https://linkedin.com/in/ajayrathod'} className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10"><FiLinkedin size={18} /></a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="grid gap-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-slate-100" placeholder="Your Name" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-slate-100" placeholder="Email Address" />
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-slate-100" placeholder="Tell me about your idea" />
            </div>
            <button type="submit" className="mt-6 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Send Message</button>
            {status ? <p className="mt-4 text-sm text-cyan-300">{status}</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
