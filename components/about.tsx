'use client';

import { motion } from 'framer-motion';
import { FaCode, FaShieldHalved, FaRocket, FaBrain } from 'react-icons/fa6';
import { aboutCards } from '@/lib/site-data';
import { SectionHeading } from './section-heading';
import { TiltCard } from './tilt-card';

const icons = [FaCode, FaBrain, FaShieldHalved, FaRocket];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Technology, research, and security with a premium product mindset."
          description="A passionate technology enthusiast focused on software development, artificial intelligence, cybersecurity research, and innovative problem solving."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <TiltCard key={card.title}>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group h-full rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur-2xl transition hover:border-electric-500/25 hover:bg-white/8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-xl text-electric-300 shadow-glow">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{card.description}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/35">
                    {index === 0 ? 'Build' : index === 1 ? 'Discover' : index === 2 ? 'Defend' : 'Create'}
                  </p>
                </motion.article>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
