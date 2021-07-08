// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  // context: __dirname, // to automatically find tsconfig.json
  entry: "./src/test.js",
  module: {
    // rules: [
    //   {
    //     test: /\.tsx?$/,
    //     loader: "ts-loader",
    //     exclude: /node_modules/,
    //     options: {
    //       // disable type checker - we will use it in fork plugin
    //       transpileOnly: true,
    //     },
    //   },
    // ],
  },
  // devServer: {
  //   hot: true
  // },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      // PnpWebpackPlugin,
      // new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin(),
    ],
  },
  // resolveLoader: {
  //   plugins: [PnpWebpackPlugin.moduleLoader(module)],
  // },
};
