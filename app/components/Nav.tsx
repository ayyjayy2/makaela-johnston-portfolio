'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/',           label: 'Home'       },
  { href: '/about',      label: 'About'      },
  { href: '/commercial', label: 'Commercial' },
  { href: '/narrative',  label: 'Narrative'  },
  { href: '/resume',     label: 'Resume'     },
  { href: '/contact',    label: 'Contact'    },
];

export default function Nav() {
  const pathname                = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header
      className="fixed top-0 left-0 right-0"
      style={{
        zIndex:          'var(--z-nav)',
        backgroundColor: elevated ? 'rgba(247,244,213,0.95)' : 'transparent',
        backdropFilter:  elevated ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom:    elevated ? '1px solid var(--color-border)' : '1px solid transparent',
        transition:      'background-color 400ms ease, border-color 400ms ease, backdrop-filter 400ms ease',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between"
        style={{ height: '72px' }}
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily:    'var(--font-heading)',
            fontSize:      '1rem',
            fontWeight:    400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color:         'var(--color-dark-green)',
          }}
        >
          Makaela Johnston
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.filter(l => l.href !== '/').map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link${pathname === href ? ' active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block transition-all duration-300 origin-center"
              style={{
                width:           i === 1 ? (open ? '0' : '1.5rem') : '1.5rem',
                height:          '1px',
                backgroundColor: 'var(--color-dark-green)',
                transform:
                  i === 0 ? (open ? 'translateY(7px) rotate(45deg)' : 'none') :
                  i === 2 ? (open ? 'translateY(-7px) rotate(-45deg)' : 'none') :
                  'none',
                opacity:         i === 1 ? (open ? 0 : 1) : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden"
        style={{
          maxHeight:       open ? '100vh' : '0',
          overflow:        'hidden',
          transition:      'max-height 400ms cubic-bezier(0.16,1,0.3,1)',
          borderTop:       open ? '1px solid var(--color-border)' : 'none',
          backgroundColor: 'rgba(247,244,213,0.98)',
        }}
        aria-hidden={!open}
      >
        <ul className="list-none px-6 py-8 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontFamily:    'var(--font-heading)',
                  fontSize:      'clamp(1.5rem, 6vw, 2.5rem)',
                  fontWeight:    pathname === href ? 300 : 100,
                  fontStyle:     pathname === href ? 'normal' : 'italic',
                  color:         pathname === href ? 'var(--color-dark-green)' : 'var(--color-text-muted)',
                  letterSpacing: '-0.01em',
                  display:       'block',
                  transition:    'color var(--transition-fast)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
