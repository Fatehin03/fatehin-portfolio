'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import { heroRoles, site } from '@/lib/site-data';
import { MagneticButton } from './magnetic-button';
import { TiltCard } from './tilt-card';
import { FloatingParticles } from './floating-particles';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % heroRoles.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 bg-premium-gradient" />
      <FloatingParticles />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-500/20 blur-[120px] animate-pulseGlow" />
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-[120px] animate-float" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium text-white/75 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
            Available for selective collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeOut' },
              y: { duration: 0.8, ease: 'easeOut' },
              backgroundPosition: { duration: 12, repeat: Infinity, ease: 'linear' },
            }}
            style={{
              backgroundImage:
                'linear-gradient(90deg, #ffffff 0%, #dbeafe 18%, #60a5fa 40%, #8b5cf6 65%, #ffffff 100%)',
              backgroundSize: '220% 220%',
            }}
            className="max-w-4xl bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            Fatehin Alam
          </motion.h1>

          <div className="mt-6 h-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={heroRoles[roleIndex]}
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
                transition={{ duration: 0.45 }}
                className="text-lg font-medium tracking-[0.2em] text-electric-300 uppercase sm:text-xl"
              >
                {heroRoles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            A premium digital portfolio blending software engineering, artificial intelligence research,
            cybersecurity thinking, and UAV security exploration into elegant, production-ready solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#projects" className="sm:min-w-44">
              Explore Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary" className="sm:min-w-44">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12 hover:text-white"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <p className="ml-2 text-sm text-white/50">{site.location}</p>
          </motion.div>
        </div>

        <TiltCard className="relative mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-4 shadow-glow backdrop-blur-2xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%)]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-950/70">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                <span className="ml-3 text-xs text-white/40">fatehin-portfolio.dev</span>
              </div>

              <div className="relative grid gap-4 p-5 sm:grid-cols-[0.95fr_1.05fr] sm:p-6">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_40%)]" />
                  <Image
                    src="/profile.jpg"
                    alt="Fatehin Alam portrait"
                    width={900}
                    height={1000}
                    priority
                    className="relative h-[340px] w-full rounded-[1.1rem] object-cover object-top shadow-soft"
                  />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-ink-950/70 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-white/80 backdrop-blur-xl">
                    PHOTO READY
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-300/90">
                      Premium Portfolio
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      Full Stack Developer
                      <span className="block text-white/60">AI Researcher</span>
                      <span className="block text-white/60">Cybersecurity Enthusiast</span>
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/65">
                      Building polished products and research-driven systems with a strong emphasis on security,
                      resilience, and modern interface design.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {['Production-grade UI', 'Research mindset', 'Security-first', 'Modern stack'].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/75"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
