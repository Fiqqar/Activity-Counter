const loader = require('sass-loader');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist/assets',
        filename: 'bundle.js',
        publicPath: 'assets/'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader!autprefixer-loader!sass-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autprefixer-loader',
            }
        ]
    }
}