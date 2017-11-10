var webpack = require("webpack");
var path = require("path");
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");
var config = {
    entry: DEV + "/index.jsx",
    output: {
        path: OUTPUT,
        filename: "myApp.js"
    },
    module: {
        loaders: [{
            include: DEV,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;