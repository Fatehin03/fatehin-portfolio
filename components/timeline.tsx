'use client';

import { motion } from 'framer-motion';
import { timelineItems } from '@/lib/site-data';
import { SectionHeading } from './section-heading';
import { TiltCard } from './tilt-card';

export function Timeline() {
  return (
    <section id="timeline" className="relative border-t border-white/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Timeline"
          title="A journey of learning, building, and strengthening systems."
          description="A concise view of education, research, development, and achievements that shape the professional direction of Fatehin Alam."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric-500/70 via-white/15 to-transparent md:left-1/2" />
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'}`}
              >
                <div className="relative pl-12 md:pl-0">
                  <span className="absolute left-0 top-3 grid h-8 w-8 place-items-center rounded-full border border-electric-500/40 bg-ink-950 shadow-glow md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-electric-400" />
                  </span>
                  <TiltCard>
                    <article className="rounded-[1.7rem] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-300/90">
                        {item.category}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/66">{item.description}</p>
                    </article>
                  </TiltCard>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
