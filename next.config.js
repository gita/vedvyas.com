/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Turbopack ignores stray package-lock.json files in
  // parent directories and always traces from this project.
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
