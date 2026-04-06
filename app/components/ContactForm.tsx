'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>

      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="name" className="contact-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="contact-input"
            placeholder="Your name"
          />
        </div>
        <div className="contact-field">
          <label htmlFor="email" className="contact-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="contact-input"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="project" className="contact-label">Project Type</label>
        <input
          id="project"
          name="project"
          type="text"
          className="contact-input"
          placeholder="e.g. Feature Film, Commercial, TV Series"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message" className="contact-label">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="contact-input contact-textarea"
          placeholder="Tell me about your project"
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <button
          type="submit"
          className="btn-primary"
          disabled={state === 'submitting'}
          style={{ opacity: state === 'submitting' ? 0.6 : 1, cursor: state === 'submitting' ? 'default' : 'pointer' }}
        >
          {state === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>

        {state === 'success' && (
          <p className="contact-feedback contact-feedback--success">
            Message sent — I&rsquo;ll be in touch soon.
          </p>
        )}
        {state === 'error' && (
          <p className="contact-feedback contact-feedback--error">
            Something went wrong. Try emailing directly.
          </p>
        )}
      </div>

    </form>
  );
}
