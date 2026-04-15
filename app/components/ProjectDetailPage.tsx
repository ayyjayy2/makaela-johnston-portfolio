import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, getAdjacentProjects } from '../data/projects';

type Props = { category: string; slug: string };

export default function ProjectDetailPage({ category, slug }: Props) {
  const project = getProject(category, slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project);

  const meta = [
    project.client   && { label: 'Client',    value: project.client   },
    project.year     && { label: 'Year',       value: project.year     },
    project.director && { label: 'Director',   value: project.director },
    project.studio   && { label: 'Studio',     value: project.studio   },
    { label: 'Role', value: project.role },
    project.type     && { label: 'Type',       value: project.type     },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div>

      {/* ── Header + Hero image ─────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <div className="project-detail-header">
            <Link href={`/${project.category}`} className="project-detail-back">
              ← {project.category === 'commercial' ? 'Commercial' : 'Narrative'}
            </Link>
            <h1 className="section-title">{project.title}</h1>
            {meta.length > 0 && (
              <p className="project-detail-meta-line">
                {meta.map(({ value }, i) => (
                  <span key={i}>{i > 0 && <span className="project-detail-meta-sep"> · </span>}{value}</span>
                ))}
              </p>
            )}
            {project.watchUrl && (
              <a
                href={project.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ marginTop: '0.5rem' }}
              >
                Watch Project <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
          {project.videoUrl ? (
            <div className="project-detail-video">
              <iframe
                src={project.videoUrl}
                title={project.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="project-detail-main-image">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              ) : (
                <div className="project-card-placeholder" />
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Description ─────────────────────────────────────────── */}
      {project.description && (
        <section className="section-dark" style={{ paddingTop: '0', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container">
            <p className="project-detail-description">{project.description}</p>
          </div>
        </section>
      )}

      {/* ── Gallery ─────────────────────────────────────────────── */}
      {project.images && project.images.length > 0 && (
        <section className="section-dark" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="project-detail-gallery">
              {project.images.map((src, i) => (
                <div key={i} className="project-detail-gallery-item">
                  <Image
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Prev / Next ─────────────────────────────────────────── */}
      <div className="project-detail-nav">
        <div className="container">
          <div className="project-detail-nav-inner">
            {prev ? (
              <Link href={`/${prev.category}/${prev.slug}`} className="project-detail-nav-item">
                <span className="project-detail-nav-label">← Previous</span>
                <span className="project-detail-nav-title">{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/${next.category}/${next.slug}`} className="project-detail-nav-item project-detail-nav-item--right">
                <span className="project-detail-nav-label">Next →</span>
                <span className="project-detail-nav-title">{next.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

    </div>
  );
}
