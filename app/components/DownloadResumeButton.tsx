'use client';

import { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../resume/ResumePDF';
import { resumeInfo } from '../data/resume';

const filename = `${resumeInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function DownloadResumeButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Render a static placeholder until client hydration is complete
  if (!mounted) {
    return (
      <span className="btn-outline" style={{ opacity: 0.6, cursor: 'default' }}>
        <DownloadIcon />
        Download PDF
      </span>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName={filename}
      className="btn-outline"
      aria-label="Download resume as PDF"
      style={{ textDecoration: 'none' }}
    >
      {({ loading }) => (
        <>
          <DownloadIcon />
          {loading ? 'Preparing…' : 'Download PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
}
