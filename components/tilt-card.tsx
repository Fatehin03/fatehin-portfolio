'use client';

import { type CSSProperties, type MouseEvent, type PropsWithChildren, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps extends PropsWithChildren {
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)',
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
    });
  };

  const reset = () => {
    setStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)',
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn('transition-transform duration-300 will-change-transform', className)}
      style={style}
    >
      {children}
    </div>
  );
}
