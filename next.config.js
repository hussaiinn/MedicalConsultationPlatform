/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      aws4: false,
      // Add other fallbacks if needed
    };

    // Enable the Webpack build worker only for non-server builds
    if (!isServer) {
      config.experiments = { webpackBuildWorker: true };
    }

    return config;
  },
};
