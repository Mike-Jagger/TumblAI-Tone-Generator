/* eslint-env node */
const path = require('path');

module.exports = {
  entry: {
    content: './src/extension/content.js',
    background: './src/extension/background.js',
    popup: './src/extension/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'src/extension'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};