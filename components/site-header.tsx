'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { navItems, site } from '@/lib/site-data';
import { MagneticButton } from './magnetic-button';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const lock = open ? 'hidden' : '';
    document.body.style.overflow = lock;
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/8' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/8 shadow-glow backdrop-blur-xl">
            <span className="text-sm font-semibold text-white">FA</span>
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">{site.name}</p>
            <p className="text-xs text-white/55">Portfolio • {site.location}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/5 px-2 py-2 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/75 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <MagneticButton href="#contact" variant="primary">
            Let&apos;s Talk
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/90 backdrop-blur-xl transition hover:bg-white/12 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 p-4 shadow-soft backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="#contact" variant="secondary" className="w-full justify-center">
                Let&apos;s Talk
              </MagneticButton>
              <MagneticButton href={site.github} target="_blank" rel="noreferrer" className="w-full justify-center">
                GitHub
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
