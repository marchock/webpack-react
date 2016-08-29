var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');
var common = require('./common.js');

console.log('---- WATCH -----');


module.exports = merge(common, {
    devtool: 'eval',

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/modules/app'
    ],

    output: {
        path: path.join(__dirname, '../static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }]
    }
});
