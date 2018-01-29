'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

let config = {
    entry: `${APP_DIR}/app/app.jsx`,
    output: {
        path: DIST_PATH,
        filename: 'index.client.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            include: APP_DIR,
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(APP_DIR, 'index.html'), hash: true})
    ]
};

module.exports = config;