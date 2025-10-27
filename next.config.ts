import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true, // использовать нативный ESM-импорт
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // убрать console.* в продакшене
  },
};

export default nextConfig;
