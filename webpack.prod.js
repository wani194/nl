const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { optimize } = require('webpack');



module.exports = {
   mode: 'production', //devlopment mode
   entry: './src/js/index.js',//entry point 
   devtool: 'source-map',//enable source maps
   output:
   {
      filename: 'bundle.ee266c44f129b8013280.js',//output file name 
      path: path.resolve(__dirname, 'dist'),//output directory
      clean: true,//clean output folder before each build 
   },
   
   
      
   resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        vm: require.resolve("vm-browserify")
      }
    },
    
    
   module: {
      rules: [
         {
            test: /\.scss$/,//process scss files
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],//scss loader
         },
         {
            test: /\.js$/,//process javascript file 
            exclude: /node_modules/,//exclude node_modules
            use: ['babel-loader'],// use babel for javascript transpiling
         },
      ],
   },
   optimization:{
     minimize: true,
     minimizer:[
        new TerserPlugin(),
        new CssMinimizerPlugin(),
     ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/html/index.html',//html template file 
         filename: 'index.html',//output html file name
         minify:{
            removeComments:true,
            collapseWhitespace:true,
         },
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.d53cb9b4818d68b931e6.css',
      }),
   ],
};