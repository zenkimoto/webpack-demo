const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    if (env && env.prod) {
        return {
            entry: './src/index.js',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist')
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    }
                ]
            },
            plugins: [
                new UglifyJSPlugin()
            ],
            devtool: 'source-map'
        };
    } else {
        return {
            entry: './src/index.js',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist')
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    }
                ]
            },
            devtool: 'source-map'
        };
    }
}


