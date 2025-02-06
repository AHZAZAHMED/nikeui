import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    domains : ['cdn.sanity.io'],
  },
  module.exports = {
    eslint: {
      dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
  }
};

export default nextConfig;
