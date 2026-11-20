/** @type {import('next').NextConfig} */
const nextConfig = {
  // better-sqlite3 is a native Node.js module – keep it out of the webpack bundle
  experimental: { serverComponentsExternalPackages: ['better-sqlite3'] },
};
module.exports = nextConfig;
