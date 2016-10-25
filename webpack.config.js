
var path = require('path');
var webpack = require('webpack');
var SvgStore = require('webpack-svgstore-plugin');

var atImport = require("postcss-import");
var postcssGridLayout = require("postcss-grid-layout"); // Custom
var postcssNested = require("postcss-nested");
var autoprefixer = require("autoprefixer");
var mixins = require("postcss-mixins");
var reporter = require("postcss-reporter");
var variables = require("postcss-css-variables");


module.exports = {

    devtool: 'eval',

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/modules/app'
    ],

    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        //https://github.com/mrsum/webpack-svgstore-plugin
        new SvgStore({
            svgoOptions: {
                plugins: [
                    { removeTitle: true },
                    { removeUselessStrokeAndFill: true }
                ]
            }
        }),
    ],

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

    postcss: function () {

        return [
            reporter({ clearMessages: true }),
            atImport,
            mixins,
            postcssGridLayout,
            postcssNested,
            autoprefixer,
            variables
        ]; //https://github.com/postcss/postcss
    },
}
