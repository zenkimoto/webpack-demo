const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    let config = {
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

    if (env && env.prod) {
        config.plugins = [
            new UglifyJSPlugin()
        ]
    }

    return config;
}


