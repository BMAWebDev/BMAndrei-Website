import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: () => [
    {
      source: '/:locale/contact',
      destination: '/#contact',
      permanent: true,
    },
  ],
};

export default nextConfig;
