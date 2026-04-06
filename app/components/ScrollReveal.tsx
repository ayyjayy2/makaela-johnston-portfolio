'use client';

import { useRef, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;       // ms stagger delay
  className?: string;
};

export default function ScrollReveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
