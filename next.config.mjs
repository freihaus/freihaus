
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
        protocol: 'https',
        hostname: 'dr7f261fq4afc.cloudfront.net',
        port: '',
        pathname: '/**',
        },
      ]
    },
  };
  
  export default nextConfig;