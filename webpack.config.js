const loader = require('sass-loader');
var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }],

            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'sass-loader'},
                    {loader: 'autoprefixer-loader'},
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.json$/,
                use: [{
                    loader: 'json-loader',
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'autoprefixer-loader'
                }]
            }
        ]
    }
}