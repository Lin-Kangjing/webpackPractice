module.exports = {
  entry: {
    bundle:"./src/index.js",
    vendor:['vue','vue-router']
  },
  output: {
    filename: "[name].js",
  },
  devServer: {
    static: "./",
    open:true
  },
  mode: "development",
};
