/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    turbopack: {
        root: __dirname,  // explicitly sets your project as root
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;