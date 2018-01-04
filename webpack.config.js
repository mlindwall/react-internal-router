var path = require('path');

module.exports = {

  entry: "./modules/index.js",

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    loaders: [
      { test: /\.js$/,
        include: path.resolve(__dirname, 'modules'),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        },
        exclude: /(node_modules|bower_components|build)/}
    ]
  },

  externals: {
    'react': 'commonjs react'
  }

};