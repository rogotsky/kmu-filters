const path = require('path');

module.exports = {
  entry: './src/index.js',
  externals: {
    jquery: "jQuery"
  },
  output: {
    filename: 'public.js',
    path: path.resolve( __dirname, 'dist' )
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
};
