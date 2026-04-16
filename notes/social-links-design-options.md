# Social Links Design Options — Chicago Stars Project Page

Two design options for displaying Instagram / X social links on a project detail page. To be finalized once client feedback is received.

---

## Design 1 — Icons Only (in header, near title)

Small icon-only links placed in the project header area, next to the title/meta. No text labels. Subtle, minimal.

**Placement:** Inside `.project-detail-header`, below the meta line  
**Style:** Icon SVGs only, beige at 70% opacity, fade to full on hover

```tsx
{project.watchLinks && project.watchLinks.length > 0 && (
  <div className="project-detail-watch-links">
    {project.watchLinks.map(({ label, url }) => (
      <a
        key={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-detail-watch-icon"
        aria-label={label}
      >
        {label === 'Instagram' && (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        )}
        {(label === 'X / Twitter' || label === 'X') && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )}
      </a>
    ))}
  </div>
)}
```

**CSS:**
```css
.project-detail-watch-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.75rem;
  align-items: center;
}
.project-detail-watch-icon {
  color: var(--beige);
  opacity: 0.7;
  transition: opacity 200ms ease;
  display: flex;
  align-items: center;
}
.project-detail-watch-icon:hover { opacity: 1; }
```

---

## Design 2 — Solid Buttons with Icon + Label (below video, centered) ← CURRENT

Full buttons placed centered below the video embed. Each button has a platform icon on the left and "View on [Platform]" text. Instagram is rosy-brown, X is beige — both with dark green text.

**Placement:** Inside the hero section, directly after the video/image block  
**Style:** Solid filled buttons, centered row, platform-specific colors

```tsx
{project.watchLinks && project.watchLinks.length > 0 && (
  <div className="project-detail-watch-links">
    {project.watchLinks.map(({ label, url }) => (
      <a
        key={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={label === 'Instagram' ? 'btn-watch-instagram' : 'btn-watch-x'}
      >
        {label === 'Instagram' && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        )}
        {(label === 'X / Twitter' || label === 'X') && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )}
        View on {label}
      </a>
    ))}
  </div>
)}
```

**CSS:**
```css
.project-detail-watch-links {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}
.btn-watch-instagram {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background-color: var(--rosy-brown);
  color: var(--dark-green);
  border: none;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.btn-watch-instagram:hover { background-color: #c4907a; }
.btn-watch-x {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background-color: var(--beige);
  color: var(--dark-green);
  border: none;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.btn-watch-x:hover { background-color: #e8e4c0; }
```
