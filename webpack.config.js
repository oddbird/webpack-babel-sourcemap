module.exports = {
  // webpack options
  entry: './main.js',
  output: {
    filename: 'out.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  },
  devtool: 'cheap-module-source-map'
};
