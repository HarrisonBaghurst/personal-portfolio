import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vvz9axceq1op6mal.public.blob.vercel-storage.com",
                pathname: "/**",
                search: "",
            },
        ],
    },
    allowedDevOrigins: ["10.183.66.153"],
};

export default nextConfig;
