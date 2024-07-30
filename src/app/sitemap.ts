import { MetadataRoute } from 'next';
// constants
import config from '@constants/config';

const URL = config.mainWebsite;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!URL) return [];

  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${URL}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];
}
