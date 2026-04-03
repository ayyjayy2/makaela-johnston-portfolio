'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/about',      label: 'About'      },
  { href: '/commercial', label: 'Commercial' },
  { href: '/narrative',  label: 'Narrative'  },
  { href: '/resume',     label: 'Resume'     },
  { href: '/contact',    label: 'Contact'    },
];

export default function Nav() {
  const pathname              = usePathname();
  const [open,     setOpen]   = useState(false);
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

  return (
    <header className={`nav-root${scrolled || open ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-wordmark">
          Makaela Johnston
        </Link>

        {/* Desktop */}
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {links.map(({ href, label }) => (
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
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span style={{
            width: '1.5rem',
            transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            width: open ? '0' : '1rem',
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            width: '1.5rem',
            transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul className="nav-mobile-links">
          {[{ href: '/', label: 'Home' }, ...links].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-mobile-link${pathname === href ? ' active' : ''}`}
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
