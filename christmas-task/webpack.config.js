const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('webpack');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [stylesHandler,'css-loader'],
      },
      {
        test: /\.json/, use: 'json-loader' }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns: [
        { from: './public', to: './public' },
        { from: './src/assets/toys', to: './assets/toys' },
        { from: './src/assets/img', to: './assets/img' }
      ]
    })
  ],
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".json" ]
  },
};

module.exports = () => {
  if (isProduction) {
      config.mode = 'production';
      
      config.plugins.push(new MiniCssExtractPlugin());
      
      
  } else {
      config.mode = 'development';
  }
  return config;
};
