const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    mode: 'production', //set production mode 
    entry: './src/js/index.js',//entry file 
    output: {
        filename: 'bundle.js',//output bundle
        path: path.resolve(__dirname, 'dist'),//output directory
        
    },
    module: {
        rules: [
            {
                test: /\.scss$/,//scss files
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,//javascript files
                exclude: /node-modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',//html template
            filename: 'index.html',//output html file
        }),
        new MiniCssExtractPlugin(),//ectract css
    ],
};