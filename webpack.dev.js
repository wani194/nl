const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');  // Adding Workbox Plugin for Service Worker
const webpack = require('webpack');


module.exports = {
   mode: 'development', //devlopment mode
   entry: './src/js/index.js',//entry point 
   devtool: 'source-map',//enable source maps
   output:
   {
      filename: 'bundle.js',//output file name 
      path: path.resolve(__dirname, 'dist'),//output directory
      clean: true,//clean output folder before each build 
   },
  devServer: {
      static: path.join(__dirname, 'dist'), 
     compress: true,
      port: 8081,
      open: true,
      historyApiFallback: true,
   },
   resolve: {
      fallback: {
         path: require.resolve('path-browserify'), // Fallback for 'path' module
         os: require.resolve('os-browserify/browser'), // Fallback for 'os' module
         crypto: require.resolve('crypto-browserify'), // Fallback for 'crypto' module
         process: require.resolve('process/browser'), // Fallback for 'process' module
         vm: require.resolve('vm-browserify'),
    stream: require.resolve('stream-browserify'),

      },
   },  
   module: {
      rules: [
         {
            test: /\.scss$/,//process scss files
            use: ['style-loader', 'css-loader', 'sass-loader'],//scss loader
         },
         {
            test: /\.js$/,//process javascript file 
            exclude: /node_modules/,//exclude node_modules
            use: ['babel-loader'],// use babel for javascript transpiling
         },
      ],
   },
   optimization: {
      minimize: true, //  تصغير 
      minimizer: [
         new TerserPlugin(), // تصغير JavaScript
         new CssMinimizerPlugin(), // تصغير CSS
      ],
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: './src/html/index.html',//html template file 
         filename: 'index.html',//output html file name
         
         minify: {
            removeComments: true,
            collapseWhitespace: true,      // تصغير المحتوى في وضع الإنتاج
         },
      }),
      new webpack.DefinePlugin({
         'process.env.API_KEY': JSON.stringify(process.env.API_KEY),  // Define environment variable for API key
      }),

      new WorkboxPlugin.GenerateSW({
         clientsClaim: true, // Ensure Service Worker takes control immediately
         skipWaiting: true,  // Skip waiting phase and activate the new SW immediately
       }),
       

      new MiniCssExtractPlugin({
         filename: 'styles.css', // Output CSS file name
      }),
   ],
};
