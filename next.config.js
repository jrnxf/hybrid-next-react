module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/:path*",
        destination: `https://monthly.com/:path*`,
      },
    ];
  },
};
