import type { NextConfig } from 'next';
const config: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }, { protocol: 'https', hostname: '*.r2.dev' }],
  },
};
export default config;
