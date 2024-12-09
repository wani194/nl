

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');  // Adding Workbox Plugin for Service Worker
const webpack = require('webpack'); // Import webpack to use DefinePlugin
const { optimize } = require('webpack');

module.exports = {
   mode: 'production', // Set to production mode for optimized builds
   entry: './src/js/index.js', // The entry point of the application
   devtool: 'source-map', // Enable source maps for debugging
   output: {
      filename: 'bundle.e266c44f129b8013280.js', // Output JavaScript file name
      path: path.resolve(__dirname, 'dist'), // Output directory
      clean: true, // Clean the output directory before each build
   },
   
   devServer: {
      static: path.join(__dirname, 'dist'), // تعديل contentBase إلى static في Webpack 5
      compress: true, // تفعيل الضغط للملفات
     
      port: 8081, // المنفذ
      open: true, // فتح المتصفح تلقائيًا عند التشغيل
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
            test: /\.scss$/, // Handle SCSS files
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Use appropriate loaders for SCSS
         },
         {
            test: /\.js$/, // Handle JavaScript files
            exclude: /node_modules/, // Exclude node_modules from transpilation
            use: ['babel-loader'], // Use Babel for JavaScript transpiling
         },
      ],
   },

   optimization: {
      minimize: true, // Enable minimization of assets
      minimizer: [
         new TerserPlugin(), // Minimize JavaScript
         new CssMinimizerPlugin(), // Minimize CSS
      ],
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: './src/html/index.html', // HTML template file
         filename: 'index.html', // Output HTML file name
         minify: {
            removeComments: true, // Remove comments in production build
            collapseWhitespace: true, // Remove extra whitespace in production build
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
         filename: 'styles.d53cb9b4818d68b931e6.css', // Output CSS file name
      }),
   ],
};
