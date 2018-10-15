/* === dont forget to import scss to main.js file === */
/* ===> import './main.scss'; <=== */

var path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/js/main.js",
    output: {
            filename: "bundle.js"
        },
        watch: true,
        devServer: {
            inline: true
        },
    // Add sass-loader
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
}
// module.exports = {
//     watch: true,
//     entry: "./src/js/main.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "bundle.js",
//     },
// };
