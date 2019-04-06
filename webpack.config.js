const path = require("path");

module.exports = {
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
    publicPath: "./public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { babelrcRoots: [".", "../"] } //MAGIC for @babel/plugin-proposal-class-properties
      }
    ]
  },
  resolve: {
    extensions: ["css", "*", ".js", ".jsx"]
  }
};