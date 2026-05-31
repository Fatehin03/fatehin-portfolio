'use client';

import { motion } from 'framer-motion';

const particles = [
  { top: '12%', left: '10%', size: 10, delay: 0, duration: 11 },
  { top: '20%', left: '82%', size: 12, delay: 1.1, duration: 12 },
  { top: '34%', left: '18%', size: 8, delay: 0.6, duration: 10 },
  { top: '58%', left: '78%', size: 14, delay: 1.6, duration: 14 },
  { top: '72%', left: '12%', size: 9, delay: 0.2, duration: 13 },
  { top: '78%', left: '88%', size: 7, delay: 1.8, duration: 12 },
  { top: '46%', left: '50%', size: 11, delay: 0.9, duration: 15 },
  { top: '86%', left: '42%', size: 8, delay: 1.4, duration: 11 },
];

export function FloatingParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.12),transparent_26%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_24%)]" />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.top}-${particle.left}`}
          className="absolute rounded-full bg-white/80 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.25, 0.9, 0.25],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
