/*
 * @Description:
 * @FilePath: \webpackPractice\webpack.config.js
 * @Date: 2022-06-11 16:24:41
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-06-14 20:31:35
 * @author: Lin_kangjing
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: ["vue", "vue-router"],
  },
  output: {
    filename: "[name].js",
  },
  devServer: {
    static: "./",
    open: true,
  },
  // devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMap: true,
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
          {
            loader: path.resolve("force-strict-loader/index.js"),
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./css",
            },
          },
          "css-loader",
          // "sass-loader"
          "postcss-loader",
        ],
      },
    ],
  },
};
