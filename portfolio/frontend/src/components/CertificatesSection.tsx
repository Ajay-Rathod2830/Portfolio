import { motion } from 'framer-motion';
import type { CertificateItem } from '../types/portfolio';

interface CertificatesSectionProps {
  certificates?: CertificateItem[];
}

function CertificatesSection({ certificates }: CertificatesSectionProps) {
  const certificateList = certificates ?? [
    {
      title: 'Machine Learning Specialization',
      organization: 'Coursera',
      issueDate: 'June 2025',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      verifyUrl: 'https://www.coursera.org',
    },
    {
      title: 'Deep Learning Foundations',
      organization: 'edX',
      issueDate: 'October 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      verifyUrl: 'https://www.edx.org',
    },
  ];

  return (
    <section id="certificates" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/75">Certificates</p>
          <h2 className="text-4xl font-semibold text-slate-100">Learning milestones</h2>
          <p className="mx-auto max-w-2xl text-slate-300/80 leading-8">Selected certifications that reflect a consistent progression in AI, data science, and software engineering.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {certificateList.map((certificate) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-glow"
            >
              <img src={certificate.image} alt={certificate.title} className="h-48 w-full object-cover" />
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{certificate.organization}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-100">{certificate.title}</h3>
                <div className="mt-5 flex items-center justify-between text-slate-300">
                  <span>Issue Date: {certificate.issueDate}</span>
                  <a href={certificate.verifyUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">Verify</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
