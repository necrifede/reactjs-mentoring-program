const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/init.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    resolve: { extensions: [".js", ".jsx"] },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
                options: { presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]] },
            },
            {
                test: /\.(ttf|eot|svg|woff|png)$/,
                loader: "file-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    infrastructureLogging: {
        colors: true,
    },
    stats: {
        errorDetails: true,
    },
};
