const fs = require('fs');
const path = require('path');
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file === path.basename(__filename)) {
            return;
        }
        const route = require(`./${file}`);
        app.use(route.routes()).use(route.allowedMethods());
    });
};