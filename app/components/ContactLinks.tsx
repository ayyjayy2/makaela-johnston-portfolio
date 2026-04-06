'use client';

import { useState } from 'react';

type ContactLink = {
  label: string;
  value: string;
  href: string;
  copyText: string;
  icon: React.ReactNode;
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="copy-btn"
      aria-label={copied ? 'Copied!' : `Copy ${text}`}
      title={copied ? 'Copied!' : 'Copy'}
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

export default function ContactLinks({ links }: { links: ContactLink[] }) {
  return (
    <div className="contact-links">
      {links.map(({ label, value, href, copyText, icon }) => (
        <div key={label} className="contact-link-row">
          <a
            href={href}
            className="contact-link-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-link-left">
              <span className="contact-link-icon">{icon}</span>
              <span className="contact-link-label eyebrow">{label}</span>
            </div>
            <span className="contact-link-value">{value}</span>
            <svg className="contact-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <CopyButton text={copyText} />
        </div>
      ))}
    </div>
  );
}
