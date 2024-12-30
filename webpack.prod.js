const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/html/index.html",
            filename: "index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'), // تعريف البيئة
        }),
    ],
    devServer: {
        port: 8081,
        allowedHosts: 'all'
    },
    // resolve: {
    //     fallback: {
    //         process: require.resolve('process/browser'),
    //     },
    // },
};
