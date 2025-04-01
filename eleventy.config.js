module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./docs/assets");
  return {
    dir: {
      input: "docs",   // you keep working in /docs
      output: "_site"  // _site will now have flat files only
    }
  }
}
  