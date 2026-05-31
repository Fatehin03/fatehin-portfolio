'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-electric-500 via-violet-500 to-cyan-400"
      style={{ scaleX: progress }}
    />
  );
}
