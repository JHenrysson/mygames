// this file is a JS object with keys and values
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// entry point to our project is ./src/index.js
module.exports = {
    entry: "./src/index.js",
// this is where the packed code will end up - output path value - and packs our code and ends up in main.js
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },

    // rules on how to work with the files in the src folder
    // if it JS use babel to process JS for the web browser version -
    // css files will be processed by style loader / css loader
    // files- file loader
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
        ],
    },
    // we have created a template on "index.html" and webpack will reference that material
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};

