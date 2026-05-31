'use client';

import { FaArrowUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { MagneticButton } from './magnetic-button';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <MagneticButton href="#home" variant="secondary" className="!px-4 !py-3">
        <FaArrowUp />
        <span className="sr-only">Back to top</span>
      </MagneticButton>
    </div>
  );
}
