
// POSTCSS  PLUGINS
var atImport = require("postcss-import");
var postcssGridLayout = require("postcss-grid-layout"); // Custom
var postcssNested = require("postcss-nested");
var autoprefixer = require("autoprefixer");
var reporter = require("postcss-reporter");
var variables = require("postcss-css-variables");
var calc = require("postcss-calc");
var conditionals = require('postcss-conditionals');


module.exports = [
    reporter({ clearMessages: true }),
    atImport,
    variables,
    postcssNested,
    calc,
    conditionals,
    postcssGridLayout,
    autoprefixer
];