// TOOLS
const webpack = require('webpack');
const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

// CONFIG
const ModernizrConfig = require('./modernizr-config.js');

// PATH
const ROOT_PATH = path.resolve(__dirname);

// ENVIRONMENT CONFIGURATION
const NODE_ENV = process.env.NODE_ENV;


module.exports = {

    devtool: 'eval',

    resolve: {
        root: ROOT_PATH,
        alias: {
            app: 'src/app', // These Alias's are to allow for relative paths when importing modules
            assets: 'src/assets',
            base: 'src/app/base',
            modules: 'src/app/modules',
        },
        extensions: ['', '.js', '.jsx']
    },

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

        new ModernizrWebpackPlugin(ModernizrConfig),

        //https://github.com/mrsum/webpack-svgstore-plugin
        new SvgStore({
            svgoOptions: {
                plugins: [
                    { removeTitle: true },
                    { removeUselessStrokeAndFill: true }
                ]
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        }),
    ]
}