const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/init.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        // publicPath: path.resolve(__dirname, "public"),
    },
    resolve: { extensions: [".js", ".jsx"] },
    module: {
        rules: [
            {
                // test: /(\.js|\.jsx)$/,
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/], //, /^{projects}$/
                options: { presets: ["@babel/preset-react"] },
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            //     exclude: [/projects/, /node_modules/],
            //     use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
            // },
        ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./public/index.html",
    //         filename: "./index.html",
    //     }),
    // ],
    infrastructureLogging: {
        colors: true,
        // level: "verbose",
    },
    stats: {
        errorDetails: true,
    },
};
