module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("json", (obj, indent=2) => JSON.stringify(obj, null, indent));
  
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
