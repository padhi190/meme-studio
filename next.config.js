/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.imgflip.com',
      'i.pinimg.com',
      'static.stacker.com',
      'pyxis.nymag.com',
      'encrypted-tbn0.gstatic.com',
      'relatably.com',
      'www.memesmonkey.com',
    ],
  },
};

module.exports = nextConfig;
