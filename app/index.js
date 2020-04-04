const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const routing = require('./routers');

app.use(bodyParser());
routing(app);

app.listen(3000);