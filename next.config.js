/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/homebrew-veventii-tools',
  assetPrefix: '/homebrew-veventii-tools',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;