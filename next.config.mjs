/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/ec-grade-aluminium-wire",
        destination: "/products/aluminium-alloy-wires",
        permanent: true,
      },
      {
        source: "/products/aluminium-wire-mesh-fine-wires",
        destination: "/products/aluminium-wire-mesh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
