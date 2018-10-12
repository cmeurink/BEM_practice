const path = require('path');
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, 'src') + '/js/main.js',
    output: {
        /*Webpack producing results*/
        path: path.resolve(__dirname, "../src/dist"),
        filename: "app-bundle.js"
    }
}