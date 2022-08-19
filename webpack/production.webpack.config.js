const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common.webpack');
const { merge } = require('webpack-merge');

const production = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '..', 'public', 'index.html'),
                favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico'),
                manifest: path.resolve(__dirname, '..', 'public', 'manifest.json'),
                filename: 'index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }), new CleanWebpackPlugin()],
};

module.exports = merge(production, common);
