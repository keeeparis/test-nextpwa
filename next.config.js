const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  sw: '/sw.js'
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = () => {
  const plugins = [withPWA];

  return plugins.reduce((acc, next) => next(acc));
};
