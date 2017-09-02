const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'index.html')),
            purifyOptions: {
                minify: true
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            template: './src/assets/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
    ]
});