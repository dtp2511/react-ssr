const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const webpack = require('webpack');
const config = {
  // Inform webpack that we're building a bundle
  // for nodejs, rather than for the browser
  target: "node",

  // Tell webpack the root file of our
  // server application
  entry: "./src/client/client.js",

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  // Tell webpack to run babel on every file it runs through
};

module.exports = merge(baseConfig, config);
