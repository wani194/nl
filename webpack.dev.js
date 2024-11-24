const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



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
      static: './dist', //static files directory
      open: true,//automaticaly open browser 
      hot: true,//enable hot module replacement 
   },
   module: {
      rules: [
         {
            test: /\.scss$/,//process scss files
            use: ['style-loader', 'css-loader', 'sass-loader'],//scss loader
         },
         {
            test: /\.js$/,//process javascript file 
            exclude: /node-module/,//exclude node_modules
            use: ['babel-loader'],// use babel for javascript transpiling
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/html/index.html',//html template file 
         filename: 'index.html',//output html file name
      }),
   ],
};