const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "array-of-object-query",
    libraryTarget: "umd",
    globalObject: "this",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
    ],
  },
  resolve: {
    extensions: [".js"], // Add .jsx extension to resolve array
  },
  externals: [nodeExternals()],
};
