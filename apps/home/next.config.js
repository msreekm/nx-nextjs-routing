const withNx = require('@nrwl/next/plugins/with-nx');
const { BLOG_URL } = process.env;

module.exports = withNx({
  rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
});
