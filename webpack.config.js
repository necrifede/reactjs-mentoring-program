// This will be production
const path = require("path");

// const mode = process.env.NODE_ENV === "development" ? "dev" : "build";
const mode = "production";

module.exports = {
    entry: ["./src/init.js"],
    output: { filename: "[name].bundle.js", path: path.join(__dirname, 'build') },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: { host: "0.0.0.0", port: 8080, inline: true },
    mode,
    watch: true,
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                // query: { presets: ["es2015"] },
            },
        ],
    },
};
