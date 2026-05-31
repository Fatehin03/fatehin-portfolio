'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlay } from 'react-icons/fa6';
import { projects } from '@/lib/site-data';
import { SectionHeading } from './section-heading';
import { MagneticButton } from './magnetic-button';
import { TiltCard } from './tilt-card';
import { ProjectModal } from './project-modal';

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="relative border-t border-white/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Premium product showcases built to feel alive."
          description="A curated selection of feature-rich systems combining elegant interfaces, secure foundations, and applied intelligence."
        />

        <div className="mt-14 grid gap-5 xl:grid-cols-3">
          {projects.map((project, index) => (
            <TiltCard key={project.slug} className="h-full">
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/6 shadow-soft backdrop-blur-2xl"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_36%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex-1 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Featured</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/55">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/66">{project.description}</p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="rounded-2xl border border-white/10 bg-ink-950/60 px-3 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-white/65">
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/72">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-ink-950/55 p-4">
                    {project.slug === 'skylink-airlines' && (
                      <div className="grid gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75">
                          Search flights · Book seats · Manage schedules
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 rounded-2xl border border-white/10 bg-gradient-to-br from-electric-500/20 to-violet-500/20" />
                          <div className="h-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4" />
                        </div>
                      </div>
                    )}
                    {project.slug === 'droneshield' && (
                      <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),rgba(2,5,13,0.95)_60%)]">
                        <div className="absolute h-20 w-20 rounded-full border border-electric-300/50" />
                        <div className="absolute h-32 w-32 rounded-full border border-electric-300/30" />
                        <div className="absolute h-48 w-48 rounded-full border border-electric-300/15" />
                        <div className="h-1 w-24 rounded-full bg-electric-400 shadow-[0_0_22px_rgba(59,130,246,0.9)]" />
                      </div>
                    )}
                    {project.slug === 'ai-research' && (
                      <div className="grid gap-3">
                        <div className="grid grid-cols-3 gap-2">
                          {['Data', 'Train', 'Eval'].map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4 text-center text-xs text-white/70">
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="h-24 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(139,92,246,0.18))]" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-white/10 p-6">
                  <MagneticButton href={project.githubUrl} target="_blank" rel="noreferrer" variant="ghost" className="flex-1 justify-center">
                    <FaGithub />
                    GitHub
                  </MagneticButton>
                  {project.demoUrl ? (
                    <MagneticButton href={project.demoUrl} target="_blank" rel="noreferrer" variant="secondary" className="flex-1 justify-center">
                      <FaPlay />
                      Demo
                    </MagneticButton>
                  ) : (
                    <MagneticButton
                      variant="secondary"
                      className="flex-1 justify-center"
                      onClick={() => setActiveSlug(project.slug)}
                    >
                      <FaPlay />
                      Demo
                    </MagneticButton>
                  )}
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />
    </section>
  );
}
