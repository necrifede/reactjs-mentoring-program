module.exports = {
    entry: "./src/init.js",
    resolve: { extensions: [".js", ".jsx"] },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
                options: {
                    presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
                },
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
    infrastructureLogging: {
        colors: true,
    },
    stats: {
        errorDetails: true,
    },
};
