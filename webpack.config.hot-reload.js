var merge = require('webpack-merge'),
    dev = require("./webpack.config.dev"),
    webpack = require('webpack'),
    path = require('path');

module.exports = merge(dev, {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app/index'
    ],

    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

});