const fs = require('fs');
const path = require('path');
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file === path.basename(__filename)) {
            return;
        }
        const route = require(`./${file}`);
        console.log(route);
        console.log(route.routes());
        console.log(route.routes);
        app.use(route.routes()).use(route.allowedMethods());
    });
};