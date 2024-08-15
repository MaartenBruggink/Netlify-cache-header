/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/pages-route-config-header",
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
