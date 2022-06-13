/*
 * @Description:
 * @FilePath: \webpackPractice\webpack.config.js
 * @Date: 2022-06-11 16:24:41
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-06-13 21:02:23
 * @author: Lin_kangjing
 */
const path = require('path');
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
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
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
            options:{
              sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
