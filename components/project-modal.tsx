'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaXmark, FaGithub } from 'react-icons/fa6';
import { MagneticButton } from './magnetic-button';

type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string | null;
  metrics: string[];
  accent: string;
};

function DemoPanel({ project }: { project: Project }) {
  if (project.slug === 'skylink-airlines') {
    return (
      <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-electric-300/90">Flight search</p>
          <div className="mt-4 space-y-3">
            {['Dhaka → Dubai', 'One way', '2 passengers', 'Business class'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-ink-950/55 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300/90">Live platform capabilities</p>
          <div className="mt-4 grid gap-3">
            {['Search and booking flow', 'Schedule management', 'Admin dashboards', 'Responsive booking experience'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/78">
                <span>{item}</span>
                <span className="text-white/40">01</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === 'droneshield') {
    return (
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-ink-950/55 p-4">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),rgba(2,5,13,0.9)_55%)]">
            <div className="absolute h-24 w-24 rounded-full border border-electric-400/50" />
            <div className="absolute h-40 w-40 rounded-full border border-electric-400/30" />
            <div className="absolute h-60 w-60 rounded-full border border-electric-400/15" />
            <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-electric-300/70 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-electric-300/70 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">Threat map active</span>
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300/90">Detection pipeline</p>
          <div className="mt-4 space-y-3">
            {['Sensor ingestion', 'Adversarial pattern analysis', 'Threat scoring', 'Operator alerting'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Research focus</p>
        <div className="mt-4 grid gap-3">
          {['Model design', 'Evaluation metrics', 'Security experiments', 'Publishable insights'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/78">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[1.5rem] border border-white/10 bg-ink-950/55 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">Experiment dashboard</p>
        <div className="mt-4 grid gap-3">
          {['Train', 'Validate', 'Benchmark', 'Iterate'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/78">
              <span>{item}</span>
              <span className="text-white/40">●</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink-950/95 shadow-glow"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-white/80 transition hover:bg-white/12"
              aria-label="Close modal"
            >
              <FaXmark />
            </button>

            <div className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-300/90">Featured project</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/66">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/72">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Tech stack</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-ink-900/80 px-3 py-2 text-xs text-white/72">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton href={project.githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </MagneticButton>
                  {project.demoUrl ? (
                    <MagneticButton href={project.demoUrl} target="_blank" rel="noreferrer" variant="secondary">
                      Live Demo
                    </MagneticButton>
                  ) : (
                    <MagneticButton href="#contact" variant="secondary" onClick={onClose}>
                      Discuss Project
                    </MagneticButton>
                  )}
                </div>
              </div>

              <DemoPanel project={project} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
