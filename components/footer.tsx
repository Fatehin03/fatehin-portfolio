import { FaArrowUp, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { navItems, site } from '@/lib/site-data';
import { MagneticButton } from './magnetic-button';

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/60">
              Full stack development, AI research, and cybersecurity work shaped with precision, depth, and a modern visual identity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 transition hover:bg-white/12"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 transition hover:bg-white/12"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/80 transition hover:bg-white/12"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <MagneticButton href="#home" variant="secondary" className="!px-4 !py-3">
              <FaArrowUp />
              Top
            </MagneticButton>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
