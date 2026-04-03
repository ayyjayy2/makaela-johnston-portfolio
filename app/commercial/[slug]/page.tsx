import type { Metadata } from 'next';
import { commercialProjects, getProject } from '../../data/projects';
import ProjectDetailPage from '../../components/ProjectDetailPage';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return commercialProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject('commercial', slug);
  if (!project) return {};
  return {
    title: `${project.title} — Makaela Johnston`,
    description: project.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailPage category="commercial" slug={slug} />;
}
