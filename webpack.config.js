/* === dont forget to import scss to main.js file === */
/* ===> import './main.scss'; <=== */

var path = require("path");

module.exports = {
    watch: true,
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,

            use: {
            loader: "eslint-loader",
            options: { presets: ["es2015"] }
            }
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }
            ]
        }
        ]
    } 
};