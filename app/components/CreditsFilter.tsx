'use client';

import { useState } from 'react';

type Credit = {
  title: string;
  role: string;
  studio: string;
  type: string;
  year: string;
  sortYear: number;
  category: 'Commercial' | 'Narrative';
};

type Filter = 'All' | 'Commercial' | 'Narrative';

const filters: Filter[] = ['All', 'Narrative', 'Commercial'];

export default function CreditsFilter({ credits }: { credits: Credit[] }) {
  const [active, setActive] = useState<Filter>('All');

  const visible = active === 'All' ? credits : credits.filter((c) => c.category === active);

  return (
    <div>
      {/* ── Filter tabs ──────────────────────────────────────────── */}
      <div
        role="group"
        aria-label="Filter credits by category"
        style={{
          display: 'flex',
          gap: '0.25rem',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          borderBottom: '1px solid rgba(131, 153, 88, 0.2)',
          paddingBottom: '0',
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: active === f ? 'var(--beige)' : 'rgba(247,244,213,0.4)',
              background: 'none',
              border: 'none',
              borderBottom: active === f ? '1px solid var(--rosy-brown)' : '1px solid transparent',
              padding: '0 1rem 0.75rem',
              cursor: 'pointer',
              transition: 'color 150ms ease, border-color 150ms ease',
              marginBottom: '-1px',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Credits list ─────────────────────────────────────────── */}
      <div style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        {visible.map((credit) => (
          <div key={credit.title} className="credit-row">
            <div>
              <p className="credit-title">{credit.title}</p>
              <p className="credit-role">{credit.role}</p>
            </div>
            <div className="credit-meta">
              {credit.year && (
                <span className="credit-type">{credit.year}</span>
              )}
              <span className="credit-type">{credit.category} · {credit.type}</span>
              <span className="credit-studio">{credit.studio}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
