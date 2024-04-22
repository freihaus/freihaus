
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
        protocol: 'https',
        hostname: 'freihaus.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
        },
      ]
    },
  };
  
  export default nextConfig;