/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      aws4: false,
      // Add other fallbacks if needed
    };
    if (!isServer) {
      config.experiments = { webpackBuildWorker: true };
    }

    return config;
  },
};

module.exports = nextConfig;
