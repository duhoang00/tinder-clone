const withAntd = require("next-plugin-antd-less");

module.exports = withAntd({
  reactStrictMode: true,
  cssModules: true,
  images: {
    domains: ["randomuser.me", "images.generated.photos"],
  },
});
