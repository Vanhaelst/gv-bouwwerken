/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bb-m.be",
            },
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
};

export default nextConfig;
