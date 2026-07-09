import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import type { TimelineItem } from '../types/portfolio';

interface AboutSectionProps {
  about?: {
    education: string;
    objective: string;
    skills: string[];
    interests: string[];
    timeline: TimelineItem[];
  };
}

function AboutSection({ about }: AboutSectionProps) {
  const fallbackAbout = {
    education: 'B.Tech in Computer Science and Engineering',
    objective: 'Build scalable AI products and deploy intelligent automation for business problems.',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
    interests: ['AI Research', 'Robotics', 'Open-source'],
    timeline: [
      { year: '2023', event: 'Started core AI projects with Python, TensorFlow and OpenCV.' },
      { year: '2024', event: 'Built ML prototypes for predictive analytics and generative AI.' },
      { year: '2025', event: 'Contributed to open-source AI toolkits and polished portfolio.' },
    ],
  };
  const data = about ?? fallbackAbout;

  return (
    <section id="about" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">About Me</p>
          <h2 className="text-4xl font-semibold text-slate-100">Professional summary</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300/85">
            A driven Computer Science Engineering student with strong expertise in AI, machine learning, and Python development. I deliver polished web experiences and practical ML solutions for real-world use cases.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="space-y-8 rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard icon={<FiBookOpen size={22} />} title="Education" value={data.education} />
              <InfoCard icon={<FiAward size={22} />} title="Objective" value={data.objective} />
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="mb-4 text-xl font-semibold text-slate-100">Core skills</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {data.skills.map((skill) => (
                  <div key={skill} className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">{skill}</div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Student profile</p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-100">Ajay Rathod</h3>
              </div>
              <img
                src="/profilepic.jpeg"
                alt="Ajay Rathod"
                className="h-24 w-24 rounded-3xl border border-white/10 object-cover"
              />
            </div>
            <div className="mt-8 space-y-6 text-slate-300/90">
              <p>
                I am building modern AI applications with strong software engineering principles, using data-driven workflows and cloud-enabled deployment pipelines.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <StatItem label="Interests" value={data.interests.join(', ')} />
                <StatItem label="Location" value="Vijaypur, Karnataka, India" />
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <h4 className="text-xl font-semibold text-slate-100">Experience timeline</h4>
              <div className="space-y-5">
                {data.timeline.map((item) => (
                  <TimelineItem key={item.year + item.event} year={item.year} text={item.event} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 text-slate-200">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800/75 text-cyan-300">{icon}</div>
      <p className="text-sm uppercase tracking-[0.24em] text-slate-400/80">{title}</p>
      <p className="mt-4 text-base leading-7 text-slate-300">{value}</p>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
      <p className="text-slate-400/80">{label}</p>
      <p className="mt-2 font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-10 w-10 rounded-2xl bg-cyan-500/15 text-center text-sm font-semibold leading-10 text-cyan-300">{year}</div>
      <p className="text-slate-300/90 leading-7">{text}</p>
    </div>
  );
}

export default AboutSection;
