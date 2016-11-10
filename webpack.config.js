// TOOLS
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const stylelint = require('stylelint'); // http://stylelint.io/user-guide/
const CopyWebpackPlugin = require('copy-webpack-plugin'); // For copying files to the build directory

// CONFIG
const COMMON_CONFIG = require('./webpack.config.common');
const NODE_ENV = process.env.NODE_ENV; // Environment configuration
const STYLELINT_CONFIG = require('./stylelint.config.js');

// PATHS
const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.join(__dirname, 'build');


// POST CSS PLUGINS
let postcss = require("./postcss.plugins.js");


switch(NODE_ENV) {
// ###################################################
// ###################################################
    case 'DEV':

        // Push new post css plugin to array
        postcss.push(stylelint(STYLELINT_CONFIG));

        module.exports = merge(COMMON_CONFIG, {

            entry: [
                'webpack-dev-server/client?http://localhost:3000',
                'webpack/hot/only-dev-server',
                './src/app/index'
            ],

            output: {
                path: BUILD_PATH,
                filename: 'assets/js/bundle.js'
            },

            preLoaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                },
            ],

            postcss: function () {
                return postcss;
            },

            eslint: {
              configFile: './.eslintrc'
            },

            plugins: [
                new webpack.NoErrorsPlugin(),
                new webpack.HotModuleReplacementPlugin()
            ]
        });

        break;

// ###################################################
// ###################################################


    case 'BUILD':
        module.exports = merge(COMMON_CONFIG, {

            entry: ['./src/app/index'],

            output: {
                path: BUILD_PATH,
                filename: 'assets/js/bundle.js',
                publicPath: '/static/',
            },

            postcss: function () {
                return postcss;
            },

            plugins: [
                new CopyWebpackPlugin([
                    { from: 'src/index.html', to: 'index.html' }
                ])
            ]
        });
        break;
}