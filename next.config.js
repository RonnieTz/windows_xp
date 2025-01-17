const stylexPlugin = require('@stylexjs/nextjs-plugin');

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  reactStrictMode: false,
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
