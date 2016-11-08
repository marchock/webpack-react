var path = require('path');
var webpack = require('webpack');
var SvgStore = require('webpack-svgstore-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


// POSTCSS
var postcss = require("./postcss.config.js");


module.exports = {

    devtool: 'eval',

    module: {

        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'], // .babelrc can only be read is the config file is in the root directory, tried putting this file in the webpack folder and it cannot find .babelrc file and also tried putting the pram inside the config and still didnt work
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },

            { // CSS
                test: /\.css$/,
                loaders: [
                  'style-loader',
                  'css-loader?importLoaders=1',
                  'postcss-loader'
                ]
            },

            { // IMAGE
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(fonts)/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=img/[name].[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    plugins: [

        //https://github.com/mrsum/webpack-svgstore-plugin
        new SvgStore({
            svgoOptions: {
                plugins: [
                    { removeTitle: true },
                    { removeUselessStrokeAndFill: true }
                ]
            }
        })



        // new BundleAnalyzerPlugin()
    ],

    postcss: function () {
        return postcss;
    }
}