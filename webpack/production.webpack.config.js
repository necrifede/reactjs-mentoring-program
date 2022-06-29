const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./common.webpack");

const production = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()],
};

module.exports = merge(production, common);
