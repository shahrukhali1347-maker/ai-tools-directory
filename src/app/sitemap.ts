import { MetadataRoute } from 'next';
import { aiTools } from '@/data/tools';
import { categories } from '@/data/categories';
import { collections } from '@/data/collections';
import { guides } from '@/data/guides';
import { SITE_CONFIG } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    '',
    '/tools',
    '/categories',
    '/collections',
    '/guides',
    '/about',
    '/submit',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Tool pages
  const toolPages = aiTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(tool.dateUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Category pages
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Collection pages
  const collectionPages = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date(collection.dateUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  // Guide pages
  const guidePages = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.dateUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...toolPages, ...categoryPages, ...collectionPages, ...guidePages];
}
