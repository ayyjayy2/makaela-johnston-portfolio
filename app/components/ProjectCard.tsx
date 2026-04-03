import Image from 'next/image';
import Link from 'next/link';

export type Project = {
  title: string;
  slug: string;
  category: 'commercial' | 'narrative';
  role: string;
  client?: string;
  image?: string;
};

export default function ProjectCard({ title, slug, category, role, client, image }: Project) {
  const href = `/${category}/${slug}`;

  return (
    <Link href={href} className="project-card">
      <div className="project-card-image">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="project-card-placeholder" />
        )}
        <div className="project-card-overlay">
          <span className="project-card-cta">View Project</span>
        </div>
      </div>

      <div className="project-card-body">
        {client && <p className="project-card-client">{client}</p>}
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-role">{role}</p>
      </div>
    </Link>
  );
}
