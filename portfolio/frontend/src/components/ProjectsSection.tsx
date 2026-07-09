import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiSearch } from 'react-icons/fi';
import type { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  projects?: ProjectItem[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const projectList = projects ?? [];

  const filtered = useMemo(
    () => projectList.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()),
    ),
    [projectList, search],
  );

  return (
    <section id="projects" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">Projects</p>
            <h2 className="text-4xl font-semibold text-slate-100">Featured work</h2>
          </div>
          <label className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-300 shadow-glow">
            <FiSearch size={18} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects"
              className="w-48 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
            />
          </label>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-glow"
            >
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Project</span>
                  <div className="flex items-center gap-2 text-slate-300">
                    {project.tech.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-slate-300/90 leading-7">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-2xl bg-slate-900/70 px-3 py-2">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                    <FiGithub size={16} className="inline-block" /> GitHub
                  </a>
                  <button onClick={() => setSelected(project)} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-900/95 p-8 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-semibold text-slate-100">{selected.title}</h3>
                    <p className="mt-3 text-slate-300/90 leading-7">{selected.details}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={selected.github} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-900">
                    GitHub
                  </a>
                  <a href={selected.demo} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ProjectsSection;
