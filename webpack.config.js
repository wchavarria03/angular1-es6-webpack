var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig() {
  'use strict';
  var config = {};

  config.entry = {
    app: path.resolve(__dirname, './public/app/app/app.module.js')
  };

  config.output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets'
  };

  config.devServer = {
    contentBase: path.resolve(__dirname, './dist')
  };

  config.devtool = 'source-map';

  config.module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
        exclude: [/node_modules/]
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader!postcss-loader'
          // loader: [
          //   {loader: 'css-loader', query: {sourceMap: true}},
          //   {loader: 'sass-loader'},
          //   {loader: 'postcss-loader'}
          // ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }]
  };

  config.plugins =  [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),

    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        },
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'app')]
        },
        context: '/'
      }
    }),
    new ExtractTextPlugin( "bundle.css" ),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './public/index.html',
    }),

    //new webpack.optimize.UglifyJsPlugin(),

    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './public/img'),
      to: 'img'
    }])
  ];

  return config;
};
