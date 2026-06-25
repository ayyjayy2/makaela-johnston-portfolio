import Image from 'next/image';
import Link from 'next/link';

export type Project = {
  title: string;
  slug: string;
  category: 'commercial' | 'narrative';
  role: string;
  client?: string;
  image?: string;
  imagePosition?: string;
};

export default function ProjectCard({ title, slug, category, image, imagePosition }: Project) {
  const href = `/${category}/${slug}`;
  // No header image means there's no real detail page content yet — show a
  // "Coming Soon" state and make the card non-clickable so users don't land on
  // a thin, empty detail page.
  const isComingSoon = !image;

  const inner = (
    <div className="project-card-image">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover', objectPosition: imagePosition }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="project-card-placeholder" />
      )}
      <div className="project-card-overlay">
        <p className="project-card-title">{title}</p>
        <span className={`project-card-cta${isComingSoon ? ' is-coming-soon' : ''}`}>
          {isComingSoon ? 'Coming Soon' : 'View Project'}
        </span>
      </div>
    </div>
  );

  if (isComingSoon) {
    return (
      <div className="project-card is-coming-soon" aria-label={`${title} — coming soon`}>
        {inner}
      </div>
    );
  }

  return (
    <Link href={href} className="project-card">
      {inner}
    </Link>
  );
}
