import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vvz9axceq1op6mal.public.blob.vercel-storage.com",
                pathname: "/**",
                search: "",
            },
        ],
    },
};

export default nextConfig;
