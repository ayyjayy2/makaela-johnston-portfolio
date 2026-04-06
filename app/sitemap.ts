import type { MetadataRoute } from 'next';
import { allProjects } from './data/projects';

export const dynamic = 'force-static';

const siteUrl = 'https://makaelajohnston.web.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl,                    lastModified: new Date(), changeFrequency: 'monthly',  priority: 1   },
    { url: `${siteUrl}/about`,         lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${siteUrl}/commercial`,    lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${siteUrl}/narrative`,     lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${siteUrl}/resume`,        lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${siteUrl}/contact`,       lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = allProjects.map((p) => ({
    url: `${siteUrl}/${p.category}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
