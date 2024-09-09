/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
