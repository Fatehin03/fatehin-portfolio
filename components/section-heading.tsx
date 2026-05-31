'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)} data-gsap-reveal>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-electric-400/90"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base"
      >
        {description}
      </motion.p>
    </div>
  );
}
