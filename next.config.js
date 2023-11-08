/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  }
};

const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA(nextConfig);
