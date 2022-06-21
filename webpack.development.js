const path = require("path");

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
                options: { presets: ["@babel/preset-react"] },
            },
        ],
    },
    infrastructureLogging: {
        colors: true,
    },
    stats: {
        errorDetails: true,
    },
};
