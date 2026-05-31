'use client';

import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type CSSProperties, type MouseEvent, type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type AnchorProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: never;
  };

function baseClasses(variant: Variant) {
  const common =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';
  const variants: Record<Variant, string> = {
    primary:
      'border border-white/10 bg-white/10 text-white shadow-glow backdrop-blur-xl hover:bg-white/15',
    secondary:
      'border border-electric-500/30 bg-electric-500/10 text-white shadow-soft backdrop-blur-xl hover:bg-electric-500/15',
    ghost: 'border border-white/10 bg-transparent text-white/85 hover:bg-white/5',
  };
  return cn(common, variants[variant]);
}

export function MagneticButton({
  children,
  variant = 'primary',
  className,
  ...props
}: PropsWithChildren<AnchorProps | ButtonProps>) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.setProperty('--mx', `${x * 0.15}px`);
    el.style.setProperty('--my', `${y * 0.15}px`);
  };

  const handleLeave = (event: MouseEvent<HTMLElement>) => {
    const el = event.currentTarget as HTMLElement;
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };

  const motionStyle: CSSProperties = {
    transform: 'translate3d(var(--mx, 0px), var(--my, 0px), 0)',
  };

  if ('href' in props && props.href) {
    const { href, target, rel, className: anchorClassName, variant: _ignored, ...anchorProps } =
      props as AnchorProps;

    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(baseClasses(variant), anchorClassName, className)}
        style={motionStyle}
        {...anchorProps}
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  const { className: buttonClassName, variant: _ignored, ...buttonProps } = props as ButtonProps;
  return (
    <button
      type={buttonProps.type ?? 'button'}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(baseClasses(variant), buttonClassName, className)}
      style={motionStyle}
      {...buttonProps}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
