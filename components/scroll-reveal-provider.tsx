'use client';

import { PropsWithChildren } from 'react';
import { useGsapReveal } from '@/hooks/use-gsap-reveal';

export function ScrollRevealProvider({ children }: PropsWithChildren) {
  useGsapReveal();
  return <>{children}</>;
}
