const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
    // publicPath: "/"
  },
  devServer: {
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.join(__dirname, "src"),
        options: { babelrcRoots: [".", "../"] } //MAGIC for @babel/plugin-proposal-class-properties
      }
    ]
  },
  resolve: {
    extensions: ["css", "*", ".js", ".jsx"]
  }
  // ,
  // plugins: [
  //   new CleanWebpackPlugin({cleanStaleWebpackAssets: false} ),
  //   new HtmlWebpackPlugin({ template: "index.html" }),
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};