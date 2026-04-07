// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',                // Enables static HTML export
    basePath: isProd ? '/portfolio' : '',  // Repo name for GitHub Pages
    assetPrefix: isProd ? '/portfolio/' : '',
    trailingSlash: true,             // Needed for GitHub Pages folder structure
};

module.exports = nextConfig;