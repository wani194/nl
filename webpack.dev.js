const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
   mode: 'development',
   entry: './src/js/index.js',
   devtool: 'source-map',
   output:
   {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   devServer: {
      static: './dist',
      open: true,
      hot: true,
   },
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.js$/,
            exclude: /node-module/,
            use: ['babel-loader'],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/html/index.html',
         filename: 'index.html',
      }),
   ],
};