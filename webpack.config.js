const path = require("path"); // Node.js модуль для разрешения путей файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};