var //dev = require("./webpack/dev"),

    watch = require("./webpack.config.watch.js"),

    //build = require("./webpack/build"),

    BUILD_TARGET = process.env.npm_lifecycle_event || "dev";

console.log('BUILD_TARGET', BUILD_TARGET)

if(BUILD_TARGET === 'dev') {

    module.exports = dev;

} else if (BUILD_TARGET === 'watch') {

    module.exports = watch;

} else if (BUILD_TARGET === 'build') {

    module.exports = build;

}
