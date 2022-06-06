const webpack = require("webpack");
module.exports = function override(config, env) {
  config.resolve.fallback = {
    url: require.resolve("url"),
    fs: require.resolve("fs"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  );
  config.module.rules.push(
    {
      test: /\.js$|jsx/,
      type: "javascript/auto",
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
  );

  return config;
};
