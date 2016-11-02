const DEV = require("./webpack.config.dev"),

      // WATCH = require("./webpack.config.watch"),

      // BUILD = require("./webpack.config.build"),

      HOT_RELOAD = require("./webpack.config.hot-reload"),

      NODE_ENV = process.env.NODE_ENV; // Environment configuration


switch(NODE_ENV) {
    case 'DEV':
        module.exports = DEV;
        break;

    case 'HOT_RELOAD':
        module.exports = HOT_RELOAD;
        break;

    case 'BUILD':
        module.exports = BUILD;
        break;
}
