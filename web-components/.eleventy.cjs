const litPlugin = require("@lit-labs/eleventy-plugin-lit");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(litPlugin, {
    mode: "worker",
    componentModules: ["./src/components/usa-link/index.js"],
  });
  eleventyConfig.addWatchTarget("./src/components/**/*.js");
};
