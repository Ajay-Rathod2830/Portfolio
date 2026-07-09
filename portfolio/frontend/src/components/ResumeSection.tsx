import { motion } from 'framer-motion';

function ResumeSection() {
  return (
    <section id="resume" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">Resume</p>
          <h2 className="text-4xl font-semibold text-slate-100">Download CV</h2>
          <p className="mx-auto max-w-2xl text-slate-300/80 leading-8">
            A polished resume tailored for AI engineering roles and machine learning product opportunities.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-slate-300/90 leading-8">
                Download a complete resume PDF to review education, project experience, certifications, and AI skills.
              </p>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-200">
                <p><strong>Experience</strong>: AI + ML project development, backend APIs, and product UI design.</p>
                <p><strong>Tools</strong>: Python, FastAPI, React, Tailwind, Git, AWS.</p>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-6 h-64 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6 text-slate-300">
                <h3 className="mb-3 text-xl font-semibold text-slate-100">Resume Preview</h3>
                <p className="leading-7 text-slate-300/90">A modern, clean CV overview ready for download and direct sharing with recruiters.</p>
              </div>
              <a
                href="/resume.pdf"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeSection;
