const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./common.webpack');

const development = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public', 'index.html'),
            favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico'),
            manifest: path.resolve(__dirname, '..', 'public', 'manifest.json'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        historyApiFallback: true,
        magicHtml: true,
        static: path.resolve(__dirname, '..', 'dist'),
        // open: true,
        // compress: true,
    },
};

module.exports = merge(development, common);
