const {
    config
} = require("./wdio.conf");
const path = require("path");

const chromeConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
    }, ],

    path: "/wd/hub",

};

exports.config = chromeConfig;