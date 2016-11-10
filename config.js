const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app/index'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        root: ROOT_PATH,
        alias: {
            app: 'src/app',
            base: 'src/app/base',
            modules: 'src/app/modules',
            assets: 'src/assets'
        },
        extensions: ['', '.js', '.jsx']
    }
};