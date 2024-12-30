const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 8081,
        allowedHosts: ['all'],
    },
    // devServer: {
    //     static: './dist',
    //     proxy: {
    //         '/sentiment': 'http://localhost:8081', // Proxy API calls
    //     },
    //     hot: true,
    // },
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
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: "./index.html",
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // تعريف البيئة
        }),
    ],
    // resolve: {
    //     fallback: {
    //         process: require.resolve('process/browser'),
    //     },
    // },
    devtool: 'source-map',
    stats: 'verbose'
};
