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
  const pathname  = usePathname();
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background when scrolled past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[30] transition-all duration-300"
      style={{
        backgroundColor: scrolled || open ? 'rgba(247,244,213,0.92)' : 'transparent',
        backdropFilter:   scrolled || open ? 'blur(12px)'             : 'none',
        borderBottom:     scrolled || open ? '1px solid rgba(131,153,88,0.25)' : 'none',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: '72px' }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize:   '1.125rem',
            fontWeight: 500,
            color:      'var(--color-dark-green)',
            letterSpacing: '0.02em',
            transition: 'color var(--transition-fast)',
          }}
        >
          Makaela Johnston
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="cursor-pointer relative"
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.9rem',
                    fontWeight:    active ? 500 : 400,
                    color:         active ? 'var(--color-dark-green)' : 'var(--color-text-muted)',
                    letterSpacing: '0.03em',
                    transition:    'color var(--transition-fast)',
                    paddingBottom: '2px',
                    borderBottom:  active ? '1px solid var(--color-rosy-brown)' : '1px solid transparent',
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--color-dark-green)';
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden cursor-pointer flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{ background: 'none', border: 'none', padding: '4px' }}
        >
          <span
            className="block w-6 h-px transition-all duration-300 origin-center"
            style={{
              backgroundColor: 'var(--color-dark-green)',
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-dark-green)',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300 origin-center"
            style={{
              backgroundColor: 'var(--color-dark-green)',
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight:  open ? '400px' : '0',
          opacity:    open ? 1 : 0,
          borderTop:  open ? '1px solid rgba(131,153,88,0.25)' : 'none',
        }}
        aria-hidden={!open}
      >
        <ul className="list-none m-0 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="cursor-pointer block"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize:   '1.25rem',
                    fontWeight: active ? 500 : 300,
                    color:      active ? 'var(--color-dark-green)' : 'var(--color-text-muted)',
                    transition: 'color var(--transition-fast)',
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
