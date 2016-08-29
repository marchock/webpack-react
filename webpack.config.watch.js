var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');
var common = require('./webpack.config.watch.js');

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
            loaders: ['react-hot', 'babel'], // .babelrc can only be read is the config file is in the root directory, tried putting this file in the webpack folder and it cannot find .babelrc file and also tried putting the pram inside the config and still didnt work
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }]
    }
});
