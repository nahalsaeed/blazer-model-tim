/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/auth/login',
            permanent: false,
          },
          
        ]
      }
};

export default nextConfig;
