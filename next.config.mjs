/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/pages-route-config-header",
        headers: [
          {
            key: "Netlify-Vary",
            value: "query=search",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
