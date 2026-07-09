import { motion } from 'framer-motion';
import type { SkillLevel } from '../types/portfolio';

interface SkillsSectionProps {
  skills?: Record<string, SkillLevel[]>;
}

function SkillsSection({ skills }: SkillsSectionProps) {
  const skillGroups = skills ?? {
    Programming: [
      { name: 'Python', level: 94 },
      { name: 'C', level: 72 },
      { name: 'Java', level: 78 },
      { name: 'JavaScript', level: 84 },
    ],
    Web: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 88 },
      { name: 'React', level: 86 },
      { name: 'Tailwind', level: 80 },
    ],
    'AI/ML': [
      { name: 'NumPy', level: 92 },
      { name: 'Pandas', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 76 },
      { name: 'OpenCV', level: 82 },
    ],
    Database: [
      { name: 'SQL', level: 78 },
      { name: 'MongoDB', level: 72 },
    ],
    Cloud: [{ name: 'AWS', level: 70 }],
    Tools: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
    ],
  };

  return (
    <section id="skills" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">Skills</p>
          <h2 className="text-4xl font-semibold text-slate-100">Technologies I work with</h2>
          <p className="mx-auto max-w-2xl text-slate-300/80 leading-8">
            Efficient tools and frameworks for building AI applications, data systems, and modern web experiences.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(skillGroups).map(([title, groupSkills]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl"
            >
              <h3 className="mb-6 text-2xl font-semibold text-slate-100">{title}</h3>
              <div className="space-y-5">
                {groupSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default SkillsSection;
