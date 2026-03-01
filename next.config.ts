import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    GTAG_ANALYTICS_ID: process.env.GTAG_ANALYTICS_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    WEBSITE_URL: process.env.WEBSITE_URL,
    NEXT_PUBLIC_DEV_SERVER_PASSWORD_ENABLED:
      process.env.NEXT_PUBLIC_DEV_SERVER_PASSWORD_ENABLED,
    NEXT_PUBLIC_DEV_SERVER_PASSWORD:
      process.env.NEXT_PUBLIC_DEV_SERVER_PASSWORD,
  },
};

export default nextConfig;
