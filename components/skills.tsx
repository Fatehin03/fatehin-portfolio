'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/site-data';
import { SectionHeading } from './section-heading';
import { TiltCard } from './tilt-card';

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A versatile stack spanning engineering, data, and security."
          description="A broad toolkit designed to move from interface design to backend systems, from model experimentation to secure delivery."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <TiltCard key={category.name}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="h-full rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/55">
                    {category.skills.length} items
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.12 + skillIndex * 0.03 }}
                      className="rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-4 py-2 text-sm text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
