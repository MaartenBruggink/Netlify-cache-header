/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/config-cache-header",
        headers: [
          {
            key: "netlify-vary",
            value: "query=search",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
