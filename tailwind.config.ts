import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#02050d',
          900: '#050b18',
          800: '#0a1020',
        },
        electric: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        violet: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,.2), 0 10px 30px rgba(0,0,0,.45), 0 0 60px rgba(139,92,246,.16)',
        soft: '0 14px 40px rgba(0,0,0,.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-14px) translateX(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.08)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 12s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        scan: 'scan 7s linear infinite',
      },
      backgroundImage: {
        'premium-gradient':
          'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 32%), radial-gradient(circle at 20% 20%, rgba(139,92,246,0.18), transparent 24%), linear-gradient(135deg, #02050d 0%, #050b18 45%, #02050d 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
