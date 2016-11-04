var merge = require('webpack-merge'),
    common = require('./webpack.config.common'),
    // DOC
    // http://stylelint.io/user-guide/
    stylelint = require('stylelint'),
    // style lint rules 
    stylelintConfig = require('./stylelint.config.js'),
    // post css common plugins array
    postcss = require("./postcss.config.js");


// Push new post css plugin to array
postcss.push(stylelint(stylelintConfig));

// eslist article
//https://medium.com/@tkssharma/eslint-in-react-babel-webpack-9cb1c4e86f4e#.3tyakdodf

// not completed


module.exports = merge(common, {

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
    }
});