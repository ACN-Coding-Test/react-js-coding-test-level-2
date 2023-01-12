/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'lzd-img-global.slatic.net'],
    loader: 'akamai',
    path: '',
  },
}
