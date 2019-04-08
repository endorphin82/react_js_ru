const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    // publicPath: "./public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: ["react-hot-loader/webpack"],
        loader: "babel-loader",
        include: path.join(__dirname, 'src'),
        options: { babelrcRoots: [".", "../"] } //MAGIC for @babel/plugin-proposal-class-properties
      }
    ]
  },
  resolve: {
    extensions: ["css", "*", ".js", ".jsx"]
  }
};