/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "gv.pluxit.be",
      },
      {
        protocol: "https",
        hostname: "gv.pluxit.be",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/projecten",
        destination: "/realisaties",
      },
    ];
  },
};

export default nextConfig;
