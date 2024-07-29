import { MetadataRoute } from 'next';
// constants
import config from '@constants/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${config.mainWebsite}/sitemap.xml`,
  };
}
